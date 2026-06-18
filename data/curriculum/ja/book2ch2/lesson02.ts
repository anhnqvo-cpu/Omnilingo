import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 3 · Lesson 2 — います, the verb of existence for living
 * things (people, animals), contrasted with あります. New kanji 人 (person),
 * recycling the 〜人 counter and numbers from Book 1 Ch6.
 */
export const book2Chapter2Lesson02: Lesson = {
  id: "ja-2-ch2-2",
  chapterId: "ja-2-ch2",
  number: 2,
  title: "います — there is (people & animals)",
  titleNative: "います",
  subtitle: "Who's there",
  summary:
    "Say that a person or animal is somewhere with います, learn the one rule that decides います vs あります, and write the kanji 人 (person) — the heart of 日本人 and 一人.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch2-1",
  steps: [
    {
      kind: "intro",
      title: "Living things get their own verb",
      subtitle:
        "Objects exist with あります. People and animals — anything that moves on its own — exist with います. Same particles (に for place, が for the thing), one new verb, and one kanji you'll see everywhere: 人.",
      goals: [
        "Use います for people and animals: ねこ が います (there's a cat)",
        "Choose います vs あります by one rule: does it move on its own?",
        "Write 人 (person) and read it in 日本人 and 一人",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "People and animals — the nouns that take います.",
      words: [
        { text: "ねこ", romaji: "neko", meaning: "cat", emoji: "🐱", example: { jp: "ねこ が います。", romaji: "Neko ga imasu.", en: "There's a cat." } },
        { text: "いぬ", romaji: "inu", meaning: "dog", emoji: "🐶", example: { jp: "いぬ が います。", romaji: "Inu ga imasu.", en: "There's a dog." } },
        { text: "ともだち", romaji: "tomodachi", meaning: "friend", emoji: "🧑‍🤝‍🧑", example: { jp: "ともだち が います。", romaji: "Tomodachi ga imasu.", en: "I have a friend. / A friend is here." } },
        { text: "こども", romaji: "kodomo", meaning: "child", emoji: "🧒", example: { jp: "こども が います。", romaji: "Kodomo ga imasu.", en: "There's a child." } },
        { text: "せんせい", romaji: "sensei", meaning: "teacher", emoji: "👩‍🏫", example: { jp: "せんせい が います。", romaji: "Sensei ga imasu.", en: "The teacher is here." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "人",
      romaji: "hito / jin / nin",
      phonetic: "Means “person / people”. Kun-reading: hito. On-readings: jin, nin.",
      mnemonic: "Two legs walking — a person seen from the side.",
      words: [
        { jp: "人", meaning: "person", romaji: "hito", emoji: "🧍", hint: "On its own, 人 (ひと) means “person”." },
        { jp: "日本人", meaning: "Japanese person", romaji: "nihonjin", emoji: "🗾", hint: "Here 人 uses the on-reading じん. 日本 = Japan." },
        { jp: "一人", meaning: "one person / alone", romaji: "hitori", emoji: "🧍", hint: "With the 〜人 counter you met in Book 1: 一人 (ひとり), 二人 (ふたり)." },
      ],
    },
    { kind: "writing", char: "人", script: "kanji" },
    {
      kind: "grammar",
      intro: "Same existence pattern as last lesson — just swap the verb when the thing is alive.",
      patterns: [
        {
          id: "imasu",
          title: "Living thing が います",
          titleRomaji: "Living thing ga imasu",
          subtitle: "“There is (a person or animal).”",
          pattern: [
            { text: "Living thing", highlight: true },
            { text: "が", highlight: true },
            { text: "います", highlight: false },
          ],
          patternRomaji: "Living thing  ga  imasu",
          note: "います is existence for living, self-moving things: people and animals. Everything else is the same as あります — the thing takes が, the place takes に. ねこ が います = “there's a cat”. へや に ともだち が います = “there's a friend in the room”. The negative is いません: だれ も いません = “there's no one here”.",
          tip: "The dividing line is “does it move on its own?” People and animals → います. Plants, robots, cars, and your phone → あります (they don't move themselves). A dead fish at the market → あります. A fish in a tank → います.",
          examples: [
            {
              jp: "ねこ が います。",
              romaji: "Neko ga imasu.",
              en: "There's a cat.",
              breakdown: [
                { jp: "ねこ", en: "cat" },
                { jp: "が", en: "(subject)" },
                { jp: "います", en: "there is" },
              ],
            },
            {
              jp: "へや に ともだち が います。",
              romaji: "Heya ni tomodachi ga imasu.",
              en: "There's a friend in the room.",
              breakdown: [
                { jp: "へや に", en: "in the room" },
                { jp: "ともだち が", en: "a friend" },
                { jp: "います", en: "there is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say “There's a dog”?",
            options: ["いぬ が あります。", "いぬ が います。", "いぬ を います。"],
            optionsRomaji: ["Inu ga arimasu.", "Inu ga imasu.", "Inu wo imasu."],
            correct: 1,
            explanation: "A dog is a living thing, so います. The thing that exists always takes が.",
          },
        },
        {
          id: "arimasu-vs-imasu",
          title: "あります or います?",
          titleRomaji: "arimasu or imasu?",
          subtitle: "Pick the verb by whether it's alive.",
          pattern: [
            { text: "Object", highlight: false },
            { text: "→ あります", highlight: true },
            { text: " · Living →", highlight: false },
            { text: "います", highlight: true },
          ],
          patternRomaji: "Object → arimasu  ·  Living → imasu",
          note: "This is the only choice that's new here. Non-living thing (book, desk, station, tree) → あります. Living thing (person, cat, dog, teacher) → います. The particles never change — always が for the thing, に for the place. English uses one phrase (“there is”) for both; Japanese splits it.",
          tip: "Counting people uses the 〜人 counter from Book 1: 一人 (ひとり, one person), 二人 (ふたり, two people), 三人 (さんにん). へや に 二人 います = “there are two people in the room”.",
          examples: [
            {
              jp: "つくえ が あります。",
              romaji: "Tsukue ga arimasu.",
              en: "There's a desk. (object)",
              breakdown: [
                { jp: "つくえ が", en: "a desk" },
                { jp: "あります", en: "there is (non-living)" },
              ],
            },
            {
              jp: "せんせい が います。",
              romaji: "Sensei ga imasu.",
              en: "The teacher is here. (person)",
              breakdown: [
                { jp: "せんせい が", en: "the teacher" },
                { jp: "います", en: "there is (living)" },
              ],
            },
          ],
          apply: {
            prompt: "“There's a book and a cat in the room.” Which is right?",
            options: [
              "へや に ほん が います、ねこ が あります。",
              "へや に ほん が あります、ねこ が います。",
              "へや に ほん も ねこ も あります。",
            ],
            optionsRomaji: [
              "Heya ni hon ga imasu, neko ga arimasu.",
              "Heya ni hon ga arimasu, neko ga imasu.",
              "Heya ni hon mo neko mo arimasu.",
            ],
            correct: 1,
            explanation: "Book (object) → あります; cat (living) → います. The verb follows the noun's own nature.",
          },
        },
      ],
      practice: [
        {
          question: "Which verb for “There's a cat”?",
          jp: "ねこ が ＿＿。",
          romaji: "Neko ga ＿＿.",
          options: ["あります", "います", "たべます"],
          optionsRomaji: ["arimasu", "imasu", "tabemasu"],
          correct: 1,
          explanation: "A cat is alive → います.",
          concept: "います",
        },
        {
          question: "Which verb for “There's a desk”?",
          jp: "つくえ が ＿＿。",
          romaji: "Tsukue ga ＿＿.",
          options: ["あります", "います", "のみます"],
          optionsRomaji: ["arimasu", "imasu", "nomimasu"],
          correct: 0,
          explanation: "A desk is non-living → あります.",
          concept: "あります",
        },
        {
          question: "How do you read 一人 (one person / alone)?",
          options: ["いちにん", "ひとり", "ひとびと"],
          optionsRomaji: ["ichinin", "hitori", "hitobito"],
          correct: 1,
          explanation: "一人 is an irregular reading: ひとり. Two people is 二人 (ふたり).",
          concept: "人 / counter",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "ねこ が います", romaji: "neko ga imasu", en: "there's a cat" },
        { text: "へや に ともだち が います", romaji: "heya ni tomodachi ga imasu", en: "there's a friend in the room" },
        { text: "つくえ が あります、ねこ が います", romaji: "tsukue ga arimasu, neko ga imasu", en: "there's a desk, and there's a cat" },
      ],
    },
    {
      kind: "microstory",
      setting: "The café, after class",
      emoji: "🐱",
      intro: "Kenji walks into the café and looks around for the others.",
      lines: [
        { speaker: "narrator", en: "Kenji arrives at the café." },
        { speaker: "kenji", jp: "ともだち が いますか？", romaji: "Tomodachi ga imasu ka?", en: "Are my friends here?" },
        { speaker: "hana", jp: "はい。たなかさん が います。", romaji: "Hai. Tanaka-san ga imasu.", en: "Yes. Tanaka's here." },
        { speaker: "kenji", jp: "ねこ も いますね。", romaji: "Neko mo imasu ne.", en: "There's a cat too, huh." },
        { speaker: "hana", jp: "テーブル の 下 に います。", romaji: "Teeburu no shita ni imasu.", en: "It's under the table." },
        { speaker: "kenji", jp: "コーヒー を のみます。", romaji: "Koohii wo nomimasu.", en: "I'll have a coffee." },
      ],
      comprehension: [
        {
          question: "Where is the cat?",
          options: ["On the table", "Under the table", "On a chair", "Outside"],
          correct: 1,
          explanation: "テーブル の 下 に います — under the table. (And います, because a cat is alive.)",
        },
        {
          question: "Why is it ねこ も います (not あります)?",
          options: ["も means 'also'", "A cat is a living thing", "It's plural", "It's polite"],
          correct: 1,
          explanation: "Living things take います. も just adds “also / too”: a cat is here too.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "います — “there is”, for living things: people and animals (negative: いません)",
        "The rule: moves on its own → います; otherwise → あります",
        "Particles don't change: が for the thing, に for the place",
        "New kanji: 人 (person) — 日本人, 一人 (ひとり)",
      ],
      badge: { name: "Who's There", emoji: "🐱" },
    },
  ],
};
