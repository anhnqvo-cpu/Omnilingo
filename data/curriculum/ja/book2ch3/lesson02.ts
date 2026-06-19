import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 2 — the PAST tense of adjectives, the
 * first thing Book 1 never taught. い-adjectives: 〜い → 〜かった (です), with
 * いい → よかった. な-adjectives & nouns: でした. Kanji 高 (expensive) and 安 (cheap).
 */
export const book2Chapter3Lesson02: Lesson = {
  id: "ja-2-ch3-2",
  chapterId: "ja-2-ch3",
  number: 2,
  title: "How was it? — past adjectives",
  titleNative: "〜かった / でした",
  subtitle: "Looking back",
  summary:
    "Talk about how things were: い-adjectives carry their own past, 〜い → 〜かった です (たのしかった), with いい → よかった; な-adjectives and nouns borrow でした. Plus the past negatives. New kanji: 高 and 安.",
  xp: 70,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch3-1",
  steps: [
    {
      kind: "intro",
      title: "“It was fun.”",
      subtitle:
        "In Book 1 you described things in the present. Now look back. Adjectives carry their own tense in Japanese — you don't add a past “was”. An い-adjective bends its tail to 〜かった; a な-adjective or noun borrows でした.",
      goals: [
        "Put い-adjectives in the past: たのしい → たのしかった です",
        "Use でした for な-adjectives & nouns: しずか でした",
        "Form past negatives, and write 高 (expensive) and 安 (cheap)",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro:
        "Event words to look back on, plus the price pair you'll write today.",
      words: [
        { text: "おまつり", romaji: "omatsuri", meaning: "festival", emoji: "🎆", example: { jp: "おまつり は たのしかった です。", romaji: "Omatsuri wa tanoshikatta desu.", en: "The festival was fun." } },
        { text: "りょこう", romaji: "ryokou", meaning: "trip / travel", emoji: "🧳", example: { jp: "りょこう は よかった です。", romaji: "Ryokou wa yokatta desu.", en: "The trip was good." } },
        { text: "えいが", romaji: "eiga", meaning: "movie", emoji: "🎬", example: { jp: "えいが は おもしろかった です。", romaji: "Eiga wa omoshirokatta desu.", en: "The movie was interesting." } },
        { text: "ごはん", romaji: "gohan", meaning: "meal / rice", emoji: "🍚", example: { jp: "ごはん は おいしかった です。", romaji: "Gohan wa oishikatta desu.", en: "The meal was delicious." } },
        { text: "たかい", romaji: "takai", meaning: "expensive / tall", emoji: "💰", example: { jp: "たかい かばん。", romaji: "Takai kaban.", en: "An expensive bag." } },
        { text: "やすい", romaji: "yasui", meaning: "cheap", emoji: "🏷️", example: { jp: "やすい みせ。", romaji: "Yasui mise.", en: "A cheap shop." } },
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
        { jp: "高かった", meaning: "was expensive", romaji: "takakatta", emoji: "🧾", hint: "Today's past form: 高い → 高かった." },
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
        { jp: "安かった", meaning: "was cheap", romaji: "yasukatta", emoji: "🛍️", hint: "Past form: 安い → 安かった." },
      ],
    },
    { kind: "writing", char: "安", script: "kanji" },
    {
      kind: "grammar",
      intro: "Two past patterns by family — and they never overlap.",
      patterns: [
        {
          id: "i-adj-past",
          title: "〜い → 〜かった です",
          titleRomaji: "~i → ~katta desu",
          subtitle: "い-adjectives carry their own past tense.",
          pattern: [
            { text: "たのし", highlight: false },
            { text: "かった", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "tanoshi-katta desu",
          note: "For the past of an い-adjective, drop the final い and add かった: たのしい → たのしかった (“was fun”), たかい → たかかった (“was expensive”). Keep です for politeness — and note です itself does NOT become でした here, because the adjective already shows the past: たのしかった です, never ✗たのしい でした. The past negative drops い → くなかった: さむい → さむくなかった です (“wasn't cold”).",
          tip: "It's the same “chop the い” move as the negative — just swap くない for かった. So たかい → たかくない (isn't) → たかかった (was) → たかくなかった (wasn't). One stem, many tails.",
          examples: [
            {
              jp: "おまつり は たのしかった です。",
              romaji: "Omatsuri wa tanoshikatta desu.",
              en: "The festival was fun.",
              breakdown: [
                { jp: "おまつり は", en: "the festival (topic)" },
                { jp: "たのしかった", en: "was fun" },
                { jp: "です", en: "(polite)" },
              ],
            },
            {
              jp: "かばん は たかくなかった です。",
              romaji: "Kaban wa takakunakatta desu.",
              en: "The bag wasn't expensive.",
              breakdown: [
                { jp: "かばん は", en: "the bag (topic)" },
                { jp: "たかくなかった", en: "wasn't expensive" },
                { jp: "です", en: "(polite)" },
              ],
            },
          ],
          apply: {
            prompt: "Say “the meal was delicious.”",
            options: ["ごはん は おいしい でした。", "ごはん は おいしかった です。", "ごはん は おいし でした。"],
            optionsRomaji: ["Gohan wa oishii deshita.", "Gohan wa oishikatta desu.", "Gohan wa oishi deshita."],
            correct: 1,
            explanation: "The adjective takes the past (おいしかった); です stays です. ✗おいしい でした is the #1 mistake.",
          },
        },
        {
          id: "ii-past-irregular",
          title: "いい → よかった",
          titleRomaji: "ii → yokatta",
          subtitle: "The familiar irregular, in the past.",
          pattern: [
            { text: "いい", highlight: false },
            { text: "→ よかった", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "ii → yokatta desu",
          note: "Just as いい became よくない in the negative (Book 1), its past is built on よ-: いい → よかった です (“was good”). よかった on its own is also a super-common “oh good!” / “what a relief”. The past negative is よくなかった です (“wasn't good”).",
          tip: "Collect all the いい forms: いい (good) · よくない (not good) · よかった (was good) · よくなかった (wasn't good). Only the plain dictionary form keeps い-.",
          examples: [
            {
              jp: "りょこう は よかった です。",
              romaji: "Ryokou wa yokatta desu.",
              en: "The trip was good.",
              breakdown: [
                { jp: "りょこう は", en: "the trip (topic)" },
                { jp: "よかった", en: "was good" },
                { jp: "です", en: "(polite)" },
              ],
            },
            {
              jp: "てんき は よくなかった です。",
              romaji: "Tenki wa yokunakatta desu.",
              en: "The weather wasn't good.",
              breakdown: [
                { jp: "てんき は", en: "the weather (topic)" },
                { jp: "よくなかった", en: "wasn't good" },
                { jp: "です", en: "(polite)" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say “the trip was good”?",
            options: ["りょこう は いかった です。", "りょこう は よかった です。", "りょこう は いい でした。"],
            optionsRomaji: ["Ryokou wa ikatta desu.", "Ryokou wa yokatta desu.", "Ryokou wa ii deshita."],
            correct: 1,
            explanation: "いい conjugates as よ-: よかった です. (✗いい でした and ✗いかった are both wrong.)",
          },
        },
        {
          id: "na-adj-past",
          title: "な-adjective / Noun + でした",
          titleRomaji: "na-adjective / Noun + deshita",
          subtitle: "These borrow でした — the past of です.",
          pattern: [
            { text: "しずか", highlight: false },
            { text: "でした", highlight: true },
          ],
          patternRomaji: "shizuka deshita",
          note: "な-adjectives have no past form of their own — they use でした (the past of です): しずか でした (“was quiet”), ゆうめい でした (“was famous”). Nouns work identically: がくせい でした (“was a student”). The past negative is じゃ なかった です (or じゃ ありませんでした): しずか じゃ なかった です (“wasn't quiet”).",
          tip: "This is exactly why you must know each word's family. い-adjective → かった (たかかった). な-adjective/noun → でした (しずか でした). Mixing them (✗たかい でした / ✗しずかかった) gives a guess away.",
          examples: [
            {
              jp: "まち は にぎやか でした。",
              romaji: "Machi wa nigiyaka deshita.",
              en: "The town was lively.",
              breakdown: [
                { jp: "まち は", en: "the town (topic)" },
                { jp: "にぎやか", en: "lively" },
                { jp: "でした", en: "was" },
              ],
            },
            {
              jp: "みせ は きれい じゃ なかった です。",
              romaji: "Mise wa kirei ja nakatta desu.",
              en: "The shop wasn't clean.",
              breakdown: [
                { jp: "みせ は", en: "the shop (topic)" },
                { jp: "きれい", en: "clean" },
                { jp: "じゃ なかった です", en: "wasn't" },
              ],
            },
          ],
          apply: {
            prompt: "Say “the festival was lively.”",
            options: ["おまつり は にぎやか でした。", "おまつり は にぎやかかった です。", "おまつり は にぎやか です でした。"],
            optionsRomaji: ["Omatsuri wa nigiyaka deshita.", "Omatsuri wa nigiyakakatta desu.", "Omatsuri wa nigiyaka desu deshita."],
            correct: 0,
            explanation: "な-adjectives use でした for the past: にぎやか でした. There's no かった form for them.",
          },
        },
      ],
      practice: [
        {
          question: "Past tense of たのしい (fun):",
          options: ["たのしい でした", "たのしかった です", "たのしくない です"],
          optionsRomaji: ["tanoshii deshita", "tanoshikatta desu", "tanoshikunai desu"],
          correct: 1,
          explanation: "い → かった: たのしかった です. です stays です.",
          concept: "〜かった です",
        },
        {
          question: "Past tense of しずか (quiet, a な-adjective):",
          options: ["しずかかった です", "しずか でした", "しずくなかった です"],
          optionsRomaji: ["shizukakatta desu", "shizuka deshita", "shizukunakatta desu"],
          correct: 1,
          explanation: "な-adjectives use でした: しずか でした.",
          concept: "〜でした",
        },
        {
          question: "Which kanji means “cheap”?",
          options: ["高", "安", "大"],
          optionsRomaji: ["takai", "yasui", "ookii"],
          correct: 1,
          explanation: "安 = cheap (a woman safe under a roof). 高 = expensive/tall.",
          concept: "高 / 安",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "おまつり は たのしかった です", romaji: "omatsuri wa tanoshikatta desu", en: "the festival was fun" },
        { text: "ごはん は おいしかった です", romaji: "gohan wa oishikatta desu", en: "the meal was delicious", accept: ["ご飯はおいしかったです"] },
        { text: "この かばん は たかくなかった です", romaji: "kono kaban wa takakunakatta desu", en: "this bag wasn't expensive", accept: ["このかばんは高くなかったです"] },
      ],
    },
    {
      kind: "microstory",
      setting: "The morning after the festival",
      emoji: "🎆",
      intro: "Kenji asks Hana how last night's summer festival went. She has mixed reviews.",
      lines: [
        { speaker: "narrator", en: "Kenji couldn't make it to the festival, and he's curious." },
        { speaker: "kenji", jp: "きのう の おまつり は どう でした か？", romaji: "Kinou no omatsuri wa dou deshita ka?", en: "How was the festival yesterday?" },
        { speaker: "hana", jp: "とても たのしかった です！", romaji: "Totemo tanoshikatta desu!", en: "It was really fun!" },
        { speaker: "kenji", jp: "ごはん は おいしかった です か？", romaji: "Gohan wa oishikatta desu ka?", en: "Was the food good?" },
        { speaker: "hana", jp: "はい。でも、ちょっと たかかった です。", romaji: "Hai. Demo, chotto takakatta desu.", en: "Yes. But it was a bit expensive." },
        { speaker: "kenji", jp: "まち は にぎやか でした か？", romaji: "Machi wa nigiyaka deshita ka?", en: "Was the town crowded?" },
        { speaker: "hana", jp: "にぎやか でした。でも、てんき は よくなかった です。", romaji: "Nigiyaka deshita. Demo, tenki wa yokunakatta desu.", en: "It was lively. But the weather wasn't good." },
      ],
      comprehension: [
        {
          question: "What does Hana say about the festival food?",
          options: ["It was cheap", "It was delicious but a bit expensive", "It was cold", "She didn't eat"],
          correct: 1,
          explanation: "おいしかった です。でも、ちょっと たかかった です — delicious, but a bit expensive.",
        },
        {
          question: "What was the weather like?",
          options: ["Good and warm", "Not good", "Lively", "She doesn't say"],
          correct: 1,
          explanation: "てんき は よくなかった です — the weather wasn't good (いい → よ-).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "い-adjective past: 〜い → 〜かった です (たのしかった です)",
        "Past negative: 〜くなかった です (さむくなかった です)",
        "Irregular: いい → よかった / よくなかった",
        "な-adjectives & nouns: でした · negative じゃ なかった です",
        "New kanji: 高 (expensive / tall) and 安 (cheap)",
      ],
      badge: { name: "Looking Back", emoji: "🎆" },
    },
  ],
};
