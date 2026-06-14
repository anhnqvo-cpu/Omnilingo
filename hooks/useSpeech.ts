// Thin wrapper around expo-speech, with optional ElevenLabs override.
//
// Speech path:
//   1. If EXPO_PUBLIC_ELEVENLABS_API_KEY is set in the env, fetch + play
//      ElevenLabs audio (natural-sounding, slow, learner-friendly).
//   2. Otherwise fall back to expo-speech on-device TTS (free, works offline,
//      uses Apple/Google's built-in voice for Japanese).
//   3. On web, falls back to window.speechSynthesis.
//
// The default rate is adaptive: shorter strings get a slower rate so single
// kana like あ or いい don't fly past at warp speed.

import { Platform } from "react-native";

import { tryElevenLabsSpeak, stopElevenLabs } from "./useElevenLabs";

let Speech: typeof import("expo-speech") | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Speech = require("expo-speech");
} catch {
  Speech = null;
}

export interface SpeakOptions {
  /** BCP-47 language tag, default ja-JP. */
  lang?: string;
  /** Playback rate. If omitted, adaptive based on text length. */
  rate?: number;
  /** Pitch. 1.0 = normal. */
  pitch?: number;
  /** Force the on-device fallback (skip ElevenLabs). */
  forceLocal?: boolean;
}

/**
 * Adaptive rate for the on-device fallback. Counts kana-ish characters and
 * slows way down for short utterances — single あ at 0.55 is too fast for a
 * beginner.
 */
function adaptiveRate(text: string): number {
  // Strip whitespace + punctuation for the count.
  const compact = text.replace(/[\s。、！？!?,. 　]/g, "");
  const n = Array.from(compact).length; // unicode-safe char count
  if (n <= 2) return 0.3;
  if (n <= 4) return 0.4;
  if (n <= 7) return 0.5;
  return 0.55;
}

/**
 * Strip parenthetical annotations before speaking. Vocab is often written
 * "reading（kanji）" — e.g. ひとつ（一つ）, えん（円） — where the kanji in parens
 * shares the reading. Speaking the whole string makes TTS say it twice
 * ("hitotsu hitotsu"). The parens (full-width or ASCII) are a visual aid, never
 * meant to be read aloud, so we drop them.
 */
function stripParentheticals(text: string): string {
  return text.replace(/[（(][^）)]*[）)]/g, "").replace(/\s+/g, " ").trim();
}

export function speak(text: string, optsOrLang?: SpeakOptions | string) {
  const spoken = stripParentheticals(text ?? "");
  if (!spoken) return;
  const opts: SpeakOptions = typeof optsOrLang === "string" ? { lang: optsOrLang } : optsOrLang ?? {};
  const lang = opts.lang ?? "ja-JP";
  const rate = opts.rate ?? adaptiveRate(spoken);
  const pitch = opts.pitch ?? 1.0;

  // Try ElevenLabs first (returns a promise; we don't await — the fallback
  // happens via tryElevenLabsSpeak's own error path).
  if (!opts.forceLocal) {
    tryElevenLabsSpeak(spoken, { lang, rate }).then((ok) => {
      if (!ok) localFallback(spoken, { lang, rate, pitch });
    });
    return;
  }
  localFallback(spoken, { lang, rate, pitch });
}

function localFallback(text: string, opts: { lang: string; rate: number; pitch: number }) {
  if (Platform.OS === "web") {
    try {
      const synth = (globalThis as any).speechSynthesis as SpeechSynthesis | undefined;
      if (synth) {
        synth.cancel();
        const utt = new (globalThis as any).SpeechSynthesisUtterance(text);
        utt.lang = opts.lang;
        utt.rate = opts.rate;
        utt.pitch = opts.pitch;
        synth.speak(utt);
      }
    } catch {
      /* ignore */
    }
    return;
  }
  if (Speech) {
    try {
      Speech.stop();
      Speech.speak(text, { language: opts.lang, rate: opts.rate, pitch: opts.pitch });
    } catch {
      /* ignore */
    }
  }
}

export function stopSpeech() {
  // Always cancel the ElevenLabs sound if one is playing.
  stopElevenLabs().catch(() => {});
  if (Platform.OS === "web") {
    try {
      (globalThis as any).speechSynthesis?.cancel();
    } catch {
      /* noop */
    }
    return;
  }
  Speech?.stop();
}
