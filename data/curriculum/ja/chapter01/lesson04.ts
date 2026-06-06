import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 1 · Lesson 4 — Greetings.
 * Phonological consolidation through high-frequency phrases. Heavy on pronunciation
 * because greetings live in your mouth, not on the page.
 */
export const chapter01Lesson04: Lesson = {
  id: "ja-1-4",
  chapterId: "ja-ch1",
  number: 4,
  title: "Greetings",
  titleNative: "あいさつ",
  subtitle: "Real-life phrases",
  summary: "Five greetings you'll use every day. We'll cover the kana later — for now, hear and say.",
  xp: 50,
  estimateMinutes: 7,
  unlockAfter: "ja-1-3",
  steps: [
    {
      kind: "intro",
      title: "Phrases first, scripts later",
      subtitle: "Some greetings use kana you don't know yet. That's fine — start with the sound.",
      goals: [
        "Recognise five everyday greetings",
        "Pronounce each one out loud",
        "Pick the right greeting for the situation",
      ],
      estimateMinutes: 7,
    },
    {
      kind: "vocabDrill",
      intro: "Five greetings, one at a time. Listen carefully — these are slow on purpose so you can really hear them.",
      words: [
        {
          text: "こんにちは",
          romaji: "Konnichiwa",
          meaning: "Hello / Good afternoon",
          emoji: "👋",
          example: { jp: "こんにちは、田中 さん。", romaji: "Konnichiwa, Tanaka-san.", en: "Hello, Tanaka." },
        },
        {
          text: "おはよう",
          romaji: "Ohayou",
          meaning: "Good morning (casual)",
          emoji: "☀️",
          example: { jp: "おはよう、 はな！", romaji: "Ohayou, Hana!", en: "Good morning, Hana!" },
        },
        {
          text: "おはようございます",
          romaji: "Ohayou gozaimasu",
          meaning: "Good morning (polite)",
          emoji: "🌅",
          example: { jp: "先生、おはようございます。", romaji: "Sensei, ohayou gozaimasu.", en: "Good morning, teacher." },
        },
        {
          text: "ありがとう",
          romaji: "Arigatou",
          meaning: "Thanks (casual)",
          emoji: "🙏",
          example: { jp: "ありがとう！", romaji: "Arigatou!", en: "Thanks!" },
        },
        {
          text: "さようなら",
          romaji: "Sayounara",
          meaning: "Goodbye (formal)",
          emoji: "👋",
          example: { jp: "さようなら、また あした。", romaji: "Sayounara, mata ashita.", en: "Goodbye, see you tomorrow." },
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "こんにちは", romaji: "Konnichiwa", en: "Hello — note は is read 'wa' here." },
        { text: "おはよう", romaji: "Ohayou", en: "Good morning, casual." },
        { text: "ありがとう", romaji: "Arigatou", en: "Thanks — keep the 'r' soft, like a tap." },
        { text: "さようなら", romaji: "Sayounara", en: "Goodbye — for partings of some length." },
      ],
    },
    {
      kind: "quiz",
      intro: "Pick the right greeting for each moment.",
      questions: [
        {
          id: "q1",
          question: "You walk into class at 8 am and see your teacher. What do you say?",
          options: ["おはよう", "おはようございます", "さようなら", "ありがとう"],
          optionsRomaji: ["Ohayou", "Ohayou gozaimasu", "Sayounara", "Arigatou"],
          correct: 1,
          explanation: "Teachers and strangers get the polite ございます (gozaimasu) form. おはよう (ohayou) is for friends.",
        },
        {
          id: "q2",
          question: "Your friend hands you a coffee. What do you say?",
          options: ["こんにちは", "さようなら", "ありがとう", "おはよう"],
          optionsRomaji: ["Konnichiwa", "Sayounara", "Arigatou", "Ohayou"],
          correct: 2,
          explanation: "ありがとう (arigatou) = thanks. Polite: ありがとうございます (arigatou gozaimasu) — but casual is fine here.",
        },
        {
          id: "q3",
          question: "It's 2 pm. You bump into Tanaka-san. What do you say?",
          options: ["おはよう", "こんにちは", "さようなら", "ありがとう"],
          optionsRomaji: ["Ohayou", "Konnichiwa", "Sayounara", "Arigatou"],
          correct: 1,
          explanation: "こんにちは (konnichiwa) works from late morning until ~6 pm. Note は reads 'wa' here.",
        },
        {
          id: "q4",
          question: "You're leaving your homestay for a week. What do you say?",
          options: ["こんにちは", "おはよう", "さようなら", "ありがとう"],
          optionsRomaji: ["Konnichiwa", "Ohayou", "Sayounara", "Arigatou"],
          correct: 2,
          explanation: "さようなら (sayounara) is for longer goodbyes — not 'see you in five minutes'.",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's first morning at the homestay",
      emoji: "🍳",
      intro: "It's 7 am. Hana comes downstairs and meets Tanaka-san in the kitchen.",
      lines: [
        { speaker: "tanaka", jp: "はな、おはよう。", romaji: "Hana, ohayou.", en: "Hana, good morning." },
        { speaker: "hana", jp: "おはようございます。", romaji: "Ohayou gozaimasu.", en: "Good morning. (polite)" },
        { speaker: "tanaka", jp: "コーヒー？", romaji: "Koohii?", en: "Coffee?" },
        { speaker: "hana", jp: "ありがとう！", romaji: "Arigatou!", en: "Thanks!" },
        { speaker: "narrator", en: "Hana sips. Tanaka-san smiles. The day has officially started." },
      ],
      comprehension: [
        {
          question: "Why did Hana use the polite おはようございます while Tanaka-san used casual おはよう?",
          options: [
            "Tanaka-san is younger",
            "Hana is being respectful as the guest / younger person",
            "It was after noon",
            "They speak different dialects",
          ],
          correct: 1,
          explanation: "When in doubt, learners go polite. Tanaka-san is older and the host, so casual is natural for her.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["Five everyday greetings", "Pronunciation drilled", "Knew which form fits which moment"],
      badge: { name: "Greeter", emoji: "👋" },
    },
  ],
};
