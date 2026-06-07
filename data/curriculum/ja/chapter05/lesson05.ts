import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 5 · Lesson 5 — Question words: なに/なん, だれ, どこ, いつ, どう, いくら.
 * Ask about anything by dropping a question word into the は…ですか frame.
 */
export const chapter05Lesson05: Lesson = {
  id: "ja-5-5",
  chapterId: "ja-ch5",
  number: 5,
  title: "Asking questions — なに, だれ, どこ…",
  titleNative: "ぎもんし",
  subtitle: "What, who, where, when, how much",
  summary: "Ask real questions: それ は なん ですか (what is that?), どこ ですか (where?), いくら ですか (how much?). Same frame, different question word.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-5-4",
  steps: [
    {
      kind: "intro",
      title: "Six words that unlock every question",
      subtitle: "Keep the は…ですか frame you know and slot in a question word where the unknown is.",
      goals: [
        "Use なに/なん, だれ, どこ, いつ, どう, いくら",
        "Ask それ は なん ですか / どこ ですか",
        "Know when なに becomes なん",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "The core question words. They sit right where the answer would go.",
      words: [
        { text: "なに / なん", romaji: "nani / nan", meaning: "what", emoji: "❓", example: { jp: "これ は なん ですか。", romaji: "Kore wa nan desu ka.", en: "What is this?" } },
        { text: "だれ", romaji: "dare", meaning: "who", emoji: "🧑", example: { jp: "あの ひと は だれ ですか。", romaji: "Ano hito wa dare desu ka.", en: "Who is that person?" } },
        { text: "どこ", romaji: "doko", meaning: "where", emoji: "📍", example: { jp: "えき は どこ ですか。", romaji: "Eki wa doko desu ka.", en: "Where is the station?" } },
        { text: "いつ", romaji: "itsu", meaning: "when", emoji: "📅", example: { jp: "テスト は いつ ですか。", romaji: "Tesuto wa itsu desu ka.", en: "When is the test?" } },
        { text: "どう", romaji: "dou", meaning: "how", emoji: "🤔", example: { jp: "にほんご は どう ですか。", romaji: "Nihongo wa dou desu ka.", en: "How's Japanese (going)?" } },
        { text: "いくら", romaji: "ikura", meaning: "how much (price)", emoji: "💰", example: { jp: "これ は いくら ですか。", romaji: "Kore wa ikura desu ka.", en: "How much is this?" } },
      ],
    },
    {
      kind: "grammar",
      intro: "One frame, any question.",
      patterns: [
        {
          id: "question-word-frame",
          title: "Topic は [question word] ですか",
          titleRomaji: "Topic wa [Q-word] desu ka",
          subtitle: "Put the question word where the answer goes.",
          pattern: [
            { text: "Topic は", highlight: false },
            { text: "なに/だれ/どこ…", highlight: true },
            { text: "ですか", highlight: false },
          ],
          patternRomaji: "Topic wa  [Q-word]  desu ka",
          note: "To ask about something, keep the は…ですか frame and put a question word in the unknown slot. 'それ は ___ です' → 'それ は なん ですか' = 'What is that?' Answer in the same slot: 'コーヒー です.' Note なに becomes なん right before です (and で/の): なん です.",
          tip: "Japanese keeps normal word order in questions — no flipping. Just swap in the question word and end with か.",
          examples: [
            {
              jp: "あの ひと は だれ ですか。",
              romaji: "Ano hito wa dare desu ka.",
              en: "Who is that person?",
              breakdown: [
                { jp: "あの ひと は", en: "that person" },
                { jp: "だれ", en: "who" },
                { jp: "ですか。", en: "is?" },
              ],
            },
            {
              jp: "トイレ は どこ ですか。",
              romaji: "Toire wa doko desu ka.",
              en: "Where is the toilet?",
              breakdown: [
                { jp: "トイレ は", en: "the toilet" },
                { jp: "どこ", en: "where" },
                { jp: "ですか。", en: "is?" },
              ],
            },
          ],
          apply: {
            prompt: "How do you ask 'How much is this?'",
            options: ["これ は どこ ですか。", "これ は いくら ですか。", "これ は だれ ですか。"],
            optionsRomaji: ["Kore wa doko desu ka.", "Kore wa ikura desu ka.", "Kore wa dare desu ka."],
            correct: 1,
            explanation: "いくら asks the price. どこ = where, だれ = who.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana is a little lost",
      emoji: "🗺️",
      intro: "New to the area, Hana asks Tanaka for help.",
      lines: [
        { speaker: "hana", jp: "すみません。えき は どこ ですか。", romaji: "Sumimasen. Eki wa doko desu ka.", en: "Excuse me. Where's the station?" },
        { speaker: "tanaka", jp: "あそこ です。", romaji: "Asoko desu.", en: "Over there." },
        { speaker: "hana", jp: "ありがとう！ あれ は なん ですか。", romaji: "Arigatou! Are wa nan desu ka.", en: "Thanks! What's that over there?" },
        { speaker: "tanaka", jp: "ゆうめい な カフェ です。", romaji: "Yuumei na kafe desu.", en: "A famous café." },
        { speaker: "hana", jp: "コーヒー は いくら ですか。", romaji: "Koohii wa ikura desu ka.", en: "How much is the coffee?" },
        { speaker: "tanaka", jp: "やすい です！ いきましょう。", romaji: "Yasui desu! Ikimashou.", en: "Cheap! Let's go." },
      ],
      comprehension: [
        {
          question: "What was Hana looking for first?",
          options: ["A café", "The station (えき)", "A toilet", "Her friend"],
          correct: 1,
          explanation: "えき は どこ ですか — 'Where is the station?'",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["なに/なん, だれ, どこ, いつ, どう, いくら", "The は…[question word]…ですか frame", "なに → なん before です"],
      badge: { name: "Question Master", emoji: "❓" },
    },
  ],
};
