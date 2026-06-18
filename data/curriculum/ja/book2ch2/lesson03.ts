import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 3 · Lesson 3 — the full set of position nouns (うえ・した・
 * なか・まえ・うしろ・となり・みぎ・ひだり), connected with の. New kanji 中
 * (inside / middle), recycling 上 / 下 from Lesson 1.
 */
export const book2Chapter2Lesson03: Lesson = {
  id: "ja-2-ch2-3",
  chapterId: "ja-2-ch2",
  number: 3,
  title: "Where exactly? — position words",
  titleNative: "うえ・した・なか・まえ・うしろ",
  subtitle: "Pinpoint the spot",
  summary:
    "Build precise locations with A の [position] に B が あります／います. Learn the full set of position nouns and write 中 (inside) — joining 上 and 下 from Lesson 1.",
  xp: 65,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch2-2",
  steps: [
    {
      kind: "intro",
      title: "On, under, inside, in front, behind, next to",
      subtitle:
        "“It's there” isn't precise enough. Now say exactly where: on the desk, inside the bag, in front of the station, next to Hana. The trick is one little の that glues a thing to a position.",
      goals: [
        "Use the position nouns: 上 した 中 まえ うしろ となり みぎ ひだり",
        "Build a spot with の: つくえ の 中 (inside the desk)",
        "Write 中 (inside / middle) and read it as なか",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "character",
      script: "kanji",
      char: "中",
      romaji: "naka / chū",
      phonetic: "Means “inside / middle / center”. Kun-reading: naka. On-reading: chū.",
      mnemonic: "A line drawn straight through the middle of a box — dead center.",
      words: [
        { jp: "中", meaning: "inside / middle", romaji: "naka", emoji: "📦", hint: "On its own, 中 (なか) = “inside”. X の 中 = “inside X”." },
        { jp: "かばん の 中", meaning: "inside the bag", romaji: "kaban no naka", emoji: "👜", hint: "Pair it with の just like 上 and 下." },
      ],
    },
    { kind: "writing", char: "中", script: "kanji" },
    {
      kind: "vocab",
      intro:
        "The position nouns. Each is a noun, so it links to another noun with の: A の [position] = “the [position] of A”. You already know 上, 下, 中.",
      words: [
        { text: "上", romaji: "ue", meaning: "on / above", emoji: "⬆️", example: { jp: "つくえ の 上", romaji: "tsukue no ue", en: "on the desk" } },
        { text: "下", romaji: "shita", meaning: "under / below", emoji: "⬇️", example: { jp: "いす の 下", romaji: "isu no shita", en: "under the chair" } },
        { text: "中", romaji: "naka", meaning: "inside", emoji: "📦", example: { jp: "かばん の 中", romaji: "kaban no naka", en: "inside the bag" } },
        { text: "まえ", romaji: "mae", meaning: "in front of", emoji: "🔜", example: { jp: "えき の まえ", romaji: "eki no mae", en: "in front of the station" } },
        { text: "うしろ", romaji: "ushiro", meaning: "behind", emoji: "🔙", example: { jp: "いす の うしろ", romaji: "isu no ushiro", en: "behind the chair" } },
        { text: "となり", romaji: "tonari", meaning: "next to (same kind)", emoji: "↔️", example: { jp: "ハナ の となり", romaji: "Hana no tonari", en: "next to Hana" } },
        { text: "みぎ", romaji: "migi", meaning: "right", emoji: "👉", example: { jp: "つくえ の みぎ", romaji: "tsukue no migi", en: "to the right of the desk" } },
        { text: "ひだり", romaji: "hidari", meaning: "left", emoji: "👈", example: { jp: "つくえ の ひだり", romaji: "tsukue no hidari", en: "to the left of the desk" } },
      ],
    },
    {
      kind: "grammar",
      intro: "One pattern unlocks all of them.",
      patterns: [
        {
          id: "position-no",
          title: "A の [position] に B が あります／います",
          titleRomaji: "A no [position] ni B ga arimasu / imasu",
          subtitle: "“B is [position] of A.”",
          pattern: [
            { text: "A の 位置", highlight: true },
            { text: "に", highlight: true },
            { text: "B が あります／います", highlight: false },
          ],
          patternRomaji: "A no [position]  ni  B ga arimasu / imasu",
          note: "A position noun (上, 中, まえ…) is just a noun, so you connect it to another noun with の — exactly the の you've used since Book 1 (わたし の ともだち). つくえ の 上 literally = “the desk's top”. Add に to make it a location, then the existence sentence: つくえ の 上 に ほん が あります = “there's a book on (top of) the desk”. Use あります or います depending on whether B is alive.",
          tip: "Watch the order: it's [big thing] の [position], like an address narrowing down. えき の まえ = “the station's front”. English flips it (“in front of the station”), so resist translating word-for-word.",
          examples: [
            {
              jp: "かばん の 中 に ほん が あります。",
              romaji: "Kaban no naka ni hon ga arimasu.",
              en: "There's a book inside the bag.",
              breakdown: [
                { jp: "かばん の 中", en: "inside the bag" },
                { jp: "に", en: "(place)" },
                { jp: "ほん が", en: "a book" },
                { jp: "あります", en: "there is" },
              ],
            },
            {
              jp: "いす の うしろ に ねこ が います。",
              romaji: "Isu no ushiro ni neko ga imasu.",
              en: "There's a cat behind the chair.",
              breakdown: [
                { jp: "いす の うしろ", en: "behind the chair" },
                { jp: "に", en: "(place)" },
                { jp: "ねこ が", en: "a cat" },
                { jp: "います", en: "there is (living)" },
              ],
            },
          ],
          apply: {
            prompt: "“The cat is next to Hana.” Which is right?",
            options: [
              "ねこ は ハナ の となり に います。",
              "ねこ は ハナ の となり に あります。",
              "ハナ は ねこ の となり に あります。",
            ],
            optionsRomaji: [
              "Neko wa Hana no tonari ni imasu.",
              "Neko wa Hana no tonari ni arimasu.",
              "Hana wa neko no tonari ni arimasu.",
            ],
            correct: 0,
            explanation: "A cat is alive → います. The spot is ハナ の となり (Hana's side). は marks the cat as the known topic we're locating.",
          },
        },
        {
          id: "doko-ni",
          title: "Asking where: どこ に",
          titleRomaji: "doko ni",
          subtitle: "“Where is it?”",
          pattern: [
            { text: "Thing は", highlight: true },
            { text: "どこ に", highlight: true },
            { text: "あります／います か", highlight: false },
          ],
          patternRomaji: "Thing wa  doko ni  arimasu / imasu ka",
          note: "To ask where something is, use どこ (“where”) with に: ねこ は どこ に います か = “where's the cat?”. Answer with a position: つくえ の 下 に います = “it's under the desk”. You can drop に in casual answers and just point: そこ! But the full form uses a position noun + に.",
          tip: "Match the verb in your answer to the question: a どこ に います question → answer with います; a どこ に あります question → あります.",
          examples: [
            {
              jp: "かばん は どこ に あります か？",
              romaji: "Kaban wa doko ni arimasu ka?",
              en: "Where's the bag?",
              breakdown: [
                { jp: "かばん は", en: "the bag (topic)" },
                { jp: "どこ に", en: "where" },
                { jp: "あります か", en: "is it?" },
              ],
            },
            {
              jp: "つくえ の 下 に あります。",
              romaji: "Tsukue no shita ni arimasu.",
              en: "It's under the desk.",
              breakdown: [
                { jp: "つくえ の 下 に", en: "under the desk" },
                { jp: "あります", en: "it is" },
              ],
            },
          ],
          apply: {
            prompt: "Complete the question: “Where is the cat?”",
            options: ["ねこ は どこ に います か。", "ねこ は どこ に あります か。", "ねこ は なに に います か。"],
            optionsRomaji: ["Neko wa doko ni imasu ka.", "Neko wa doko ni arimasu ka.", "Neko wa nani ni imasu ka."],
            correct: 0,
            explanation: "どこ = where; a cat is alive, so います. (なに = what, not where.)",
          },
        },
      ],
      practice: [
        {
          question: "“Inside the bag” is…",
          options: ["かばん の 上", "かばん の 中", "かばん の まえ"],
          optionsRomaji: ["kaban no ue", "kaban no naka", "kaban no mae"],
          correct: 1,
          explanation: "中 (なか) = inside. 上 = on top, まえ = in front.",
          concept: "中",
        },
        {
          question: "What links a thing to a position word? えき ＿ まえ (in front of the station)",
          options: ["を", "の", "に"],
          optionsRomaji: ["wo", "no", "ni"],
          correct: 1,
          explanation: "の connects the two nouns: えき の まえ = “the station's front”. に comes after, to mark it as a location.",
          concept: "の (position)",
        },
        {
          question: "“There's a cat behind the chair.” Fill the verb.",
          jp: "いす の うしろ に ねこ が ＿＿。",
          romaji: "Isu no ushiro ni neko ga ＿＿.",
          options: ["あります", "います", "みます"],
          optionsRomaji: ["arimasu", "imasu", "mimasu"],
          correct: 1,
          explanation: "A cat is alive → います.",
          concept: "います",
        },
      ],
    },
    {
      kind: "matching",
      intro: "Match each position noun to its meaning.",
      rounds: [
        {
          title: "Position → meaning",
          pairs: [
            { id: "m1", left: "上", right: "on / above", romaji: "ue" },
            { id: "m2", left: "中", right: "inside", romaji: "naka" },
            { id: "m3", left: "まえ", right: "in front of", romaji: "mae" },
            { id: "m4", left: "うしろ", right: "behind", romaji: "ushiro" },
            { id: "m5", left: "となり", right: "next to", romaji: "tonari" },
          ],
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "かばん の 中 に あります", romaji: "kaban no naka ni arimasu", en: "it's inside the bag", accept: ["かばんの中にあります"] },
        { text: "ねこ は つくえ の 下 に います", romaji: "neko wa tsukue no shita ni imasu", en: "the cat is under the desk", accept: ["猫は机の下にいます"] },
        { text: "ハナ の となり に います", romaji: "Hana no tonari ni imasu", en: "I'm next to Hana" },
      ],
    },
    {
      kind: "microstory",
      setting: "Looking for the cat",
      emoji: "🔎",
      intro: "Hana can't find her cat. Tanaka helps her search the room.",
      lines: [
        { speaker: "hana", jp: "ねこ は どこ に います か？", romaji: "Neko wa doko ni imasu ka?", en: "Where's the cat?" },
        { speaker: "tanaka", jp: "つくえ の 上 に いますか？", romaji: "Tsukue no ue ni imasu ka?", en: "Is it on the desk?" },
        { speaker: "hana", jp: "いいえ、いません。", romaji: "Iie, imasen.", en: "No, it's not." },
        { speaker: "tanaka", jp: "あ、いす の 下 に います！", romaji: "A, isu no shita ni imasu!", en: "Ah, it's under the chair!" },
        { speaker: "hana", jp: "かばん の 中 に ほん も あります ね。", romaji: "Kaban no naka ni hon mo arimasu ne.", en: "And there's a book in the bag too." },
      ],
      comprehension: [
        {
          question: "Where was the cat in the end?",
          options: ["On the desk", "Under the chair", "Inside the bag", "Behind the desk"],
          correct: 1,
          explanation: "いす の 下 に います — under the chair.",
        },
        {
          question: "What's inside the bag?",
          options: ["The cat", "A book", "Nothing", "A chair"],
          correct: 1,
          explanation: "かばん の 中 に ほん も あります — there's a book in the bag too (あります, because a book is an object).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "A の [position] に B が あります／います — pinpoint where B is",
        "Position nouns: 上 下 中 まえ うしろ となり みぎ ひだり",
        "の connects thing + position; に marks it as the place",
        "どこ に …か = “where is it?” · New kanji: 中 (inside)",
      ],
      badge: { name: "Pinpoint", emoji: "📍" },
    },
  ],
};
