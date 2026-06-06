// Speech-to-text wrapper around @react-native-voice/voice.
//
// To enable real speech recognition:
//   1. `pnpm add @react-native-voice/voice`
//   2. Switch from Expo Go to an Expo Dev Build:
//      `npx expo install expo-dev-client`
//      `eas build --profile development --platform ios` (or android)
//   3. Add NSSpeechRecognitionUsageDescription + NSMicrophoneUsageDescription
//      to ios/Info.plist (or app.json plugin config).
//
// In Expo Go the module won't load, and this hook reports unsupported=true.
// Calling `start` becomes a no-op so the UI stays usable.

import { useCallback, useEffect, useRef, useState } from "react";
import { Platform } from "react-native";

let Voice: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Voice = require("@react-native-voice/voice").default;
} catch {
  Voice = null;
}

export type STTState = "idle" | "listening" | "result" | "error";

export interface STTHandle {
  state: STTState;
  /** Final + interim transcripts (most recent first). */
  results: string[];
  /** Best guess transcript. */
  transcript: string;
  error: string | null;
  /** Returns true if speech recognition is available on this device + build. */
  supported: boolean;
  start: (locale?: string) => Promise<void>;
  stop: () => Promise<void>;
  reset: () => void;
}

const supported = !!Voice && Platform.OS !== "web";

export function useSTT(): STTHandle {
  const [state, setState] = useState<STTState>("idle");
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Latest interim result while listening.
  const interimRef = useRef<string[]>([]);

  useEffect(() => {
    if (!Voice) return;
    Voice.onSpeechStart = () => {
      setState("listening");
      setError(null);
      interimRef.current = [];
    };
    Voice.onSpeechPartialResults = (e: any) => {
      const partial = (e?.value as string[]) ?? [];
      interimRef.current = partial;
      setResults(partial);
    };
    Voice.onSpeechResults = (e: any) => {
      const final = (e?.value as string[]) ?? interimRef.current;
      setResults(final);
      setState("result");
    };
    Voice.onSpeechError = (e: any) => {
      setError(e?.error?.message ?? "Speech recognition failed");
      setState("error");
    };
    Voice.onSpeechEnd = () => {
      setState((s) => (s === "listening" ? "result" : s));
    };
    return () => {
      Voice.destroy?.().then?.(() => Voice.removeAllListeners?.());
    };
  }, []);

  const start = useCallback(async (locale = "ja-JP") => {
    if (!Voice) return;
    setError(null);
    setResults([]);
    interimRef.current = [];
    try {
      await Voice.start(locale);
    } catch (e: any) {
      setError(e?.message ?? "Couldn't start the mic");
      setState("error");
    }
  }, []);

  const stop = useCallback(async () => {
    if (!Voice) return;
    try {
      await Voice.stop();
    } catch {
      /* ignore */
    }
  }, []);

  const reset = useCallback(() => {
    setState("idle");
    setResults([]);
    setError(null);
    interimRef.current = [];
  }, []);

  return {
    state,
    results,
    transcript: results[0] ?? "",
    error,
    supported,
    start,
    stop,
    reset,
  };
}

// ─── Scoring ─────────────────────────────────────────────────────────────────

/** Normalize a string for comparison: lowercase, trim, collapse spaces, strip punctuation. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[、。．，,.!?！？：・…\s]+/g, " ")
    .trim();
}

/** Levenshtein distance between two strings. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const v0 = new Array(b.length + 1).fill(0).map((_, i) => i);
  const v1 = new Array(b.length + 1).fill(0);
  for (let i = 0; i < a.length; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < b.length; j++) {
      const cost = a.charCodeAt(i) === b.charCodeAt(j) ? 0 : 1;
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
  }
  return v1[b.length];
}

export interface PronunciationScore {
  /** 0–1, higher is better. */
  score: number;
  verdict: "great" | "close" | "off";
  transcript: string;
  expected: string;
}

/**
 * Score a transcript against any of the accepted forms (e.g. Japanese + romaji).
 * Returns the BEST match.
 */
export function scorePronunciation(transcript: string, accepted: string[]): PronunciationScore {
  const tNorm = normalize(transcript);
  let best = { score: 0, expected: accepted[0] ?? "" };
  for (const exp of accepted) {
    const eNorm = normalize(exp);
    if (!eNorm) continue;
    const dist = levenshtein(tNorm, eNorm);
    const maxLen = Math.max(tNorm.length, eNorm.length, 1);
    const score = 1 - dist / maxLen;
    if (score > best.score) best = { score, expected: exp };
  }
  let verdict: PronunciationScore["verdict"] = "off";
  if (best.score >= 0.8) verdict = "great";
  else if (best.score >= 0.55) verdict = "close";
  return { score: best.score, verdict, transcript, expected: best.expected };
}
