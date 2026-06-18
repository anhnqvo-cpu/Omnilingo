import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 3 (Existence & Location) · Lesson 1 — あります, the verb of
 * existence for non-living things, with the location particle に and the subject
 * particle が. First position words うえ / した, anchored on the kanji 上 and 下.
 */
export const book2Chapter2Lesson01: Lesson = {
  id: "ja-2-ch2-1",
  chapterId: "ja-2-ch2",
  number: 1,
  title: "あります — there is (things)",
  titleNative: "あります",
  subtitle: "What's there",
  summary:
    "Say that an object exists somewhere with あります, mark the place with に and the thing with が, and locate things with うえ / した — your first two position kanji, 上 and 下.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch1-5",
  steps: [
    {
      kind: "intro",
      title: "There is… / There's a…",
      subtitle:
        "You can say what you do (たべます, みます). Now say what's there: a book on the desk, water in the room. The verb is あります, and two small particles do the heavy lifting — に marks the place, が marks the thing.",
      goals: [
        "Use あります to say a thing exists: ほん が あります (there's a book)",
        "Mark the place with に: へや に あります (it's in the room)",
        "Locate things with うえ / した and write the kanji 上 and 下",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro:
        "A room and the things in it. These are the nouns you'll place with あります.",
      words: [
        { text: "へや", romaji: "heya", meaning: "room", emoji: "🚪", example: { jp: "へや に つくえ が あります。", romaji: "Heya ni tsukue ga arimasu.", en: "There's a desk in the room." } },
        { text: "つくえ", romaji: "tsukue", meaning: "desk", emoji: "🪑", example: { jp: "つくえ が あります。", romaji: "Tsukue ga arimasu.", en: "There's a desk." } },
        { text: "いす", romaji: "isu", meaning: "chair", emoji: "🪑", example: { jp: "いす が あります。", romaji: "Isu ga arimasu.", en: "There's a chair." } },
        { text: "ほん", romaji: "hon", meaning: "book", emoji: "📖", example: { jp: "ほん が あります。", romaji: "Hon ga arimasu.", en: "There's a book." } },
        { text: "かばん", romaji: "kaban", meaning: "bag", emoji: "👜", example: { jp: "かばん が あります。", romaji: "Kaban ga arimasu.", en: "There's a bag." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "上",
      romaji: "ue / jō",
      phonetic: "Means “up / above / on top”. Kun-reading: ue. On-reading: jō.",
      mnemonic: "A line, with a mark sticking UP above it — something on top.",
      words: [
        { jp: "上", meaning: "top / above / on", romaji: "ue", emoji: "⬆️", hint: "On its own, 上 (うえ) is the position word “on top / above”." },
        { jp: "つくえ の 上", meaning: "on top of the desk", romaji: "tsukue no ue", emoji: "🪑", hint: "X の 上 = “on top of X”. You'll use this with あります all the time." },
      ],
    },
    { kind: "writing", char: "上", script: "kanji" },
    {
      kind: "character",
      script: "kanji",
      char: "下",
      romaji: "shita / ka",
      phonetic: "Means “down / below / under”. Kun-reading: shita. On-reading: ka / ge.",
      mnemonic: "The mirror image of 上 — the mark hangs DOWN below the line.",
      words: [
        { jp: "下", meaning: "bottom / below / under", romaji: "shita", emoji: "⬇️", hint: "On its own, 下 (した) is the position word “under / below”." },
        { jp: "いす の 下", meaning: "under the chair", romaji: "isu no shita", emoji: "🪑", hint: "X の 下 = “under X”." },
      ],
    },
    { kind: "writing", char: "下", script: "kanji" },
    {
      kind: "grammar",
      intro: "One verb, two particles. This is the whole existence pattern.",
      patterns: [
        {
          id: "arimasu",
          title: "Thing が あります",
          titleRomaji: "Thing ga arimasu",
          subtitle: "“There is (a non-living thing).”",
          pattern: [
            { text: "Thing", highlight: true },
            { text: "が", highlight: true },
            { text: "あります", highlight: false },
          ],
          patternRomaji: "Thing  ga  arimasu",
          note: "あります means “there is / there exists” — but only for non-living things: objects, plants, places. The thing that exists is marked with が (not を — nothing is being acted on, it simply exists). ほん が あります = “there is a book”. The negative is ありません: ほん が ありません = “there isn't a book”.",
          tip: "が, not は, introduces something new into the scene. Once it's known, you can switch to は to talk about it: ほん は つくえ の 上 に あります (“the book — it's on the desk”).",
          examples: [
            {
              jp: "つくえ が あります。",
              romaji: "Tsukue ga arimasu.",
              en: "There's a desk.",
              breakdown: [
                { jp: "つくえ", en: "desk" },
                { jp: "が", en: "(subject)" },
                { jp: "あります", en: "there is" },
              ],
            },
            {
              jp: "いす が ありません。",
              romaji: "Isu ga arimasen.",
              en: "There isn't a chair.",
              breakdown: [
                { jp: "いす", en: "chair" },
                { jp: "が", en: "(subject)" },
                { jp: "ありません", en: "there isn't" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say “There's a bag”?",
            options: ["かばん を あります。", "かばん が あります。", "かばん が います。"],
            optionsRomaji: ["Kaban wo arimasu.", "Kaban ga arimasu.", "Kaban ga imasu."],
            correct: 1,
            explanation: "The thing that exists takes が, and a bag is non-living, so あります. (います is for living things — next lesson.)",
          },
        },
        {
          id: "ni-location",
          title: "Place に … あります",
          titleRomaji: "Place ni … arimasu",
          subtitle: "に marks WHERE something is.",
          pattern: [
            { text: "Place", highlight: true },
            { text: "に", highlight: true },
            { text: "Thing が あります", highlight: false },
          ],
          patternRomaji: "Place  ni  Thing ga arimasu",
          note: "To say where something is, mark the place with に. へや に ほん が あります = “there is a book in the room”. You met に in Chapter 2 as a destination (うち に かえります, “go home”); here it's the same に, marking a location of existence. Use の to build a precise spot: つくえ の 上 = “on the desk”, いす の 下 = “under the chair”.",
          tip: "Two ways to say the same thing: へや に ほん が あります (new info: there's a book in the room) vs ほん は へや に あります (we know the book; where is it? in the room). Start with the が version.",
          examples: [
            {
              jp: "つくえ の 上 に ほん が あります。",
              romaji: "Tsukue no ue ni hon ga arimasu.",
              en: "There's a book on the desk.",
              breakdown: [
                { jp: "つくえ の 上", en: "on the desk" },
                { jp: "に", en: "(place)" },
                { jp: "ほん が", en: "a book" },
                { jp: "あります", en: "there is" },
              ],
            },
            {
              jp: "いす の 下 に かばん が あります。",
              romaji: "Isu no shita ni kaban ga arimasu.",
              en: "There's a bag under the chair.",
              breakdown: [
                { jp: "いす の 下", en: "under the chair" },
                { jp: "に", en: "(place)" },
                { jp: "かばん が", en: "a bag" },
                { jp: "あります", en: "there is" },
              ],
            },
          ],
          apply: {
            prompt: "Put it together: “There's a book in the room.”",
            options: ["へや に ほん が あります。", "ほん に へや が あります。", "へや を ほん が あります。"],
            optionsRomaji: ["Heya ni hon ga arimasu.", "Hon ni heya ga arimasu.", "Heya wo hon ga arimasu."],
            correct: 0,
            explanation: "Place (へや) + に, then Thing (ほん) + が + あります. に marks the place; が marks the thing that exists.",
          },
        },
      ],
      practice: [
        {
          question: "Which verb means “there is” for a non-living thing?",
          options: ["います", "あります", "たべます"],
          optionsRomaji: ["imasu", "arimasu", "tabemasu"],
          correct: 1,
          explanation: "あります is existence for objects/plants/places. います is for living things (next lesson).",
          concept: "あります",
        },
        {
          question: "Fill the blank: “There's a desk in the room.”",
          jp: "へや ＿ つくえ が あります。",
          romaji: "Heya ＿ tsukue ga arimasu.",
          options: ["を", "に", "は"],
          optionsRomaji: ["wo", "ni", "wa"],
          correct: 1,
          explanation: "に marks the place where something exists: へや に.",
          concept: "に (location)",
        },
        {
          question: "“On top of the desk” is…",
          options: ["つくえ の 下", "つくえ の 上", "つくえ の なか"],
          optionsRomaji: ["tsukue no shita", "tsukue no ue", "tsukue no naka"],
          correct: 1,
          explanation: "上 (うえ) = on top / above. 下 (した) = under. (なか = inside, coming in Lesson 3.)",
          concept: "上 / 下",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "つくえ が あります", romaji: "tsukue ga arimasu", en: "there's a desk" },
        { text: "つくえ の 上 に ほん が あります", romaji: "tsukue no ue ni hon ga arimasu", en: "there's a book on the desk", accept: ["机の上に本があります"] },
        { text: "いす の 下 に かばん が あります", romaji: "isu no shita ni kaban ga arimasu", en: "there's a bag under the chair", accept: ["椅子の下にかばんがあります"] },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's new room",
      emoji: "📦",
      intro: "Hana has just moved in. Boxes everywhere. Yui calls to ask how it's going.",
      lines: [
        { speaker: "narrator", en: "Hana's new apartment, moving day." },
        { speaker: "yui", jp: "へや に なに が あります か？", romaji: "Heya ni nani ga arimasu ka?", en: "What's in the room?" },
        { speaker: "hana", jp: "つくえ と いす が あります。", romaji: "Tsukue to isu ga arimasu.", en: "There's a desk and a chair." },
        { speaker: "hana", jp: "つくえ の 上 に ほん が あります。", romaji: "Tsukue no ue ni hon ga arimasu.", en: "There's a book on the desk." },
        { speaker: "yui", jp: "かばん は？", romaji: "Kaban wa?", en: "And your bag?" },
        { speaker: "hana", jp: "いす の 下 に あります。", romaji: "Isu no shita ni arimasu.", en: "It's under the chair." },
      ],
      comprehension: [
        {
          question: "Where is the book?",
          options: ["Under the chair", "On the desk", "In the bag", "On the floor"],
          correct: 1,
          explanation: "つくえ の 上 に ほん が あります — on top of the desk.",
        },
        {
          question: "Why does Hana use あります and not います for these things?",
          options: ["They're far away", "They're non-living objects", "They belong to her", "They're plural"],
          correct: 1,
          explanation: "あります is existence for non-living things. Desks, chairs, books, bags — all objects.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "あります — “there is”, for non-living things (negative: ありません)",
        "The thing that exists takes が; the place takes に",
        "X の 上 = on top of X · X の 下 = under X",
        "New kanji: 上 (above) and 下 (below)",
      ],
      badge: { name: "It Exists", emoji: "📦" },
    },
  ],
};
