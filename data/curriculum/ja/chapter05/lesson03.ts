import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 5 · Lesson 3 — い-adjectives in full: attributive, predicate, and the negative (～くない).
 * Builds on the い-adjective intro from Chapter 2.
 */
export const chapter05Lesson03: Lesson = {
  id: "ja-5-3",
  chapterId: "ja-ch5",
  number: 3,
  title: "Describing things — い-adjectives",
  titleNative: "い-けいようし",
  subtitle: "Big, small, and 'not expensive'",
  summary: "Use い-adjectives before a noun and at the end of a sentence — and make them negative with ～くない.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-5-2",
  steps: [
    {
      kind: "intro",
      title: "Make things big, small, new, delicious",
      subtitle: "い-adjectives end in い. They go before a noun (おおきい いえ) or at the end (いえ は おおきい です). The new trick: making them negative.",
      goals: [
        "Use い-adjectives before a noun and as a predicate",
        "Make a negative: たかい → たかくない (です)",
        "Know the いい → よくない exception",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "Six common い-adjectives. They all end in い.",
      words: [
        { text: "おおきい", romaji: "ookii", meaning: "big", emoji: "🐘", example: { jp: "おおきい いえ。", romaji: "Ookii ie.", en: "A big house." } },
        { text: "ちいさい", romaji: "chiisai", meaning: "small", emoji: "🐜", example: { jp: "ちいさい ねこ。", romaji: "Chiisai neko.", en: "A small cat." } },
        { text: "あたらしい", romaji: "atarashii", meaning: "new", emoji: "✨", example: { jp: "あたらしい くるま。", romaji: "Atarashii kuruma.", en: "A new car." } },
        { text: "ふるい", romaji: "furui", meaning: "old (things)", emoji: "🏚️", example: { jp: "ふるい ほん。", romaji: "Furui hon.", en: "An old book." } },
        { text: "おいしい", romaji: "oishii", meaning: "delicious", emoji: "😋", example: { jp: "ケーキ は おいしい です。", romaji: "Keeki wa oishii desu.", en: "The cake is delicious." } },
        { text: "たのしい", romaji: "tanoshii", meaning: "fun", emoji: "🎉", example: { jp: "たのしい です！", romaji: "Tanoshii desu!", en: "It's fun!" } },
      ],
    },
    {
      kind: "grammar",
      intro: "Two placements, then the negative.",
      patterns: [
        {
          id: "i-adj-positions",
          title: "い-adjective — before a noun & at the end",
          titleRomaji: "i-adjective placement",
          subtitle: "おおきい いえ / いえ は おおきい です.",
          pattern: [
            { text: "い-adj", highlight: true },
            { text: "Noun", highlight: false },
            { text: "／ Noun は", highlight: false },
            { text: "い-adj です", highlight: true },
          ],
          patternRomaji: "i-adj + Noun  /  Noun wa  i-adj desu",
          note: "An い-adjective sits directly in front of a noun ('おおきい いえ' = big house) — no の. Or it goes at the end as the predicate: 'いえ は おおきい です' = 'The house is big.' Keep the い; just add です to be polite.",
          tip: "Don't insert の: it's おおきい いえ, never おおきい の いえ.",
          examples: [
            {
              jp: "あたらしい くるま です。",
              romaji: "Atarashii kuruma desu.",
              en: "It's a new car.",
              breakdown: [
                { jp: "あたらしい", en: "new" },
                { jp: "くるま", en: "car" },
                { jp: "です。", en: "is" },
              ],
            },
            {
              jp: "ケーキ は おいしい です。",
              romaji: "Keeki wa oishii desu.",
              en: "The cake is delicious.",
              breakdown: [
                { jp: "ケーキ は", en: "the cake" },
                { jp: "おいしい", en: "delicious" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "Which means 'a big house'?",
            options: ["いえ おおきい", "おおきい いえ", "おおきい の いえ"],
            optionsRomaji: ["Ie ookii", "Ookii ie", "Ookii no ie"],
            correct: 1,
            explanation: "The adjective comes first, attached directly — no の.",
          },
        },
        {
          id: "i-adj-negative",
          title: "Negative: ～い → ～くない",
          titleRomaji: "~i → ~kunai",
          subtitle: "Say what something is NOT.",
          pattern: [
            { text: "stem", highlight: true },
            { text: "く", highlight: false },
            { text: "ない", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "drop い → add くない (desu)",
          note: "To make an い-adjective negative, drop the final い and add くない: たかい (expensive) → たかくない (not expensive). Add です to stay polite: 'たかくない です'. One exception: いい (good) becomes よくない, not いくない.",
          tip: "です doesn't change for the negative — くない already carries the 'not'. ('たかくない です' is correct; don't say たかい じゃない です here.)",
          examples: [
            {
              jp: "コーヒー は たかくない です。",
              romaji: "Koohii wa takakunai desu.",
              en: "The coffee isn't expensive.",
              breakdown: [
                { jp: "コーヒー は", en: "the coffee" },
                { jp: "たかくない", en: "not expensive" },
                { jp: "です。", en: "is" },
              ],
            },
            {
              jp: "ふるくない です。",
              romaji: "Furukunai desu.",
              en: "It's not old.",
              breakdown: [
                { jp: "ふる(い)", en: "old" },
                { jp: "くない", en: "not" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 'It's not expensive.' (たかい)?",
            options: ["たかい です。", "たかくない です。", "たかい ない です。"],
            optionsRomaji: ["Takai desu.", "Takakunai desu.", "Takai nai desu."],
            correct: 1,
            explanation: "Drop い, add くない: たか + くない. です stays as-is.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Reviewing the café",
      emoji: "😋",
      intro: "Yui and Kenji talk about the café.",
      lines: [
        { speaker: "yui", jp: "この ケーキ、おいしい！", romaji: "Kono keeki, oishii!", en: "This cake is delicious!" },
        { speaker: "kenji", jp: "コーヒー も おいしい です。", romaji: "Koohii mo oishii desu.", en: "The coffee is good too." },
        { speaker: "yui", jp: "たかい ですか。", romaji: "Takai desu ka.", en: "Is it expensive?" },
        { speaker: "kenji", jp: "いいえ、たかくない です。", romaji: "Iie, takakunai desu.", en: "No, it's not expensive." },
        { speaker: "yui", jp: "いい カフェ ですね！", romaji: "Ii kafe desu ne!", en: "It's a good café, isn't it!" },
      ],
      comprehension: [
        {
          question: "Is the coffee expensive?",
          options: ["Yes, very (たかい)", "No, it's not (たかくない)", "It's free", "They don't say"],
          correct: 1,
          explanation: "いいえ、たかくない です — 'No, it's not expensive.'",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["い-adjective before a noun and as predicate", "Negative ～くない です", "いい → よくない exception"],
      badge: { name: "Describer", emoji: "🎨" },
    },
  ],
};
