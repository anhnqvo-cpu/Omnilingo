import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 1 · Lesson 5 — Your first sentences.
 * Introduces X は Y です, the question particle か, and the connecting の.
 * Chapter capstone.
 */
export const chapter01Lesson05: Lesson = {
  id: "ja-1-5",
  chapterId: "ja-ch1",
  number: 5,
  title: "Your first sentences",
  titleNative: "はじめての ぶん",
  subtitle: "は・です・か・の",
  summary: "Three patterns that get you saying and asking real things. The grammar engine of Japanese starts here.",
  xp: 80,
  estimateMinutes: 12,
  unlockAfter: "ja-1-4",
  steps: [
    {
      kind: "intro",
      title: "Your first real sentences",
      subtitle: "Three patterns, one self-introduction.",
      goals: [
        "Build sentences with X は Y です",
        "Turn statements into questions with か",
        "Connect nouns with の",
        "Read a short dialogue using all three",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "grammar",
      intro: "Three patterns. We'll do each, then mix them.",
      patterns: [
        {
          id: "wa-desu",
          title: "X は Y です",
          titleRomaji: "X wa Y desu",
          subtitle: "The most basic sentence pattern.",
          pattern: [
            { text: "X", highlight: true },
            { text: "は", highlight: false },
            { text: "Y", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "X  wa  Y  desu",
          note: "は marks the topic — what the sentence is *about*. です is a polite ending meaning 'is / am / are'. Put a noun on each side, glue with は and です, and you have a sentence.",
          tip: "は is normally read 'ha', but as a particle it's always read 'wa'. Same character, special rule.",
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
              jp: "これ は ほん です。",
              romaji: "Kore wa hon desu.",
              en: "This is a book.",
              breakdown: [
                { jp: "これ", en: "this" },
                { jp: "は", en: "(topic)" },
                { jp: "ほん", en: "book" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "Which sentence correctly says 'She is a student'?",
            options: ["かのじょ が がくせい です。", "かのじょ は がくせい です。", "かのじょ の がくせい です。"],
            optionsRomaji: ["Kanojo ga gakusei desu.", "Kanojo wa gakusei desu.", "Kanojo no gakusei desu."],
            correct: 1,
            explanation: "は (wa) marks the topic (what we're talking about). です (desu) means 'is'. が and の belong to other patterns.",
          },
        },
        {
          id: "ka-question",
          title: "～ですか？",
          titleRomaji: "~ desu ka?",
          subtitle: "Turn any statement into a question.",
          pattern: [
            { text: "[Statement]", highlight: false },
            { text: "か？", highlight: true },
          ],
          patternRomaji: "[Statement] ka?",
          note: "Add か at the end of any です sentence and it becomes a question. No reordering, no inversion. Japanese makes this beautifully easy.",
          tip: "Casual speech sometimes drops か and uses rising intonation. か is the polite, unambiguous version.",
          examples: [
            {
              jp: "これ は ほん です か？",
              romaji: "Kore wa hon desu ka?",
              en: "Is this a book?",
              breakdown: [
                { jp: "これ は ほん です", en: "This is a book" },
                { jp: "か？", en: "← question!" },
              ],
            },
            {
              jp: "はな さん です か？",
              romaji: "Hana-san desu ka?",
              en: "Are you Hana?",
              breakdown: [
                { jp: "はな さん です", en: "(You) are Hana" },
                { jp: "か？", en: "?" },
              ],
            },
          ],
          apply: {
            prompt: "How would you ask 'Is this Japanese (language)?'",
            options: ["これ は にほんご ですか？", "ですか これ は にほんご？", "これ か にほんご は です？"],
            optionsRomaji: ["Kore wa nihongo desu ka?", "Desu ka kore wa nihongo?", "Kore ka nihongo wa desu?"],
            correct: 0,
            explanation: "Word order doesn't change. Just add か (ka) to the end of the statement.",
          },
        },
        {
          id: "no-noun",
          title: "Noun の Noun",
          titleRomaji: "Noun no Noun",
          subtitle: "Connect two nouns with の.",
          pattern: [
            { text: "Noun A", highlight: true },
            { text: "の", highlight: false },
            { text: "Noun B", highlight: true },
          ],
          patternRomaji: "Noun A  no  Noun B",
          note: "の links two nouns. Closest English equivalent is apostrophe-s: 'A's B' or 'B of A'. The owner / source comes first.",
          tip: "の covers belonging, origin, and category. 'わたし の ほん' = my book. 'にほん の くるま' = Japanese car. One tiny particle does a lot.",
          examples: [
            {
              jp: "わたし の いえ",
              romaji: "Watashi no ie",
              en: "My house",
              breakdown: [
                { jp: "わたし", en: "I" },
                { jp: "の", en: "'s" },
                { jp: "いえ", en: "house" },
              ],
            },
            {
              jp: "はな さん の ほん",
              romaji: "Hana-san no hon",
              en: "Hana's book",
              breakdown: [
                { jp: "はな さん", en: "Hana" },
                { jp: "の", en: "'s" },
                { jp: "ほん", en: "book" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "What does this sentence mean?",
          jp: "わたし は はな です。",
          romaji: "Watashi wa Hana desu.",
          options: ["I am Hana.", "Hana is mine.", "This is Hana.", "Are you Hana?"],
          correct: 0,
          explanation: "わたし (I) + は (topic) + はな (Hana) + です (am) → I am Hana.",
          concept: "X は Y です",
        },
        {
          question: "How do you turn 'これ は ほん です' into a question?",
          options: ["これ の ほん ですか？", "ほん は これ ですか？", "これ は ほん ですか？", "これ は ほん か？"],
          optionsRomaji: ["Kore no hon desu ka?", "Hon wa kore desu ka?", "Kore wa hon desu ka?", "Kore wa hon ka?"],
          correct: 2,
          explanation: "Just add か (ka) to the end: これ は ほん です → これ は ほん ですか？",
          concept: "～ですか？",
        },
        {
          question: "Which means 'my house'?",
          options: ["わたし は いえ", "わたし の いえ", "わたし を いえ", "いえ は わたし"],
          optionsRomaji: ["Watashi wa ie", "Watashi no ie", "Watashi wo ie", "Ie wa watashi"],
          correct: 1,
          explanation: "わたし (watashi) + の (no) + いえ (ie) = my house. の binds the two nouns, owner first.",
          concept: "Noun の Noun",
        },
        {
          question: "Which sentence correctly says 'He is a teacher'?",
          options: ["かれ の せんせい です。", "かれ は せんせい ですか？", "せんせい の かれ です。", "かれ は せんせい です。"],
          optionsRomaji: ["Kare no sensei desu.", "Kare wa sensei desu ka?", "Sensei no kare desu.", "Kare wa sensei desu."],
          correct: 3,
          explanation: "かれ (he) + は + せんせい (teacher) + です. Note option 2 ends in か so it's a question.",
          concept: "X は Y です",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana introduces herself at school",
      emoji: "🎓",
      intro: "It's Hana's first day of class. The teacher (せんせい) asks her to introduce herself.",
      lines: [
        { speaker: "tanaka", jp: "はじめまして。", romaji: "Hajimemashite.", en: "Nice to meet you." },
        { speaker: "hana", jp: "はじめまして。 わたし は はな です。", romaji: "Hajimemashite. Watashi wa Hana desu.", en: "Nice to meet you. I'm Hana." },
        { speaker: "tanaka", jp: "はな さん は がくせい ですか？", romaji: "Hana-san wa gakusei desu ka?", en: "Are you a student, Hana?" },
        { speaker: "hana", jp: "はい、 わたし は がくせい です。", romaji: "Hai, watashi wa gakusei desu.", en: "Yes, I'm a student." },
        { speaker: "tanaka", jp: "これ は わたし の ほん です。", romaji: "Kore wa watashi no hon desu.", en: "This is my book." },
        { speaker: "hana", jp: "ありがとうございます！", romaji: "Arigatou gozaimasu!", en: "Thank you very much!" },
      ],
      comprehension: [
        {
          question: "What did the teacher ask Hana?",
          options: [
            "If she's hungry",
            "If she's a student",
            "Where she's from",
            "What her name is",
          ],
          correct: 1,
          explanation: "がくせい = student. The sentence ends in か, making it a yes/no question.",
        },
        {
          question: "What does これ は わたし の ほん です mean?",
          options: [
            "I am a book.",
            "Is this my book?",
            "This is my book.",
            "My book is here.",
          ],
          correct: 2,
          explanation: "これ (this) は (topic) わたし の ほん (my book) です (is). All three patterns in one sentence.",
        },
      ],
    },
    {
      kind: "matching",
      intro: "One last review — match each Japanese sentence to its English meaning.",
      rounds: [
        {
          title: "Sentence match",
          pairs: [
            { id: "iam", left: "わたし は はな です。", romaji: "Watashi wa Hana desu", right: "I am Hana." },
            { id: "isit", left: "これ は ほん ですか？", romaji: "Kore wa hon desu ka?", right: "Is this a book?" },
            { id: "myhome", left: "わたし の いえ", romaji: "Watashi no ie", right: "My house" },
            { id: "imastudent", left: "わたし は がくせい です。", romaji: "Watashi wa gakusei desu", right: "I am a student." },
          ],
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Built sentences with は・です",
        "Asked questions with か",
        "Connected nouns with の",
        "Read a real self-introduction",
      ],
      badge: { name: "Chapter 1 Complete", emoji: "🏆" },
    },
  ],
};
