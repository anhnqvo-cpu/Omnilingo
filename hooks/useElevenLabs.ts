// ElevenLabs TTS adapter.
//
// To enable:
//   1. pnpm add expo-av expo-file-system
//   2. Get an ElevenLabs API key: https://elevenlabs.io/speech-synthesis
//   3. Add to your .env / app.config:
//      EXPO_PUBLIC_ELEVENLABS_API_KEY=sk_xxx
//   4. (Optional) Override the default Japanese voice:
//      EXPO_PUBLIC_ELEVENLABS_VOICE_ID=<your voice id>
//      EXPO_PUBLIC_ELEVENLABS_MODEL=eleven_multilingual_v2
//
// Without those vars set, this module returns false from tryElevenLabsSpeak()
// and the caller falls back to expo-speech automatically.
//
// Caches audio per (text + voice + model + rate) on disk so repeated playback
// of the same phrase doesn't re-bill or re-download.

import { Platform } from "react-native";

// Lazy-load native deps so the app keeps working without them.
let Audio: typeof import("expo-av").Audio | null = null;
let FileSystem: typeof import("expo-file-system") | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Audio = require("expo-av").Audio;
} catch {
  Audio = null;
}
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  FileSystem = require("expo-file-system");
} catch {
  FileSystem = null;
}

const API_KEY = process.env.EXPO_PUBLIC_ELEVENLABS_API_KEY;
const VOICE_ID = process.env.EXPO_PUBLIC_ELEVENLABS_VOICE_ID ?? "EXAVITQu4vr4xnSDxMaL"; // "Sarah" — works in multilingual v2/v3
const MODEL = process.env.EXPO_PUBLIC_ELEVENLABS_MODEL ?? "eleven_multilingual_v2";

let activeSound: any | null = null;

function hashKey(input: string): string {
  // Tiny non-crypto hash sufficient for cache filenames.
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  return (h >>> 0).toString(16);
}

function bytesToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk) as unknown as number[]);
  }
  // btoa is available in RN Hermes.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = globalThis as any;
  if (typeof g.btoa === "function") return g.btoa(bin);
  // Fallback for environments without btoa.
  const Buffer = g.Buffer;
  if (Buffer) return Buffer.from(bin, "binary").toString("base64");
  throw new Error("No base64 encoder available");
}

/**
 * Returns true if it queued playback successfully (so the caller skips the
 * local fallback). Returns false if anything went wrong — caller should fall
 * back.
 */
export async function tryElevenLabsSpeak(
  text: string,
  opts: { lang: string; rate: number }
): Promise<boolean> {
  if (!API_KEY) return false;
  if (Platform.OS === "web") return false; // Web — let the browser speechSynthesis handle it.
  if (!Audio || !FileSystem) return false;

  try {
    // Stop any previous playback.
    if (activeSound) {
      try { await activeSound.stopAsync(); } catch {}
      try { await activeSound.unloadAsync(); } catch {}
      activeSound = null;
    }

    const cacheKey = `${hashKey(text)}-${VOICE_ID}-${MODEL}-${opts.rate.toFixed(2)}`;
    const cacheDir = FileSystem.cacheDirectory ?? "";
    const uri = `${cacheDir}elevenlabs-${cacheKey}.mp3`;

    // Check cache first.
    const info = await FileSystem.getInfoAsync(uri);
    if (!info.exists) {
      const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: "POST",
        headers: {
          "xi-api-key": API_KEY,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text,
          model_id: MODEL,
          voice_settings: {
            stability: 0.55,
            similarity_boost: 0.75,
            // The 'style' knob is only used by v2. Defaults are fine.
          },
          // Slow down via SSML-like prosody is not officially supported on v2 yet.
          // Rate is approximated by the voice model itself; for true slow-down,
          // use expo-av's setRateAsync below.
        }),
      });
      if (!res.ok) {
        console.warn(`[ElevenLabs] HTTP ${res.status}: ${await res.text().catch(() => "")}`);
        return false;
      }
      const buf = await res.arrayBuffer();
      const b64 = bytesToBase64(buf);
      await FileSystem.writeAsStringAsync(uri, b64, { encoding: "base64" as any });
    }

    const { sound } = await Audio.Sound.createAsync({ uri }, { shouldPlay: false });
    activeSound = sound;
    // expo-av lets us slow down playback for learner-friendly speed.
    // 0.5 = half speed; we mirror the adaptive rate.
    try {
      await sound.setRateAsync(Math.max(0.5, opts.rate + 0.15), true);
    } catch {
      /* old expo-av versions ignore — fine */
    }
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status: any) => {
      if (status?.didJustFinish) {
        sound.unloadAsync().catch(() => {});
        if (activeSound === sound) activeSound = null;
      }
    });
    return true;
  } catch (e) {
    console.warn("[ElevenLabs] failed, falling back to expo-speech", e);
    return false;
  }
}

export async function stopElevenLabs() {
  if (activeSound) {
    try { await activeSound.stopAsync(); } catch {}
    try { await activeSound.unloadAsync(); } catch {}
    activeSound = null;
  }
}
