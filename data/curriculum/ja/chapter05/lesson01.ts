import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 5 · Lesson 1 — Self-introduction: わたし は ___ です.
 * No new kana — you can read everything now. This is where you start speaking.
 */
export const chapter05Lesson01: Lesson = {
  id: "ja-5-1",
  chapterId: "ja-ch5",
  number: 1,
  title: "Introducing yourself",
  titleNative: "じこしょうかい",
  subtitle: "First real sentences",
  summary: "Put it together: わたし は ___ です. Say your name, that you're a student, where you're from — and greet someone properly.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-4-5",
  steps: [
    {
      kind: "intro",
      title: "You can read everything now — let's talk",
      subtitle: "Kana is done. From here on it's about building sentences. Start with the one everyone learns first: introducing yourself.",
      goals: [
        "Say わたし は [name] です (I am ___)",
        "State your job/nationality: がくせい です, にほんじん です",
        "Greet properly: はじめまして / よろしく",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "The building blocks of an introduction. You can read all of these.",
      words: [
        { text: "わたし", romaji: "watashi", meaning: "I, me", emoji: "🙋", example: { jp: "わたし は はな です。", romaji: "Watashi wa Hana desu.", en: "I am Hana." } },
        { text: "なまえ", romaji: "namae", meaning: "name", emoji: "📛", example: { jp: "なまえ は？", romaji: "Namae wa?", en: "Your name?" } },
        { text: "がくせい", romaji: "gakusei", meaning: "student", emoji: "🎓", example: { jp: "わたし は がくせい です。", romaji: "Watashi wa gakusei desu.", en: "I am a student." } },
        { text: "せんせい", romaji: "sensei", meaning: "teacher", emoji: "👩‍🏫", example: { jp: "たなか せんせい。", romaji: "Tanaka sensei.", en: "Teacher Tanaka." } },
        { text: "にほんじん", romaji: "nihonjin", meaning: "Japanese (person)", emoji: "🇯🇵", example: { jp: "わたし は にほんじん です。", romaji: "Watashi wa nihonjin desu.", en: "I'm Japanese." } },
        { text: "はじめまして", romaji: "hajimemashite", meaning: "nice to meet you", emoji: "🤝", example: { jp: "はじめまして。", romaji: "Hajimemashite.", en: "Nice to meet you." } },
      ],
    },
    {
      kind: "grammar",
      intro: "One pattern does almost all the work of an introduction.",
      patterns: [
        {
          id: "x-wa-y-desu",
          title: "X は Y です",
          titleRomaji: "X wa Y desu",
          subtitle: "X is Y — the core sentence.",
          pattern: [
            { text: "X (topic)", highlight: true },
            { text: "は", highlight: false },
            { text: "Y", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "X  wa  Y  desu",
          note: "は marks the topic — what you're talking about — and です states what it is. 'わたし は がくせい です' = 'As for me, (I'm a) student.' The は is written with the kana は but read 'wa' when it's the topic particle. Drop わたし once it's obvious you mean yourself: 'がくせい です' is a complete sentence.",
          tip: "は as a particle is read 'wa', not 'ha'. Everywhere else は is still 'ha'.",
          examples: [
            {
              jp: "わたし は はな です。",
              romaji: "Watashi wa Hana desu.",
              en: "I am Hana.",
              breakdown: [
                { jp: "わたし", en: "I" },
                { jp: "は", en: "(topic)" },
                { jp: "はな", en: "Hana" },
                { jp: "です。", en: "am" },
              ],
            },
            {
              jp: "たなか さん は せんせい です。",
              romaji: "Tanaka-san wa sensei desu.",
              en: "Tanaka is a teacher.",
              breakdown: [
                { jp: "たなか さん", en: "Tanaka (Mr/Ms)" },
                { jp: "は", en: "(topic)" },
                { jp: "せんせい", en: "teacher" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 'I am a student.'?",
            options: ["わたし を がくせい です。", "わたし は がくせい です。", "わたし は がくせい か。"],
            optionsRomaji: ["Watashi wo gakusei desu.", "Watashi wa gakusei desu.", "Watashi wa gakusei ka."],
            correct: 1,
            explanation: "は marks you as the topic; です states what you are. を marks objects; か makes a question.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's first Japanese class",
      emoji: "🎓",
      intro: "Hana stands up to introduce herself.",
      lines: [
        { speaker: "narrator", en: "First day of class. Everyone introduces themselves." },
        { speaker: "hana", jp: "はじめまして。わたし は はな です。", romaji: "Hajimemashite. Watashi wa Hana desu.", en: "Nice to meet you. I'm Hana." },
        { speaker: "hana", jp: "がくせい です。よろしく。", romaji: "Gakusei desu. Yoroshiku.", en: "I'm a student. Nice to meet you." },
        { speaker: "tanaka", jp: "はじめまして。たなか です。", romaji: "Hajimemashite. Tanaka desu.", en: "Nice to meet you. I'm Tanaka." },
        { speaker: "tanaka", jp: "せんせい です。", romaji: "Sensei desu.", en: "I'm the teacher." },
        { speaker: "hana", jp: "あ！ よろしく おねがいします！", romaji: "A! Yoroshiku onegaishimasu!", en: "Oh! It's a pleasure!" },
      ],
      comprehension: [
        {
          question: "Who is Tanaka?",
          options: ["A student (がくせい)", "The teacher (せんせい)", "Hana's friend", "A waiter"],
          correct: 1,
          explanation: "たなか です。せんせい です — 'I'm Tanaka. I'm the teacher.'",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["X は Y です — the core sentence", "Say your name, job, nationality", "はじめまして / よろしく greetings"],
      badge: { name: "Introduced", emoji: "🙋" },
    },
  ],
};
