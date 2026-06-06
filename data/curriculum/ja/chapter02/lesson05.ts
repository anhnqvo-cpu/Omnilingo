import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 2 · Lesson 5 — The h row: は ひ ふ へ ほ.
 * ふ reads "fu" (not "hu"). は doubles as the topic particle (wa).
 * Chapter-2 capstone story brings the full cast together.
 */
export const chapter02Lesson05: Lesson = {
  id: "ja-2-5",
  chapterId: "ja-ch2",
  number: 5,
  title: "The h row: は, ひ, ふ, へ, ほ",
  titleNative: "はひふへほ",
  subtitle: "Hiragana continued + chapter capstone",
  summary: "The h row, with the ふ exception. Plus a longer microstory using everything you've learned in Ch 1 + 2.",
  xp: 60,
  estimateMinutes: 12,
  unlockAfter: "ja-2-4",
  steps: [
    {
      kind: "intro",
      title: "Last hiragana row of Chapter 2",
      subtitle: "ふ is 'fu', not 'hu'. は is 'ha' as a kana, but reads 'wa' as a particle.",
      goals: [
        "Recognise は, ひ, ふ, へ, ほ",
        "Remember the ふ ('fu') exception",
        "Read short multi-word sentences out loud",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "sounds",
      intro: "Listen for ふ — it's softer than the other h sounds.",
      sounds: [
        { text: "は", romaji: "ha", phonetic: "'hah' as a kana. 'wa' as a particle.", mnemonic: "Three strokes forming a 'ha'ppy shape." },
        { text: "ひ", romaji: "hi", phonetic: "'hee' — bright.", mnemonic: "Like a smile or a nose. ひ = sun!" },
        { text: "ふ", romaji: "fu", phonetic: "'foo' — softer than 'hu'. Almost a puff.", mnemonic: "Four little marks — a fuzzy puff." },
        { text: "へ", romaji: "he", phonetic: "'heh' — short. Also a particle meaning 'to/towards' (read 'e').", mnemonic: "A single peak — like a mountain top." },
        { text: "ほ", romaji: "ho", phonetic: "'hoh' — round.", mnemonic: "Like は but with an extra horizontal — a holy temple shape." },
      ],
    },
    { kind: "character", script: "hiragana", char: "は", romaji: "ha", phonetic: "'hah' (kana) / 'wa' (particle).", mnemonic: "Three strokes — like the kana for は!", words: [{ jp: "はな", meaning: "flower / nose", romaji: "hana", emoji: "🌸", hint: "は + な — also Hana's name!" }] },
    { kind: "writing", char: "は", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ひ", romaji: "hi", phonetic: "'hee'.", mnemonic: "A wide smile. ひ = sun, a happy sun.", words: [{ jp: "ひ", meaning: "sun / day / fire", romaji: "hi", emoji: "☀️", hint: "Single kana." }] },
    { kind: "writing", char: "ひ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ふ", romaji: "fu", phonetic: "'foo' — soft.", mnemonic: "Four marks — a puff of wind.", words: [{ jp: "ふね", meaning: "boat", romaji: "fune", emoji: "⛵", hint: "ふ + ね." }] },
    { kind: "writing", char: "ふ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "へ", romaji: "he", phonetic: "'heh' (kana) / 'e' (particle).", mnemonic: "A single peak — like climbing.", words: [{ jp: "へや", meaning: "room", romaji: "heya", emoji: "🛋️", hint: "へ + や (you'll learn や next chapter)." }] },
    { kind: "writing", char: "へ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "ほ", romaji: "ho", phonetic: "'hoh'.", mnemonic: "Like は + an extra horizontal — a holy temple.", words: [{ jp: "ほし", meaning: "star", romaji: "hoshi", emoji: "⭐", hint: "ほ + し." }] },
    { kind: "writing", char: "ほ", script: "hiragana" },
    {
      kind: "vocabDrill",
      intro: "Capstone vocab — eight words pulling together everything from Ch 1 + 2.",
      words: [
        { text: "はな", romaji: "hana", meaning: "flower / nose", emoji: "🌸", example: { jp: "あかい はな。", romaji: "Akai hana.", en: "A red flower." } },
        { text: "ひ", romaji: "hi", meaning: "sun, day, fire", emoji: "☀️", example: { jp: "ひ が のぼる。", romaji: "Hi ga noboru.", en: "The sun rises." } },
        { text: "ふね", romaji: "fune", meaning: "boat", emoji: "⛵", example: { jp: "ちいさい ふね。", romaji: "Chiisai fune.", en: "A small boat." } },
        { text: "ほし", romaji: "hoshi", meaning: "star", emoji: "⭐", example: { jp: "そら に ほし。", romaji: "Sora ni hoshi.", en: "Stars in the sky." } },
        { text: "はし", romaji: "hashi", meaning: "bridge / chopsticks", emoji: "🥢", example: { jp: "はし で たべる。", romaji: "Hashi de taberu.", en: "Eat with chopsticks." } },
        { text: "ほん", romaji: "hon", meaning: "book", emoji: "📖", example: { jp: "わたし の ほん。", romaji: "Watashi no hon.", en: "My book." } },
        { text: "ひと", romaji: "hito", meaning: "person", emoji: "🧑", example: { jp: "いい ひと。", romaji: "Ii hito.", en: "A good person." } },
        { text: "ふたつ", romaji: "futatsu", meaning: "two (things)", emoji: "✌️", example: { jp: "ほし ふたつ。", romaji: "Hoshi futatsu.", en: "Two stars." } },
      ],
    },
    {
      kind: "grammar",
      intro: "One last pattern — then a mixed review of every grammar point from this chapter.",
      patterns: [
        {
          id: "ni-he-direction",
          title: "Place に / へ いく",
          titleRomaji: "Place ni / e iku",
          subtitle: "Go somewhere — mark the destination.",
          pattern: [
            { text: "Place", highlight: true },
            { text: "に / へ", highlight: false },
            { text: "いく", highlight: true },
          ],
          patternRomaji: "Place  ni / e  iku",
          note: "To say you go to a place, mark the destination with に or へ, then use a movement verb like いく (to go). 'がっこう に いく' = 'go to school'. に and へ are interchangeable here; へ leans slightly more toward 'in the direction of'.",
          tip: "As a destination particle, へ is read 'e', not 'he' — the same special-reading rule you saw with は ('wa').",
          examples: [
            {
              jp: "がっこう に いく。",
              romaji: "Gakkou ni iku.",
              en: "(I) go to school.",
              breakdown: [
                { jp: "がっこう", en: "school" },
                { jp: "に", en: "to" },
                { jp: "いく。", en: "go" },
              ],
            },
            {
              jp: "うみ へ いく。",
              romaji: "Umi e iku.",
              en: "(I) go to the sea.",
              breakdown: [
                { jp: "うみ", en: "sea" },
                { jp: "へ", en: "to (read 'e')" },
                { jp: "いく。", en: "go" },
              ],
            },
          ],
          apply: {
            prompt: "Which sentence says 'go to the sea'?",
            options: ["うみ を いく。", "うみ へ いく。", "うみ も いく。"],
            optionsRomaji: ["Umi wo iku.", "Umi e iku.", "Umi mo iku."],
            correct: 1,
            explanation: "へ (read 'e') marks the destination with a movement verb. を marks objects; も means 'also'.",
          },
        },
      ],
      practice: [
        {
          question: "Which particle marks the object — 'drink tea'?",
          jp: "おちゃ ＿ のむ。",
          romaji: "Ocha __ nomu.",
          options: ["は", "を", "の", "も"],
          optionsRomaji: ["wa", "wo", "no", "mo"],
          correct: 1,
          explanation: "を (wo/o) marks the direct object — the tea being drunk.",
          concept: "Noun を Verb",
        },
        {
          question: "Your friend is a student. How do you add 'me too'?",
          options: ["わたし は がくせい です。", "わたし も がくせい です。", "わたし の がくせい です。", "わたし を がくせい です。"],
          optionsRomaji: ["Watashi wa gakusei desu.", "Watashi mo gakusei desu.", "Watashi no gakusei desu.", "Watashi wo gakusei desu."],
          correct: 1,
          explanation: "も (mo) replaces は to mean 'also/too'.",
          concept: "Noun も",
        },
        {
          question: "Which means 'a tall mountain'?",
          options: ["やま たかい", "たかい やま", "たかい の やま", "やま は たかい"],
          optionsRomaji: ["Yama takai", "Takai yama", "Takai no yama", "Yama wa takai"],
          correct: 1,
          explanation: "い-adjectives sit directly in front of the noun: たかい (tall) + やま (mountain).",
          concept: "い-adjective + Noun",
        },
        {
          question: "Something is far from both you and the listener. Which word?",
          options: ["これ", "それ", "あれ", "どれ"],
          optionsRomaji: ["kore", "sore", "are", "dore"],
          correct: 2,
          explanation: "あれ (are) = that thing over there, away from both speakers.",
          concept: "これ・それ・あれ",
        },
        {
          question: "How do you say 'go to school'?",
          options: ["がっこう を いく。", "がっこう に いく。", "がっこう は いく。", "がっこう の いく。"],
          optionsRomaji: ["Gakkou wo iku.", "Gakkou ni iku.", "Gakkou wa iku.", "Gakkou no iku."],
          correct: 1,
          explanation: "に (or へ) marks the destination with a movement verb like いく.",
          concept: "Place に / へ いく",
        },
      ],
    },
    {
      kind: "matching",
      intro: "Capstone match — kana from across Chapter 2.",
      rounds: [
        {
          title: "Words from Chapter 2",
          pairs: [
            { id: "neko", left: "ねこ", romaji: "neko", right: "cat" },
            { id: "tsuki", left: "つき", romaji: "tsuki", right: "moon" },
            { id: "sushi", left: "すし", romaji: "sushi", right: "sushi" },
            { id: "hoshi", left: "ほし", romaji: "hoshi", right: "star" },
            { id: "hana", left: "はな", romaji: "hana", right: "flower" },
            { id: "inu", left: "いぬ", romaji: "inu", right: "dog" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Stargazing — Chapter 2 capstone",
      emoji: "🌌",
      intro: "Hana, Kenji, and Yui meet by the pond at night.",
      lines: [
        { speaker: "narrator", en: "It's a clear summer night. The three of them sit by the pond." },
        { speaker: "yui", jp: "ほし！ たくさん！", romaji: "Hoshi! Takusan!", en: "Stars! Lots of them!" },
        { speaker: "kenji", jp: "つき も きれい。", romaji: "Tsuki mo kirei.", en: "The moon is pretty too." },
        { speaker: "hana", jp: "ねこ は どこ？", romaji: "Neko wa doko?", en: "Where's the cat?" },
        { speaker: "yui", jp: "そこ！ はな の した。", romaji: "Soko! Hana no shita.", en: "There! Under the flowers." },
        { speaker: "kenji", jp: "いい よる。", romaji: "Ii yoru.", en: "A good night." },
        { speaker: "hana", jp: "うん。 いい よる。", romaji: "Un. Ii yoru.", en: "Yeah. A good night." },
        { speaker: "narrator", en: "Tomorrow Hana starts her first real Japanese class." },
      ],
      comprehension: [
        {
          question: "Where is the cat?",
          options: ["In the pond", "Under the flowers (はな の した)", "On a roof", "Inside the house"],
          correct: 1,
          explanation: "はな の した = under the flowers. した = below/under (you'll meet it formally in Ch 5).",
        },
        {
          question: "What is everyone doing in this scene?",
          options: ["Studying", "Eating sushi", "Stargazing", "Looking for the cat"],
          correct: 2,
          explanation: "They're sitting by the pond looking at the moon and stars — though the cat shows up too.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "All 25 'pure' hiragana from a-row through h-row",
        "~30 new words you can read",
        "First short paragraph-length Japanese understood",
      ],
      badge: { name: "Chapter 2 Complete", emoji: "🌌" },
    },
  ],
};
