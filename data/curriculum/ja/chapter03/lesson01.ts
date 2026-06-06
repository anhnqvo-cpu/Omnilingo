import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 3 · Lesson 1 — The m row: ま み む め も.
 * Soft, easy row. No irregulars.
 */
export const chapter03Lesson01: Lesson = {
  id: "ja-3-1",
  chapterId: "ja-ch3",
  number: 1,
  title: "The m row: ま, み, む, め, も",
  titleNative: "まみむめも",
  subtitle: "Hiragana home stretch",
  summary: "Five soft 'm' sounds. After this you can read words like みず (water), まち (town), もも (peach).",
  xp: 50,
  estimateMinutes: 9,
  unlockAfter: "ja-2-5",
  steps: [
    {
      kind: "intro",
      title: "Five new sounds — and no surprises",
      subtitle: "After this lesson you've covered 30 hiragana. Only ~15 more to go.",
      goals: ["Recognise ま, み, む, め, も", "Read words like みず (water), まち (town), もも (peach)"],
      estimateMinutes: 9,
    },
    {
      kind: "sounds",
      sounds: [
        { text: "ま", romaji: "ma", phonetic: "'mah' — open.", mnemonic: "Like the た family, but rounder at the bottom." },
        { text: "み", romaji: "mi", phonetic: "'mee' — bright.", mnemonic: "Curve + curl — like the number 3." },
        { text: "む", romaji: "mu", phonetic: "'moo' — barely-rounded.", mnemonic: "A cow saying 'moo'. Notice the little tick on top." },
        { text: "め", romaji: "me", phonetic: "'meh' — short.", mnemonic: "Looks like an eye (め = eye!)." },
        { text: "も", romaji: "mo", phonetic: "'moh' — round.", mnemonic: "Fishhook with two crossbars — 'mo' fish please." },
      ],
    },
    { kind: "character", script: "hiragana", char: "ま", romaji: "ma", phonetic: "'mah'.", mnemonic: "Cross + curl underneath.", words: [{ jp: "まち", meaning: "town, city", romaji: "machi", emoji: "🏙️", hint: "ま + ち." }] },
    { kind: "writing", char: "ま", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "み", romaji: "mi", phonetic: "'mee'.", mnemonic: "Like the number 3 with a curl.", words: [{ jp: "みず", meaning: "water", romaji: "mizu", emoji: "💧", hint: "み + ず (you'll learn dakuten in L3.4)." }] },
    { kind: "writing", char: "み", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "む", romaji: "mu", phonetic: "'moo'.", mnemonic: "A cow saying 'moo' — note the tick.", words: [{ jp: "むし", meaning: "insect, bug", romaji: "mushi", emoji: "🐞", hint: "む + し." }] },
    { kind: "writing", char: "む", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "め", romaji: "me", phonetic: "'meh'.", mnemonic: "Looks like an eye — and め means eye.", words: [{ jp: "め", meaning: "eye", romaji: "me", emoji: "👁️" }] },
    { kind: "writing", char: "め", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "も", romaji: "mo", phonetic: "'moh'. Also a particle meaning 'too / also'.", mnemonic: "Fishhook with two crossbars.", words: [{ jp: "もも", meaning: "peach", romaji: "momo", emoji: "🍑", hint: "も + も — doubled." }] },
    { kind: "writing", char: "も", script: "hiragana" },
    {
      kind: "vocabDrill",
      words: [
        { text: "みず", romaji: "mizu", meaning: "water", emoji: "💧", example: { jp: "みず を のむ。", romaji: "Mizu wo nomu.", en: "Drink water." } },
        { text: "まち", romaji: "machi", meaning: "town, city", emoji: "🏙️", example: { jp: "おおきい まち。", romaji: "Ookii machi.", en: "A big city." } },
        { text: "もも", romaji: "momo", meaning: "peach", emoji: "🍑", example: { jp: "もも は あまい。", romaji: "Momo wa amai.", en: "Peaches are sweet." } },
        { text: "め", romaji: "me", meaning: "eye", emoji: "👁️", example: { jp: "あお い め。", romaji: "Aoi me.", en: "Blue eyes." } },
        { text: "むし", romaji: "mushi", meaning: "insect", emoji: "🐞", example: { jp: "ちいさい むし。", romaji: "Chiisai mushi.", en: "A small bug." } },
        { text: "あめ", romaji: "ame", meaning: "rain / candy", emoji: "🌧️", example: { jp: "あめ が ふる。", romaji: "Ame ga furu.", en: "It's raining." } },
      ],
    },
    {
      kind: "microstory",
      setting: "Rainy morning at home",
      emoji: "🌧️",
      lines: [
        { speaker: "tanaka", jp: "あめ ね。", romaji: "Ame ne.", en: "It's raining, isn't it." },
        { speaker: "hana", jp: "ええ。 まち が しずか。", romaji: "Ee. Machi ga shizuka.", en: "Yes. The town is quiet." },
        { speaker: "tanaka", jp: "おちゃ？ みず？", romaji: "Ocha? Mizu?", en: "Tea? Water?" },
        { speaker: "hana", jp: "おちゃ、 おねがいします。", romaji: "Ocha, onegaishimasu.", en: "Tea, please." },
      ],
      comprehension: [
        { question: "What's the weather like?", options: ["Sunny", "Rainy", "Snowy", "Cloudy"], correct: 1, explanation: "あめ (ame) = rain. ふる means 'to fall' (used for rain/snow)." },
      ],
    },
    { kind: "completion", recap: ["m row complete", "Now reading sentences with adjectives like ちいさい (small) and おおきい (big)"], badge: { name: "M-row Mastered", emoji: "💧" } },
  ],
};
