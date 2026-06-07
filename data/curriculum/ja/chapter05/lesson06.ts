import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 5 · Lesson 6 — Capstone: a full self-introduction + describing scene.
 * Pulls together X は Y です, の/この, い- & な-adjectives, likes, and question words.
 */
export const chapter05Lesson06: Lesson = {
  id: "ja-5-6",
  chapterId: "ja-ch5",
  number: 6,
  title: "Putting it together",
  titleNative: "まとめ",
  subtitle: "Chapter 5 capstone",
  summary: "Combine everything from Chapter 5 into a real introduction-and-conversation scene, then a mixed review of all five grammar points.",
  xp: 70,
  estimateMinutes: 12,
  unlockAfter: "ja-5-5",
  steps: [
    {
      kind: "intro",
      title: "Your first real conversation",
      subtitle: "Introduce yourself, describe things, share what you like, and ask questions — all in one go.",
      goals: [
        "Give a 3–4 sentence self-introduction",
        "Combine adjectives, の, and likes naturally",
        "Review every Chapter 5 pattern",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro: "A quick review of Chapter 5's key words.",
      words: [
        { text: "がくせい", romaji: "gakusei", meaning: "student", emoji: "🎓", example: { jp: "わたし は がくせい です。", romaji: "Watashi wa gakusei desu.", en: "I'm a student." } },
        { text: "ともだち", romaji: "tomodachi", meaning: "friend", emoji: "👫", example: { jp: "わたし の ともだち。", romaji: "Watashi no tomodachi.", en: "My friend." } },
        { text: "きれい", romaji: "kirei", meaning: "pretty, clean", emoji: "🌸", example: { jp: "きれい な まち。", romaji: "Kirei na machi.", en: "A pretty town." } },
        { text: "すき", romaji: "suki", meaning: "to like", emoji: "❤️", example: { jp: "ねこ が すき です。", romaji: "Neko ga suki desu.", en: "I like cats." } },
        { text: "なん", romaji: "nan", meaning: "what", emoji: "❓", example: { jp: "これ は なん ですか。", romaji: "Kore wa nan desu ka.", en: "What is this?" } },
        { text: "ゆうめい", romaji: "yuumei", meaning: "famous", emoji: "🌟", example: { jp: "ゆうめい な カフェ。", romaji: "Yuumei na kafe.", en: "A famous café." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Here's a whole self-introduction, then a mixed review of every Chapter 5 pattern.",
      patterns: [
        {
          id: "intro-combined",
          title: "A full self-introduction",
          titleRomaji: "jiko-shoukai",
          subtitle: "Several sentences, all patterns you know.",
          pattern: [
            { text: "はじめまして", highlight: false },
            { text: "→ X は Y です", highlight: true },
            { text: "→ … が すき です", highlight: true },
            { text: "→ よろしく", highlight: false },
          ],
          patternRomaji: "greet → who you are → what you like → close",
          note: "A natural intro stacks the patterns you've learned: greet (はじめまして), say who you are (わたし は はな です / がくせい です), add a detail (にほんじん です), share a like (ねこ が すき です), and close (よろしく おねがいします). Short sentences, each ending in です — that's all it takes.",
          tip: "さん is a polite 'Mr/Ms' added to others' names — never to your own.",
          examples: [
            {
              jp: "はじめまして。わたし は はな です。",
              romaji: "Hajimemashite. Watashi wa Hana desu.",
              en: "Nice to meet you. I'm Hana.",
              breakdown: [
                { jp: "はじめまして。", en: "nice to meet you" },
                { jp: "わたし は はな です。", en: "I am Hana" },
              ],
            },
            {
              jp: "がくせい です。ねこ が すき です。",
              romaji: "Gakusei desu. Neko ga suki desu.",
              en: "I'm a student. I like cats.",
              breakdown: [
                { jp: "がくせい です。", en: "I'm a student" },
                { jp: "ねこ が すき です。", en: "I like cats" },
              ],
            },
          ],
          apply: {
            prompt: "Which is the right way to add 'Mr/Ms' to a teacher's name, Tanaka?",
            options: ["わたし たなか さん", "たなか さん", "さん たなか"],
            optionsRomaji: ["Watashi Tanaka-san", "Tanaka-san", "San Tanaka"],
            correct: 1,
            explanation: "さん follows the name: たなか さん. Never add さん to your own name.",
          },
        },
      ],
      practice: [
        {
          question: "Say 'I am a student.'",
          options: ["わたし を がくせい です。", "わたし は がくせい です。", "わたし の がくせい です。", "わたし が がくせい か。"],
          optionsRomaji: ["Watashi wo gakusei desu.", "Watashi wa gakusei desu.", "Watashi no gakusei desu.", "Watashi ga gakusei ka."],
          correct: 1,
          explanation: "は marks the topic (you), です states what you are.",
          concept: "X は Y です",
        },
        {
          question: "Say 'my friend'.",
          options: ["ともだち の わたし", "わたし の ともだち", "わたし は ともだち", "わたし な ともだち"],
          optionsRomaji: ["Tomodachi no watashi", "Watashi no tomodachi", "Watashi wa tomodachi", "Watashi na tomodachi"],
          correct: 1,
          explanation: "Owner first + の: わたし の ともだち.",
          concept: "A の B",
        },
        {
          question: "Make it negative: 'It's not expensive.' (たかい)",
          options: ["たかい です。", "たかくない です。", "たかい じゃ です。", "たかく です。"],
          optionsRomaji: ["Takai desu.", "Takakunai desu.", "Takai ja desu.", "Takaku desu."],
          correct: 1,
          explanation: "Drop い, add くない: たかくない です.",
          concept: "い-adjective negative",
        },
        {
          question: "Say 'a quiet town'. (しずか = な-adjective)",
          options: ["しずか まち", "しずか な まち", "しずか の まち", "しずか い まち"],
          optionsRomaji: ["Shizuka machi", "Shizuka na machi", "Shizuka no machi", "Shizuka i machi"],
          correct: 1,
          explanation: "な-adjectives take な before a noun: しずか な まち.",
          concept: "な-adjective + な + Noun",
        },
        {
          question: "Ask 'Where is the station?'",
          options: ["えき は なん ですか。", "えき は どこ ですか。", "えき は だれ ですか。", "えき は いつ ですか。"],
          optionsRomaji: ["Eki wa nan desu ka.", "Eki wa doko desu ka.", "Eki wa dare desu ka.", "Eki wa itsu desu ka."],
          correct: 1,
          explanation: "どこ asks 'where'. なん = what, だれ = who, いつ = when.",
          concept: "Question words",
        },
      ],
    },
    {
      kind: "matching",
      intro: "Capstone match — words and question words from Chapter 5.",
      rounds: [
        {
          title: "Chapter 5 review",
          pairs: [
            { id: "gakusei", left: "がくせい", romaji: "gakusei", right: "student" },
            { id: "tomodachi", left: "ともだち", romaji: "tomodachi", right: "friend" },
            { id: "dare", left: "だれ", romaji: "dare", right: "who" },
            { id: "doko", left: "どこ", romaji: "doko", right: "where" },
            { id: "suki", left: "すき", romaji: "suki", right: "to like" },
            { id: "kirei", left: "きれい", romaji: "kirei", right: "pretty" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "A welcome gathering — Chapter 5 capstone",
      emoji: "🎉",
      intro: "The group welcomes Hana properly. Everyone introduces themselves.",
      lines: [
        { speaker: "narrator", en: "The café after closing. The four of them sit together." },
        { speaker: "kenji", jp: "はじめまして。けんじ です。がくせい です。", romaji: "Hajimemashite. Kenji desu. Gakusei desu.", en: "Nice to meet you. I'm Kenji. I'm a student." },
        { speaker: "yui", jp: "ゆい です。ゲーム が すき です！", romaji: "Yui desu. Geemu ga suki desu!", en: "I'm Yui. I love games!" },
        { speaker: "hana", jp: "はな です。ねこ が だいすき です。", romaji: "Hana desu. Neko ga daisuki desu.", en: "I'm Hana. I really love cats." },
        { speaker: "tanaka", jp: "この カフェ は どう ですか。", romaji: "Kono kafe wa dou desu ka.", en: "How do you like this café?" },
        { speaker: "hana", jp: "しずか で きれい です。だいすき です！", romaji: "Shizuka de kirei desu. Daisuki desu!", en: "It's quiet and pretty. I love it!" },
        { speaker: "narrator", en: "Four friends, one café. Next: numbers, time, and finally paying the bill." },
      ],
      comprehension: [
        {
          question: "What does Yui like?",
          options: ["Cats", "Games (ゲーム)", "Coffee", "Cake"],
          correct: 1,
          explanation: "ゲーム が すき です — 'I love games!'",
        },
        {
          question: "How does Hana describe the café?",
          options: ["Loud and old", "Quiet and pretty (しずか で きれい)", "Expensive", "Far away"],
          correct: 1,
          explanation: "しずか で きれい です — 'quiet and pretty'.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "A full self-introduction in Japanese",
        "X は Y です, の/この, い- & な-adjectives, likes, question words",
        "Real back-and-forth conversation",
      ],
      badge: { name: "Chapter 5 Complete", emoji: "💬" },
    },
  ],
};
