import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 5 — capstone. No new grammar or kanji:
 * it weaves the chapter's four new tools — connecting (〜くて/〜で), past
 * (〜かった/でした), adverbs (〜く/〜に), and comparison (より/のほうが/いちばん) —
 * into one trip recap with the cast, plus a mixed review.
 */
export const book2Chapter3Lesson05: Lesson = {
  id: "ja-2-ch3-5",
  chapterId: "ja-2-ch3",
  number: 5,
  title: "Describing it all",
  titleNative: "けいようし",
  subtitle: "Chapter 4 review",
  summary:
    "Put the chapter together: join adjectives (〜くて/〜で), talk about the past (〜かった/でした), describe actions (〜く/〜に), and compare (より/のほうが/いちばん) — across the cast's trip to Kyoto.",
  xp: 85,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch3-4",
  steps: [
    {
      kind: "intro",
      title: "Everything you can describe",
      subtitle:
        "No new grammar — this is where it clicks. Match adverb forms and comparison words, run a mixed review, then read a whole trip recap where every line describes, recalls, or compares.",
      goals: [
        "Switch between connecting, past, adverb, and comparison forms",
        "Keep い- and な-adjectives in their own lanes",
        "Read a full trip-recap scene in Japanese",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "matching",
      intro: "Two quick rounds: turn adjectives into adverbs, then match the comparison words.",
      rounds: [
        {
          title: "Make it an adverb",
          pairs: [
            { id: "a1", left: "はやい", right: "はやく", romaji: "hayai → hayaku" },
            { id: "a2", left: "おそい", right: "おそく", romaji: "osoi → osoku" },
            { id: "a3", left: "きれい", right: "きれいに", romaji: "kirei → kirei ni" },
            { id: "a4", left: "しずか", right: "しずかに", romaji: "shizuka → shizuka ni" },
          ],
        },
        {
          title: "Comparison words → meaning",
          pairs: [
            { id: "c1", left: "より", right: "than", romaji: "yori" },
            { id: "c2", left: "のほうが", right: "the more one", romaji: "no hou ga" },
            { id: "c3", left: "いちばん", right: "the most / best", romaji: "ichiban" },
            { id: "c4", left: "どちら", right: "which (of two)", romaji: "dochira" },
          ],
        },
      ],
    },
    {
      kind: "grammar",
      intro: "One picture of the chapter's four tools, then a mixed check.",
      patterns: [
        {
          id: "adj-toolbox",
          title: "The adjective toolbox",
          titleRomaji: "connect · past · adverb · compare",
          subtitle: "Same two families, four jobs.",
          pattern: [
            { text: "〜くて／〜で", highlight: true },
            { text: "〜かった／でした", highlight: true },
            { text: "〜く／〜に", highlight: true },
            { text: "より・いちばん", highlight: false },
          ],
          patternRomaji: "kute/de · katta/deshita · ku/ni · yori/ichiban",
          note: "Connect: い → くて (おおきくて), な → で (しずかで). Past: い → かった です (たのしかった), な/noun → でした (しずか でした). Adverb: い → く (はやく), な → に (きれいに). Compare: A は B より [adj], B より A のほうが [adj], [group] で X が いちばん [adj]. Across all of them, only one word breaks the い-pattern — いい → よくて／よかった／よく.",
          tip: "The whole chapter in one line: い-adjectives change their own ending (くて, かった, く); な-adjectives lean on で／でした／に. Comparison words (より・のほうが・いちばん) need no ending change at all.",
          examples: [
            {
              jp: "へや は ひろくて あかるかった です。",
              romaji: "Heya wa hirokute akarukatta desu.",
              en: "The room was spacious and bright.",
              breakdown: [
                { jp: "ひろくて", en: "spacious and… (connect)" },
                { jp: "あかるかった", en: "was bright (past)" },
                { jp: "です", en: "(polite)" },
              ],
            },
            {
              jp: "でんしゃ が いちばん べんり でした。",
              romaji: "Densha ga ichiban benri deshita.",
              en: "The train was the most convenient.",
              breakdown: [
                { jp: "でんしゃ が いちばん", en: "the train, the most" },
                { jp: "べんり でした", en: "was convenient (な past)" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "Connect: “small and cute” (ちいさい + かわいい).",
          options: ["ちいさい かわいい", "ちいさくて かわいい", "ちいさで かわいい"],
          optionsRomaji: ["chiisai kawaii", "chiisakute kawaii", "chiisa de kawaii"],
          correct: 1,
          explanation: "い-adjectives connect with くて: ちいさくて かわいい.",
          concept: "〜くて",
        },
        {
          question: "Past tense: “the trip was good.” りょこう は ＿＿ です。",
          jp: "りょこう は ＿＿ です。",
          romaji: "Ryokou wa ＿＿ desu.",
          options: ["いかった", "よかった", "いい でした"],
          optionsRomaji: ["ikatta", "yokatta", "ii deshita"],
          correct: 1,
          explanation: "いい conjugates as よ-: past is よかった です.",
          concept: "いい → よかった",
        },
        {
          question: "Adverb: “speak quietly” (しずか + はなします).",
          options: ["しずかく はなします", "しずかに はなします", "しずかで はなします"],
          optionsRomaji: ["shizukaku hanashimasu", "shizuka ni hanashimasu", "shizuka de hanashimasu"],
          correct: 1,
          explanation: "な-adjective adverb takes に: しずかに はなします.",
          concept: "〜に",
        },
        {
          question: "Compare: “planes are faster than trains.”",
          options: ["ひこうき は でんしゃ より はやい です。", "でんしゃ は ひこうき より はやい です。", "ひこうき は でんしゃ より はやく です。"],
          optionsRomaji: ["Hikouki wa densha yori hayai desu.", "Densha wa hikouki yori hayai desu.", "Hikouki wa densha yori hayaku desu."],
          correct: 0,
          explanation: "より follows the slower one (でんしゃ): ひこうき は でんしゃ より はやい です.",
          concept: "〜より",
        },
        {
          question: "Which word makes the superlative “the most”?",
          options: ["より", "のほうが", "いちばん"],
          optionsRomaji: ["yori", "no hou ga", "ichiban"],
          correct: 2,
          explanation: "いちばん = “number one / the most”: いちばん たかい = the most expensive.",
          concept: "いちばん",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Back from Kyoto",
      emoji: "🗺️",
      intro:
        "The three of them are home from the trip. Everything you learned this chapter, in one recap — connecting, past, adverbs, and comparisons.",
      lines: [
        { speaker: "narrator", en: "Yui, who stayed behind, wants to hear all about it." },
        { speaker: "yui", jp: "りょこう は どう でした か？", romaji: "Ryokou wa dou deshita ka?", en: "How was the trip?" },
        { speaker: "hana", jp: "とても たのしかった です！きょうと は しずかで きれい でした。", romaji: "Totemo tanoshikatta desu! Kyouto wa shizuka de kirei deshita.", en: "It was so much fun! Kyoto was quiet and beautiful." },
        { speaker: "kenji", jp: "ホテル は ひろくて あたらしかった です。", romaji: "Hoteru wa hirokute atarashikatta desu.", en: "The hotel was spacious and new." },
        { speaker: "yui", jp: "でんしゃ と バス と どちら が よかった ですか？", romaji: "Densha to basu to dochira ga yokatta desu ka?", en: "Which was better, the train or the bus?" },
        { speaker: "tanaka", jp: "でんしゃ のほうが よかった です。はやくて べんり でした。", romaji: "Densha no hou ga yokatta desu. Hayakute benri deshita.", en: "The train was better. It was fast and convenient." },
        { speaker: "hana", jp: "ごはん も やすくて おいしかった です。", romaji: "Gohan mo yasukute oishikatta desu.", en: "The food was cheap and delicious too." },
        { speaker: "kenji", jp: "りょこう の なか で きょうと が いちばん すき です。", romaji: "Ryokou no naka de kyouto ga ichiban suki desu.", en: "Of all our trips, I like Kyoto best." },
        { speaker: "yui", jp: "いいな！わたし も いきたい です。", romaji: "Ii na! Watashi mo ikitai desu.", en: "Lucky! I want to go too." },
      ],
      comprehension: [
        {
          question: "How does Kenji describe the hotel?",
          options: ["Small and old", "Spacious and new", "Cheap and quiet", "Lively and bright"],
          correct: 1,
          explanation: "ホテル は ひろくて あたらしかった です — spacious and new (connect + past).",
        },
        {
          question: "Which did they think was the better way to travel?",
          options: ["The bus — cheaper", "The train — fast and convenient", "The plane — fastest", "Walking"],
          correct: 1,
          explanation: "でんしゃ のほうが よかった です。はやくて べんり でした — the train was better: fast and convenient.",
        },
        {
          question: "Find the past-tense い-adjective in Hana's last line.",
          options: ["やすくて", "おいしかった", "すき", "べんり"],
          correct: 1,
          explanation: "おいしかった = “was delicious” (おいしい → past). やすくて is the connecting form; すき/べんり are な-adjectives.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Connect: 〜くて (い) / 〜で (な) — おおきくて あたらしい, しずかで べんり",
        "Past: 〜かった です (い) / でした (な·noun); いい → よかった",
        "Adverb: 〜く (い) / 〜に (な) — はやく たべます, きれいに かきます",
        "Compare: A は B より… · のほうが… · いちばん…",
        "Kanji this chapter: 大 小 高 安",
      ],
      badge: { name: "Wordsmith", emoji: "🏆" },
    },
  ],
};
