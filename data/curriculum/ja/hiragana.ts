// Japanese hiragana tables. Used by character/sounds/writing steps.

export interface HiraganaChar {
  char: string;
  romaji: string;
  phonetic: string;
  mnemonic: string;
  words?: Array<{ jp: string; meaning: string; romaji: string; emoji?: string; hint?: string }>;
}

export const HIRAGANA_VOWELS: HiraganaChar[] = [
  {
    char: "あ",
    romaji: "a",
    phonetic: "'a' as in 'father' or 'spa' — open mouth, relaxed",
    mnemonic: "Think of someone bowing deeply — the curved strokes form the bow.",
    words: [
      { jp: "あ", meaning: "Ah! (exclamation)", romaji: "a", emoji: "😮", hint: "Just the sound of this character." },
    ],
  },
  {
    char: "い",
    romaji: "i",
    phonetic: "'ee' as in 'feet' or 'see' — smile slightly as you say it",
    mnemonic: "Two strokes like two Eels standing side by side.",
    words: [
      { jp: "いい", meaning: "good", romaji: "ii", emoji: "👍", hint: "Say the い sound twice — that's the whole word!" },
    ],
  },
  {
    char: "う",
    romaji: "u",
    phonetic: "'oo' as in 'flu' or 'true' — lips barely rounded, not exaggerated",
    mnemonic: "Looks like a U-turn road — it curves back on itself.",
    words: [
      { jp: "あう", meaning: "to meet (someone)", romaji: "au", emoji: "🤝", hint: "あ + う — two characters you already know!" },
      { jp: "いう", meaning: "to say / to speak", romaji: "iu", emoji: "💬", hint: "い + う — combine the last two characters." },
    ],
  },
  {
    char: "え",
    romaji: "e",
    phonetic: "'e' as in 'bed' or 'pen' — short and crisp, not like 'ay'",
    mnemonic: "Like an Exotic bird with spread wings — fancy and elaborate.",
    words: [
      { jp: "うえ", meaning: "above / up", romaji: "ue", emoji: "⬆️", hint: "う + え — reading goes left to right!" },
      { jp: "いえ", meaning: "house / home", romaji: "ie", emoji: "🏠", hint: "い + え — your home is two sounds." },
    ],
  },
  {
    char: "お",
    romaji: "o",
    phonetic: "'o' as in 'go' or 'so' — round lips, no glide at the end",
    mnemonic: "Three strokes — a horizontal line, a vertical line, then a sweeping loop.",
    words: [
      { jp: "あお", meaning: "blue (color)", romaji: "ao", emoji: "💙", hint: "あ + お — the color of the sky!" },
      { jp: "おい", meaning: "Hey! (casual)", romaji: "oi", emoji: "👋", hint: "お + い — what you shout to a friend." },
      { jp: "うお", meaning: "fish", romaji: "uo", emoji: "🐟", hint: "う + お — an old word for fish." },
    ],
  },
];
