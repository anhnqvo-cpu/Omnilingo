import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 6 · Lesson 2 — Numbers 11–10,000. How Japanese builds compound numbers.
 */
export const chapter06Lesson02: Lesson = {
  id: "ja-6-2",
  chapterId: "ja-ch6",
  number: 2,
  title: "Numbers 11–10,000",
  titleNative: "すうじ 11〜10000",
  subtitle: "Building bigger numbers",
  summary: "Japanese builds numbers logically: 20 is 'two-ten', 35 is 'three-ten-five'. Learn 百 (100), 千 (1,000), and 万 (10,000).",
  xp: 55,
  estimateMinutes: 10,
  unlockAfter: "ja-6-1",
  steps: [
    {
      kind: "intro",
      title: "Numbers stack like Lego",
      subtitle: "There's no new vocabulary for 20–99 — you just combine what you know. 20 = に(2)+じゅう(10). 35 = さんじゅうご. Then big units: 百, 千, 万.",
      goals: [
        "Build the tens: にじゅう, さんじゅう …",
        "Combine tens + ones: 35 = さんじゅうご",
        "Read 百 (100), 千 (1,000), 万 (10,000)",
      ],
      estimateMinutes: 10,
    },
    {
      kind: "vocabDrill",
      intro: "The new pieces. Everything between is just combination.",
      words: [
        { text: "じゅういち（十一）", romaji: "juu-ichi", meaning: "11 (10 + 1)", emoji: "🔟" },
        { text: "にじゅう（二十）", romaji: "ni-juu", meaning: "20 (2 × 10)", emoji: "✌️" },
        { text: "さんじゅうご（三十五）", romaji: "san-juu-go", meaning: "35 (3×10 + 5)", emoji: "🔢" },
        { text: "ひゃく（百）", romaji: "hyaku", meaning: "100", emoji: "💯" },
        { text: "ごひゃく（五百）", romaji: "go-hyaku", meaning: "500", emoji: "🔢" },
        { text: "せん（千）", romaji: "sen", meaning: "1,000", emoji: "🔢" },
        { text: "まん（万）", romaji: "man", meaning: "10,000", emoji: "🔢" },
      ],
    },
    {
      kind: "grammar",
      intro: "One simple rule generates every number up to 9,999.",
      patterns: [
        {
          id: "compound-numbers",
          title: "Tens, then ones",
          titleRomaji: "[digit]juu [digit]",
          subtitle: "20 = にじゅう, 35 = さんじゅうご.",
          pattern: [
            { text: "digit", highlight: true },
            { text: "じゅう", highlight: false },
            { text: "digit", highlight: true },
          ],
          patternRomaji: "[2-9] juu [1-9]",
          note: "For tens, say the digit then じゅう: 20 = にじゅう (2-ten), 50 = ごじゅう. For in-between numbers, add the ones digit: 35 = さんじゅうご (3-ten-5). The same logic scales up with 百 (hundreds), 千 (thousands), 万 (ten-thousands): 100 = ひゃく, 1,000 = せん, 5,300 = ごせんさんびゃく. (A few combos shift sound — like さんびゃく for 300 — which you'll pick up by ear.)",
          tip: "Note 10,000 is 'one man' (いちまん), not just まん, when you mean the number 10,000 exactly.",
          examples: [
            {
              jp: "にじゅうご",
              romaji: "ni-juu-go",
              en: "25 (2-ten-5)",
              breakdown: [
                { jp: "に", en: "2" },
                { jp: "じゅう", en: "10" },
                { jp: "ご", en: "5" },
              ],
            },
            {
              jp: "ひゃくはち",
              romaji: "hyaku-hachi",
              en: "108 (100-8)",
              breakdown: [
                { jp: "ひゃく", en: "100" },
                { jp: "はち", en: "8" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say 25?",
            options: ["ごじゅうに", "にじゅうご", "にじゅうじゅう"],
            optionsRomaji: ["go-juu-ni", "ni-juu-go", "ni-juu-juu"],
            correct: 1,
            explanation: "Tens first: にじゅう (20) + ご (5) = にじゅうご. ごじゅうに would be 52.",
          },
        },
      ],
    },
    {
      kind: "quiz",
      intro: "Read these numbers.",
      questions: [
        {
          id: "q-twenty",
          question: "What number is 二十?",
          options: ["12", "20", "200", "2"],
          correct: 1,
          explanation: "二十 = にじゅう = 20.",
        },
        {
          id: "q-hundred",
          question: "What is 百?",
          options: ["10", "100", "1,000", "10,000"],
          correct: 1,
          explanation: "百 = ひゃく = 100.",
        },
        {
          id: "q-thousand",
          question: "せん（千）is…",
          options: ["100", "1,000", "10,000", "10"],
          correct: 1,
          explanation: "千 = せん = 1,000.",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Reading price tags",
      emoji: "🏷️",
      intro: "Hana and Kenji browse a shop.",
      lines: [
        { speaker: "hana", jp: "この ノート は ひゃくえん。", romaji: "Kono nooto wa hyaku-en.", en: "This notebook is 100 yen." },
        { speaker: "kenji", jp: "やすい！ この カメラ は？", romaji: "Yasui! Kono kamera wa?", en: "Cheap! And this camera?" },
        { speaker: "hana", jp: "さんまんえん…", romaji: "San-man-en...", en: "30,000 yen..." },
        { speaker: "kenji", jp: "たかい です！", romaji: "Takai desu!", en: "Expensive!" },
      ],
      comprehension: [
        {
          question: "How much is the camera?",
          options: ["100 yen", "3,000 yen", "30,000 yen (さんまんえん)", "300 yen"],
          correct: 2,
          explanation: "さんまんえん = 3 × 10,000 = 30,000 yen.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["Tens and combinations (にじゅうご = 25)", "百 (100), 千 (1,000), 万 (10,000)", "Reading prices"],
      badge: { name: "Big Numbers", emoji: "💯" },
    },
  ],
};
