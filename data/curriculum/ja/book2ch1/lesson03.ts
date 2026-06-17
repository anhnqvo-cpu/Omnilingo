import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 1 · Lesson 3 — the particle で (where an action happens, and
 * the means you use), more verbs, and the classic に-vs-で contrast. Kanji: 見.
 */
export const book2Chapter1Lesson03: Lesson = {
  id: "ja-2-ch1-3",
  chapterId: "ja-2-ch1",
  number: 3,
  title: "Where you do it — で",
  titleNative: "で・します",
  subtitle: "Place of action & means",
  summary:
    "で marks where an action happens (としょかん で べんきょうします) and the means you use (バス で いきます). Plus the difference between に and で. Write the kanji 見.",
  xp: 60,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch1-2",
  steps: [
    {
      kind: "intro",
      title: "The place where it happens",
      subtitle:
        "に points at a destination. で is different: it marks the place an action happens at, and the means you do it by. Same English word “at/by”, two Japanese particles — this lesson makes the line clear.",
      goals: [
        "Use で for the place of an action: としょかん で べんきょうします",
        "Use で for the means: バス で いきます (go by bus)",
        "Tell に (destination) and で (place of action) apart",
        "Write the kanji 見 (see)",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro: "A few “activity” verbs and the places you do them.",
      words: [
        { text: "します", romaji: "shimasu", meaning: "do", emoji: "✅", example: { jp: "うち で します。", romaji: "Uchi de shimasu.", en: "I do it at home." } },
        { text: "べんきょうします", romaji: "benkyou shimasu", meaning: "study", emoji: "📖", example: { jp: "としょかん で べんきょうします。", romaji: "Toshokan de benkyou shimasu.", en: "I study at the library." } },
        { text: "よみます", romaji: "yomimasu", meaning: "read", emoji: "📕", example: { jp: "ほん を よみます。", romaji: "Hon wo yomimasu.", en: "I read a book." } },
        { text: "としょかん", romaji: "toshokan", meaning: "library", emoji: "📚", example: { jp: "としょかん で よみます。", romaji: "Toshokan de yomimasu.", en: "I read at the library." } },
        { text: "ほん", romaji: "hon", meaning: "book", emoji: "📕", example: { jp: "ほん を よみます。", romaji: "Hon wo yomimasu.", en: "I read a book." } },
        { text: "バス", romaji: "basu", meaning: "bus", emoji: "🚌", example: { jp: "バス で いきます。", romaji: "Basu de ikimasu.", en: "I go by bus." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "見",
      romaji: "mi / ken",
      phonetic: "Means “see / look”. Kun-reading: mi(ru). On-reading: ken.",
      mnemonic: "An eye (目) on a pair of legs — an eye walking around, looking.",
      words: [
        { jp: "見ます", meaning: "see / watch (polite)", romaji: "mimasu", emoji: "👀", hint: "見 carries “see”; ます is in kana." },
        { jp: "見学", meaning: "a study visit / tour", romaji: "kengaku", emoji: "🏛️", hint: "Here 見 uses its on-reading, ken." },
      ],
    },
    { kind: "writing", char: "見", script: "kanji" },
    {
      kind: "grammar",
      intro: "で has two everyday jobs — and then the one comparison every learner has to nail: に vs で.",
      patterns: [
        {
          id: "de-place",
          title: "Place で Verb",
          titleRomaji: "Place de Verb",
          subtitle: "で marks where an action happens.",
          pattern: [
            { text: "Place", highlight: true },
            { text: "で", highlight: true },
            { text: "Verb", highlight: false },
          ],
          patternRomaji: "Place  de  Verb",
          note: "When something happens AT a place, the place takes で. としょかん で べんきょうします = “I study at the library”. The library is where the studying happens. Use で with action verbs — べんきょうします, よみます, たべます, みます — anything you DO somewhere.",
          tip: "で = the stage the action plays out on. うち で たべます = “I eat at home”.",
          examples: [
            {
              jp: "としょかん で べんきょうします。",
              romaji: "Toshokan de benkyou shimasu.",
              en: "I study at the library.",
              breakdown: [
                { jp: "としょかん", en: "library" },
                { jp: "で", en: "(at)" },
                { jp: "べんきょうします", en: "study" },
              ],
            },
            {
              jp: "うち で テレビ を みます。",
              romaji: "Uchi de terebi wo mimasu.",
              en: "I watch TV at home.",
              breakdown: [
                { jp: "うち", en: "home" },
                { jp: "で", en: "(at)" },
                { jp: "テレビ を", en: "TV (obj)" },
                { jp: "みます", en: "watch" },
              ],
            },
          ],
          apply: {
            prompt: "Say “I study at school.”",
            options: ["がっこう に べんきょうします。", "がっこう で べんきょうします。", "がっこう を べんきょうします。"],
            optionsRomaji: ["Gakkou ni benkyou shimasu.", "Gakkou de benkyou shimasu.", "Gakkou wo benkyou shimasu."],
            correct: 1,
            explanation: "Studying happens AT school, so the place takes で. に would mean going to school.",
          },
        },
        {
          id: "de-means",
          title: "Means で",
          titleRomaji: "Means de",
          subtitle: "で also marks how — the tool or transport.",
          pattern: [
            { text: "Means", highlight: true },
            { text: "で", highlight: true },
            { text: "Verb", highlight: false },
          ],
          patternRomaji: "Means  de  Verb",
          note: "で also marks the means — the transport or tool you use: バス で いきます = “I go by bus”. はし で たべます = “I eat with chopsticks”. Think of で as “by means of”.",
          tip: "Transport you ride takes で: でんしゃ で (by train), くるま で (by car), あるいて (on foot — an exception).",
          examples: [
            {
              jp: "バス で がっこう に いきます。",
              romaji: "Basu de gakkou ni ikimasu.",
              en: "I go to school by bus.",
              breakdown: [
                { jp: "バス", en: "bus" },
                { jp: "で", en: "(by)" },
                { jp: "がっこう に", en: "to school" },
                { jp: "いきます", en: "go" },
              ],
            },
            {
              jp: "でんしゃ で かえります。",
              romaji: "Densha de kaerimasu.",
              en: "I go home by train.",
              breakdown: [
                { jp: "でんしゃ", en: "train" },
                { jp: "で", en: "(by)" },
                { jp: "かえります", en: "return" },
              ],
            },
          ],
          apply: {
            prompt: "“I go to the station by bus.”",
            options: ["バス に えき で いきます。", "バス で えき に いきます。", "バス を えき に いきます。"],
            optionsRomaji: ["Basu ni eki de ikimasu.", "Basu de eki ni ikimasu.", "Basu wo eki ni ikimasu."],
            correct: 1,
            explanation: "Means バス で, destination えき に. The two particles do different jobs in one sentence.",
          },
        },
      ],
      practice: [
        {
          question: "に or で? “I study AT the library.”",
          jp: "としょかん ＿ べんきょうします。",
          romaji: "Toshokan ＿ benkyou shimasu.",
          options: ["に", "で", "を"],
          optionsRomaji: ["ni", "de", "wo"],
          correct: 1,
          explanation: "The action happens at the library → で.",
          concept: "に vs で",
        },
        {
          question: "に or で? “I GO to the library.”",
          jp: "としょかん ＿ いきます。",
          romaji: "Toshokan ＿ ikimasu.",
          options: ["に", "で", "を"],
          optionsRomaji: ["ni", "de", "wo"],
          correct: 0,
          explanation: "いきます is motion → destination takes に.",
          concept: "に vs で",
        },
        {
          question: "“I go by train.”",
          options: ["でんしゃ に いきます。", "でんしゃ で いきます。", "でんしゃ を いきます。"],
          optionsRomaji: ["Densha ni ikimasu.", "Densha de ikimasu.", "Densha wo ikimasu."],
          correct: 1,
          explanation: "Transport you travel by takes で.",
          concept: "で means",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "としょかん で べんきょうします", romaji: "toshokan de benkyou shimasu", en: "I study at the library", accept: ["図書館で勉強します"] },
        { text: "バス で いきます", romaji: "basu de ikimasu", en: "I go by bus", accept: ["バスで行きます"] },
        { text: "うち で ほん を よみます", romaji: "uchi de hon wo yomimasu", en: "I read a book at home", accept: ["家で本を読みます"] },
      ],
    },
    {
      kind: "microstory",
      setting: "Studying with Kenji",
      emoji: "📚",
      intro: "Kenji runs into Hana on the way to study.",
      lines: [
        { speaker: "kenji", jp: "としょかん で べんきょうします か？", romaji: "Toshokan de benkyou shimasu ka?", en: "Are you studying at the library?" },
        { speaker: "hana", jp: "はい。バス で いきます。", romaji: "Hai. Basu de ikimasu.", en: "Yes. I'm going by bus." },
        { speaker: "kenji", jp: "わたし は でんしゃ で いきます。", romaji: "Watashi wa densha de ikimasu.", en: "I'll go by train." },
        { speaker: "narrator", en: "They'll meet at the library and read together." },
      ],
      comprehension: [
        {
          question: "How does Hana get to the library?",
          options: ["By train", "By bus", "On foot", "By car"],
          correct: 1,
          explanation: "バス で いきます = “I go by bus.” で marks the means.",
        },
        {
          question: "Why is で used in としょかん で べんきょうします?",
          options: ["The library is the destination", "The studying happens at the library", "It marks the object"],
          correct: 1,
          explanation: "The action (studying) happens AT the library, so the place takes で — not に.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "で marks where an action happens: としょかん で べんきょうします",
        "で also marks the means: バス で いきます (by bus)",
        "に = destination (motion) vs で = place of action",
        "Kanji: 見 (see)",
      ],
      badge: { name: "Place & Means", emoji: "📚" },
    },
  ],
};
