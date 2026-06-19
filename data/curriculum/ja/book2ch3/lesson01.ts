import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 1 — joining adjectives with 〜くて / 〜で.
 * Assumes present-tense adjectives from Book 1 Ch5; the new move is stringing two
 * qualities together: おおきくて あたらしい, しずかで べんり. Kanji 大 and 小.
 */
export const book2Chapter3Lesson01: Lesson = {
  id: "ja-2-ch3-1",
  chapterId: "ja-2-ch3",
  number: 1,
  title: "Big and bright — joining adjectives",
  titleNative: "〜くて / 〜で",
  subtitle: "Two qualities at once",
  summary:
    "You already describe things one adjective at a time. Now chain them: い-adjectives become 〜くて (おおきくて あたらしい) and な-adjectives become 〜で (しずかで べんり). First adjective kanji: 大 and 小.",
  xp: 65,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch2-5",
  steps: [
    {
      kind: "intro",
      title: "“Big AND new”",
      subtitle:
        "Quick recall from Book 1: い-adjectives (おおきい) and な-adjectives (しずか). This chapter takes them further. Step one — say two things at once. Japanese doesn't repeat です; instead the first adjective changes its tail: 〜くて for the い-type, 〜で for the な-type.",
      goals: [
        "Join two い-adjectives: おおきくて あたらしい (big and new)",
        "Join from a な-adjective: しずかで べんり (quiet and convenient)",
        "Read and write the kanji 大 (big) and 小 (small)",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro:
        "Six fresh い-adjectives for describing rooms and places — perfect for chaining together.",
      words: [
        { text: "ひろい", romaji: "hiroi", meaning: "spacious / wide", emoji: "🏞️", example: { jp: "ひろい へや。", romaji: "Hiroi heya.", en: "A spacious room." } },
        { text: "せまい", romaji: "semai", meaning: "cramped / narrow", emoji: "📦", example: { jp: "せまい へや。", romaji: "Semai heya.", en: "A cramped room." } },
        { text: "あかるい", romaji: "akarui", meaning: "bright", emoji: "💡", example: { jp: "あかるい へや。", romaji: "Akarui heya.", en: "A bright room." } },
        { text: "くらい", romaji: "kurai", meaning: "dark", emoji: "🌑", example: { jp: "くらい へや。", romaji: "Kurai heya.", en: "A dark room." } },
        { text: "あたたかい", romaji: "atatakai", meaning: "warm", emoji: "☀️", example: { jp: "あたたかい へや。", romaji: "Atatakai heya.", en: "A warm room." } },
        { text: "すずしい", romaji: "suzushii", meaning: "cool (pleasant)", emoji: "🍃", example: { jp: "すずしい かぜ。", romaji: "Suzushii kaze.", en: "A cool breeze." } },
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
        { jp: "大きくて あたらしい", meaning: "big and new", romaji: "ookikute atarashii", emoji: "🏠", hint: "The connecting form you're learning today: 大きい → 大きくて." },
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
        { jp: "小さくて かわいい", meaning: "small and cute", romaji: "chiisakute kawaii", emoji: "🐱", hint: "大 and 小 are a classic opposite pair — learn them together." },
      ],
    },
    { kind: "writing", char: "小", script: "kanji" },
    {
      kind: "grammar",
      intro: "One connector per family. Learn both and you can describe anything in full.",
      patterns: [
        {
          id: "i-adj-kute",
          title: "い-adjective → 〜くて (and…)",
          titleRomaji: "~i → ~kute",
          subtitle: "Drop the final い, add くて, keep going.",
          pattern: [
            { text: "おおき", highlight: false },
            { text: "くて", highlight: true },
            { text: "あたらしい です", highlight: false },
          ],
          patternRomaji: "ooki-kute  atarashii desu",
          note: "To link an い-adjective to whatever comes next, drop the final い and add くて: おおきい → おおきくて. The sentence's final adjective stays normal and takes です: この いえ は おおきくて あたらしい です (“this house is big and new”). Only the non-final adjectives become くて. One irregular, as always: いい → よくて.",
          tip: "くて usually links qualities of the same flavour (both good, or both bad). To join a plus and a minus — “small but convenient” — you'd use 〜が instead. For now, stick to same-direction pairs with くて.",
          examples: [
            {
              jp: "この へや は ひろくて あかるい です。",
              romaji: "Kono heya wa hirokute akarui desu.",
              en: "This room is spacious and bright.",
              breakdown: [
                { jp: "この へや は", en: "this room (topic)" },
                { jp: "ひろくて", en: "spacious and…" },
                { jp: "あかるい です", en: "is bright" },
              ],
            },
            {
              jp: "ちいさくて かわいい ねこ です。",
              romaji: "Chiisakute kawaii neko desu.",
              en: "It's a small, cute cat.",
              breakdown: [
                { jp: "ちいさくて", en: "small and…" },
                { jp: "かわいい", en: "cute" },
                { jp: "ねこ です", en: "is a cat" },
              ],
            },
          ],
          apply: {
            prompt: "Join them: “big and bright” (おおきい + あかるい).",
            options: ["おおきい あかるい", "おおきくて あかるい", "おおきで あかるい"],
            optionsRomaji: ["ookii akarui", "ookikute akarui", "ooki de akarui"],
            correct: 1,
            explanation: "い-adjectives connect with くて: おおきい → おおきくて あかるい.",
          },
        },
        {
          id: "na-adj-de",
          title: "な-adjective / Noun → 〜で (and…)",
          titleRomaji: "na-adjective / Noun → ~de",
          subtitle: "Just add で — no な, no くて.",
          pattern: [
            { text: "しずか", highlight: false },
            { text: "で", highlight: true },
            { text: "べんり です", highlight: false },
          ],
          patternRomaji: "shizuka de  benri desu",
          note: "な-adjectives connect with で: しずか → しずかで (“quiet and…”). この まち は しずかで べんり です (“this town is quiet and convenient”). Nouns join the same way — がくせい で にほんじん です (“is a student and Japanese”). This で is really the connecting form of です, so it covers both な-adjectives and nouns.",
          tip: "Don't mix the connectors: it's しずかで (な-adj), never ✗しずかくて, and おおきくて (い-adj), never ✗おおきで. The family decides which one you use — exactly like the negatives you'll review next lesson.",
          examples: [
            {
              jp: "この みせ は きれいで やすい です。",
              romaji: "Kono mise wa kirei de yasui desu.",
              en: "This shop is clean and cheap.",
              breakdown: [
                { jp: "この みせ は", en: "this shop (topic)" },
                { jp: "きれいで", en: "clean and… (な-adj)" },
                { jp: "やすい です", en: "is cheap" },
              ],
            },
            {
              jp: "まち は にぎやかで たのしい です。",
              romaji: "Machi wa nigiyaka de tanoshii desu.",
              en: "The town is lively and fun.",
              breakdown: [
                { jp: "まち は", en: "the town (topic)" },
                { jp: "にぎやかで", en: "lively and…" },
                { jp: "たのしい です", en: "is fun" },
              ],
            },
          ],
          apply: {
            prompt: "Join them: “quiet and convenient” (しずか + べんり).",
            options: ["しずかくて べんり", "しずかで べんり", "しずかな べんり"],
            optionsRomaji: ["shizukakute benri", "shizuka de benri", "shizuka na benri"],
            correct: 1,
            explanation: "な-adjectives connect with で: しずか → しずかで べんり.",
          },
        },
      ],
      practice: [
        {
          question: "Connect: “spacious and bright” (ひろい + あかるい).",
          options: ["ひろくて あかるい", "ひろで あかるい", "ひろい で あかるい"],
          optionsRomaji: ["hirokute akarui", "hiro de akarui", "hiroi de akarui"],
          correct: 0,
          explanation: "い-adjective → くて: ひろくて あかるい.",
          concept: "〜くて",
        },
        {
          question: "Connect: “famous and pretty” (ゆうめい + きれい — both な-adjectives).",
          options: ["ゆうめいくて きれい", "ゆうめいで きれい", "ゆうめいな きれい"],
          optionsRomaji: ["yuumeikute kirei", "yuumei de kirei", "yuumei na kirei"],
          correct: 1,
          explanation: "な-adjectives connect with で: ゆうめいで きれい.",
          concept: "〜で",
        },
        {
          question: "Which kanji means “big”?",
          options: ["小", "大", "中"],
          optionsRomaji: ["chiisai", "ookii", "naka"],
          correct: 1,
          explanation: "大 = big (a person with arms wide). 小 = small. 中 = inside/middle (last chapter).",
          concept: "大 / 小",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "おおきくて あたらしい いえ", romaji: "ookikute atarashii ie", en: "a big, new house", accept: ["大きくて新しい家"] },
        { text: "この へや は ひろくて あかるい です", romaji: "kono heya wa hirokute akarui desu", en: "this room is spacious and bright" },
        { text: "まち は しずかで べんり です", romaji: "machi wa shizuka de benri desu", en: "the town is quiet and convenient" },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's apartment tour",
      emoji: "🏠",
      intro: "Tanaka visits Hana's new place and can't stop describing it — two adjectives at a time.",
      lines: [
        { speaker: "narrator", en: "Tanaka steps inside and looks around the main room." },
        { speaker: "tanaka", jp: "わあ、ひろくて あかるい へや です ね！", romaji: "Waa, hirokute akarui heya desu ne!", en: "Wow, what a spacious, bright room!" },
        { speaker: "hana", jp: "ありがとう。でも、ちょっと さむい です。", romaji: "Arigatou. Demo, chotto samui desu.", en: "Thanks. But it's a little cold." },
        { speaker: "tanaka", jp: "この まち は どう ですか？", romaji: "Kono machi wa dou desu ka?", en: "How's the neighborhood?" },
        { speaker: "hana", jp: "しずかで べんり です。みせ も あります。", romaji: "Shizuka de benri desu. Mise mo arimasu.", en: "It's quiet and convenient. There are shops too." },
        { speaker: "tanaka", jp: "いい ね！おおきくて あたらしい アパート です。", romaji: "Ii ne! Ookikute atarashii apaato desu.", en: "Nice! It's a big, new apartment." },
      ],
      comprehension: [
        {
          question: "How does Tanaka describe the room?",
          options: ["Small and dark", "Spacious and bright", "Old and cheap", "Quiet and warm"],
          correct: 1,
          explanation: "ひろくて あかるい へや — spacious and bright.",
        },
        {
          question: "What does Hana say about the neighborhood?",
          options: ["Lively and fun", "Quiet and convenient", "Famous and pretty", "Cramped and dark"],
          correct: 1,
          explanation: "しずかで べんり です — quiet and convenient (な-adjectives joined with で).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Join い-adjectives with 〜くて: おおきくて あたらしい (irregular いい → よくて)",
        "Join な-adjectives & nouns with 〜で: しずかで べんり",
        "Only the LAST adjective stays plain + です; don't mix くて and で",
        "New kanji: 大 (big) and 小 (small)",
      ],
      badge: { name: "Both At Once", emoji: "🔗" },
    },
  ],
};
