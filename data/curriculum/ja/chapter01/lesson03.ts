import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 1 · Lesson 3
 * Vocab consolidation — words built from vowels only.
 * Pulls together everything from L1+L2 and adds a few new words.
 */
export const chapter01Lesson03: Lesson = {
  id: "ja-1-3",
  chapterId: "ja-ch1",
  number: 3,
  title: "First words",
  titleNative: "ことば",
  subtitle: "Read and recall",
  summary: "Read real Japanese words using just the five vowels. Build retrieval muscle with matching and a quiz.",
  xp: 50,
  estimateMinutes: 7,
  unlockAfter: "ja-1-2",
  steps: [
    {
      kind: "intro",
      title: "Real words, just from five characters",
      subtitle: "You already have everything you need.",
      goals: [
        "Recognise six common vowel-only words",
        "Match each one to its meaning at sight",
        "Pass a 5-question reading quiz",
      ],
      estimateMinutes: 7,
    },
    {
      kind: "vocabDrill",
      intro: "Six words built only from あ, い, う, え, お. We'll go one at a time — listen, then prove you remember.",
      words: [
        {
          text: "いい",
          romaji: "ii",
          meaning: "good",
          emoji: "👍",
          example: { jp: "いい いえ。", romaji: "Ii ie.", en: "A nice house." },
        },
        {
          text: "あお",
          romaji: "ao",
          meaning: "blue",
          emoji: "💙",
          example: { jp: "あお の いえ。", romaji: "Ao no ie.", en: "A blue house." },
        },
        {
          text: "いえ",
          romaji: "ie",
          meaning: "house, home",
          emoji: "🏠",
          example: { jp: "わたし の いえ。", romaji: "Watashi no ie.", en: "My house." },
        },
        {
          text: "うえ",
          romaji: "ue",
          meaning: "above, up",
          emoji: "⬆️",
          example: { jp: "つくえ の うえ。", romaji: "Tsukue no ue.", en: "On top of the desk." },
        },
        {
          text: "あう",
          romaji: "au",
          meaning: "to meet",
          emoji: "🤝",
          example: { jp: "ともだち に あう。", romaji: "Tomodachi ni au.", en: "Meet a friend." },
        },
        {
          text: "うお",
          romaji: "uo",
          meaning: "fish",
          emoji: "🐟",
          example: { jp: "おおきい うお。", romaji: "Ookii uo.", en: "A big fish." },
        },
      ],
    },
    {
      kind: "matching",
      intro: "Match each word to its meaning. All six are from the cards you just learned.",
      rounds: [
        {
          title: "Round 1 — Things",
          pairs: [
            { id: "ie", left: "いえ", romaji: "ie", right: "house" },
            { id: "uo", left: "うお", romaji: "uo", right: "fish" },
            { id: "ao", left: "あお", romaji: "ao", right: "blue" },
            { id: "ue", left: "うえ", romaji: "ue", right: "above" },
          ],
        },
        {
          title: "Round 2 — All six together",
          pairs: [
            { id: "ii", left: "いい", romaji: "ii", right: "good" },
            { id: "au", left: "あう", romaji: "au", right: "to meet" },
            { id: "uo", left: "うお", romaji: "uo", right: "fish" },
            { id: "ao", left: "あお", romaji: "ao", right: "blue" },
          ],
        },
      ],
    },
    {
      kind: "quiz",
      intro: "Quick reading check — five questions, mostly recognition.",
      questions: [
        {
          id: "q1",
          question: "Which word means 'house'?",
          jp: undefined,
          options: ["うえ", "いえ", "あお", "おい"],
          optionsRomaji: ["ue", "ie", "ao", "oi"],
          correct: 1,
          explanation: "いえ (ie) = house. The 'i' sound is high and bright; the 'e' is short.",
          hint: "Starts with the い sound.",
        },
        {
          id: "q2",
          question: "How is あお read?",
          jp: "あお",
          options: ["ai", "ao", "oi", "ou"],
          correct: 1,
          explanation: "あ + お → ao. It also happens to mean 'blue'.",
        },
        {
          id: "q3",
          question: "Which means 'good'?",
          options: ["うお", "あう", "いい", "うえ"],
          optionsRomaji: ["uo", "au", "ii", "ue"],
          correct: 2,
          explanation: "いい (ii) = good. Two い's in a row — say the sound twice.",
        },
        {
          id: "q4",
          question: "What does うえ mean?",
          jp: "うえ",
          options: ["below", "above / up", "behind", "inside"],
          correct: 1,
          explanation: "うえ (ue) = above / up. The opposite is した (we'll meet that later).",
        },
        {
          id: "q5",
          question: "Which word means 'to meet'?",
          options: ["いう", "あう", "おい", "うお"],
          optionsRomaji: ["iu", "au", "oi", "uo"],
          correct: 1,
          explanation: "あう (au) = to meet. Practical alongside 'to say' (いう) which sounds similar.",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "At the fish counter",
      emoji: "🐟",
      intro: "Hana goes shopping with Tanaka-san. They visit the fish counter.",
      lines: [
        { speaker: "tanaka", jp: "うお！", romaji: "Uo!", en: "Fish!" },
        { speaker: "hana", jp: "おおきい うお！", romaji: "Ookii uo!", en: "A big fish!" },
        { speaker: "tanaka", jp: "いい？", romaji: "Ii?", en: "Good (one)?" },
        { speaker: "hana", jp: "いい！", romaji: "Ii!", en: "Yes — good!" },
        { speaker: "narrator", en: "Hana doesn't know how to say 'expensive' yet. She'll find out tonight." },
      ],
      comprehension: [
        {
          question: "What did Tanaka-san ask?",
          options: ["'Where is the fish?'", "'Is this one good?'", "'How much?'", "'Do you eat fish?'"],
          correct: 1,
          explanation: "いい？ with rising intonation = 'Good?' — meaning, is this one OK with you?",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["Read six vowel-only words", "Won two matching rounds", "Scored on your first reading quiz"],
      badge: { name: "First Reader", emoji: "📖" },
    },
  ],
};
