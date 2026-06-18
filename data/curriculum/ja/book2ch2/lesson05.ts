import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 3 · Lesson 5 — capstone. No new grammar or kanji: it weaves
 * the whole existence/location system (あります／います, position nouns, どこ,
 * particles に／が／の) into one neighborhood walk with the cast, plus a mixed review.
 */
export const book2Chapter2Lesson05: Lesson = {
  id: "ja-2-ch2-5",
  chapterId: "ja-2-ch2",
  number: 5,
  title: "Hana's neighborhood",
  titleNative: "まち",
  subtitle: "Chapter 3 review",
  summary:
    "Put it all together: あります vs います, position words, and どこ — across one afternoon exploring Hana's new neighborhood with Tanaka, Kenji, and Yui.",
  xp: 75,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch2-4",
  steps: [
    {
      kind: "intro",
      title: "Everything, in one neighborhood",
      subtitle:
        "No new grammar — this is where it clicks. Match the pieces, run a mixed review, then read a whole afternoon of finding things and people around town.",
      goals: [
        "Choose あります vs います correctly every time",
        "Use position words and どこ in real exchanges",
        "Read a full neighborhood walk in Japanese",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "matching",
      intro: "Two quick rounds: the verbs, then the position words.",
      rounds: [
        {
          title: "Which existence verb?",
          pairs: [
            { id: "e1", left: "ねこ", right: "います (living)", romaji: "neko" },
            { id: "e2", left: "つくえ", right: "あります (object)", romaji: "tsukue" },
            { id: "e3", left: "ともだち", right: "います (living)", romaji: "tomodachi" },
            { id: "e4", left: "ほん", right: "あります (object)", romaji: "hon" },
          ],
        },
        {
          title: "Position → meaning",
          pairs: [
            { id: "p1", left: "上", right: "on / above", romaji: "ue" },
            { id: "p2", left: "下", right: "under / below", romaji: "shita" },
            { id: "p3", left: "中", right: "inside", romaji: "naka" },
            { id: "p4", left: "となり", right: "next to", romaji: "tonari" },
          ],
        },
      ],
    },
    {
      kind: "grammar",
      intro: "One picture of the whole system, then a mixed check.",
      patterns: [
        {
          id: "existence-recap",
          title: "The existence sentence, end to end",
          titleRomaji: "Place ni Thing ga arimasu / imasu",
          subtitle: "Place + に, thing + が, verb by aliveness.",
          pattern: [
            { text: "Place に", highlight: true },
            { text: "Thing が", highlight: true },
            { text: "あります／います", highlight: false },
          ],
          patternRomaji: "Place ni  Thing ga  arimasu / imasu",
          note: "Three moving parts. (1) The place takes に — and you can make it precise with a position noun + の: つくえ の 上 に. (2) The thing that exists takes が. (3) The verb is あります for objects, います for living things. To ask, swap in どこ: X は どこ ですか. That's the entire chapter in one line.",
          tip: "Reorder freely by topic: 〜に 〜が あります introduces new info; 〜は 〜に あります locates something already known. Both are correct — pick by what's already on the table.",
          examples: [
            {
              jp: "へや の 中 に ねこ が います。",
              romaji: "Heya no naka ni neko ga imasu.",
              en: "There's a cat in the room.",
              breakdown: [
                { jp: "へや の 中 に", en: "in the room" },
                { jp: "ねこ が", en: "a cat" },
                { jp: "います", en: "there is (living)" },
              ],
            },
            {
              jp: "コンビニ は えき の まえ に あります。",
              romaji: "Konbini wa eki no mae ni arimasu.",
              en: "The convenience store is in front of the station.",
              breakdown: [
                { jp: "コンビニ は", en: "the store (topic)" },
                { jp: "えき の まえ に", en: "in front of the station" },
                { jp: "あります", en: "it is" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "Fill the verb: “There's a teacher in the room.”",
          jp: "へや に せんせい が ＿＿。",
          romaji: "Heya ni sensei ga ＿＿.",
          options: ["あります", "います", "です"],
          optionsRomaji: ["arimasu", "imasu", "desu"],
          correct: 1,
          explanation: "A teacher is a person → います.",
          concept: "あります／います",
        },
        {
          question: "Fill the particle: “There's a bag on the chair.”",
          jp: "いす の 上 ＿ かばん が あります。",
          romaji: "Isu no ue ＿ kaban ga arimasu.",
          options: ["を", "に", "は"],
          optionsRomaji: ["wo", "ni", "wa"],
          correct: 1,
          explanation: "に marks the place where something exists: いす の 上 に.",
          concept: "に (location)",
        },
        {
          question: "“Where's the bank?”",
          options: ["ぎんこう は どこ ですか。", "ぎんこう は どれ ですか。", "ぎんこう を どこ あります。"],
          optionsRomaji: ["Ginkou wa doko desu ka.", "Ginkou wa dore desu ka.", "Ginkou wo doko arimasu."],
          correct: 0,
          explanation: "X は どこ ですか. どれ asks “which one”, not “where”.",
          concept: "どこ ですか",
        },
        {
          question: "Connect them: “in front of the station”.",
          options: ["えき を まえ", "えき の まえ", "まえ の えき"],
          optionsRomaji: ["eki wo mae", "eki no mae", "mae no eki"],
          correct: 1,
          explanation: "の links thing + position: えき の まえ = “the station's front”.",
          concept: "の (position)",
        },
        {
          question: "Which means “There's a desk and a cat”? (one object, one living)",
          options: [
            "つくえ が います、ねこ が あります。",
            "つくえ が あります、ねこ が います。",
            "つくえ も ねこ も います。",
          ],
          optionsRomaji: [
            "Tsukue ga imasu, neko ga arimasu.",
            "Tsukue ga arimasu, neko ga imasu.",
            "Tsukue mo neko mo imasu.",
          ],
          correct: 1,
          explanation: "Desk (object) → あります; cat (living) → います. Each noun picks its own verb.",
          concept: "あります／います",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "An afternoon around town",
      emoji: "🏘️",
      intro:
        "Hana shows Kenji around her new neighborhood. Everything you learned this chapter, in one walk.",
      lines: [
        { speaker: "narrator", en: "Hana and Kenji step out of her apartment." },
        { speaker: "kenji", jp: "えき は どこ ですか？", romaji: "Eki wa doko desu ka?", en: "Where's the station?" },
        { speaker: "hana", jp: "あそこ です。ぎんこう の となり に あります。", romaji: "Asoko desu. Ginkou no tonari ni arimasu.", en: "Over there. It's next to the bank." },
        { speaker: "kenji", jp: "コンビニ も ありますね。", romaji: "Konbini mo arimasu ne.", en: "There's a convenience store too." },
        { speaker: "hana", jp: "はい。えき の まえ に あります。", romaji: "Hai. Eki no mae ni arimasu.", en: "Yes. It's in front of the station." },
        { speaker: "narrator", en: "A cat trots past their feet." },
        { speaker: "kenji", jp: "あ、ねこ が います！", romaji: "A, neko ga imasu!", en: "Oh, there's a cat!" },
        { speaker: "hana", jp: "ともだち の ねこ です。コンビニ の 中 に います。", romaji: "Tomodachi no neko desu. Konbini no naka ni imasu.", en: "It's my friend's cat. It lives in the convenience store." },
        { speaker: "kenji", jp: "じゃあ、コーヒー を のみます か？", romaji: "Jaa, koohii wo nomimasu ka?", en: "So — shall we get a coffee?" },
        { speaker: "hana", jp: "いいですね。いきます！", romaji: "Ii desu ne. Ikimasu!", en: "Sounds good. Let's go!" },
      ],
      comprehension: [
        {
          question: "Where is the station?",
          options: ["In front of the bank", "Next to the bank", "Inside the convenience store", "Behind the apartment"],
          correct: 1,
          explanation: "ぎんこう の となり に あります — next to the bank.",
        },
        {
          question: "Where does the cat stay?",
          options: ["At Hana's apartment", "In front of the station", "Inside the convenience store", "At the bank"],
          correct: 2,
          explanation: "コンビニ の 中 に います — inside the convenience store (います, because it's a living cat).",
        },
        {
          question: "Which two existence verbs appear in this story?",
          options: ["あります and います", "たべます and のみます", "です and ます", "いきます and みます"],
          correct: 0,
          explanation: "Objects/places use あります (えき, コンビニ); the cat uses います. That's the whole chapter.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "あります for objects/places · います for people & animals",
        "Place takes に, the thing takes が; locate precisely with の + position",
        "Position words: 上 下 中 まえ うしろ となり みぎ ひだり",
        "Ask どこ ですか; point with ここ／そこ／あそこ · Kanji: 上 下 人 中",
      ],
      badge: { name: "Around Town", emoji: "🏘️" },
    },
  ],
};
