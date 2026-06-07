import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 5 · Lesson 2 — Possession with の, and この/その/あの + noun.
 * Deepens the の from Ch 1 and contrasts これ/それ/あれ (pronouns) with この/その/あの (before a noun).
 */
export const chapter05Lesson02: Lesson = {
  id: "ja-5-2",
  chapterId: "ja-ch5",
  number: 2,
  title: "Whose? Which one? — の and この/その/あの",
  titleNative: "の・この・その・あの",
  subtitle: "Linking and pointing at nouns",
  summary: "Use の to say 'my ___' and link nouns, and この/その/あの to say 'this/that ___' right before a noun.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-5-1",
  steps: [
    {
      kind: "intro",
      title: "Say whose it is, and which one",
      subtitle: "の glues nouns together (わたし の ほん = my book). この/その/あの point at a specific noun (この ほん = this book).",
      goals: [
        "Use A の B for 'A's B' / 'B of A'",
        "Use この/その/あの before a noun",
        "Tell これ (this one) from この (this ___)",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "Things you can own and point at.",
      words: [
        { text: "ともだち", romaji: "tomodachi", meaning: "friend", emoji: "👫", example: { jp: "わたし の ともだち。", romaji: "Watashi no tomodachi.", en: "My friend." } },
        { text: "かぞく", romaji: "kazoku", meaning: "family", emoji: "👪", example: { jp: "かぞく の しゃしん。", romaji: "Kazoku no shashin.", en: "A family photo." } },
        { text: "くるま", romaji: "kuruma", meaning: "car", emoji: "🚗", example: { jp: "これ は わたし の くるま です。", romaji: "Kore wa watashi no kuruma desu.", en: "This is my car." } },
        { text: "いえ", romaji: "ie", meaning: "house, home", emoji: "🏠", example: { jp: "あの いえ。", romaji: "Ano ie.", en: "That house over there." } },
        { text: "しゃしん", romaji: "shashin", meaning: "photo", emoji: "📷", example: { jp: "この しゃしん。", romaji: "Kono shashin.", en: "This photo." } },
        { text: "ねこ", romaji: "neko", meaning: "cat", emoji: "🐱", example: { jp: "その ねこ。", romaji: "Sono neko.", en: "That cat." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Two small words, two big jobs: linking nouns, and pointing at them.",
      patterns: [
        {
          id: "a-no-b",
          title: "A の B",
          titleRomaji: "A no B",
          subtitle: "A's B / B of A.",
          pattern: [
            { text: "A", highlight: true },
            { text: "の", highlight: false },
            { text: "B", highlight: true },
          ],
          patternRomaji: "A  no  B",
          note: "の links two nouns: the first describes or owns the second. 'わたし の ほん' = 'my book'; 'にほんご の せんせい' = '(a) teacher of Japanese'. The owner/descriptor always comes first, then の, then the thing.",
          tip: "Chain them: 'わたし の かぞく の しゃしん' = 'a photo of my family'.",
          examples: [
            {
              jp: "わたし の くるま。",
              romaji: "Watashi no kuruma.",
              en: "My car.",
              breakdown: [
                { jp: "わたし", en: "I" },
                { jp: "の", en: "'s" },
                { jp: "くるま", en: "car" },
              ],
            },
            {
              jp: "かぞく の しゃしん。",
              romaji: "Kazoku no shashin.",
              en: "A family photo.",
              breakdown: [
                { jp: "かぞく", en: "family" },
                { jp: "の", en: "of" },
                { jp: "しゃしん", en: "photo" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 'my friend'?",
            options: ["ともだち の わたし", "わたし の ともだち", "わたし は ともだち"],
            optionsRomaji: ["Tomodachi no watashi", "Watashi no tomodachi", "Watashi wa tomodachi"],
            correct: 1,
            explanation: "Owner first: わたし の ともだち. The reverse would mean 'the me belonging to a friend'.",
          },
        },
        {
          id: "kono-sono-ano",
          title: "この / その / あの + Noun",
          titleRomaji: "kono / sono / ano + Noun",
          subtitle: "This / that / that-over-there ___.",
          pattern: [
            { text: "この / その / あの", highlight: true },
            { text: "Noun", highlight: true },
          ],
          patternRomaji: "kono / sono / ano  Noun",
          note: "これ・それ・あれ stand alone and mean 'this one / that one'. To say 'this ___' you put この・その・あの directly before a noun: 'この ほん' = 'this book'. Same near/medium/far logic as これ/それ/あれ — just attached to a noun.",
          tip: "Never use これ before a noun: it's この ほん, not これ ほん.",
          examples: [
            {
              jp: "この ねこ は かわいい。",
              romaji: "Kono neko wa kawaii.",
              en: "This cat is cute.",
              breakdown: [
                { jp: "この", en: "this" },
                { jp: "ねこ", en: "cat" },
                { jp: "は かわいい。", en: "is cute" },
              ],
            },
            {
              jp: "あの いえ です。",
              romaji: "Ano ie desu.",
              en: "It's that house over there.",
              breakdown: [
                { jp: "あの", en: "that (far)" },
                { jp: "いえ", en: "house" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 'this book'?",
            options: ["これ ほん", "この ほん", "ほん の これ"],
            optionsRomaji: ["Kore hon", "Kono hon", "Hon no kore"],
            correct: 1,
            explanation: "Before a noun, use この (not これ). これ stands alone as 'this one'.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana shows Kenji a photo",
      emoji: "📷",
      intro: "Hana pulls out a family picture.",
      lines: [
        { speaker: "hana", jp: "これ は かぞく の しゃしん です。", romaji: "Kore wa kazoku no shashin desu.", en: "This is a family photo." },
        { speaker: "kenji", jp: "この ひと は？", romaji: "Kono hito wa?", en: "And this person?" },
        { speaker: "hana", jp: "わたし の あね です。", romaji: "Watashi no ane desu.", en: "That's my older sister." },
        { speaker: "kenji", jp: "その ねこ も かぞく ですか。", romaji: "Sono neko mo kazoku desu ka.", en: "Is that cat family too?" },
        { speaker: "hana", jp: "はい！ わたし の ねこ です。", romaji: "Hai! Watashi no neko desu.", en: "Yes! It's my cat." },
      ],
      comprehension: [
        {
          question: "Who is the person Kenji points at?",
          options: ["Hana's friend", "Hana's older sister (あね)", "The teacher", "Kenji's sister"],
          correct: 1,
          explanation: "わたし の あね です — 'It's my older sister.'",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["A の B — possession and linking", "この/その/あの + noun", "これ (this one) vs この (this ___)"],
      badge: { name: "Linker", emoji: "🔗" },
    },
  ],
};
