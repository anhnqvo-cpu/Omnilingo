import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 2 · Lesson 2 — The s row: さ し す せ そ.
 * Note: し is read "shi" not "si". Japanese has no "si" sound.
 */
export const chapter02Lesson02: Lesson = {
  id: "ja-2-2",
  chapterId: "ja-ch2",
  number: 2,
  title: "The s row: さ, し, す, せ, そ",
  titleNative: "さしすせそ",
  subtitle: "Hiragana continued — with one twist",
  summary: "Five more sounds. The catch: し reads 'shi', not 'si'. Japanese skips 'si' entirely.",
  xp: 50,
  estimateMinutes: 10,
  unlockAfter: "ja-2-1",
  steps: [
    {
      kind: "intro",
      title: "Five more sounds — and your first irregular kana",
      subtitle: "し is 'shi'. Just memorise this one — every other s-row kana behaves normally.",
      goals: [
        "Recognise さ, し, す, せ, そ",
        "Remember that し reads 'shi'",
        "Read words like さけ (sake), すし (sushi), せかい (world)",
      ],
      estimateMinutes: 10,
    },
    {
      kind: "sounds",
      intro: "Listen carefully to し — it's the one exception.",
      sounds: [
        { text: "さ", romaji: "sa", phonetic: "'sah' — soft s, open vowel.", mnemonic: "Like the あ family with a slash on top." },
        { text: "し", romaji: "shi", phonetic: "'shee' — NOT 'see'. There's a soft 'sh' sound.", mnemonic: "A long fishhook. Memorable because the sound is the odd one out." },
        { text: "す", romaji: "su", phonetic: "'soo' — barely rounded.", mnemonic: "A curl that loops back, like steam rising." },
        { text: "せ", romaji: "se", phonetic: "'seh' — short, crisp.", mnemonic: "Like a small chair seen from the side." },
        { text: "そ", romaji: "so", phonetic: "'soh' — round.", mnemonic: "Zigzag like a sewn thread." },
      ],
    },
    { kind: "character", script: "hiragana", char: "さ", romaji: "sa", phonetic: "'sah'.", mnemonic: "Looks like the あ family with a slanting hat.", words: [{ jp: "さけ", meaning: "sake / rice wine", romaji: "sake", emoji: "🍶", hint: "さ + け." }] },
    { kind: "writing", char: "さ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "し", romaji: "shi", phonetic: "'shee', with a soft 'sh'.", mnemonic: "A single fishhook curving up. The one s-row exception.", words: [{ jp: "しか", meaning: "deer", romaji: "shika", emoji: "🦌", hint: "し + か." }] },
    { kind: "writing", char: "し", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "す", romaji: "su", phonetic: "'soo'.", mnemonic: "Looks like a fancy curl — su(per) curly.", words: [{ jp: "すし", meaning: "sushi", romaji: "sushi", emoji: "🍣", hint: "す + し." }] },
    { kind: "writing", char: "す", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "せ", romaji: "se", phonetic: "'seh'.", mnemonic: "A horizontal bar and a vertical with a hook.", words: [{ jp: "せかい", meaning: "world", romaji: "sekai", emoji: "🌏", hint: "せ + か + い." }] },
    { kind: "writing", char: "せ", script: "hiragana" },
    { kind: "character", script: "hiragana", char: "そ", romaji: "so", phonetic: "'soh'.", mnemonic: "A zigzag — sew-saw down.", words: [{ jp: "そら", meaning: "sky", romaji: "sora", emoji: "☁️", hint: "そ + ら (you'll learn ら soon)." }] },
    { kind: "writing", char: "そ", script: "hiragana" },
    {
      kind: "vocabDrill",
      intro: "Six new words — most use only kana you already know.",
      words: [
        { text: "さけ", romaji: "sake", meaning: "sake (rice wine)", emoji: "🍶", example: { jp: "おいしい さけ。", romaji: "Oishii sake.", en: "Delicious sake." } },
        { text: "すし", romaji: "sushi", meaning: "sushi", emoji: "🍣", example: { jp: "すし を たべる。", romaji: "Sushi wo taberu.", en: "Eat sushi." } },
        { text: "しか", romaji: "shika", meaning: "deer", emoji: "🦌", example: { jp: "なら の しか。", romaji: "Nara no shika.", en: "The deer of Nara." } },
        { text: "あさ", romaji: "asa", meaning: "morning", emoji: "🌅", example: { jp: "いい あさ。", romaji: "Ii asa.", en: "A good morning." } },
        { text: "うし", romaji: "ushi", meaning: "cow", emoji: "🐄", example: { jp: "おおきい うし。", romaji: "Ookii ushi.", en: "A big cow." } },
        { text: "せかい", romaji: "sekai", meaning: "world", emoji: "🌏", example: { jp: "せかい は おおきい。", romaji: "Sekai wa ookii.", en: "The world is big." } },
      ],
    },
    {
      kind: "quiz",
      intro: "Reading check on the s row.",
      questions: [
        {
          id: "q1",
          question: "How is し read?",
          options: ["si", "shi", "chi", "tsu"],
          correct: 1,
          explanation: "し = shi. The one irregular kana in the s row.",
        },
        {
          id: "q2",
          question: "Which word means 'sushi'?",
          options: ["さけ", "すし", "しか", "せかい"],
          optionsRomaji: ["sake", "sushi", "shika", "sekai"],
          correct: 1,
          explanation: "すし = sushi. Note: す + し.",
        },
        {
          id: "q3",
          question: "What does あさ mean?",
          jp: "あさ",
          options: ["evening", "morning", "afternoon", "night"],
          correct: 1,
          explanation: "あさ (asa) = morning. We'll meet ばん (evening) and よる (night) later.",
        },
      ],
    },
    {
      kind: "grammar",
      intro: "One tiny word lets you say 'too' — and you already heard it in the sushi shop.",
      patterns: [
        {
          id: "mo-also",
          title: "Noun も",
          titleRomaji: "Noun mo",
          subtitle: "'also' / 'too' — swap it in for は.",
          pattern: [
            { text: "Noun", highlight: true },
            { text: "も", highlight: false },
            { text: "[rest]", highlight: false },
          ],
          patternRomaji: "Noun  mo  ...",
          note: "も means 'also' or 'too'. It takes the place of は (or が): instead of marking the topic, it says 'this one as well'. 'わたし は がくせい です' (I am a student) becomes 'わたし も がくせい です' (I am also a student).",
          tip: "Don't stack particles — say わたし も, never わたし は も. も replaces は entirely.",
          examples: [
            {
              jp: "わたし も がくせい です。",
              romaji: "Watashi mo gakusei desu.",
              en: "I'm a student too.",
              breakdown: [
                { jp: "わたし", en: "I" },
                { jp: "も", en: "also" },
                { jp: "がくせい です。", en: "am a student" },
              ],
            },
            {
              jp: "さけ も？",
              romaji: "Sake mo?",
              en: "Sake too?",
              breakdown: [
                { jp: "さけ", en: "sake" },
                { jp: "も？", en: "too?" },
              ],
            },
          ],
          apply: {
            prompt: "A friend says they're a student. How do you say 'Me too'?",
            options: ["わたし は です。", "わたし も です。", "わたし の です。"],
            optionsRomaji: ["Watashi wa desu.", "Watashi mo desu.", "Watashi no desu."],
            correct: 1,
            explanation: "も (mo) = also/too, replacing は. わたし も です ≈ 'me too'.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "At the sushi shop",
      emoji: "🍣",
      intro: "Kenji takes Hana to his favourite sushi place.",
      lines: [
        { speaker: "kenji", jp: "ここ の すし は おいしい。", romaji: "Koko no sushi wa oishii.", en: "The sushi here is delicious." },
        { speaker: "hana", jp: "わあ！ いい！", romaji: "Waa! Ii!", en: "Wow! Good!" },
        { speaker: "kenji", jp: "さけ も？", romaji: "Sake mo?", en: "Sake too?" },
        { speaker: "hana", jp: "おちゃ で。", romaji: "Ocha de.", en: "Just tea, please." },
        { speaker: "narrator", en: "Hana isn't quite ready for sake at 12 noon." },
      ],
      comprehension: [
        {
          question: "What did Hana order instead of sake?",
          options: ["Water", "Tea (おちゃ)", "Beer", "Coffee"],
          correct: 1,
          explanation: "おちゃ (ocha) = tea. We'll cover ち in the next lesson.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["Five s-row kana — with the し exception", "Six new words including すし and せかい", "Survived the first irregular kana"],
      badge: { name: "S-row Survivor", emoji: "🍣" },
    },
  ],
};
