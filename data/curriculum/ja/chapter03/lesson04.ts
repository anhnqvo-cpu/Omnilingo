import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 3 · Lesson 4 — Dakuten (゛) and handakuten (゜).
 * Two small diacritic marks that voice or soften 25 of the kana you already know.
 * No new shapes to learn — just modifications.
 */
export const chapter03Lesson04: Lesson = {
  id: "ja-3-4",
  chapterId: "ja-ch3",
  number: 4,
  title: "Voicing marks: ゛ and ゜",
  titleNative: "だくてん・はんだくてん",
  subtitle: "25 'new' kana — but no new shapes",
  summary: "Two marks (dakuten and handakuten) transform kana you already know: か→が, さ→ざ, は→ば, は→ぱ. Doubles your reading range.",
  xp: 60,
  estimateMinutes: 10,
  unlockAfter: "ja-3-3",
  steps: [
    {
      kind: "intro",
      title: "Two marks, twenty-five new sounds",
      subtitle: "゛ (dakuten / 'two dots') voices a consonant. ゜ (handakuten / 'small circle') only applies to the h row.",
      goals: [
        "Read dakuten kana: が, ぎ, ぐ, げ, ご (k→g), ざ, じ, ず, ぜ, ぞ (s→z), だ, ぢ, づ, で, ど (t→d), ば, び, ぶ, べ, ぼ (h→b)",
        "Read handakuten kana: ぱ, ぴ, ぷ, ぺ, ぽ (h→p)",
        "Know that じ = ji and ず = zu (same as ぢ/づ in modern usage)",
      ],
      estimateMinutes: 10,
    },
    {
      kind: "grammar",
      intro: "Think of these less as new kana, more as 'modifiers' on kana you've already mastered.",
      patterns: [
        {
          id: "k-to-g",
          title: "゛ on k row → g",
          titleRomaji: "ka→ga, ki→gi, ku→gu, ke→ge, ko→go",
          subtitle: "The voiced version of the k row.",
          pattern: [
            { text: "か", highlight: false },
            { text: "+", highlight: false },
            { text: "゛", highlight: true },
            { text: "→", highlight: false },
            { text: "が", highlight: true },
          ],
          patternRomaji: "ka + ゛ → ga",
          note: "Dakuten (two small dots in the upper-right corner) turns an unvoiced consonant into its voiced counterpart. k→g, s→z, t→d, h→b. No new shapes — same kana with marks.",
          tip: "Voicing in linguistics = your vocal cords vibrate. Touch your throat: 'ka' has no vibration, 'ga' does.",
          examples: [
            { jp: "がっこう", romaji: "Gakkou", en: "School", breakdown: [{ jp: "がっ", en: "ga + small つ" }, { jp: "こう", en: "kou (we'll formalise long vowels later)" }] },
            { jp: "ごはん", romaji: "Gohan", en: "Cooked rice / a meal", breakdown: [{ jp: "ご", en: "go" }, { jp: "はん", en: "han" }] },
          ],
        },
        {
          id: "s-to-z",
          title: "゛ on s row → z (but し → じ = ji)",
          titleRomaji: "sa→za, shi→ji, su→zu, se→ze, so→zo",
          subtitle: "The voiced s row. Watch the し exception carries through.",
          pattern: [
            { text: "し", highlight: false },
            { text: "+", highlight: false },
            { text: "゛", highlight: true },
            { text: "→", highlight: false },
            { text: "じ", highlight: true },
          ],
          patternRomaji: "shi + ゛ → ji",
          note: "Voiced s row is the z row, with one twist: し became 'shi' (not 'si'), so its voiced form is 'ji' (not 'zi'). Same pattern as English 'ship → vision'.",
          examples: [
            { jp: "かんじ", romaji: "Kanji", en: "Chinese characters used in Japanese", breakdown: [{ jp: "かん", en: "kan" }, { jp: "じ", en: "ji" }] },
            { jp: "みず", romaji: "Mizu", en: "Water", breakdown: [{ jp: "み", en: "mi" }, { jp: "ず", en: "zu" }] },
          ],
        },
        {
          id: "h-to-b-p",
          title: "h row → b (with ゛) or p (with ゜)",
          titleRomaji: "ha→ba/pa, hi→bi/pi, fu→bu/pu, he→be/pe, ho→bo/po",
          subtitle: "The only row that takes BOTH marks.",
          pattern: [
            { text: "は", highlight: false },
            { text: "→", highlight: false },
            { text: "ば (゛)", highlight: true },
            { text: " or ", highlight: false },
            { text: "ぱ (゜)", highlight: true },
          ],
          patternRomaji: "ha → ba (゛) or pa (゜)",
          note: "゛ (dakuten) on the h row gives the b sounds. ゜ (handakuten, a small circle) gives the p sounds. Only the h row takes ゜.",
          tip: "Mnemonic: 'happy' (h) becomes 'big' (b) with dots, or 'pop' (p) with a circle.",
          examples: [
            { jp: "ばん", romaji: "Ban", en: "Evening / night (formal)", breakdown: [{ jp: "ば", en: "ba" }, { jp: "ん", en: "n" }] },
            { jp: "ぱん", romaji: "Pan", en: "Bread (loanword from Portuguese 'pão')", breakdown: [{ jp: "ぱ", en: "pa" }, { jp: "ん", en: "n" }] },
          ],
        },
      ],
      practice: [
        {
          question: "How do you write 'school' (がっこう) in hiragana?",
          options: ["かっこう", "がっこう", "かんこう", "がんこう"],
          optionsRomaji: ["kakkou", "gakkou", "kankou", "gankou"],
          correct: 1,
          explanation: "が = ka + dakuten. The small っ doubles the following 'k'.",
          concept: "゛ on k row → g",
        },
        {
          question: "Which is 'bread'?",
          options: ["ぱん", "ばん", "はん", "ぱぱ"],
          optionsRomaji: ["pan", "ban", "han", "papa"],
          correct: 0,
          explanation: "ぱん = pan (bread). Handakuten ゜ on は → ぱ.",
          concept: "h row → b/p",
        },
        {
          question: "What does みず mean?",
          jp: "みず",
          options: ["water", "lake", "fire", "mountain"],
          correct: 0,
          explanation: "みず (mizu) = water. ず is す + dakuten.",
          concept: "゛ on s row → z",
        },
      ],
    },
    {
      kind: "vocabDrill",
      intro: "Eight high-frequency words using dakuten/handakuten.",
      words: [
        { text: "がっこう", romaji: "gakkou", meaning: "school", emoji: "🏫", example: { jp: "がっこう に いく。", romaji: "Gakkou ni iku.", en: "Go to school." } },
        { text: "ごはん", romaji: "gohan", meaning: "cooked rice, a meal", emoji: "🍚", example: { jp: "ごはん を たべる。", romaji: "Gohan wo taberu.", en: "Eat a meal." } },
        { text: "じ", romaji: "ji", meaning: "letter / time (o'clock)", emoji: "🕐", example: { jp: "なんじ ですか？", romaji: "Nan-ji desu ka?", en: "What time is it?" } },
        { text: "かんじ", romaji: "kanji", meaning: "Chinese characters", emoji: "🈸", example: { jp: "かんじ を かく。", romaji: "Kanji wo kaku.", en: "Write kanji." } },
        { text: "ばん", romaji: "ban", meaning: "evening", emoji: "🌆", example: { jp: "ばん の ごはん。", romaji: "Ban no gohan.", en: "Dinner (evening meal)." } },
        { text: "ぱん", romaji: "pan", meaning: "bread", emoji: "🍞", example: { jp: "ぱん を かう。", romaji: "Pan wo kau.", en: "Buy bread." } },
        { text: "でんわ", romaji: "denwa", meaning: "telephone", emoji: "☎️", example: { jp: "でんわ を かける。", romaji: "Denwa wo kakeru.", en: "Make a phone call." } },
        { text: "だいすき", romaji: "daisuki", meaning: "love / really like", emoji: "❤️", example: { jp: "ねこ が だいすき。", romaji: "Neko ga daisuki.", en: "I love cats." } },
      ],
    },
    {
      kind: "microstory",
      setting: "Breakfast at the homestay",
      emoji: "🍞",
      lines: [
        { speaker: "tanaka", jp: "ごはん？ ぱん？", romaji: "Gohan? Pan?", en: "Rice? Or bread?" },
        { speaker: "hana", jp: "ぱん おねがいします。", romaji: "Pan onegaishimasu.", en: "Bread, please." },
        { speaker: "tanaka", jp: "でんわ が なる！", romaji: "Denwa ga naru!", en: "The phone's ringing!" },
        { speaker: "hana", jp: "わたし が でます。", romaji: "Watashi ga demasu.", en: "I'll get it." },
        { speaker: "narrator", en: "It's the school. Class starts in 30 minutes." },
      ],
      comprehension: [
        { question: "What did Hana choose for breakfast?", options: ["Rice", "Bread", "Both", "Neither"], correct: 1, explanation: "ぱん おねがいします = bread, please. お願いします is polite for 'please'." },
      ],
    },
    { kind: "completion", recap: ["゛ and ゜ unlock 25 'new' kana", "Read words like がっこう, でんわ, だいすき", "Recognised the し→じ pattern"], badge: { name: "Voicing Mastered", emoji: "🍞" } },
  ],
};
