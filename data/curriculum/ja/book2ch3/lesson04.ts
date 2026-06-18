import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 4 — the past tense of adjectives.
 * い-adjectives: 〜い → 〜かった (です), with いい → よかった. な-adjectives & nouns:
 * 〜でした. Negatives: 〜くなかった です / 〜じゃ なかった です. No new kanji — this
 * is the conjugation payoff of the whole chapter.
 */
export const book2Chapter3Lesson04: Lesson = {
  id: "ja-2-ch3-4",
  chapterId: "ja-2-ch3",
  number: 4,
  title: "How was it? — past adjectives",
  titleNative: "〜かった / でした",
  subtitle: "Looking back",
  summary:
    "Talk about how things were: い-adjectives go 〜い → 〜かった です (たのしかった), with いい → よかった; な-adjectives and nouns use でした. Plus the past negatives 〜くなかった です and 〜じゃ なかった です.",
  xp: 70,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch3-3",
  steps: [
    {
      kind: "intro",
      title: "“It was fun.”",
      subtitle:
        "Adjectives carry their own tense in Japanese — you don't add a past “was”. An い-adjective bends its tail to 〜かった; a な-adjective or noun borrows でした. By the end you can review a trip, a meal, or a festival in the past.",
      goals: [
        "Put い-adjectives in the past: たのしい → たのしかった です",
        "Use でした for な-adjectives & nouns: しずか でした",
        "Form the past negatives: 〜くなかった です / 〜じゃ なかった です",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro:
        "A few event words to talk about — the things you'll describe in the past this lesson.",
      words: [
        { text: "おまつり", romaji: "omatsuri", meaning: "festival", emoji: "🎆", example: { jp: "おまつり は たのしかった です。", romaji: "Omatsuri wa tanoshikatta desu.", en: "The festival was fun." } },
        { text: "りょこう", romaji: "ryokou", meaning: "trip / travel", emoji: "🧳", example: { jp: "りょこう は よかった です。", romaji: "Ryokou wa yokatta desu.", en: "The trip was good." } },
        { text: "えいが", romaji: "eiga", meaning: "movie", emoji: "🎬", example: { jp: "えいが は おもしろかった です。", romaji: "Eiga wa omoshirokatta desu.", en: "The movie was interesting." } },
        { text: "てんき", romaji: "tenki", meaning: "weather", emoji: "☀️", example: { jp: "てんき は よかった です。", romaji: "Tenki wa yokatta desu.", en: "The weather was good." } },
        { text: "ごはん", romaji: "gohan", meaning: "meal / rice", emoji: "🍚", example: { jp: "ごはん は おいしかった です。", romaji: "Gohan wa oishikatta desu.", en: "The meal was delicious." } },
        { text: "きのう", romaji: "kinou", meaning: "yesterday", emoji: "📅", example: { jp: "きのう は さむかった です。", romaji: "Kinou wa samukatta desu.", en: "Yesterday was cold." } },
      ],
    },
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
          note: "For the past tense of an い-adjective, drop the final い and add かった: たのしい → たのしかった (“was fun”), おいしい → おいしかった (“was delicious”). Keep です on the end for politeness — and note です itself does NOT become でした here, because the adjective already shows the past: たのしかった です, never ✗たのしい でした. The past negative drops い → くなかった: さむい → さむくなかった です (“wasn't cold”).",
          tip: "It's the same “chop the い” move you learned for the negative — くない just becomes かった. So: たかい → たかくない (isn't) → たかくなかった (wasn't). One root, three endings.",
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
              jp: "きのう は さむくなかった です。",
              romaji: "Kinou wa samukunakatta desu.",
              en: "Yesterday wasn't cold.",
              breakdown: [
                { jp: "きのう は", en: "yesterday (topic)" },
                { jp: "さむくなかった", en: "wasn't cold" },
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
          subtitle: "The same irregular, in the past.",
          pattern: [
            { text: "いい", highlight: false },
            { text: "→ よかった", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "ii → yokatta desu",
          note: "Just like the negative (よくない), the past of いい is built on よ-: いい → よかった です (“was good”). よかった on its own is also a super-common way to say “oh good!” / “what a relief”. The past negative is よくなかった です (“wasn't good”).",
          tip: "Collect the いい forms together: いい (good) · よくない (not good) · よかった (was good) · よくなかった (wasn't good). Only the dictionary form keeps い-.",
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
          note: "な-adjectives don't have their own past form — they use でした (the past of です): しずか でした (“was quiet”), ゆうめい でした (“was famous”). Nouns work identically: がくせい でした (“was a student”). The past negative is じゃ なかった です (or じゃ ありませんでした): しずか じゃ なかった です (“wasn't quiet”).",
          tip: "This is exactly why you must know which family a word is in. い-adjective → かった (たのしかった). な-adjective/noun → でした (しずか でした). Mixing them (✗たのしい でした / ✗しずかかった) is the giveaway of a guess.",
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
              jp: "へや は きれい じゃ なかった です。",
              romaji: "Heya wa kirei ja nakatta desu.",
              en: "The room wasn't clean.",
              breakdown: [
                { jp: "へや は", en: "the room (topic)" },
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
          question: "“The weather wasn't good.” てんき は ＿＿。",
          jp: "てんき は ＿＿。",
          romaji: "Tenki wa ＿＿.",
          options: ["よくなかった です", "いくなかった です", "よかった じゃ ない です"],
          optionsRomaji: ["yokunakatta desu", "ikunakatta desu", "yokatta ja nai desu"],
          correct: 0,
          explanation: "いい → よ- in every changed form: past negative is よくなかった です.",
          concept: "いい → よくなかった",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "おまつり は たのしかった です", romaji: "omatsuri wa tanoshikatta desu", en: "the festival was fun" },
        { text: "ごはん は おいしかった です", romaji: "gohan wa oishikatta desu", en: "the meal was delicious", accept: ["ご飯はおいしかったです"] },
        { text: "まち は にぎやか でした", romaji: "machi wa nigiyaka deshita", en: "the town was lively" },
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
        { speaker: "hana", jp: "はい、おいしかった です。でも、にぎやか でした。", romaji: "Hai, oishikatta desu. Demo, nigiyaka deshita.", en: "Yes, it was delicious. But it was crowded." },
        { speaker: "kenji", jp: "てんき は？", romaji: "Tenki wa?", en: "And the weather?" },
        { speaker: "hana", jp: "よくなかった です。さむかった です。", romaji: "Yokunakatta desu. Samukatta desu.", en: "It wasn't good. It was cold." },
      ],
      comprehension: [
        {
          question: "How was the festival food?",
          options: ["Expensive", "Delicious", "Cold", "Bad"],
          correct: 1,
          explanation: "おいしかった です — it was delicious.",
        },
        {
          question: "What was the weather like?",
          options: ["Good and warm", "Not good — it was cold", "Lively", "She doesn't say"],
          correct: 1,
          explanation: "よくなかった です。さむかった です — it wasn't good; it was cold.",
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
        "です stays です — the adjective carries the tense (✗たのしい でした)",
      ],
      badge: { name: "Looking Back", emoji: "🎆" },
    },
  ],
};
