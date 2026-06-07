import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 4 · Lesson 1 — Katakana vowels + k row: ア イ ウ エ オ カ キ ク ケ コ.
 * The second script begins. Same sounds you already know — sharper, straighter shapes.
 * Introduces the ー long-vowel mark, which loanwords lean on heavily.
 */
export const chapter04Lesson01: Lesson = {
  id: "ja-4-1",
  chapterId: "ja-ch4",
  number: 1,
  title: "Katakana: ア, イ, ウ, エ, オ, カ–コ",
  titleNative: "アイウエオ カキクケコ",
  subtitle: "The second script begins",
  summary: "Katakana is the script for loanwords. Same sounds as hiragana — sharper shapes. Start with the vowels and k row, plus the ー long-vowel mark.",
  xp: 55,
  estimateMinutes: 11,
  unlockAfter: "ja-3-5",
  steps: [
    {
      kind: "intro",
      title: "A second alphabet for the same sounds",
      subtitle: "Katakana is used for foreign words — コーヒー (coffee), ケーキ (cake), your own name. The sounds are identical to hiragana; only the shapes change (straighter, more angular).",
      goals: [
        "Recognise ア, イ, ウ, エ, オ and カ, キ, ク, ケ, コ",
        "Use the ー mark to lengthen a vowel (ケーキ = ke-e-ki)",
        "Read your first loanwords: ケーキ, ココア, キウイ",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "sounds",
      intro: "You already know these sounds from hiragana. Listen and match them to the new katakana shapes. The little dash ー just holds the previous vowel longer.",
      sounds: [
        { text: "ア", romaji: "a", phonetic: "'ah' — same as あ.", mnemonic: "Like a capital 'A' with a flag — Ah!" },
        { text: "イ", romaji: "i", phonetic: "'ee' — same as い.", mnemonic: "Two strokes leaning — like the 'ii' in 'ski'." },
        { text: "ウ", romaji: "u", phonetic: "'oo' — same as う.", mnemonic: "A little roof — 'oo' under cover." },
        { text: "エ", romaji: "e", phonetic: "'eh' — same as え.", mnemonic: "Like the letter on an Engineer's hat (工)." },
        { text: "オ", romaji: "o", phonetic: "'oh' — same as お.", mnemonic: "A cross with a hooked leg — 'Oh!'" },
        { text: "カ", romaji: "ka", phonetic: "'ka'.", mnemonic: "Like hiragana か with the loop dropped — a katana." },
        { text: "キ", romaji: "ki", phonetic: "'kee'.", mnemonic: "Like hiragana き simplified — a key." },
        { text: "ク", romaji: "ku", phonetic: "'koo'.", mnemonic: "An open beak pointing left — 'coo'." },
        { text: "ケ", romaji: "ke", phonetic: "'keh'.", mnemonic: "Three strokes — like a little keg." },
        { text: "コ", romaji: "ko", phonetic: "'koh'.", mnemonic: "Two strokes — a square corner, a tiny box." },
      ],
    },
    { kind: "character", script: "katakana", char: "ア", romaji: "a", phonetic: "'ah'.", mnemonic: "A capital 'A' with a flag.", words: [{ jp: "アイス", meaning: "ice cream", romaji: "aisu", emoji: "🍨", hint: "ア + イ + ス (ス comes next lesson)." }] },
    { kind: "writing", char: "ア", script: "katakana" },
    { kind: "character", script: "katakana", char: "イ", romaji: "i", phonetic: "'ee'.", mnemonic: "Two leaning strokes.", words: [{ jp: "イカ", meaning: "squid", romaji: "ika", emoji: "🦑", hint: "イ + カ." }] },
    { kind: "writing", char: "イ", script: "katakana" },
    { kind: "character", script: "katakana", char: "ウ", romaji: "u", phonetic: "'oo'.", mnemonic: "A little roof.", words: [{ jp: "キウイ", meaning: "kiwi", romaji: "kiwi", emoji: "🥝", hint: "キ + ウ + イ." }] },
    { kind: "writing", char: "ウ", script: "katakana" },
    { kind: "character", script: "katakana", char: "エ", romaji: "e", phonetic: "'eh'.", mnemonic: "Engineer's工 hat.", words: [{ jp: "エコ", meaning: "eco / eco-friendly", romaji: "eko", emoji: "♻️", hint: "エ + コ." }] },
    { kind: "writing", char: "エ", script: "katakana" },
    { kind: "character", script: "katakana", char: "オ", romaji: "o", phonetic: "'oh'.", mnemonic: "A cross with a hooked leg.", words: [{ jp: "オーケー", meaning: "OK", romaji: "ookee", emoji: "👌", hint: "オ + ー + ケ + ー — two long marks!" }] },
    { kind: "writing", char: "オ", script: "katakana" },
    { kind: "character", script: "katakana", char: "カ", romaji: "ka", phonetic: "'ka'.", mnemonic: "Hiragana か without the loop — a katana.", words: [{ jp: "カメラ", meaning: "camera", romaji: "kamera", emoji: "📷", hint: "カ + メ + ラ (m/r rows come in Lesson 4)." }] },
    { kind: "writing", char: "カ", script: "katakana" },
    { kind: "character", script: "katakana", char: "キ", romaji: "ki", phonetic: "'kee'.", mnemonic: "Like き — a key.", words: [{ jp: "ケーキ", meaning: "cake", romaji: "keeki", emoji: "🍰", hint: "ケ + ー + キ." }] },
    { kind: "writing", char: "キ", script: "katakana" },
    { kind: "character", script: "katakana", char: "ク", romaji: "ku", phonetic: "'koo'.", mnemonic: "An open beak.", words: [{ jp: "ミルク", meaning: "milk", romaji: "miruku", emoji: "🥛", hint: "ミ + ル + ク — ク is the last sound." }] },
    { kind: "writing", char: "ク", script: "katakana" },
    { kind: "character", script: "katakana", char: "ケ", romaji: "ke", phonetic: "'keh'.", mnemonic: "A little keg.", words: [{ jp: "ケア", meaning: "care", romaji: "kea", emoji: "💆", hint: "ケ + ア." }] },
    { kind: "writing", char: "ケ", script: "katakana" },
    { kind: "character", script: "katakana", char: "コ", romaji: "ko", phonetic: "'koh'.", mnemonic: "A tiny box.", words: [{ jp: "ココア", meaning: "cocoa", romaji: "kokoa", emoji: "☕", hint: "コ + コ + ア." }] },
    { kind: "writing", char: "コ", script: "katakana" },
    {
      kind: "vocabDrill",
      intro: "Real loanwords you can already read. Remember: ー just lengthens the vowel before it — ケーキ is 'ke-e-ki'.",
      words: [
        { text: "ケーキ", romaji: "keeki", meaning: "cake", emoji: "🍰", example: { jp: "これ は ケーキ です。", romaji: "Kore wa keeki desu.", en: "This is cake." } },
        { text: "ココア", romaji: "kokoa", meaning: "cocoa", emoji: "☕", example: { jp: "ココア が すき。", romaji: "Kokoa ga suki.", en: "I like cocoa." } },
        { text: "カカオ", romaji: "kakao", meaning: "cacao", emoji: "🍫", example: { jp: "カカオ の ケーキ。", romaji: "Kakao no keeki.", en: "Cacao cake." } },
        { text: "キウイ", romaji: "kiwi", meaning: "kiwi", emoji: "🥝", example: { jp: "キウイ を かう。", romaji: "Kiwi wo kau.", en: "Buy a kiwi." } },
        { text: "エコ", romaji: "eko", meaning: "eco-friendly", emoji: "♻️", example: { jp: "エコ な いえ。", romaji: "Eko na ie.", en: "An eco-friendly house." } },
        { text: "オーケー", romaji: "ookee", meaning: "OK", emoji: "👌", example: { jp: "オーケー、いく。", romaji: "Ookee, iku.", en: "OK, let's go." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Now make a polite statement. One word — です — turns any noun into 'It is ___.'",
      patterns: [
        {
          id: "noun-desu",
          title: "Noun です",
          titleRomaji: "Noun desu",
          subtitle: "The polite 'it is ___'.",
          pattern: [
            { text: "Noun", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "Noun  desu",
          note: "です (desu) is the polite copula — it means 'is / am / are'. Put it at the very end of a sentence: 'ケーキ です' = '(It) is cake.' Add a topic with は: 'これ は ケーキ です' = 'This is cake.' です never changes for I/you/it.",
          tip: "です is pronounced 'des' — the u is almost silent.",
          examples: [
            {
              jp: "これ は ケーキ です。",
              romaji: "Kore wa keeki desu.",
              en: "This is cake.",
              breakdown: [
                { jp: "これ", en: "this" },
                { jp: "は", en: "(topic)" },
                { jp: "ケーキ", en: "cake" },
                { jp: "です。", en: "is" },
              ],
            },
            {
              jp: "ココア です。",
              romaji: "Kokoa desu.",
              en: "It's cocoa.",
              breakdown: [
                { jp: "ココア", en: "cocoa" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 'This is cocoa.' politely?",
            options: ["これ は ココア。", "これ は ココア です。", "これ を ココア です。"],
            optionsRomaji: ["Kore wa kokoa.", "Kore wa kokoa desu.", "Kore wo kokoa desu."],
            correct: 1,
            explanation: "です makes it a polite, complete statement. を marks objects, so it's wrong here.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana visits a new café",
      emoji: "🍰",
      intro: "Hana stops at a café and reads the menu — all in katakana.",
      lines: [
        { speaker: "narrator", en: "A small café. The menu is written in katakana." },
        { speaker: "hana", jp: "ケーキ！", romaji: "Keeki!", en: "Cake!" },
        { speaker: "tanaka", jp: "これ は ココア です。", romaji: "Kore wa kokoa desu.", en: "This is cocoa." },
        { speaker: "hana", jp: "ココア、すき です。", romaji: "Kokoa, suki desu.", en: "I like cocoa." },
        { speaker: "tanaka", jp: "オーケー！", romaji: "Ookee!", en: "OK!" },
        { speaker: "narrator", en: "Tanaka works at the café. Hana will be back." },
      ],
      comprehension: [
        {
          question: "What does Tanaka say the drink is?",
          options: ["Coffee (コーヒー)", "Cocoa (ココア)", "Cake (ケーキ)", "Kiwi (キウイ)"],
          correct: 1,
          explanation: "これ は ココア です = 'This is cocoa.'",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["Katakana ア, イ, ウ, エ, オ + カ, キ, ク, ケ, コ", "The ー long-vowel mark", "です — the polite 'it is ___'", "First loanwords: ケーキ, ココア, キウイ"],
      badge: { name: "Katakana Begun", emoji: "🅰️" },
    },
  ],
};
