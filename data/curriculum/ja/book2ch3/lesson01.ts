import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 1 — い-adjectives in the present.
 * The two core jobs: in front of a noun (おおきい いえ) and at the end of a
 * sentence (この いえ は おおきい です). First two adjective kanji: 大 and 小.
 */
export const book2Chapter3Lesson01: Lesson = {
  id: "ja-2-ch3-1",
  chapterId: "ja-2-ch3",
  number: 1,
  title: "い-adjectives — big, small, new",
  titleNative: "い けいようし",
  subtitle: "Describing things",
  summary:
    "Describe the world with い-adjectives: put them in front of a noun (おおきい いえ) or at the end with です (いえ は おおきい です). Your first two adjective kanji: 大 and 小.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch2-5",
  steps: [
    {
      kind: "intro",
      title: "Big house, small cat",
      subtitle:
        "You can say what's there (あります／います) — now say what it's like. Japanese has a whole class of words that end in い and work like “big”, “new”, “fun”. They do two jobs: sit in front of a noun, or finish a sentence with です.",
      goals: [
        "Use い-adjectives in front of a noun: おおきい いえ (a big house)",
        "Finish a sentence with one: この いえ は おおきい です",
        "Read and write the kanji 大 (big) and 小 (small)",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro:
        "Six い-adjectives to describe things. Notice they all end in い — that's the family name.",
      words: [
        { text: "おおきい", romaji: "ookii", meaning: "big", emoji: "🐘", example: { jp: "おおきい いえ。", romaji: "Ookii ie.", en: "A big house." } },
        { text: "ちいさい", romaji: "chiisai", meaning: "small", emoji: "🐜", example: { jp: "ちいさい ねこ。", romaji: "Chiisai neko.", en: "A small cat." } },
        { text: "あたらしい", romaji: "atarashii", meaning: "new", emoji: "✨", example: { jp: "あたらしい かばん。", romaji: "Atarashii kaban.", en: "A new bag." } },
        { text: "ふるい", romaji: "furui", meaning: "old (things)", emoji: "📜", example: { jp: "ふるい ほん。", romaji: "Furui hon.", en: "An old book." } },
        { text: "たのしい", romaji: "tanoshii", meaning: "fun / enjoyable", emoji: "🎉", example: { jp: "たのしい パーティー。", romaji: "Tanoshii paatii.", en: "A fun party." } },
        { text: "おいしい", romaji: "oishii", meaning: "delicious", emoji: "🍜", example: { jp: "おいしい ラーメン。", romaji: "Oishii raamen.", en: "Delicious ramen." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "大",
      romaji: "oo / dai",
      phonetic: "Means “big / large”. Kun-reading: oo(kii). On-reading: dai / tai.",
      mnemonic: "A person 人 stretching both arms out as wide as they can — “it's THIS big!”",
      words: [
        { jp: "大きい", meaning: "big", romaji: "ookii", emoji: "🐘", hint: "The kanji carries the meaning; the い (okurigana) stays in hiragana: 大きい." },
        { jp: "大きい いえ", meaning: "a big house", romaji: "ookii ie", emoji: "🏠", hint: "Straight in front of the noun — no particle needed." },
      ],
    },
    { kind: "writing", char: "大", script: "kanji" },
    {
      kind: "character",
      script: "kanji",
      char: "小",
      romaji: "chii / shou",
      phonetic: "Means “small / little”. Kun-reading: chii(sai). On-reading: shou.",
      mnemonic: "A tiny central line with two small specks falling off either side — small, smaller, smallest.",
      words: [
        { jp: "小さい", meaning: "small", romaji: "chiisai", emoji: "🐜", hint: "Same okurigana pattern: kanji + さい → 小さい." },
        { jp: "小さい ねこ", meaning: "a small cat", romaji: "chiisai neko", emoji: "🐱", hint: "大 and 小 are a classic opposite pair — learn them together." },
      ],
    },
    { kind: "writing", char: "小", script: "kanji" },
    {
      kind: "grammar",
      intro: "い-adjectives have exactly two placements. Master both and you can describe anything.",
      patterns: [
        {
          id: "i-adj-attributive",
          title: "い-adjective + Noun",
          titleRomaji: "ii-adjective + Noun",
          subtitle: "Describe a noun by putting the adjective right in front of it.",
          pattern: [
            { text: "おおきい", highlight: true },
            { text: "いえ", highlight: false },
          ],
          patternRomaji: "ookii  ie",
          note: "To describe a noun, just place the い-adjective directly before it — no particle, nothing between them. おおきい いえ = “a big house”, あたらしい かばん = “a new bag”. The adjective keeps its final い. This is the same word order as English (“big house”), which makes it the easy case.",
          tip: "Don't add の between the adjective and the noun. It's おおきい いえ, never ✗おおきい の いえ. The の-link is only for noun + noun (わたし の いえ).",
          examples: [
            {
              jp: "ちいさい ねこ。",
              romaji: "Chiisai neko.",
              en: "A small cat.",
              breakdown: [
                { jp: "ちいさい", en: "small" },
                { jp: "ねこ", en: "cat" },
              ],
            },
            {
              jp: "あたらしい かばん が あります。",
              romaji: "Atarashii kaban ga arimasu.",
              en: "There's a new bag.",
              breakdown: [
                { jp: "あたらしい", en: "new" },
                { jp: "かばん が", en: "a bag" },
                { jp: "あります", en: "there is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say “a big book”?",
            options: ["ほん おおきい", "おおきい ほん", "おおきい の ほん"],
            optionsRomaji: ["hon ookii", "ookii hon", "ookii no hon"],
            correct: 1,
            explanation: "The adjective comes first, directly in front of the noun, with no の: おおきい ほん.",
          },
        },
        {
          id: "i-adj-predicate",
          title: "Noun は い-adjective です",
          titleRomaji: "Noun wa ii-adjective desu",
          subtitle: "End a sentence with an い-adjective.",
          pattern: [
            { text: "この いえ は", highlight: false },
            { text: "おおきい", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "kono ie wa  ookii  desu",
          note: "To make a full sentence, name the topic with は and end with the adjective + です. この いえ は おおきい です = “this house is big”. The です here is just politeness — the adjective already means “is big”, so you never put です *and* drop the い. Keep the whole adjective: おおきい です, not ✗おおき です.",
          tip: "い-adjectives don't need な or の to attach to です — that's a な-adjective habit (coming in Lesson 3). For い-adjectives it's simply 〜い です.",
          examples: [
            {
              jp: "この ほん は ふるい です。",
              romaji: "Kono hon wa furui desu.",
              en: "This book is old.",
              breakdown: [
                { jp: "この ほん は", en: "this book (topic)" },
                { jp: "ふるい", en: "old" },
                { jp: "です", en: "is (polite)" },
              ],
            },
            {
              jp: "ラーメン は おいしい です。",
              romaji: "Raamen wa oishii desu.",
              en: "The ramen is delicious.",
              breakdown: [
                { jp: "ラーメン は", en: "the ramen (topic)" },
                { jp: "おいしい", en: "delicious" },
                { jp: "です", en: "is (polite)" },
              ],
            },
          ],
          apply: {
            prompt: "Say “this cat is small.”",
            options: ["この ねこ は ちいさい です。", "この ねこ は ちいさ です。", "この ちいさい ねこ です か。"],
            optionsRomaji: ["Kono neko wa chiisai desu.", "Kono neko wa chiisa desu.", "Kono chiisai neko desu ka."],
            correct: 0,
            explanation: "Keep the full adjective and add です: ちいさい です. Don't drop the final い.",
          },
        },
      ],
      practice: [
        {
          question: "Which means “a new house”?",
          options: ["いえ あたらしい", "あたらしい いえ", "あたらしい の いえ"],
          optionsRomaji: ["ie atarashii", "atarashii ie", "atarashii no ie"],
          correct: 1,
          explanation: "Adjective in front of the noun, no の: あたらしい いえ.",
          concept: "い-adj + noun",
        },
        {
          question: "Fill the blank: “This ramen is delicious.” ラーメン は ＿＿ です。",
          jp: "ラーメン は ＿＿ です。",
          romaji: "Raamen wa ＿＿ desu.",
          options: ["おいし", "おいしい", "おいしい の"],
          optionsRomaji: ["oishi", "oishii", "oishii no"],
          correct: 1,
          explanation: "Keep the whole adjective before です: おいしい です.",
          concept: "〜い です",
        },
        {
          question: "Which kanji means “big”?",
          options: ["小", "大", "中"],
          optionsRomaji: ["chiisai", "ookii", "naka"],
          correct: 1,
          explanation: "大 = big (a person with arms wide). 小 = small. 中 = inside/middle (from last chapter).",
          concept: "大 / 小",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "おおきい いえ", romaji: "ookii ie", en: "a big house", accept: ["大きい家"] },
        { text: "ちいさい ねこ", romaji: "chiisai neko", en: "a small cat", accept: ["小さい猫"] },
        { text: "この ラーメン は おいしい です", romaji: "kono raamen wa oishii desu", en: "this ramen is delicious" },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's new apartment",
      emoji: "🏠",
      intro: "Tanaka visits Hana's new place for the first time. He has opinions about everything.",
      lines: [
        { speaker: "narrator", en: "Tanaka steps into the apartment and looks around." },
        { speaker: "tanaka", jp: "おおきい へや です ね！", romaji: "Ookii heya desu ne!", en: "What a big room!" },
        { speaker: "hana", jp: "はい。でも、ねこ は ちいさい です。", romaji: "Hai. Demo, neko wa chiisai desu.", en: "Yes. But the cat is small." },
        { speaker: "tanaka", jp: "あたらしい つくえ です か？", romaji: "Atarashii tsukue desu ka?", en: "Is that a new desk?" },
        { speaker: "hana", jp: "いいえ、ふるい です。でも、すき です。", romaji: "Iie, furui desu. Demo, suki desu.", en: "No, it's old. But I like it." },
        { speaker: "tanaka", jp: "この ほん も おもしろい です ね。", romaji: "Kono hon mo omoshiroi desu ne.", en: "This book looks interesting too." },
      ],
      comprehension: [
        {
          question: "What does Tanaka say about the room?",
          options: ["It's small", "It's big", "It's old", "It's new"],
          correct: 1,
          explanation: "おおきい へや です ね — “what a big room!”",
        },
        {
          question: "Is the desk new?",
          options: ["Yes, it's brand new", "No, it's old", "It's a chair, not a desk", "Hana doesn't say"],
          correct: 1,
          explanation: "いいえ、ふるい です — no, it's old (but Hana likes it anyway).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "い-adjectives end in い: おおきい, ちいさい, あたらしい, ふるい, たのしい, おいしい",
        "In front of a noun: おおきい いえ (no の!)",
        "At the end of a sentence: いえ は おおきい です (keep the full い)",
        "New kanji: 大 (big) and 小 (small)",
      ],
      badge: { name: "Describer", emoji: "🔍" },
    },
  ],
};
