import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 2 · Lesson 1 — The k row: か き く け こ.
 * Once you have these, you can read words like かお (face), いく (to go), きく (to listen).
 */
export const chapter02Lesson01: Lesson = {
  id: "ja-2-1",
  chapterId: "ja-ch2",
  number: 1,
  title: "The k row: か, き, く, け, こ",
  titleNative: "かきくけこ",
  subtitle: "Hiragana continued",
  summary: "Add five 'k' sounds: ka, ki, ku, ke, ko. Doubles your reading range immediately.",
  xp: 50,
  estimateMinutes: 10,
  unlockAfter: "ja-1-5",
  steps: [
    {
      kind: "intro",
      title: "Five new sounds, twenty new words",
      subtitle: "After this lesson you can read words mixing vowels with the k row.",
      goals: [
        "Recognise か, き, く, け, こ",
        "Trace each with correct stroke order",
        "Read words like かお (face), きく (to listen), いく (to go)",
      ],
      estimateMinutes: 10,
    },
    {
      kind: "sounds",
      intro: "These are all the vowel sounds you already know, with a soft 'k' in front.",
      sounds: [
        { text: "か", romaji: "ka", phonetic: "'ka' as in 'car' — hard k, open vowel.", mnemonic: "Looks like a katana sword + a person." },
        { text: "き", romaji: "ki", phonetic: "'kee' — like a key clinking.", mnemonic: "Looks like an old-fashioned key." },
        { text: "く", romaji: "ku", phonetic: "'koo' — like a cuckoo bird.", mnemonic: "A bird's open beak, pointing left." },
        { text: "け", romaji: "ke", phonetic: "'keh' — short, like the start of 'kettle'.", mnemonic: "Like a keg lying on its side." },
        { text: "こ", romaji: "ko", phonetic: "'koh' — round, like the start of 'cobra'.", mnemonic: "Two short horizontal lines — a tiny container." },
      ],
    },
    { kind: "character", script: "hiragana", char: "か", romaji: "ka", phonetic: "'ka' as in 'car'.", mnemonic: "Three strokes — a slash, a vertical with a hook, and a little flag.", words: [{ jp: "かお", meaning: "face", romaji: "kao", emoji: "🙂", hint: "か + お." }] },
    { kind: "writing", char: "か", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "き", romaji: "ki", phonetic: "'kee' — bright vowel.", mnemonic: "Looks like a tree with two horizontal branches and one curving root.", words: [{ jp: "きく", meaning: "to listen / chrysanthemum", romaji: "kiku", emoji: "👂", hint: "き + く." }] },
    { kind: "writing", char: "き", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "く", romaji: "ku", phonetic: "'koo' — barely-rounded.", mnemonic: "A single sweeping V — like a bird's beak.", words: [{ jp: "いく", meaning: "to go", romaji: "iku", emoji: "🚶", hint: "い + く." }] },
    { kind: "writing", char: "く", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "け", romaji: "ke", phonetic: "'keh' — short.", mnemonic: "A vertical line, a curved hook, and a horizontal slash.", words: [{ jp: "いけ", meaning: "pond", romaji: "ike", emoji: "🪷", hint: "い + け." }] },
    { kind: "writing", char: "け", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "こ", romaji: "ko", phonetic: "'koh' — round.", mnemonic: "Two strokes that look like a tiny scroll, ko-curled twice.", words: [{ jp: "こえ", meaning: "voice", romaji: "koe", emoji: "🗣️", hint: "こ + え." }] },
    { kind: "writing", char: "こ", script: "hiragana" },
    {
      kind: "vocabDrill",
      intro: "Now use what you can read. Six words mixing the k row with the vowels you know.",
      words: [
        { text: "かお", romaji: "kao", meaning: "face", emoji: "🙂", example: { jp: "いい かお。", romaji: "Ii kao.", en: "A nice face." } },
        { text: "きく", romaji: "kiku", meaning: "to listen", emoji: "👂", example: { jp: "おんがく を きく。", romaji: "Ongaku wo kiku.", en: "Listen to music." } },
        { text: "いく", romaji: "iku", meaning: "to go", emoji: "🚶", example: { jp: "がっこう に いく。", romaji: "Gakkou ni iku.", en: "Go to school." } },
        { text: "いけ", romaji: "ike", meaning: "pond", emoji: "🪷", example: { jp: "いえ の いけ。", romaji: "Ie no ike.", en: "The house's pond." } },
        { text: "こえ", romaji: "koe", meaning: "voice", emoji: "🗣️", example: { jp: "いい こえ。", romaji: "Ii koe.", en: "A nice voice." } },
        { text: "かう", romaji: "kau", meaning: "to buy", emoji: "🛍️", example: { jp: "ほん を かう。", romaji: "Hon wo kau.", en: "Buy a book." } },
      ],
    },
    {
      kind: "grammar",
      intro: "You can read verbs now — so let's use them. One particle unlocks real sentences.",
      patterns: [
        {
          id: "wo-object",
          title: "Noun を Verb",
          titleRomaji: "Noun wo Verb",
          subtitle: "Mark the thing an action happens to.",
          pattern: [
            { text: "Noun", highlight: true },
            { text: "を", highlight: false },
            { text: "Verb", highlight: true },
          ],
          patternRomaji: "Noun  wo  Verb",
          note: "を marks the direct object — the thing the verb acts on. Put the object first, then を, then the verb. 'ほん を かう' = (object) book + buy = 'buy a book'. Japanese puts the verb at the very end.",
          tip: "を is the particle 'o'. It's written with a special kana (を) you'll learn to write in Chapter 3 — for now, just recognise it and read it 'o'.",
          examples: [
            {
              jp: "ほん を かう。",
              romaji: "Hon wo kau.",
              en: "(I) buy a book.",
              breakdown: [
                { jp: "ほん", en: "book" },
                { jp: "を", en: "(object)" },
                { jp: "かう。", en: "buy" },
              ],
            },
            {
              jp: "おんがく を きく。",
              romaji: "Ongaku wo kiku.",
              en: "(I) listen to music.",
              breakdown: [
                { jp: "おんがく", en: "music" },
                { jp: "を", en: "(object)" },
                { jp: "きく。", en: "listen" },
              ],
            },
          ],
          apply: {
            prompt: "Which sentence says 'buy a book'?",
            options: ["ほん は かう。", "ほん を かう。", "ほん の かう。"],
            optionsRomaji: ["Hon wa kau.", "Hon wo kau.", "Hon no kau."],
            correct: 1,
            explanation: "を (wo/o) marks the object — the thing being bought. は is the topic; の links nouns.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana finds a pond in the neighbourhood",
      emoji: "🪷",
      intro: "Hana goes for a walk and finds something nice.",
      lines: [
        { speaker: "narrator", en: "Hana walks down a quiet street." },
        { speaker: "hana", jp: "あ！ いけ！", romaji: "A! Ike!", en: "Oh! A pond!" },
        { speaker: "narrator", en: "She hears something." },
        { speaker: "hana", jp: "こえ？", romaji: "Koe?", en: "A voice?" },
        { speaker: "kenji", jp: "こんにちは！", romaji: "Konnichiwa!", en: "Hello!" },
        { speaker: "hana", jp: "あ！ こんにちは。", romaji: "A! Konnichiwa.", en: "Oh! Hello." },
        { speaker: "narrator", en: "Kenji lives next door. They'll see each other again." },
      ],
      comprehension: [
        {
          question: "What did Hana hear at the pond?",
          options: ["A frog", "A voice (こえ)", "Music", "A bell"],
          correct: 1,
          explanation: "こえ (koe) = voice. It was Kenji, a neighbour.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["か, き, く, け, こ written from memory", "Six new words you can read", "Met a new character: Kenji"],
      badge: { name: "K-row Cleared", emoji: "🔑" },
    },
  ],
};
