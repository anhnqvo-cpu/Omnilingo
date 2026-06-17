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

import { toHiraganaReading } from "@/data/japaneseReading";

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

// Web path: the browser's Web Speech API (Chrome, Edge, Android Chrome support
// ja-JP). iOS Safari doesn't implement it → webSupported is false there and the
// UI falls back to listen-and-self-check.
const WebSpeechRecognition: any =
  Platform.OS === "web" && typeof window !== "undefined"
    ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    : null;

const nativeSupported = !!Voice && Platform.OS !== "web";
const webSupported = !!WebSpeechRecognition;
const supported = nativeSupported || webSupported;

function webErrorMessage(err?: string): string {
  switch (err) {
    case "not-allowed":
    case "service-not-allowed":
      return "Microphone access was blocked. Allow mic access and try again.";
    case "no-speech":
      return "Didn't catch that — try again a little louder.";
    case "audio-capture":
      return "No microphone found.";
    case "network":
      return "Speech recognition needs a network connection.";
    default:
      return "Speech recognition failed — try again.";
  }
}

export function useSTT(): STTHandle {
  const [state, setState] = useState<STTState>("idle");
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Latest interim result while listening.
  const interimRef = useRef<string[]>([]);
  // Active Web Speech API recognition instance (web only).
  const webRecRef = useRef<any>(null);

  // Tear down any in-flight web recognition on unmount.
  useEffect(() => {
    return () => {
      try { webRecRef.current?.abort?.(); } catch {}
      webRecRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!Voice || Platform.OS === "web") return;
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
    setError(null);
    setResults([]);
    interimRef.current = [];

    // ── Web path ──────────────────────────────────────────────────────────
    if (webSupported) {
      try {
        try { webRecRef.current?.abort?.(); } catch {}
        const rec = new WebSpeechRecognition();
        rec.lang = locale;
        rec.interimResults = true;
        rec.continuous = false;
        rec.maxAlternatives = 3;
        rec.onstart = () => {
          setState("listening");
          setError(null);
          interimRef.current = [];
        };
        rec.onresult = (e: any) => {
          let interim = "";
          let final = "";
          for (let i = e.resultIndex; i < e.results.length; i++) {
            const r = e.results[i];
            const txt = r[0]?.transcript ?? "";
            if (r.isFinal) final += txt;
            else interim += txt;
          }
          const text = (final || interim).trim();
          if (text) setResults([text]);
          if (final) setState("result");
        };
        rec.onerror = (e: any) => {
          setError(webErrorMessage(e?.error));
          setState("error");
        };
        rec.onend = () => {
          setState((s) => (s === "listening" ? "result" : s));
        };
        webRecRef.current = rec;
        rec.start();
      } catch (e: any) {
        setError(e?.message ?? "Couldn't start the mic");
        setState("error");
      }
      return;
    }

    // ── Native path ───────────────────────────────────────────────────────
    if (!Voice) return;
    try {
      await Voice.start(locale);
    } catch (e: any) {
      setError(e?.message ?? "Couldn't start the mic");
      setState("error");
    }
  }, []);

  const stop = useCallback(async () => {
    if (webSupported) {
      try { webRecRef.current?.stop?.(); } catch {}
      return;
    }
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

/** Fold katakana to hiragana so kana-type differences don't count against a match. */
function katakanaToHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

/**
 * Normalize a string for comparison: lowercase, fold katakana→hiragana, and strip
 * ALL punctuation and whitespace. We strip spaces entirely (rather than collapsing
 * them) because lessons space-separate words for readability ("ごはん を たべます")
 * but the speech recognizer returns no spaces — keeping them would penalize every
 * correct answer. Katakana folding lets コーヒー and こーひー compare equal.
 */
export function normalize(s: string): string {
  return katakanaToHiragana(s.toLowerCase())
    .replace(/[、。．，,.!?！？：・…\s]+/g, "")
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
  if (best.score >= 0.72) verdict = "great";
  else if (best.score >= 0.5) verdict = "close";
  return { score: best.score, verdict, transcript, expected: best.expected };
}

/**
 * Reading-aware scoring. The ja-JP recognizer returns kanji, so we also convert
 * the transcript to its hiragana reading and score that against the (kana-based)
 * accepted forms — then keep whichever comparison scores higher. This makes
 * homophone kanji (聞く vs 聴く) and unanticipated kanji match correctly without
 * a hand-maintained `accept` list. Falls back to surface-form scoring when the
 * reader is unavailable (native, dictionary load failure). The reported
 * `transcript` is always the raw heard text.
 */
export async function scorePronunciationAsync(
  transcript: string,
  accepted: string[]
): Promise<PronunciationScore> {
  const base = scorePronunciation(transcript, accepted);
  const reading = await toHiraganaReading(transcript);
  if (!reading || reading === transcript) return base;
  const viaReading = scorePronunciation(reading, accepted);
  const best = viaReading.score > base.score ? viaReading : base;
  return { ...best, transcript };
}
