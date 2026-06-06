import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 3 · Lesson 2 — The y and r rows.
 * y: や ゆ よ (3 kana). r: ら り る れ ろ (5 kana). Both rows are regular.
 * The Japanese "r" is a soft tap, between English r and l.
 */
export const chapter03Lesson02: Lesson = {
  id: "ja-3-2",
  chapterId: "ja-ch3",
  number: 2,
  title: "The y + r rows",
  titleNative: "やゆよ・らりるれろ",
  subtitle: "8 kana, 0 irregulars",
  summary: "y row (3) + r row (5). Japanese 'r' is a quick tap — closer to a soft 'd' than the English r.",
  xp: 60,
  estimateMinutes: 12,
  unlockAfter: "ja-3-1",
  steps: [
    {
      kind: "intro",
      title: "Eight new sounds in one lesson",
      subtitle: "y row is small (3 kana). r row has 5 but no irregulars. We do them together.",
      goals: ["Recognise や, ゆ, よ, ら, り, る, れ, ろ", "Use the Japanese soft-tap 'r'", "Read words like やま (mountain), さくら (cherry blossom)"],
      estimateMinutes: 12,
    },
    {
      kind: "sounds",
      intro: "The Japanese r is a single tap of the tongue against the roof of the mouth — somewhere between an English r, l, and d.",
      sounds: [
        { text: "や", romaji: "ya", phonetic: "'yah' — open.", mnemonic: "Like a yacht's sail." },
        { text: "ゆ", romaji: "yu", phonetic: "'yoo' — barely rounded.", mnemonic: "A YOO-foe (UFO) shape." },
        { text: "よ", romaji: "yo", phonetic: "'yoh' — round.", mnemonic: "Vertical with one crossbar — YO-yo." },
        { text: "ら", romaji: "ra", phonetic: "'rah' — soft tap, between r and l.", mnemonic: "Like ち rotated — a 'ra'pid curl." },
        { text: "り", romaji: "ri", phonetic: "'ree' — soft tap.", mnemonic: "Two short parallel strokes." },
        { text: "る", romaji: "ru", phonetic: "'roo' — soft tap.", mnemonic: "Like ろ with a loop — a 'roo'mba." },
        { text: "れ", romaji: "re", phonetic: "'reh' — short.", mnemonic: "Like ね but no curl at the bottom." },
        { text: "ろ", romaji: "ro", phonetic: "'roh' — round.", mnemonic: "Like る but no loop." },
      ],
    },
    { kind: "character", script: "hiragana", char: "や", romaji: "ya", phonetic: "'yah'.", mnemonic: "Yacht sail.", words: [{ jp: "やま", meaning: "mountain", romaji: "yama", emoji: "⛰️", hint: "や + ま." }] },
    { kind: "writing", char: "や", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ゆ", romaji: "yu", phonetic: "'yoo'.", mnemonic: "UFO shape.", words: [{ jp: "ゆき", meaning: "snow", romaji: "yuki", emoji: "❄️", hint: "ゆ + き." }] },
    { kind: "writing", char: "ゆ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "よ", romaji: "yo", phonetic: "'yoh'.", mnemonic: "Vertical + crossbar.", words: [{ jp: "よる", meaning: "night", romaji: "yoru", emoji: "🌃", hint: "よ + る." }] },
    { kind: "writing", char: "よ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ら", romaji: "ra", phonetic: "'rah' (soft tap).", mnemonic: "Rapid curl.", words: [{ jp: "さくら", meaning: "cherry blossom", romaji: "sakura", emoji: "🌸", hint: "さ + く + ら." }] },
    { kind: "writing", char: "ら", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "り", romaji: "ri", phonetic: "'ree' (soft tap).", mnemonic: "Two short parallel strokes.", words: [{ jp: "とり", meaning: "bird", romaji: "tori", emoji: "🐦", hint: "と + り — you already knew this word!" }] },
    { kind: "writing", char: "り", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "る", romaji: "ru", phonetic: "'roo' (soft tap).", mnemonic: "Curl with a loop.", words: [{ jp: "くる", meaning: "to come", romaji: "kuru", emoji: "🚶", hint: "く + る." }] },
    { kind: "writing", char: "る", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "れ", romaji: "re", phonetic: "'reh'.", mnemonic: "Like ね with no tail.", words: [{ jp: "これ", meaning: "this (thing near me)", romaji: "kore", emoji: "👉", hint: "こ + れ — common pronoun." }] },
    { kind: "writing", char: "れ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ろ", romaji: "ro", phonetic: "'roh'.", mnemonic: "Curl with no loop.", words: [{ jp: "おふろ", meaning: "bath", romaji: "ofuro", emoji: "🛁", hint: "お + ふ + ろ." }] },
    { kind: "writing", char: "ろ", script: "hiragana" },
    {
      kind: "vocabDrill",
      intro: "Eight high-frequency words using the new kana.",
      words: [
        { text: "やま", romaji: "yama", meaning: "mountain", emoji: "⛰️", example: { jp: "たかい やま。", romaji: "Takai yama.", en: "A tall mountain." } },
        { text: "ゆき", romaji: "yuki", meaning: "snow", emoji: "❄️", example: { jp: "ゆき が ふる。", romaji: "Yuki ga furu.", en: "Snow falls." } },
        { text: "よる", romaji: "yoru", meaning: "night", emoji: "🌃", example: { jp: "いい よる。", romaji: "Ii yoru.", en: "A good night." } },
        { text: "さくら", romaji: "sakura", meaning: "cherry blossom", emoji: "🌸", example: { jp: "さくら の はな。", romaji: "Sakura no hana.", en: "Cherry-blossom flowers." } },
        { text: "これ", romaji: "kore", meaning: "this (near me)", emoji: "👉", example: { jp: "これ は ほん です。", romaji: "Kore wa hon desu.", en: "This is a book." } },
        { text: "それ", romaji: "sore", meaning: "that (near you)", emoji: "👆", example: { jp: "それ は なに？", romaji: "Sore wa nani?", en: "What is that?" } },
        { text: "くる", romaji: "kuru", meaning: "to come", emoji: "🚶", example: { jp: "ともだち が くる。", romaji: "Tomodachi ga kuru.", en: "A friend is coming." } },
        { text: "おふろ", romaji: "ofuro", meaning: "bath", emoji: "🛁", example: { jp: "おふろ に はいる。", romaji: "Ofuro ni hairu.", en: "Get into the bath." } },
      ],
    },
    {
      kind: "microstory",
      setting: "Cherry blossoms at the park",
      emoji: "🌸",
      lines: [
        { speaker: "narrator", en: "It's spring. Hana, Kenji, Yui, and Tanaka-san sit under a sakura tree." },
        { speaker: "yui", jp: "さくら ！ きれい！", romaji: "Sakura! Kirei!", en: "Cherry blossoms! Beautiful!" },
        { speaker: "tanaka", jp: "これ は さくら、 それ は うめ。", romaji: "Kore wa sakura, sore wa ume.", en: "This is sakura, that is ume (plum)." },
        { speaker: "hana", jp: "ふたつ とも きれい。", romaji: "Futatsu tomo kirei.", en: "Both are beautiful." },
        { speaker: "kenji", jp: "やま は？", romaji: "Yama wa?", en: "What about the mountain?" },
        { speaker: "narrator", en: "Behind them, Mt. Fuji peeks over the houses." },
        { speaker: "hana", jp: "わあ！", romaji: "Waa!", en: "Wow!" },
      ],
      comprehension: [
        { question: "What did Tanaka-san point out?", options: ["Two kinds of trees", "Two kinds of fruit", "Two kinds of birds", "Two kinds of clouds"], correct: 0, explanation: "さくら (cherry) and うめ (plum) — two trees blooming in spring." },
      ],
    },
    { kind: "completion", recap: ["y + r rows complete", "Now reading multi-clause sentences", "33 hiragana down, only ~13 to go"], badge: { name: "Y+R Done", emoji: "🌸" } },
  ],
};
