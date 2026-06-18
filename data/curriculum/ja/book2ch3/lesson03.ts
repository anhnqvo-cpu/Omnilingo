import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 3 — な-adjectives: the second family.
 * They take な before a noun (きれいな はな) but nothing before です. Negative is
 * 〜じゃ ない です. Ties back to likes/dislikes (すき／きらい), which are な-adjectives.
 * No new kanji — the load here is the い-vs-な distinction.
 */
export const book2Chapter3Lesson03: Lesson = {
  id: "ja-2-ch3-3",
  chapterId: "ja-2-ch3",
  number: 3,
  title: "な-adjectives & likes",
  titleNative: "な けいようし",
  subtitle: "The second family",
  summary:
    "Meet the other adjective family: な-adjectives take な before a noun (しずかな へや) but plug straight into です. Negate with 〜じゃ ない です, and reconnect すき／きらい (likes/dislikes) as な-adjectives.",
  xp: 65,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch3-2",
  steps: [
    {
      kind: "intro",
      title: "A second kind of adjective",
      subtitle:
        "Not every adjective ends in い. A second family — な-adjectives — needs a little な to glue onto a noun (しずかな へや, “a quiet room”), but connects to です with nothing extra. すき and きらい (like / dislike) belong to this family too.",
      goals: [
        "Use な before a noun: しずかな へや (a quiet room)",
        "End a sentence: この へや は しずか です (no な before です)",
        "Negate with 〜じゃ ない です, and say likes with が すき です",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro:
        "Eight な-adjectives. Watch きれい — it ends in い but is actually a な-adjective (a classic trap).",
      words: [
        { text: "きれい", romaji: "kirei", meaning: "pretty / clean", emoji: "🌸", example: { jp: "きれいな はな。", romaji: "Kirei na hana.", en: "A pretty flower." } },
        { text: "しずか", romaji: "shizuka", meaning: "quiet", emoji: "🤫", example: { jp: "しずかな へや。", romaji: "Shizuka na heya.", en: "A quiet room." } },
        { text: "にぎやか", romaji: "nigiyaka", meaning: "lively / bustling", emoji: "🎏", example: { jp: "にぎやかな まち。", romaji: "Nigiyaka na machi.", en: "A lively town." } },
        { text: "べんり", romaji: "benri", meaning: "convenient", emoji: "🛠️", example: { jp: "べんりな みせ。", romaji: "Benri na mise.", en: "A convenient shop." } },
        { text: "ゆうめい", romaji: "yuumei", meaning: "famous", emoji: "🌟", example: { jp: "ゆうめいな ひと。", romaji: "Yuumei na hito.", en: "A famous person." } },
        { text: "げんき", romaji: "genki", meaning: "well / energetic", emoji: "💪", example: { jp: "げんきな こども。", romaji: "Genki na kodomo.", en: "An energetic child." } },
        { text: "すき", romaji: "suki", meaning: "liked / fond of", emoji: "❤️", example: { jp: "ねこ が すき です。", romaji: "Neko ga suki desu.", en: "I like cats." } },
        { text: "きらい", romaji: "kirai", meaning: "disliked", emoji: "🙅", example: { jp: "なっとう が きらい です。", romaji: "Nattou ga kirai desu.", en: "I dislike nattō." } },
      ],
    },
    {
      kind: "grammar",
      intro: "な-adjectives behave almost like い-adjectives — with one extra な, and a different negative.",
      patterns: [
        {
          id: "na-adj-attributive",
          title: "な-adjective + な + Noun",
          titleRomaji: "na-adjective + na + Noun",
          subtitle: "Glue it to a noun with な.",
          pattern: [
            { text: "しずか", highlight: false },
            { text: "な", highlight: true },
            { text: "へや", highlight: false },
          ],
          patternRomaji: "shizuka na heya",
          note: "To put a な-adjective in front of a noun, link them with な: しずかな へや (“a quiet room”), きれいな はな (“a pretty flower”). That な is the whole reason this family has its name. Compare with last lesson's い-adjectives, which attach with nothing at all (おおきい いえ). So the only structural difference between the two families is this little な.",
          tip: "きれい (pretty) and ゆうめい (famous) END in い but are な-adjectives — so it's きれいな はな, not ✗きれい はな. The “does it end in い?” test fails here; you simply learn which family each word belongs to (we mark every な-adjective for you).",
          examples: [
            {
              jp: "にぎやかな まち です。",
              romaji: "Nigiyaka na machi desu.",
              en: "It's a lively town.",
              breakdown: [
                { jp: "にぎやか な", en: "lively +" },
                { jp: "まち", en: "town" },
                { jp: "です", en: "is" },
              ],
            },
            {
              jp: "べんりな みせ が あります。",
              romaji: "Benri na mise ga arimasu.",
              en: "There's a convenient shop.",
              breakdown: [
                { jp: "べんり な", en: "convenient +" },
                { jp: "みせ が", en: "a shop" },
                { jp: "あります", en: "there is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say “a quiet room”?",
            options: ["しずか へや", "しずかな へや", "しずかい へや"],
            optionsRomaji: ["shizuka heya", "shizuka na heya", "shizukai heya"],
            correct: 1,
            explanation: "な-adjectives need な to attach to a noun: しずかな へや.",
          },
        },
        {
          id: "na-adj-predicate",
          title: "Noun は な-adjective です (no な)",
          titleRomaji: "Noun wa na-adjective desu",
          subtitle: "At the end of a sentence, drop the な.",
          pattern: [
            { text: "この へや は", highlight: false },
            { text: "しずか", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "kono heya wa  shizuka  desu",
          note: "When the adjective ends the sentence, you DON'T use な — you go straight to です: この へや は しずか です (“this room is quiet”). The な only appears when a noun follows. To make it negative, replace です with じゃ ない です (or the more formal じゃ ありません): この へや は しずか じゃ ない です (“this room isn't quiet”).",
          tip: "Mirror image of い-adjectives: い-adjectives change their own ending to go negative (たかくない), but な-adjectives and nouns use じゃ ない です. Never mix them — ✗しずかくない, ✗たかい じゃ ない are both wrong.",
          examples: [
            {
              jp: "まち は にぎやか です。",
              romaji: "Machi wa nigiyaka desu.",
              en: "The town is lively.",
              breakdown: [
                { jp: "まち は", en: "the town (topic)" },
                { jp: "にぎやか", en: "lively" },
                { jp: "です", en: "is" },
              ],
            },
            {
              jp: "へや は きれい じゃ ない です。",
              romaji: "Heya wa kirei ja nai desu.",
              en: "The room isn't clean.",
              breakdown: [
                { jp: "へや は", en: "the room (topic)" },
                { jp: "きれい", en: "clean" },
                { jp: "じゃ ない です", en: "isn't" },
              ],
            },
          ],
          apply: {
            prompt: "Say “this town isn't quiet.”",
            options: ["この まち は しずか じゃ ない です。", "この まち は しずかくない です。", "この まち は しずかな です。"],
            optionsRomaji: ["Kono machi wa shizuka ja nai desu.", "Kono machi wa shizukakunai desu.", "Kono machi wa shizuka na desu."],
            correct: 0,
            explanation: "な-adjective negative = じゃ ない です. The くない ending belongs to い-adjectives only.",
          },
        },
        {
          id: "suki-kirai",
          title: "X が すき です — likes & dislikes",
          titleRomaji: "X ga suki desu",
          subtitle: "“Like” is a な-adjective; the thing liked takes が.",
          pattern: [
            { text: "ねこ", highlight: false },
            { text: "が", highlight: true },
            { text: "すき です", highlight: false },
          ],
          patternRomaji: "neko ga suki desu",
          note: "In Japanese, “to like” isn't a verb — すき is a な-adjective meaning “likeable / pleasing”. The thing you like is marked with が, not を: ねこ が すき です = “I like cats” (literally “cats are pleasing”). きらい (“disliked”) works the same way: なっとう が きらい です. Strengthen with だい-: だいすき (love), だいきらい (hate).",
          tip: "Because すき／きらい are な-adjectives, their negative follows this lesson's rule: すき じゃ ない です (“don't (really) like”). And the object takes が — ✗ねこ を すき です is a classic beginner slip.",
          examples: [
            {
              jp: "コーヒー が すき です。",
              romaji: "Koohii ga suki desu.",
              en: "I like coffee.",
              breakdown: [
                { jp: "コーヒー が", en: "coffee (subject)" },
                { jp: "すき", en: "liked" },
                { jp: "です", en: "is" },
              ],
            },
            {
              jp: "なっとう が だいきらい です。",
              romaji: "Nattou ga daikirai desu.",
              en: "I really hate nattō.",
              breakdown: [
                { jp: "なっとう が", en: "nattō (subject)" },
                { jp: "だいきらい", en: "really disliked" },
                { jp: "です", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say “I like cats”?",
            options: ["ねこ を すき です。", "ねこ が すき です。", "ねこ が すきい です。"],
            optionsRomaji: ["Neko wo suki desu.", "Neko ga suki desu.", "Neko ga sukii desu."],
            correct: 1,
            explanation: "The thing you like takes が, and すき is a な-adjective (no extra い): ねこ が すき です.",
          },
        },
      ],
      practice: [
        {
          question: "Which is correct for “a pretty flower”?",
          options: ["きれい はな", "きれいな はな", "きれくない はな"],
          optionsRomaji: ["kirei hana", "kirei na hana", "kirekunai hana"],
          correct: 1,
          explanation: "きれい is a な-adjective despite ending in い — it needs な before a noun: きれいな はな.",
          concept: "な + noun",
        },
        {
          question: "Make it negative: “The room isn't quiet.” へや は しずか ＿＿。",
          jp: "へや は しずか ＿＿。",
          romaji: "Heya wa shizuka ＿＿.",
          options: ["くない です", "じゃ ない です", "ない です"],
          optionsRomaji: ["kunai desu", "ja nai desu", "nai desu"],
          correct: 1,
          explanation: "な-adjectives negate with じゃ ない です: しずか じゃ ない です.",
          concept: "〜じゃ ない です",
        },
        {
          question: "Which particle marks the thing you like? ねこ ＿ すき です。",
          jp: "ねこ ＿ すき です。",
          romaji: "Neko ＿ suki desu.",
          options: ["を", "が", "に"],
          optionsRomaji: ["wo", "ga", "ni"],
          correct: 1,
          explanation: "すき takes が for the liked thing: ねこ が すき です.",
          concept: "が すき",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "しずかな へや です", romaji: "shizuka na heya desu", en: "it's a quiet room" },
        { text: "この まち は にぎやか です", romaji: "kono machi wa nigiyaka desu", en: "this town is lively" },
        { text: "ねこ が すき です", romaji: "neko ga suki desu", en: "I like cats", accept: ["猫が好きです"] },
      ],
    },
    {
      kind: "microstory",
      setting: "Walking through the neighborhood",
      emoji: "🌸",
      intro: "Hana shows Yui around the area. They disagree, politely, about quiet vs lively.",
      lines: [
        { speaker: "narrator", en: "They pass a small park full of cherry blossoms." },
        { speaker: "yui", jp: "きれいな こうえん です ね。", romaji: "Kirei na kouen desu ne.", en: "What a pretty park." },
        { speaker: "hana", jp: "はい。それに、しずか です。", romaji: "Hai. Soreni, shizuka desu.", en: "Yes. And it's quiet, too." },
        { speaker: "yui", jp: "わたし は にぎやかな まち が すき です。", romaji: "Watashi wa nigiyaka na machi ga suki desu.", en: "I like a lively town." },
        { speaker: "hana", jp: "そう です か。わたし は しずかな ところ が すき です。", romaji: "Sou desu ka. Watashi wa shizuka na tokoro ga suki desu.", en: "Really? I like quiet places." },
        { speaker: "yui", jp: "でも、この みせ は べんり です ね。", romaji: "Demo, kono mise wa benri desu ne.", en: "But this shop is convenient." },
        { speaker: "hana", jp: "はい、そして やすい です！", romaji: "Hai, soshite yasui desu!", en: "Yes, and it's cheap!" },
      ],
      comprehension: [
        {
          question: "What kind of town does Yui like?",
          options: ["A quiet one", "A lively one", "A small one", "A cheap one"],
          correct: 1,
          explanation: "にぎやかな まち が すき です — she likes a lively town.",
        },
        {
          question: "Why is きれい written without な in “きれい です”?",
          options: ["It's a typo", "な only appears before a noun, not before です", "きれい is an い-adjective", "It's past tense"],
          correct: 1,
          explanation: "な-adjectives drop the な at the end of a sentence: きれい です, but きれいな こうえん before a noun.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "な-adjectives take な before a noun: しずかな へや, きれいな はな",
        "…but nothing before です: この へや は しずか です",
        "Negative: 〜じゃ ない です (じゃ ありません) — NOT くない",
        "Likes: X が すき です · dislikes: X が きらい です (が, not を)",
        "Traps: きれい and ゆうめい end in い but are な-adjectives",
      ],
      badge: { name: "Two Families", emoji: "🌸" },
    },
  ],
};
