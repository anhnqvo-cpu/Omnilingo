import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 2 — the negative of い-adjectives:
 * 〜い → 〜くない (です), with the one irregular いい → よくない. Two new kanji
 * for a shopping theme: 高 (expensive / tall) and 安 (cheap).
 */
export const book2Chapter3Lesson02: Lesson = {
  id: "ja-2-ch3-2",
  chapterId: "ja-2-ch3",
  number: 2,
  title: "Not expensive — い-adjective negatives",
  titleNative: "〜くない",
  subtitle: "Saying it isn't",
  summary:
    "Make any い-adjective negative by swapping い → くない: たかい → たかくない (です). Meet the one irregular, いい → よくない, and the kanji 高 (expensive) and 安 (cheap) while shopping.",
  xp: 65,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch3-1",
  steps: [
    {
      kind: "intro",
      title: "“It's not cheap…”",
      subtitle:
        "Saying something ISN'T big or ISN'T cheap is the same move every time: drop the final い and add くない. One word — いい (good) — breaks the rule, and you'll meet it here so it never trips you up.",
      goals: [
        "Make い-adjectives negative: たかい → たかくない です",
        "Handle the irregular いい → よくない です",
        "Read and write 高 (expensive / tall) and 安 (cheap)",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro:
        "Shopping adjectives — the ones you reach for when comparing prices and weather.",
      words: [
        { text: "たかい", romaji: "takai", meaning: "expensive / tall", emoji: "💰", example: { jp: "たかい かばん。", romaji: "Takai kaban.", en: "An expensive bag." } },
        { text: "やすい", romaji: "yasui", meaning: "cheap", emoji: "🏷️", example: { jp: "やすい ほん。", romaji: "Yasui hon.", en: "A cheap book." } },
        { text: "いい", romaji: "ii", meaning: "good", emoji: "👍", example: { jp: "いい てんき。", romaji: "Ii tenki.", en: "Good weather." } },
        { text: "わるい", romaji: "warui", meaning: "bad", emoji: "👎", example: { jp: "わるい てんき。", romaji: "Warui tenki.", en: "Bad weather." } },
        { text: "あつい", romaji: "atsui", meaning: "hot", emoji: "🥵", example: { jp: "あつい です。", romaji: "Atsui desu.", en: "It's hot." } },
        { text: "さむい", romaji: "samui", meaning: "cold (weather)", emoji: "🥶", example: { jp: "さむい です。", romaji: "Samui desu.", en: "It's cold." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "高",
      romaji: "taka / kou",
      phonetic: "Means “high / tall / expensive”. Kun-reading: taka(i). On-reading: kou.",
      mnemonic: "A tall building with a roof, a window, and a doorway stacked up high — height and high prices both.",
      words: [
        { jp: "高い", meaning: "expensive / tall", romaji: "takai", emoji: "💰", hint: "Same word for “tall” and “expensive” — context decides which." },
        { jp: "高い ビル", meaning: "a tall building", romaji: "takai biru", emoji: "🏢", hint: "ビル (biru) = building, a katakana loanword from “building”." },
      ],
    },
    { kind: "writing", char: "高", script: "kanji" },
    {
      kind: "character",
      script: "kanji",
      char: "安",
      romaji: "yasu / an",
      phonetic: "Means “cheap / inexpensive” (also “peaceful, at ease”). Kun-reading: yasu(i). On-reading: an.",
      mnemonic: "A woman 女 safe under a roof — calm, at ease… and easy on the wallet.",
      words: [
        { jp: "安い", meaning: "cheap", romaji: "yasui", emoji: "🏷️", hint: "高い and 安い are the price opposites — the pair you'll use shopping." },
        { jp: "安い みせ", meaning: "a cheap shop", romaji: "yasui mise", emoji: "🏪", hint: "みせ (mise) = shop / store." },
      ],
    },
    { kind: "writing", char: "安", script: "kanji" },
    {
      kind: "grammar",
      intro: "One rule for almost every い-adjective, plus the single exception worth memorising.",
      patterns: [
        {
          id: "i-adj-negative",
          title: "〜い → 〜くない です",
          titleRomaji: "~i → ~kunai desu",
          subtitle: "Drop the final い, add くない.",
          pattern: [
            { text: "たか", highlight: false },
            { text: "くない", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "taka-kunai desu",
          note: "To say an い-adjective is NOT true, remove the final い and add くない: たかい → たかくない (“not expensive”), おいしい → おいしくない (“not tasty”). Add です to stay polite: たかくない です. There's also a more formal variant, 〜く ありません (たかく ありません) — same meaning, slightly stiffer. Both are correct; 〜くない です is the everyday choice.",
          tip: "Only the final い changes — never touch the rest. ちいさい → ちいさくない (not ✗ちいさくないい). And don't say ✗たかい じゃ ない — that じゃ ない negative is for な-adjectives and nouns, not い-adjectives.",
          examples: [
            {
              jp: "この かばん は たかくない です。",
              romaji: "Kono kaban wa takakunai desu.",
              en: "This bag isn't expensive.",
              breakdown: [
                { jp: "この かばん は", en: "this bag (topic)" },
                { jp: "たかくない", en: "not expensive" },
                { jp: "です", en: "is (polite)" },
              ],
            },
            {
              jp: "へや は さむくない です。",
              romaji: "Heya wa samukunai desu.",
              en: "The room isn't cold.",
              breakdown: [
                { jp: "へや は", en: "the room (topic)" },
                { jp: "さむくない", en: "not cold" },
                { jp: "です", en: "is (polite)" },
              ],
            },
          ],
          apply: {
            prompt: "Say “this book isn't cheap.”",
            options: ["この ほん は やすくない です。", "この ほん は やす です。", "この ほん は やすい じゃ ない です。"],
            optionsRomaji: ["Kono hon wa yasukunai desu.", "Kono hon wa yasu desu.", "Kono hon wa yasui ja nai desu."],
            correct: 0,
            explanation: "やすい → drop い, add くない → やすくない です. The じゃ ない negative is only for な-adjectives/nouns.",
          },
        },
        {
          id: "ii-irregular",
          title: "いい → よくない (the one irregular)",
          titleRomaji: "ii → yokunai",
          subtitle: "“Good” secretly comes from よい.",
          pattern: [
            { text: "いい", highlight: false },
            { text: "→ よくない", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "ii → yokunai desu",
          note: "いい (“good”) is the only everyday い-adjective that conjugates irregularly. Its older form is よい, and every changed form is built from よ-, not い-. So the negative is よくない です (“not good”), never ✗いくない. The plain “good” form stays いい; only when it changes does it switch to よ-. You'll see this again with the past tense (よかった) next lesson.",
          tip: "Memory hook: “いい is good as-is, but the moment it bends, it becomes よ-.” So いい です (good) but よくない です (not good).",
          examples: [
            {
              jp: "てんき は よくない です。",
              romaji: "Tenki wa yokunai desu.",
              en: "The weather isn't good.",
              breakdown: [
                { jp: "てんき は", en: "the weather (topic)" },
                { jp: "よくない", en: "not good" },
                { jp: "です", en: "is (polite)" },
              ],
            },
            {
              jp: "この みせ は わるくない です。",
              romaji: "Kono mise wa warukunai desu.",
              en: "This shop isn't bad.",
              breakdown: [
                { jp: "この みせ は", en: "this shop (topic)" },
                { jp: "わるくない", en: "not bad" },
                { jp: "です", en: "is (polite)" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say “it's not good”?",
            options: ["いくない です。", "よくない です。", "いい くない です。"],
            optionsRomaji: ["ikunai desu.", "yokunai desu.", "ii kunai desu."],
            correct: 1,
            explanation: "いい becomes よ- when it conjugates: よくない です. (わるい “bad” is regular: わるくない.)",
          },
        },
      ],
      practice: [
        {
          question: "Make it negative: たかい (expensive) →",
          options: ["たかくない", "たかいない", "たか じゃ ない"],
          optionsRomaji: ["takakunai", "takainai", "taka ja nai"],
          correct: 0,
          explanation: "Drop the final い, add くない: たかくない.",
          concept: "〜くない",
        },
        {
          question: "Which kanji means “cheap”?",
          options: ["高", "安", "大"],
          optionsRomaji: ["takai", "yasui", "ookii"],
          correct: 1,
          explanation: "安 = cheap (a woman safe under a roof). 高 = expensive/tall.",
          concept: "高 / 安",
        },
        {
          question: "The negative of いい (good) is…",
          options: ["いくない", "よくない", "いいない"],
          optionsRomaji: ["ikunai", "yokunai", "iinai"],
          correct: 1,
          explanation: "いい is irregular — it becomes よ- when it conjugates: よくない です.",
          concept: "いい → よくない",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "たかくない です", romaji: "takakunai desu", en: "it's not expensive" },
        { text: "この みせ は やすい です", romaji: "kono mise wa yasui desu", en: "this shop is cheap", accept: ["この店は安いです"] },
        { text: "てんき は よくない です", romaji: "tenki wa yokunai desu", en: "the weather isn't good" },
      ],
    },
    {
      kind: "microstory",
      setting: "At the shopping street",
      emoji: "🛍️",
      intro: "Kenji and Yui are browsing a shōtengai (shopping street), comparing two bags.",
      lines: [
        { speaker: "narrator", en: "Two bags sit side by side in a shop window." },
        { speaker: "yui", jp: "この かばん、たかい です ね。", romaji: "Kono kaban, takai desu ne.", en: "This bag is expensive, isn't it." },
        { speaker: "kenji", jp: "そう です ね。でも、あの みせ は やすい です。", romaji: "Sou desu ne. Demo, ano mise wa yasui desu.", en: "It is. But that shop over there is cheap." },
        { speaker: "yui", jp: "あの あたらしい かばん は たかくない です か？", romaji: "Ano atarashii kaban wa takakunai desu ka?", en: "That new bag isn't expensive?" },
        { speaker: "kenji", jp: "はい、たかくない です。やすい です よ。", romaji: "Hai, takakunai desu. Yasui desu yo.", en: "No, it's not expensive. It's cheap." },
        { speaker: "yui", jp: "いい です ね！", romaji: "Ii desu ne!", en: "Nice!" },
      ],
      comprehension: [
        {
          question: "What does Yui say about the first bag?",
          options: ["It's cheap", "It's expensive", "It's old", "It's small"],
          correct: 1,
          explanation: "この かばん、たかい です ね — this bag is expensive.",
        },
        {
          question: "Is the new bag in the other shop expensive?",
          options: ["Yes, very", "No, it's not expensive", "It's sold out", "Kenji doesn't know"],
          correct: 1,
          explanation: "たかくない です。やすい です よ — not expensive, it's cheap.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Negative い-adjective: drop い → add くない (です): たかい → たかくない",
        "Stiffer variant: 〜く ありません (たかく ありません)",
        "Irregular: いい → よくない (it becomes よ- when it bends)",
        "New kanji: 高 (expensive / tall) and 安 (cheap)",
      ],
      badge: { name: "Bargain Hunter", emoji: "🏷️" },
    },
  ],
};
