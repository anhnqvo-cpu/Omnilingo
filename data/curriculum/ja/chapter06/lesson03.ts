import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 6 · Lesson 3 — Counters: the all-purpose 〜つ and people 〜人.
 */
export const chapter06Lesson03: Lesson = {
  id: "ja-6-3",
  chapterId: "ja-ch6",
  number: 3,
  title: "Counting things & people",
  titleNative: "じょすうし",
  subtitle: "〜つ and 〜人",
  summary: "Japanese counts with 'counter' words. Use the all-purpose 〜つ for things and 〜人 for people — enough to order and count in daily life.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-6-2",
  steps: [
    {
      kind: "intro",
      title: "You can't just say the number",
      subtitle: "To count things you add a 'counter'. The safe, all-purpose one is 〜つ (ひとつ, ふたつ…). People use 〜人 (ひとり, ふたり…). Master these two and you can get by anywhere.",
      goals: [
        "Count things 1–10 with 〜つ",
        "Count people with 〜人 (ひとり, ふたり, さんにん…)",
        "Order amounts: コーヒー を ふたつ",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocab",
      intro: "The all-purpose counter 〜つ, and people 〜人. The first two of each are irregular.",
      words: [
        { text: "ひとつ（一つ）", romaji: "hitotsu", meaning: "1 thing", emoji: "1️⃣" },
        { text: "ふたつ（二つ）", romaji: "futatsu", meaning: "2 things", emoji: "2️⃣" },
        { text: "みっつ（三つ）", romaji: "mittsu", meaning: "3 things", emoji: "3️⃣" },
        { text: "よっつ（四つ）", romaji: "yottsu", meaning: "4 things", emoji: "4️⃣" },
        { text: "ひとり（一人）", romaji: "hitori", meaning: "1 person", emoji: "🧍" },
        { text: "ふたり（二人）", romaji: "futari", meaning: "2 people", emoji: "👥" },
        { text: "さんにん（三人）", romaji: "san-nin", meaning: "3 people", emoji: "👨‍👩‍👦" },
      ],
    },
    {
      kind: "grammar",
      intro: "Two counters cover most of daily life.",
      patterns: [
        {
          id: "counter-tsu",
          title: "Counting things: 〜つ",
          titleRomaji: "~tsu",
          subtitle: "The all-purpose counter (1–10).",
          pattern: [
            { text: "ひと/ふた/みっ…", highlight: true },
            { text: "つ", highlight: false },
          ],
          patternRomaji: "hitotsu, futatsu, mittsu … too",
          note: "When you don't know the specific counter for an object, 〜つ always works for 1–10: ひとつ(1), ふたつ(2), みっつ(3), よっつ(4), いつつ(5), むっつ(6), ななつ(7), やっつ(8), ここのつ(9), とお(10). To order an amount, put it after the item: 'コーヒー を ふたつ ください' = 'two coffees, please.'",
          tip: "とお (10) drops the つ. From 11 up, people switch to the plain number + a specific counter.",
          examples: [
            {
              jp: "コーヒー を ふたつ ください。",
              romaji: "Koohii wo futatsu kudasai.",
              en: "Two coffees, please.",
              breakdown: [
                { jp: "コーヒー を", en: "coffee" },
                { jp: "ふたつ", en: "two (things)" },
                { jp: "ください。", en: "please" },
              ],
            },
            {
              jp: "ケーキ を みっつ。",
              romaji: "Keeki wo mittsu.",
              en: "Three cakes.",
              breakdown: [
                { jp: "ケーキ を", en: "cake" },
                { jp: "みっつ", en: "three (things)" },
              ],
            },
          ],
          apply: {
            prompt: "How do you order 'two cakes'?",
            options: ["ケーキ を に ください。", "ケーキ を ふたつ ください。", "ケーキ を ふたり ください。"],
            optionsRomaji: ["Keeki wo ni kudasai.", "Keeki wo futatsu kudasai.", "Keeki wo futari kudasai."],
            correct: 1,
            explanation: "Things use 〜つ: ふたつ. ふたり is for people, and a bare に needs a counter.",
          },
        },
        {
          id: "counter-nin",
          title: "Counting people: 〜人",
          titleRomaji: "~nin",
          subtitle: "ひとり, ふたり, then 〜にん.",
          pattern: [
            { text: "ひとり / ふたり", highlight: true },
            { text: "/ [number] にん", highlight: false },
          ],
          patternRomaji: "hitori, futari, san-nin, yo-nin …",
          note: "People have their own counter, 〜人. The first two are irregular: ひとり (1 person), ふたり (2 people). From three up it's just the number + にん: さんにん (3), よにん (4 — note よ, not よん), ごにん (5)…",
          tip: "Restaurants ask なんにん ですか ('how many people?'). Answer ふたり です, etc.",
          examples: [
            {
              jp: "ふたり です。",
              romaji: "Futari desu.",
              en: "Two people. (e.g. a table for two)",
              breakdown: [
                { jp: "ふたり", en: "two people" },
                { jp: "です。", en: "(it) is" },
              ],
            },
            {
              jp: "がくせい が さんにん います。",
              romaji: "Gakusei ga san-nin imasu.",
              en: "There are three students.",
              breakdown: [
                { jp: "がくせい が", en: "students" },
                { jp: "さんにん", en: "three people" },
                { jp: "います。", en: "there are" },
              ],
            },
          ],
          apply: {
            prompt: "The restaurant asks なんにん ですか. You're a group of two. Answer:",
            options: ["ふたつ です。", "ふたり です。", "に です。"],
            optionsRomaji: ["Futatsu desu.", "Futari desu.", "Ni desu."],
            correct: 1,
            explanation: "People use 〜人: ふたり. ふたつ counts things.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "A table for the group",
      emoji: "🍽️",
      intro: "The four friends arrive at the café.",
      lines: [
        { speaker: "tanaka", jp: "なんにん ですか。", romaji: "Nan-nin desu ka.", en: "How many people?" },
        { speaker: "hana", jp: "よにん です。", romaji: "Yo-nin desu.", en: "Four." },
        { speaker: "tanaka", jp: "ごちゅうもん は？", romaji: "Gochuumon wa?", en: "Your order?" },
        { speaker: "kenji", jp: "コーヒー を ふたつ、ココア を ふたつ。", romaji: "Koohii wo futatsu, kokoa wo futatsu.", en: "Two coffees, two cocoas." },
        { speaker: "tanaka", jp: "はい！ よっつ ですね。", romaji: "Hai! Yottsu desu ne.", en: "Got it — four (drinks)!" },
      ],
      comprehension: [
        {
          question: "How many people are in the group?",
          options: ["Two (ふたり)", "Three (さんにん)", "Four (よにん)", "Five (ごにん)"],
          correct: 2,
          explanation: "よにん です — four people.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["〜つ — count anything 1–10", "〜人 — count people (ひとり, ふたり, 〜にん)", "Ordering amounts: コーヒー を ふたつ"],
      badge: { name: "Counter Pro", emoji: "🧮" },
    },
  ],
};
