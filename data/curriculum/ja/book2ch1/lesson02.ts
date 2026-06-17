import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 1 · Lesson 2 — motion verbs (いきます・きます・かえります) and
 * the particle に, which marks where you're going and when. First kanji: 行.
 */
export const book2Chapter1Lesson02: Lesson = {
  id: "ja-2-ch1-2",
  chapterId: "ja-2-ch1",
  number: 2,
  title: "Going places — に",
  titleNative: "いきます・きます",
  subtitle: "Destinations and times",
  summary:
    "Three motion verbs — go, come, return — and the particle に, which marks a destination (where to) and a time (when). Write the kanji 行.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch1-1",
  steps: [
    {
      kind: "intro",
      title: "Where are you going?",
      subtitle:
        "Movement verbs take a different particle from を. に marks the destination — the place you're heading — and the same に marks a clock time.",
      goals: [
        "Use いきます (go), きます (come), かえります (return home)",
        "Mark a destination with に: がっこう に いきます (I go to school)",
        "Mark a time with に: しちじ に いきます (I go at 7:00)",
        "Write the kanji 行 (go)",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "Three verbs of movement and a few places to go.",
      words: [
        { text: "いきます", romaji: "ikimasu", meaning: "go", emoji: "🚶", example: { jp: "がっこう に いきます。", romaji: "Gakkou ni ikimasu.", en: "I go to school." } },
        { text: "きます", romaji: "kimasu", meaning: "come", emoji: "🙋", example: { jp: "うち に きます。", romaji: "Uchi ni kimasu.", en: "(Someone) comes to my house." } },
        { text: "かえります", romaji: "kaerimasu", meaning: "return / go home", emoji: "🏠", example: { jp: "うち に かえります。", romaji: "Uchi ni kaerimasu.", en: "I go home." } },
        { text: "がっこう", romaji: "gakkou", meaning: "school", emoji: "🏫", example: { jp: "がっこう に いきます。", romaji: "Gakkou ni ikimasu.", en: "I go to school." } },
        { text: "えき", romaji: "eki", meaning: "station", emoji: "🚉", example: { jp: "えき に いきます。", romaji: "Eki ni ikimasu.", en: "I go to the station." } },
        { text: "うち", romaji: "uchi", meaning: "home / house", emoji: "🏠", example: { jp: "うち に かえります。", romaji: "Uchi ni kaerimasu.", en: "I go home." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "行",
      romaji: "i / kou",
      phonetic: "Means “go”. Kun-reading: i(ku). On-reading: kou.",
      mnemonic: "A crossroads seen from above — where you decide which way to go.",
      words: [
        { jp: "行きます", meaning: "go (polite)", romaji: "ikimasu", emoji: "🚶", hint: "行 carries “go”; きます is in kana." },
        { jp: "旅行", meaning: "a trip", romaji: "ryokou", emoji: "✈️", hint: "Here 行 uses its on-reading, kou." },
      ],
    },
    { kind: "writing", char: "行", script: "kanji" },
    {
      kind: "grammar",
      intro: "に does two jobs here: it points at a destination, and it pins down a time.",
      patterns: [
        {
          id: "ni-destination",
          title: "Place に Verb-of-motion",
          titleRomaji: "Place ni (go/come/return)",
          subtitle: "に marks where you're heading.",
          pattern: [
            { text: "Place", highlight: true },
            { text: "に", highlight: true },
            { text: "いきます", highlight: false },
          ],
          patternRomaji: "Place  ni  ikimasu",
          note: "With a motion verb (いきます, きます, かえります), the destination takes に. がっこう に いきます = “I go to school”. に points an arrow at the place. Notice this is a different particle from を — を is for things you act on (たべます, のみます), に is for places you move toward.",
          tip: "Don't use を for destinations. “go school” is がっこう に いきます, never がっこう を いきます.",
          examples: [
            {
              jp: "えき に いきます。",
              romaji: "Eki ni ikimasu.",
              en: "I go to the station.",
              breakdown: [
                { jp: "えき", en: "station" },
                { jp: "に", en: "(to)" },
                { jp: "いきます", en: "go" },
              ],
            },
            {
              jp: "うち に かえります。",
              romaji: "Uchi ni kaerimasu.",
              en: "I go home.",
              breakdown: [
                { jp: "うち", en: "home" },
                { jp: "に", en: "(to)" },
                { jp: "かえります", en: "return" },
              ],
            },
          ],
          apply: {
            prompt: "Say “I go to school.”",
            options: ["がっこう を いきます。", "がっこう に いきます。", "がっこう に たべます。"],
            optionsRomaji: ["Gakkou wo ikimasu.", "Gakkou ni ikimasu.", "Gakkou ni tabemasu."],
            correct: 1,
            explanation: "Destination + に + motion verb. を is for objects; たべます (eat) isn't a motion verb.",
          },
        },
        {
          id: "ni-time",
          title: "Time に Verb",
          titleRomaji: "Time ni Verb",
          subtitle: "に also marks a clock time.",
          pattern: [
            { text: "Time", highlight: true },
            { text: "に", highlight: true },
            { text: "Verb", highlight: false },
          ],
          patternRomaji: "Time  ni  Verb",
          note: "A specific clock time takes に too: しちじ に いきます = “I go at 7:00”. (You met じ for o'clock in Book 1.) に attaches to numbered times like 7:00 or Monday — but NOT to vague words like きょう (today) or いま (now), which stand alone.",
          tip: "じ-times take に (しちじ に); きょう / いま / まいにち do not (just きょう いきます).",
          examples: [
            {
              jp: "しちじ に いきます。",
              romaji: "Shichi-ji ni ikimasu.",
              en: "I go at 7:00.",
              breakdown: [
                { jp: "しちじ", en: "7:00" },
                { jp: "に", en: "(at)" },
                { jp: "いきます", en: "go" },
              ],
            },
            {
              jp: "くじ に かえります。",
              romaji: "Ku-ji ni kaerimasu.",
              en: "I go home at 9:00.",
              breakdown: [
                { jp: "くじ", en: "9:00" },
                { jp: "に", en: "(at)" },
                { jp: "かえります", en: "return" },
              ],
            },
          ],
          apply: {
            prompt: "Which is “I come home at 9:00.”?",
            options: ["くじ に うち に かえります。", "くじ を かえります。", "いま に かえります。"],
            optionsRomaji: ["Ku-ji ni uchi ni kaerimasu.", "Ku-ji wo kaerimasu.", "Ima ni kaerimasu."],
            correct: 0,
            explanation: "Both the time (くじ に) and the place (うち に) take に. いま doesn't take に.",
          },
        },
      ],
      practice: [
        {
          question: "Pick the destination particle.",
          jp: "えき ＿ いきます。",
          romaji: "Eki ＿ ikimasu.",
          options: ["を", "に", "で"],
          optionsRomaji: ["wo", "ni", "de"],
          correct: 1,
          explanation: "Destinations with motion verbs take に.",
          concept: "に destination",
        },
        {
          question: "Which word does NOT take に?",
          options: ["しちじ (7:00)", "がっこう (school)", "いま (now)"],
          optionsRomaji: ["shichi-ji", "gakkou", "ima"],
          correct: 2,
          explanation: "いま (now) stands alone. Clock times and places take に.",
          concept: "に time",
        },
        {
          question: "“I return home.”",
          options: ["うち を かえります。", "うち に かえります。", "うち に いきます。"],
          optionsRomaji: ["Uchi wo kaerimasu.", "Uchi ni kaerimasu.", "Uchi ni ikimasu."],
          correct: 1,
          explanation: "かえります (return) with the destination うち に. いきます would just be “go”.",
          concept: "motion verbs",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "がっこう に いきます", romaji: "gakkou ni ikimasu", en: "I go to school", accept: ["学校に行きます"] },
        { text: "しちじ に いきます", romaji: "shichi-ji ni ikimasu", en: "I go at 7:00", accept: ["七時に行きます", "7時に行きます"] },
        { text: "うち に かえります", romaji: "uchi ni kaerimasu", en: "I go home", accept: ["家に帰ります"] },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's morning commute",
      emoji: "🚉",
      intro: "Hana heads out. Tanaka catches her at the station.",
      lines: [
        { speaker: "narrator", en: "7 a.m. Hana leaves the house." },
        { speaker: "hana", jp: "しちじ に えき に いきます。", romaji: "Shichi-ji ni eki ni ikimasu.", en: "I go to the station at 7:00." },
        { speaker: "tanaka", jp: "がっこう に いきます か？", romaji: "Gakkou ni ikimasu ka?", en: "Are you going to school?" },
        { speaker: "hana", jp: "はい。くじ に かえります。", romaji: "Hai. Ku-ji ni kaerimasu.", en: "Yes. I'll come home at 9:00." },
        { speaker: "narrator", en: "The train arrives. Off she goes." },
      ],
      comprehension: [
        {
          question: "When does Hana go to the station?",
          options: ["9:00", "7:00", "Now", "She doesn't"],
          correct: 1,
          explanation: "しちじ に えき に いきます = “I go to the station at 7:00.”",
        },
        {
          question: "Why is に used twice in しちじ に えき に いきます?",
          options: ["Once for the time, once for the destination", "It's a typo", "For emphasis"],
          correct: 0,
          explanation: "しちじ に = at 7:00 (time), えき に = to the station (destination). Both take に.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Motion verbs: いきます (go), きます (come), かえります (return home)",
        "に marks a destination: がっこう に いきます",
        "に also marks a clock time: しちじ に いきます",
        "Kanji: 行 (go)",
      ],
      badge: { name: "On the Move", emoji: "🚶" },
    },
  ],
};
