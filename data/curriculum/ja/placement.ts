import type { PlacementTest } from "@/data/curriculum/types";

/**
 * Japanese placement test.
 *
 * Questions ramp from easiest (vowels/greetings) to hardest (numbers, polite verbs).
 * Each question is tagged with the `chapterId` whose material it verifies. The
 * scorer (see data/curriculum/index.ts → scorePlacement) walks the chapters in
 * `chapterOrder` and drops the learner at the FIRST chapter whose questions they
 * did not fully answer correctly — everything before that is marked complete.
 *
 * Two questions per chapter; a chapter is "passed" only if BOTH are correct, so
 * the test errs toward placing a learner slightly earlier (a little review) rather
 * than too far ahead (lost). Learners can retake it anytime from "Check my level".
 */
export const jaPlacement: PlacementTest = {
  language: "ja",
  chapterOrder: ["ja-ch1", "ja-ch2", "ja-ch3", "ja-ch4", "ja-ch5", "ja-ch6"],
  questions: [
    // ── Chapter 1 — vowels & greetings ──
    {
      id: "p-ch1-1",
      chapterId: "ja-ch1",
      skill: "Hiragana basics",
      prompt: "How do you read this kana?",
      jp: "え",
      options: ["a", "e", "i", "o"],
      correct: 1,
    },
    {
      id: "p-ch1-2",
      chapterId: "ja-ch1",
      skill: "Hiragana basics",
      prompt: "What does this greeting mean?",
      jp: "こんにちは",
      options: ["Goodbye", "Hello", "Thank you", "Sorry"],
      correct: 1,
    },
    // ── Chapter 2 — k/s/t/n/h kana + first particles ──
    {
      id: "p-ch2-1",
      chapterId: "ja-ch2",
      skill: "Hiragana reading",
      prompt: "Read this word.",
      jp: "すし",
      meaning: "(a food)",
      options: ["sashi", "sushi", "shisu", "susi"],
      correct: 1,
    },
    {
      id: "p-ch2-2",
      chapterId: "ja-ch2",
      skill: "Particles",
      prompt: "Which particle marks the object? ほん ＿ かう (buy a book)",
      options: ["は", "を", "の", "も"],
      optionsRomaji: ["wa", "wo / o", "no", "mo"],
      correct: 1,
    },
    // ── Chapter 3 — full hiragana (dakuten, small つ, yōon) ──
    {
      id: "p-ch3-1",
      chapterId: "ja-ch3",
      skill: "Full hiragana",
      prompt: "Read this word.",
      jp: "がっこう",
      meaning: "(school)",
      options: ["kakkou", "gakkou", "gako", "kakou"],
      correct: 1,
    },
    {
      id: "p-ch3-2",
      chapterId: "ja-ch3",
      skill: "Full hiragana",
      prompt: "Read this word (note the small ょ).",
      jp: "きょう",
      meaning: "(today)",
      options: ["kiyou", "kyou", "kyo", "kou"],
      correct: 1,
    },
    // ── Chapter 4 — katakana ──
    {
      id: "p-ch4-1",
      chapterId: "ja-ch4",
      skill: "Katakana",
      prompt: "Read this katakana loanword.",
      jp: "コーヒー",
      meaning: "(a drink)",
      options: ["kohi", "koohii", "kookii", "koohee"],
      correct: 1,
    },
    {
      id: "p-ch4-2",
      chapterId: "ja-ch4",
      skill: "Katakana",
      prompt: "Which one is the KATAKANA for 'ka'?",
      options: ["か", "カ", "ナ", "タ"],
      optionsRomaji: ["hiragana ka", "katakana ka", "na", "ta"],
      correct: 1,
    },
    // ── Chapter 5 — first sentences & polite verbs ──
    {
      id: "p-ch5-1",
      chapterId: "ja-ch5",
      skill: "Verbs",
      prompt: "What is the polite ('-masu') form of 'to eat' (たべる)?",
      options: ["たべる", "たべます", "たべた", "たべて"],
      optionsRomaji: ["taberu", "tabemasu", "tabeta", "tabete"],
      correct: 1,
    },
    {
      id: "p-ch5-2",
      chapterId: "ja-ch5",
      skill: "Sentences",
      prompt: "What does this sentence mean?",
      jp: "それ は なに ですか？",
      romaji: "Sore wa nani desu ka?",
      options: ["What is this?", "What is that?", "Where is it?", "Who is that?"],
      correct: 1,
    },
    // ── Chapter 6 — numbers, time, money ──
    {
      id: "p-ch6-1",
      chapterId: "ja-ch6",
      skill: "Numbers",
      prompt: "What number is this?",
      jp: "ひゃく（百）",
      options: ["10", "100", "1,000", "10,000"],
      correct: 1,
    },
    {
      id: "p-ch6-2",
      chapterId: "ja-ch6",
      skill: "Time",
      prompt: "How do you say '3 o'clock'?",
      options: ["さんじ", "さんぷん", "みっつ", "さんえん"],
      optionsRomaji: ["san-ji", "san-pun", "mittsu", "san-en"],
      correct: 0,
    },
  ],
};
