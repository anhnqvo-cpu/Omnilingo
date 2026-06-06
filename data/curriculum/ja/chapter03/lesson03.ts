import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 3 · Lesson 3 — The w row + ん.
 * Tiny lesson: わ, を (only used as a particle), and ん (the standalone 'n').
 */
export const chapter03Lesson03: Lesson = {
  id: "ja-3-3",
  chapterId: "ja-ch3",
  number: 3,
  title: "The w row + ん",
  titleNative: "わ・を・ん",
  subtitle: "Three special kana",
  summary: "わ, を (always a particle, read 'wo'), and ん (the only standalone consonant). All three are special.",
  xp: 40,
  estimateMinutes: 7,
  unlockAfter: "ja-3-2",
  steps: [
    {
      kind: "intro",
      title: "Three special kana",
      subtitle: "を only ever appears as a grammar particle. ん is the only consonant that stands alone.",
      goals: [
        "Recognise わ, を, ん",
        "Know that を is exclusively a particle marking direct objects",
        "Understand that ん only appears at the end of a syllable",
      ],
      estimateMinutes: 7,
    },
    {
      kind: "sounds",
      sounds: [
        { text: "わ", romaji: "wa", phonetic: "'wah' — open.", mnemonic: "Like ね, but with a hook instead of a tail." },
        { text: "を", romaji: "wo (read 'o')", phonetic: "Identical to お in sound. Always a particle.", mnemonic: "Looks like お's brother. Only used to mark direct objects: みず を のむ = drink water." },
        { text: "ん", romaji: "n", phonetic: "A nasal 'n' or 'm' sound — appears at syllable end.", mnemonic: "Single loop — like the English 'n' with no vowel attached." },
      ],
    },
    { kind: "character", script: "hiragana", char: "わ", romaji: "wa", phonetic: "'wah'.", mnemonic: "Hook + loop.", words: [{ jp: "わたし", meaning: "I / me", romaji: "watashi", emoji: "👤", hint: "わ + た + し." }] },
    { kind: "writing", char: "わ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "を", romaji: "wo (always 'o' in speech)", phonetic: "Sounds like お. Only used as a particle.", mnemonic: "A fancy お — exists just to mark grammar.", words: [{ jp: "ほん を よむ", meaning: "to read a book", romaji: "hon wo yomu", emoji: "📖", hint: "ほん (book) + を (object marker) + よむ (to read)." }] },
    { kind: "writing", char: "を", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ん", romaji: "n", phonetic: "Nasal 'n' at the end of a syllable.", mnemonic: "Single curl.", words: [{ jp: "ほん", meaning: "book", romaji: "hon", emoji: "📖", hint: "ほ + ん." }] },
    { kind: "writing", char: "ん", script: "hiragana" },
    {
      kind: "vocabDrill",
      intro: "Five common words using わ, を, ん.",
      words: [
        { text: "わたし", romaji: "watashi", meaning: "I, me", emoji: "👤", example: { jp: "わたし は はな です。", romaji: "Watashi wa Hana desu.", en: "I am Hana." } },
        { text: "ほん", romaji: "hon", meaning: "book", emoji: "📖", example: { jp: "ほん を よむ。", romaji: "Hon wo yomu.", en: "Read a book." } },
        { text: "おんがく", romaji: "ongaku", meaning: "music", emoji: "🎶", example: { jp: "おんがく を きく。", romaji: "Ongaku wo kiku.", en: "Listen to music." } },
        { text: "にほん", romaji: "nihon", meaning: "Japan", emoji: "🇯🇵", example: { jp: "にほん の ひと。", romaji: "Nihon no hito.", en: "A Japanese person." } },
        { text: "せんせい", romaji: "sensei", meaning: "teacher", emoji: "👨‍🏫", example: { jp: "せんせい の ほん。", romaji: "Sensei no hon.", en: "The teacher's book." } },
      ],
    },
    {
      kind: "quiz",
      intro: "Quick check on the three special kana.",
      questions: [
        {
          id: "q1",
          question: "How is を read in conversation?",
          options: ["wo", "o (same as お)", "n", "ha"],
          correct: 1,
          explanation: "を is romanized 'wo' but pronounced 'o' (same as お). It only ever appears as a grammar particle.",
        },
        {
          id: "q2",
          question: "What does ん do in a syllable?",
          options: [
            "Starts a syllable",
            "Ends a syllable as a nasal 'n'",
            "Adds a long vowel",
            "Doubles the previous consonant",
          ],
          correct: 1,
          explanation: "ん only appears at the end of a syllable. It's the only consonant in Japanese that stands alone.",
        },
        {
          id: "q3",
          question: "Which sentence is correct: 'I drink water'?",
          options: ["わたし みず のむ。", "わたし は みず を のむ。", "みず は わたし を のむ。", "わたし の みず のむ。"],
          optionsRomaji: ["Watashi mizu nomu.", "Watashi wa mizu wo nomu.", "Mizu wa watashi wo nomu.", "Watashi no mizu nomu."],
          correct: 1,
          explanation: "わたし は (I, topic) みず を (water, object) のむ (drink). を marks the thing being drunk.",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "First class",
      emoji: "🎓",
      lines: [
        { speaker: "tanaka", jp: "わたし は たなか です。", romaji: "Watashi wa Tanaka desu.", en: "I am Tanaka." },
        { speaker: "hana", jp: "はじめまして。 わたし は はな。", romaji: "Hajimemashite. Watashi wa Hana.", en: "Nice to meet you. I'm Hana." },
        { speaker: "tanaka", jp: "ほん を ひらいて ください。", romaji: "Hon wo hiraite kudasai.", en: "Please open the book." },
        { speaker: "hana", jp: "はい！", romaji: "Hai!", en: "Yes!" },
      ],
      comprehension: [
        { question: "What did the teacher ask Hana to do?", options: ["Stand up", "Open the book", "Speak Japanese", "Wait outside"], correct: 1, explanation: "ほん を ひらいて ください = please open the book." },
      ],
    },
    { kind: "completion", recap: ["わ, を, ん — three special cases", "Now reading complete sentences with subject-object-verb structure"], badge: { name: "Special Kana Cleared", emoji: "🇯🇵" } },
  ],
};
