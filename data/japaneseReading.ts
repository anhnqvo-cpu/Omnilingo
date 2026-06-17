// Native/default stub for the kanji → hiragana reader.
//
// kuromoji's dictionary loader pulls in Node's `zlib` on non-web platforms, which
// Metro can't bundle for React Native. The real implementation lives in
// `japaneseReading.web.ts` (Metro picks the `.web` variant for the web build).
// On native, reading conversion is unavailable and callers fall back to
// surface-form comparison (with the prompt's `accept` list).

export function preloadReader(): void {
  /* no-op on native */
}

export async function toHiraganaReading(_text: string): Promise<string | null> {
  return null;
}
