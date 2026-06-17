// Kanji → hiragana reading, web only.
//
// The ja-JP speech recognizer returns text with kanji (音楽を聴きます), but our
// lesson targets are kana (おんがく を ききます). Comparing those surface forms
// directly fails even for a perfect answer — and homophone kanji (聞く/聴く)
// mean a hand-written `accept` list can never be complete. So instead we run the
// recognized text through a morphological analyzer (kuromoji + IPADIC), take each
// token's reading (katakana), and fold it to hiragana. Then we can compare the
// *reading* of what was heard against the kana target.
//
// The IPADIC dictionary (~17 MB gzipped) is hosted at `<baseUrl>/dict` and lazy
// loaded on the first speaking step, then cached by the PWA service worker. If it
// fails to load, callers fall back to surface-form comparison.

/** kuromoji readings come back in katakana; fold to hiragana for comparison. */
function katakanaToHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

/** Path where the IPADIC files are served (Expo copies `public/` to the web root). */
function dicPath(): string {
  const base = (typeof process !== "undefined" && process.env.EXPO_BASE_URL) || "/";
  return base.replace(/\/+$/, "") + "/dict";
}

let tokenizerPromise: Promise<any | null> | null = null;

function buildTokenizer(): Promise<any | null> {
  return new Promise((resolve) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const kuromoji = require("@sglkc/kuromoji");
      kuromoji.builder({ dicPath: dicPath() }).build((err: any, tokenizer: any) => {
        resolve(err ? null : tokenizer);
      });
    } catch {
      resolve(null);
    }
  });
}

/** Start loading the dictionary early (e.g. when a pronunciation step mounts). */
export function preloadReader(): void {
  if (!tokenizerPromise) tokenizerPromise = buildTokenizer();
}

/**
 * Convert Japanese text (possibly with kanji) to its hiragana reading.
 * Resolves to null when the tokenizer is unavailable so callers can fall back to
 * comparing surface forms.
 */
export async function toHiraganaReading(text: string): Promise<string | null> {
  if (!tokenizerPromise) tokenizerPromise = buildTokenizer();
  const tokenizer = await tokenizerPromise;
  if (!tokenizer) return null;
  try {
    const tokens = tokenizer.tokenize(text);
    const reading = tokens
      .map((t: any) => (t.reading && t.reading !== "*" ? t.reading : t.surface_form))
      .join("");
    return katakanaToHiragana(reading);
  } catch {
    return null;
  }
}
