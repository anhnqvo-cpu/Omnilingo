import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 2 · Lesson 3 — The t row: た ち つ て と.
 * Two irregulars: ち (chi, not ti), つ (tsu, not tu). Three of the most common kana in Japanese.
 */
export const chapter02Lesson03: Lesson = {
  id: "ja-2-3",
  chapterId: "ja-ch2",
  number: 3,
  title: "The t row: た, ち, つ, て, と",
  titleNative: "たちつてと",
  subtitle: "Two more irregulars — ち and つ",
  summary: "ち is 'chi', つ is 'tsu'. The other three behave. By the end you can read うた (song), て (hand), とり (bird).",
  xp: 50,
  estimateMinutes: 10,
  unlockAfter: "ja-2-2",
  steps: [
    {
      kind: "intro",
      title: "The t row — two surprise sounds",
      subtitle: "ち = chi (like 'cheese'), つ = tsu (like 'tsunami'). The rest are predictable.",
      goals: [
        "Recognise た, ち, つ, て, と",
        "Remember the ち/つ exceptions",
        "Read words like うた (song), とり (bird), て (hand)",
      ],
      estimateMinutes: 10,
    },
    {
      kind: "sounds",
      intro: "Two unusual sounds today. Listen to ち and つ carefully.",
      sounds: [
        { text: "た", romaji: "ta", phonetic: "'tah' — soft t, open vowel.", mnemonic: "A horizontal cross — looks like a 'ta'ble." },
        { text: "ち", romaji: "chi", phonetic: "'chee' — like 'cheese'. NOT 'tee'.", mnemonic: "Looks like the number 5 reversed — five years to learn 'chi'." },
        { text: "つ", romaji: "tsu", phonetic: "'tsoo' — like the start of 'tsunami'. The 't' and 's' blend.", mnemonic: "Like a swoosh — a Tsu-nami wave." },
        { text: "て", romaji: "te", phonetic: "'teh' — short.", mnemonic: "Looks like a person reaching out a hand. て = hand!" },
        { text: "と", romaji: "to", phonetic: "'toh' — round.", mnemonic: "A vertical line with a tiny tick — like a toe sticking out." },
      ],
    },
    { kind: "character", script: "hiragana", char: "た", romaji: "ta", phonetic: "'tah'.", mnemonic: "Like a + table corner.", words: [{ jp: "うた", meaning: "song", romaji: "uta", emoji: "🎵", hint: "う + た." }] },
    { kind: "writing", char: "た", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ち", romaji: "chi", phonetic: "'chee' — soft ch.", mnemonic: "A backwards '5' — 'CHI'ld learning numbers.", words: [{ jp: "ちち", meaning: "father (humble)", romaji: "chichi", emoji: "👨", hint: "ち + ち (doubled)." }] },
    { kind: "writing", char: "ち", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "つ", romaji: "tsu", phonetic: "'tsoo' — blended t+s.", mnemonic: "A tsunami wave curl.", words: [{ jp: "つき", meaning: "moon / month", romaji: "tsuki", emoji: "🌙", hint: "つ + き." }] },
    { kind: "writing", char: "つ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "て", romaji: "te", phonetic: "'teh'.", mnemonic: "Looks like a hand reaching out. て = hand.", words: [{ jp: "て", meaning: "hand", romaji: "te", emoji: "✋", hint: "Just the one character." }] },
    { kind: "writing", char: "て", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "と", romaji: "to", phonetic: "'toh'.", mnemonic: "A line with a flag — to(ward) the next place.", words: [{ jp: "とり", meaning: "bird", romaji: "tori", emoji: "🐦", hint: "と + り (you'll learn ら/り soon)." }] },
    { kind: "writing", char: "と", script: "hiragana" },
    {
      kind: "vocabDrill",
      intro: "Eight new words. Notice how much you can read now.",
      words: [
        { text: "うた", romaji: "uta", meaning: "song", emoji: "🎵", example: { jp: "いい うた。", romaji: "Ii uta.", en: "A good song." } },
        { text: "つき", romaji: "tsuki", meaning: "moon, month", emoji: "🌙", example: { jp: "つき が きれい。", romaji: "Tsuki ga kirei.", en: "The moon is beautiful." } },
        { text: "て", romaji: "te", meaning: "hand", emoji: "✋", example: { jp: "て を あげる。", romaji: "Te wo ageru.", en: "Raise your hand." } },
        { text: "とり", romaji: "tori", meaning: "bird", emoji: "🐦", example: { jp: "そら の とり。", romaji: "Sora no tori.", en: "A bird in the sky." } },
        { text: "ちち", romaji: "chichi", meaning: "(my) father", emoji: "👨", example: { jp: "ちち の いえ。", romaji: "Chichi no ie.", en: "My father's house." } },
        { text: "おちゃ", romaji: "ocha", meaning: "tea", emoji: "🍵", example: { jp: "おちゃ を のむ。", romaji: "Ocha wo nomu.", en: "Drink tea." } },
        { text: "たかい", romaji: "takai", meaning: "tall / expensive", emoji: "📏", example: { jp: "たかい やま。", romaji: "Takai yama.", en: "A tall mountain." } },
        { text: "ちかい", romaji: "chikai", meaning: "close, nearby", emoji: "📍", example: { jp: "ちかい いえ。", romaji: "Chikai ie.", en: "A nearby house." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Today's words include たかい and ちかい — your first adjectives. Here's how they work.",
      patterns: [
        {
          id: "i-adj-noun",
          title: "い-adjective + Noun",
          titleRomaji: "i-adjective + Noun",
          subtitle: "Describe a noun by placing the adjective in front.",
          pattern: [
            { text: "Adjective", highlight: true },
            { text: "Noun", highlight: true },
          ],
          patternRomaji: "takai  yama",
          note: "Japanese adjectives that end in い (like たかい 'tall', ちかい 'near', いい 'good', おおきい 'big') sit directly in front of the noun they describe — no extra word needed. 'たかい やま' = 'a tall mountain'.",
          tip: "These are called い-adjectives because they end in い. Don't insert の or な between the adjective and the noun.",
          examples: [
            {
              jp: "たかい やま。",
              romaji: "Takai yama.",
              en: "A tall mountain.",
              breakdown: [
                { jp: "たかい", en: "tall" },
                { jp: "やま", en: "mountain" },
              ],
            },
            {
              jp: "おいしい すし。",
              romaji: "Oishii sushi.",
              en: "Delicious sushi.",
              breakdown: [
                { jp: "おいしい", en: "delicious" },
                { jp: "すし", en: "sushi" },
              ],
            },
          ],
        },
        {
          id: "i-adj-desu",
          title: "Noun は い-adjective です",
          titleRomaji: "Noun wa i-adjective desu",
          subtitle: "Use the adjective as the whole predicate.",
          pattern: [
            { text: "Noun", highlight: true },
            { text: "は", highlight: false },
            { text: "Adjective", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "Noun  wa  Adjective  desu",
          note: "To say 'X is [adjective]', keep the full い-adjective and add です for politeness. 'この やま は たかい です' = 'This mountain is tall'. The い stays — you do NOT drop it.",
          tip: "です here adds politeness, not meaning — たかい already means 'is tall'. In casual speech you can drop です.",
          examples: [
            {
              jp: "やま は たかい です。",
              romaji: "Yama wa takai desu.",
              en: "The mountain is tall.",
              breakdown: [
                { jp: "やま", en: "mountain" },
                { jp: "は", en: "(topic)" },
                { jp: "たかい です。", en: "is tall" },
              ],
            },
          ],
          apply: {
            prompt: "Which correctly says 'a delicious fish'?",
            options: ["おいしい うお", "うお おいしい", "おいしい の うお"],
            optionsRomaji: ["Oishii uo", "Uo oishii", "Oishii no uo"],
            correct: 0,
            explanation: "い-adjectives go directly in front of the noun: おいしい (delicious) + うお (fish). No の needed.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "An evening walk",
      emoji: "🌙",
      intro: "Hana and Kenji walk home as the sun sets.",
      lines: [
        { speaker: "kenji", jp: "つき！ きれい。", romaji: "Tsuki! Kirei.", en: "The moon! Beautiful." },
        { speaker: "hana", jp: "あ！ とり も。", romaji: "A! Tori mo.", en: "Oh! A bird too." },
        { speaker: "kenji", jp: "うた を きく？", romaji: "Uta wo kiku?", en: "Want to listen to a song?" },
        { speaker: "hana", jp: "うん、 いい。", romaji: "Un, ii.", en: "Yeah, sure." },
        { speaker: "narrator", en: "Kenji hums an old folk song. Hana listens to the moon, the bird, and the song." },
      ],
      comprehension: [
        {
          question: "What does つき mean?",
          options: ["sun", "moon", "star", "cloud"],
          correct: 1,
          explanation: "つき (tsuki) = moon. Also means 'month'.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["た, ち, つ, て, と with their irregulars memorised", "Eight new words", "Started reading short phrases naturally"],
      badge: { name: "T-row Tamer", emoji: "🌙" },
    },
  ],
};
