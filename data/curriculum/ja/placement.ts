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
  chapterOrder: ["ja-ch1", "ja-ch2", "ja-ch3", "ja-ch4", "ja-ch5", "ja-ch6", "ja-2-typing", "ja-2-ch1", "ja-2-ch2", "ja-2-ch3"],
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
    // ── Chapter 5 — first sentences (self-intro, の, adjectives, question words) ──
    {
      id: "p-ch5-1",
      chapterId: "ja-ch5",
      skill: "Sentences",
      prompt: "How do you say 'my friend'?",
      options: ["ともだち の わたし", "わたし の ともだち", "わたし は ともだち", "わたし を ともだち"],
      optionsRomaji: ["Tomodachi no watashi", "Watashi no tomodachi", "Watashi wa tomodachi", "Watashi wo tomodachi"],
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
    // ── Book 2 · Chapter 1 — Typing (romaji → kana IME) ──
    {
      id: "p-2-typing-1",
      chapterId: "ja-2-typing",
      skill: "Typing",
      prompt: "On a Japanese keyboard, which romaji produces し?",
      options: ["si", "shi", "chi", "su"],
      correct: 1,
    },
    {
      id: "p-2-typing-2",
      chapterId: "ja-2-typing",
      skill: "Typing",
      prompt: "To type the small っ in きって, you type the consonant…",
      jp: "きって",
      meaning: "(stamp)",
      options: ["once: kite", "doubled: kitte", "with x: kixtsute", "not at all"],
      correct: 1,
    },
    // ── Book 2 · Chapter 2 — Verbs (ます-form) + を / に / で ──
    {
      id: "p-2-ch1-1",
      chapterId: "ja-2-ch1",
      skill: "Verbs & particles",
      prompt: "Which particle? コーヒー ＿ のみます (I drink coffee)",
      options: ["は", "を", "に", "で"],
      optionsRomaji: ["wa", "wo / o", "ni", "de"],
      correct: 1,
    },
    {
      id: "p-2-ch1-2",
      chapterId: "ja-2-ch1",
      skill: "Verbs & particles",
      prompt: "Which particle marks the destination? がっこう ＿ いきます (I go to school)",
      options: ["を", "に", "の", "は"],
      optionsRomaji: ["wo", "ni", "no", "wa"],
      correct: 1,
    },
    // ── Book 2 · Chapter 3 — Existence & location ──
    {
      id: "p-2-ch2-1",
      chapterId: "ja-2-ch2",
      skill: "Existence",
      prompt: "Which verb? ねこ が ＿＿ (there's a cat)",
      options: ["あります", "います", "たべます", "です"],
      optionsRomaji: ["arimasu", "imasu", "tabemasu", "desu"],
      correct: 1,
    },
    {
      id: "p-2-ch2-2",
      chapterId: "ja-2-ch2",
      skill: "Location",
      prompt: "What does this mean? つくえ の 上 に ほん が あります。",
      jp: "つくえ の 上 に ほん が あります。",
      romaji: "Tsukue no ue ni hon ga arimasu.",
      options: ["There's a book under the desk", "There's a book on the desk", "There's a desk on the book", "The book is a desk"],
      correct: 1,
    },
    // ── Book 2 · Chapter 4 — Adjectives (connect, past, adverbs, compare) ──
    {
      id: "p-2-ch3-1",
      chapterId: "ja-2-ch3",
      skill: "Adjectives",
      prompt: "Compare: planes are faster than trains. ひこうき は でんしゃ ＿ はやい です。",
      jp: "ひこうき は でんしゃ ＿ はやい です。",
      romaji: "Hikouki wa densha ＿ hayai desu.",
      options: ["より", "のほうが", "いちばん", "から"],
      optionsRomaji: ["yori", "no hou ga", "ichiban", "kara"],
      correct: 0,
    },
    {
      id: "p-2-ch3-2",
      chapterId: "ja-2-ch3",
      skill: "Adjectives",
      prompt: "Past tense: the festival was fun. おまつり は ＿＿。",
      jp: "おまつり は ＿＿。",
      romaji: "Omatsuri wa ＿＿.",
      options: ["たのしい でした", "たのしかった です", "たのしくない です", "たのしな でした"],
      optionsRomaji: ["tanoshii deshita", "tanoshikatta desu", "tanoshikunai desu", "tanoshi na deshita"],
      correct: 1,
    },
  ],
};
