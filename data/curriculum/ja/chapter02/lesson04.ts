import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 2 · Lesson 4 — The n row: な に ぬ ね の.
 * The n row is the easiest — no irregulars at all.
 */
export const chapter02Lesson04: Lesson = {
  id: "ja-2-4",
  chapterId: "ja-ch2",
  number: 4,
  title: "The n row: な, に, ぬ, ね, の",
  titleNative: "なにぬねの",
  subtitle: "Hiragana continued — no irregulars",
  summary: "Five soft 'n' sounds. の is one of the most common particles in Japanese — and you already met it.",
  xp: 50,
  estimateMinutes: 9,
  unlockAfter: "ja-2-3",
  steps: [
    {
      kind: "intro",
      title: "The n row — finally, no exceptions",
      subtitle: "And bonus: you've been using の since Lesson 5.",
      goals: [
        "Recognise な, に, ぬ, ね, の",
        "Read words like なつ (summer), にく (meat), ねこ (cat)",
        "Recognise の both as a particle and as a kana",
      ],
      estimateMinutes: 9,
    },
    {
      kind: "sounds",
      intro: "All five behave normally. Easiest row in the language.",
      sounds: [
        { text: "な", romaji: "na", phonetic: "'nah' — soft n, open vowel.", mnemonic: "Looks like the た family but with a curl underneath." },
        { text: "に", romaji: "ni", phonetic: "'nee' — bright.", mnemonic: "Two short horizontal lines + a vertical. Like a knee bent." },
        { text: "ぬ", romaji: "nu", phonetic: "'noo' — barely-rounded.", mnemonic: "Two strokes with a tight loop — a 'noo'dle." },
        { text: "ね", romaji: "ne", phonetic: "'neh' — short.", mnemonic: "Big curl at the bottom — like a cat's tail." },
        { text: "の", romaji: "no", phonetic: "'noh' — round.", mnemonic: "A single spiral — the one stroke you already know." },
      ],
    },
    { kind: "character", script: "hiragana", char: "な", romaji: "na", phonetic: "'nah'.", mnemonic: "Cross + curl underneath.", words: [{ jp: "なつ", meaning: "summer", romaji: "natsu", emoji: "☀️", hint: "な + つ." }] },
    { kind: "writing", char: "な", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "に", romaji: "ni", phonetic: "'nee'.", mnemonic: "Two horizontals — 'NI'-ce and neat.", words: [{ jp: "にく", meaning: "meat", romaji: "niku", emoji: "🥩", hint: "に + く." }] },
    { kind: "writing", char: "に", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ぬ", romaji: "nu", phonetic: "'noo'.", mnemonic: "Tight loop — a knot.", words: [{ jp: "いぬ", meaning: "dog", romaji: "inu", emoji: "🐕", hint: "い + ぬ." }] },
    { kind: "writing", char: "ぬ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ね", romaji: "ne", phonetic: "'neh'.", mnemonic: "A vertical line with a cat-tail curl. NE-ko (cat)!", words: [{ jp: "ねこ", meaning: "cat", romaji: "neko", emoji: "🐈", hint: "ね + こ." }] },
    { kind: "writing", char: "ね", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "の", romaji: "no", phonetic: "'noh'.", mnemonic: "A single spiral. You already use this as a particle.", words: [{ jp: "わたし の", meaning: "my / mine", romaji: "watashi no", emoji: "👤", hint: "の as particle: 'A's B'." }] },
    { kind: "writing", char: "の", script: "hiragana" },
    {
      kind: "vocabDrill",
      intro: "Six words built from the n row plus characters you already know.",
      words: [
        { text: "なつ", romaji: "natsu", meaning: "summer", emoji: "☀️", example: { jp: "あつい なつ。", romaji: "Atsui natsu.", en: "A hot summer." } },
        { text: "にく", romaji: "niku", meaning: "meat", emoji: "🥩", example: { jp: "にく を たべる。", romaji: "Niku wo taberu.", en: "Eat meat." } },
        { text: "いぬ", romaji: "inu", meaning: "dog", emoji: "🐕", example: { jp: "わたし の いぬ。", romaji: "Watashi no inu.", en: "My dog." } },
        { text: "ねこ", romaji: "neko", meaning: "cat", emoji: "🐈", example: { jp: "くろい ねこ。", romaji: "Kuroi neko.", en: "A black cat." } },
        { text: "なに", romaji: "nani", meaning: "what?", emoji: "❓", example: { jp: "それ は なに ですか？", romaji: "Sore wa nani desu ka?", en: "What is that?" } },
        { text: "おかね", romaji: "okane", meaning: "money", emoji: "💴", example: { jp: "おかね が ない。", romaji: "Okane ga nai.", en: "I don't have money." } },
      ],
    },
    {
      kind: "grammar",
      intro: "You met なに ('what') in the cards. It pairs with a neat set of pointing words.",
      patterns: [
        {
          id: "kosoado",
          title: "これ・それ・あれ・どれ",
          titleRomaji: "kore / sore / are / dore",
          subtitle: "this, that, that-over-there, which.",
          pattern: [
            { text: "これ / それ / あれ", highlight: true },
            { text: "は", highlight: false },
            { text: "Noun", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "Kore / Sore / Are  wa  Noun  desu",
          note: "Japanese splits 'this/that' by distance from each speaker. これ (kore) = this, near me. それ (sore) = that, near you. あれ (are) = that, away from both of us. どれ (dore) = which one? They all start the sentence and take は.",
          tip: "This is the ko-so-a-do family. The same pattern shows up again later for places (ここ・そこ・あそこ) and more.",
          examples: [
            {
              jp: "これ は ねこ です。",
              romaji: "Kore wa neko desu.",
              en: "This is a cat.",
              breakdown: [
                { jp: "これ", en: "this" },
                { jp: "は", en: "(topic)" },
                { jp: "ねこ です。", en: "is a cat" },
              ],
            },
            {
              jp: "あれ は いぬ です。",
              romaji: "Are wa inu desu.",
              en: "That (over there) is a dog.",
              breakdown: [
                { jp: "あれ", en: "that (far)" },
                { jp: "は", en: "(topic)" },
                { jp: "いぬ です。", en: "is a dog" },
              ],
            },
          ],
        },
        {
          id: "nani-question",
          title: "X は なに ですか？",
          titleRomaji: "X wa nani desu ka?",
          subtitle: "Ask 'what is X?'",
          pattern: [
            { text: "X", highlight: true },
            { text: "は なに です", highlight: false },
            { text: "か？", highlight: true },
          ],
          patternRomaji: "X  wa  nani  desu  ka?",
          note: "なに (nani) = 'what'. Drop it into the X は Y です frame in place of Y, then add か to ask. 'それ は なに ですか？' = 'What is that?'",
          tip: "Before some sounds なに shortens to なん (e.g. なんですか). Both are correct — your ear will pick up which fits.",
          examples: [
            {
              jp: "それ は なに ですか？",
              romaji: "Sore wa nani desu ka?",
              en: "What is that?",
              breakdown: [
                { jp: "それ は", en: "that (topic)" },
                { jp: "なに です", en: "is what" },
                { jp: "か？", en: "?" },
              ],
            },
          ],
          apply: {
            prompt: "Something is far from both you and the listener. Which word do you use?",
            options: ["これ", "それ", "あれ"],
            optionsRomaji: ["kore", "sore", "are"],
            correct: 2,
            explanation: "あれ (are) = that thing over there, away from both speakers. これ is near me, それ is near you.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "The neighbour's cat",
      emoji: "🐈",
      intro: "Hana hears scratching at her door.",
      lines: [
        { speaker: "narrator", en: "There's a small black cat at Hana's door." },
        { speaker: "hana", jp: "あ！ ねこ！", romaji: "A! Neko!", en: "Oh! A cat!" },
        { speaker: "yui", jp: "あ、 ごめん！ わたし の ねこ。", romaji: "A, gomen! Watashi no neko.", en: "Oh, sorry! That's my cat." },
        { speaker: "hana", jp: "なまえ は？", romaji: "Namae wa?", en: "What's its name?" },
        { speaker: "yui", jp: "つき。", romaji: "Tsuki.", en: "Tsuki (Moon)." },
        { speaker: "hana", jp: "かわいい！", romaji: "Kawaii!", en: "Cute!" },
        { speaker: "narrator", en: "Yui — the kid from across the street — has now entered Hana's story too." },
      ],
      comprehension: [
        {
          question: "What is the cat's name?",
          options: ["Hana", "Tsuki (Moon)", "Neko", "Yui"],
          correct: 1,
          explanation: "つき = moon, and it's also the cat's name. Common Japanese name for a black cat.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["Five n-row kana", "の as both a kana and a particle", "Met another character: Yui"],
      badge: { name: "N-row Nailed", emoji: "🐈" },
    },
  ],
};
