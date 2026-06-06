import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 1 · Lesson 1
 * The three core vowels: あ, い, う.
 * Steps: intro → sounds(3) → character(あ) → writing(あ) → character(い) → writing(い)
 *        → character(う) → writing(う) → microstory → completion.
 */
export const chapter01Lesson01: Lesson = {
  id: "ja-1-1",
  chapterId: "ja-ch1",
  number: 1,
  title: "First sounds: あ, い, う",
  titleNative: "あいう",
  subtitle: "Sounds & writing",
  summary: "Meet three of the five Japanese vowels. Listen, draw, and read your first hiragana.",
  xp: 40,
  estimateMinutes: 10,
  steps: [
    {
      kind: "intro",
      title: "Your very first Japanese sounds",
      subtitle: "Three vowels, three characters.",
      goals: [
        "Recognise and pronounce あ, い, う",
        "Write each one with correct stroke order",
        "Read your first hiragana words",
      ],
      estimateMinutes: 10,
    },
    {
      kind: "sounds",
      intro: "All Japanese words are built from these vowel sounds. Get them in your ear first.",
      sounds: [
        {
          text: "あ",
          romaji: "a",
          phonetic: "'a' as in 'father' — open mouth, relaxed.",
          mnemonic: "Think of someone bowing deeply — the curved strokes form the bow.",
        },
        {
          text: "い",
          romaji: "i",
          phonetic: "'ee' as in 'feet' — smile slightly.",
          mnemonic: "Two strokes, like two Eels standing side by side.",
        },
        {
          text: "う",
          romaji: "u",
          phonetic: "'oo' as in 'flu' — lips barely rounded.",
          mnemonic: "Looks like a U-turn road — it curves back on itself.",
        },
      ],
    },
    {
      kind: "character",
      script: "hiragana",
      char: "あ",
      romaji: "a",
      phonetic: "'a' as in 'father' or 'spa' — open mouth, relaxed.",
      mnemonic: "Three strokes — a horizontal bar, a downward line, and a sweeping loop.",
      words: [{ jp: "あ", meaning: "Ah! (exclamation)", romaji: "a", emoji: "😮", hint: "Just the sound." }],
    },
    { kind: "writing", char: "あ", script: "hiragana" },
    {
      kind: "character",
      script: "hiragana",
      char: "い",
      romaji: "i",
      phonetic: "'ee' as in 'feet' — short and bright.",
      mnemonic: "Two parallel strokes — the second one is shorter and floats to the right.",
      words: [{ jp: "いい", meaning: "good", romaji: "ii", emoji: "👍", hint: "Same character twice." }],
    },
    { kind: "writing", char: "い", script: "hiragana" },
    {
      kind: "character",
      script: "hiragana",
      char: "う",
      romaji: "u",
      phonetic: "'oo' as in 'flu' — barely-rounded lips.",
      mnemonic: "A tiny hat on top of a swooping curve.",
      words: [
        { jp: "あう", meaning: "to meet", romaji: "au", emoji: "🤝", hint: "あ + う." },
        { jp: "いう", meaning: "to say", romaji: "iu", emoji: "💬", hint: "い + う." },
      ],
    },
    { kind: "writing", char: "う", script: "hiragana" },
    {
      kind: "microstory",
      setting: "Hana's first morning in Tokyo",
      emoji: "🌅",
      intro: "Hana just landed. Her host mum, Tanaka-san, is at the door. Read along — you'll recognise more than you expect.",
      lines: [
        { speaker: "narrator", en: "Hana opens the door of her homestay. Tanaka-san is waiting." },
        { speaker: "tanaka", jp: "あ！", romaji: "A!", en: "Ah!" },
        { speaker: "hana", jp: "あ…", romaji: "A...", en: "Oh, hi…" },
        { speaker: "narrator", en: "They both stand there, smiling. Hana suddenly realises she should say something." },
        { speaker: "hana", jp: "いい です。", romaji: "Ii desu.", en: "(It's) good." },
        { speaker: "tanaka", jp: "いい！", romaji: "Ii!", en: "Good!" },
        { speaker: "narrator", en: "It's not much of a conversation. But it's a start." },
      ],
      comprehension: [
        {
          question: "What did Hana say to Tanaka-san?",
          options: ["'Goodbye'", "'(It's) good.'", "'I'm hungry.'", "'I'm Hana.'"],
          correct: 1,
          explanation: "She said いい です — literally 'is good'. We'll cover です properly in Lesson 5.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Read and write あ, い, う",
        "Recognise the words いい, あう, いう",
        "Heard your first Japanese exchange",
      ],
      badge: { name: "First Sounds", emoji: "🎤" },
    },
  ],
};
