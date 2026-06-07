import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 5 · Lesson 4 — な-adjectives, and likes/dislikes with が すき / きらい.
 * Contrasts な-adjectives (need な before a noun) with the い-adjectives from Lesson 3.
 */
export const chapter05Lesson04: Lesson = {
  id: "ja-5-4",
  chapterId: "ja-ch5",
  number: 4,
  title: "な-adjectives & what you like",
  titleNative: "な-けいようし・すき",
  subtitle: "Pretty, quiet, famous — and likes",
  summary: "The other adjective type: な-adjectives take な before a noun. Then say what you like and dislike with X が すき/きらい です.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-5-3",
  steps: [
    {
      kind: "intro",
      title: "A second adjective type — and your tastes",
      subtitle: "な-adjectives need a な before a noun (きれい な はな). At the end they just take です. Then: コーヒー が すき です — 'I like coffee.'",
      goals: [
        "Use な-adjectives before a noun (な) and as predicate (です)",
        "Tell い-adjectives from な-adjectives",
        "Say likes/dislikes: X が すき/きらい です",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "Six な-adjectives. Unlike Lesson 3's words, these don't behave like the い-type.",
      words: [
        { text: "きれい", romaji: "kirei", meaning: "pretty, clean", emoji: "🌸", example: { jp: "きれい な はな。", romaji: "Kirei na hana.", en: "A pretty flower." } },
        { text: "げんき", romaji: "genki", meaning: "healthy, energetic", emoji: "💪", example: { jp: "げんき です！", romaji: "Genki desu!", en: "I'm well!" } },
        { text: "しずか", romaji: "shizuka", meaning: "quiet", emoji: "🤫", example: { jp: "しずか な まち。", romaji: "Shizuka na machi.", en: "A quiet town." } },
        { text: "にぎやか", romaji: "nigiyaka", meaning: "lively, bustling", emoji: "🎊", example: { jp: "にぎやか な カフェ。", romaji: "Nigiyaka na kafe.", en: "A lively café." } },
        { text: "ゆうめい", romaji: "yuumei", meaning: "famous", emoji: "🌟", example: { jp: "ゆうめい な せんせい。", romaji: "Yuumei na sensei.", en: "A famous teacher." } },
        { text: "すき", romaji: "suki", meaning: "liked, likeable", emoji: "❤️", example: { jp: "コーヒー が すき です。", romaji: "Koohii ga suki desu.", en: "I like coffee." } },
      ],
    },
    {
      kind: "grammar",
      intro: "First how な-adjectives attach — then how to say what you like.",
      patterns: [
        {
          id: "na-adjective",
          title: "な-adjective + な + Noun",
          titleRomaji: "na-adjective + na + Noun",
          subtitle: "きれい な はな / はな は きれい です.",
          pattern: [
            { text: "な-adj", highlight: true },
            { text: "な", highlight: false },
            { text: "Noun", highlight: true },
          ],
          patternRomaji: "na-adj  na  Noun",
          note: "な-adjectives need な to connect to a following noun: 'きれい な はな' = 'a pretty flower'. At the end of a sentence they drop the な and just take です: 'はな は きれい です'. (い-adjectives never take な — that's the key difference.)",
          tip: "Careful: きれい and ゆうめい end in い but are な-adjectives. Memorise these by type, not by their last letter.",
          examples: [
            {
              jp: "しずか な まち です。",
              romaji: "Shizuka na machi desu.",
              en: "It's a quiet town.",
              breakdown: [
                { jp: "しずか な", en: "quiet" },
                { jp: "まち", en: "town" },
                { jp: "です。", en: "is" },
              ],
            },
            {
              jp: "この カフェ は にぎやか です。",
              romaji: "Kono kafe wa nigiyaka desu.",
              en: "This café is lively.",
              breakdown: [
                { jp: "この カフェ は", en: "this café" },
                { jp: "にぎやか", en: "lively" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 'a quiet town'?",
            options: ["しずか まち", "しずか な まち", "しずか の まち"],
            optionsRomaji: ["Shizuka machi", "Shizuka na machi", "Shizuka no machi"],
            correct: 1,
            explanation: "な-adjectives take な (not の) before a noun: しずか な まち.",
          },
        },
        {
          id: "ga-suki",
          title: "X が すき / きらい です",
          titleRomaji: "X ga suki / kirai desu",
          subtitle: "Likes and dislikes.",
          pattern: [
            { text: "X", highlight: true },
            { text: "が", highlight: false },
            { text: "すき / きらい", highlight: true },
            { text: "です", highlight: false },
          ],
          patternRomaji: "X  ga  suki / kirai  desu",
          note: "すき (liked) and きらい (disliked) are な-adjectives. Mark the thing you like with が: 'コーヒー が すき です' literally = 'coffee is likeable (to me)' = 'I like coffee.' Use きらい the same way for dislikes.",
          tip: "It's が, not を — liking isn't an action done to an object, it's a state. Add だいすき for 'really like' and だいきらい for 'really dislike'.",
          examples: [
            {
              jp: "ねこ が すき です。",
              romaji: "Neko ga suki desu.",
              en: "I like cats.",
              breakdown: [
                { jp: "ねこ", en: "cats" },
                { jp: "が", en: "(subject)" },
                { jp: "すき です。", en: "are likeable / I like" },
              ],
            },
            {
              jp: "やさい が きらい です。",
              romaji: "Yasai ga kirai desu.",
              en: "I dislike vegetables.",
              breakdown: [
                { jp: "やさい", en: "vegetables" },
                { jp: "が", en: "(subject)" },
                { jp: "きらい です。", en: "are disliked" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 'I like cats'?",
            options: ["ねこ を すき です。", "ねこ が すき です。", "ねこ は すき か。"],
            optionsRomaji: ["Neko wo suki desu.", "Neko ga suki desu.", "Neko wa suki ka."],
            correct: 1,
            explanation: "The liked thing takes が with すき/きらい — not を.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Getting to know each other",
      emoji: "❤️",
      intro: "Hana and Yui compare tastes.",
      lines: [
        { speaker: "yui", jp: "わたし は コーヒー が すき です。", romaji: "Watashi wa koohii ga suki desu.", en: "I like coffee." },
        { speaker: "hana", jp: "わたし は コーヒー が きらい です。", romaji: "Watashi wa koohii ga kirai desu.", en: "I dislike coffee." },
        { speaker: "hana", jp: "ココア が すき です。", romaji: "Kokoa ga suki desu.", en: "I like cocoa." },
        { speaker: "yui", jp: "この カフェ は しずか で いい ですね。", romaji: "Kono kafe wa shizuka de ii desu ne.", en: "This café is quiet and nice, isn't it." },
        { speaker: "hana", jp: "ねこ も いる！ ねこ が だいすき！", romaji: "Neko mo iru! Neko ga daisuki!", en: "There's a cat too! I love cats!" },
      ],
      comprehension: [
        {
          question: "What does Hana like to drink?",
          options: ["Coffee (コーヒー)", "Cocoa (ココア)", "Tea", "Juice"],
          correct: 1,
          explanation: "Hana dislikes coffee but says ココア が すき です — she likes cocoa.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["な-adjective + な + noun", "い-type vs な-type adjectives", "X が すき/きらい です — likes & dislikes"],
      badge: { name: "Got Opinions", emoji: "❤️" },
    },
  ],
};
