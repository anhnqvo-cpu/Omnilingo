import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 1 · Lesson 2
 * The remaining vowels: え, お. Closes out the vowel set.
 */
export const chapter01Lesson02: Lesson = {
  id: "ja-1-2",
  chapterId: "ja-ch1",
  number: 2,
  title: "More vowels: え, お",
  titleNative: "えお",
  subtitle: "Sounds & writing",
  summary: "Finish the five Japanese vowels. By the end you can read every vowel-only word.",
  xp: 40,
  estimateMinutes: 8,
  unlockAfter: "ja-1-1",
  steps: [
    {
      kind: "intro",
      title: "Two more vowels and you've got the set",
      subtitle: "え and お complete the five.",
      goals: [
        "Recognise and pronounce え, お",
        "Write each one with correct stroke order",
        "Read words built only from vowels (あお, おい, うお, etc.)",
      ],
      estimateMinutes: 8,
    },
    {
      kind: "sounds",
      intro: "Two more sounds. These finish the set of five vowels: a, i, u, e, o.",
      sounds: [
        {
          text: "え",
          romaji: "e",
          phonetic: "'e' as in 'bed' — short and crisp, not like English 'ay'.",
          mnemonic: "Like an Exotic bird with spread wings.",
        },
        {
          text: "お",
          romaji: "o",
          phonetic: "'o' as in 'go' — round lips, no glide at the end.",
          mnemonic: "Three strokes — a horizontal line, a vertical line, and a sweeping loop with a flag.",
        },
      ],
    },
    {
      kind: "character",
      script: "hiragana",
      char: "え",
      romaji: "e",
      phonetic: "'e' as in 'bed' — kept short.",
      mnemonic: "Two strokes — a small hat, then a long sweeping curve.",
      words: [
        { jp: "うえ", meaning: "above / up", romaji: "ue", emoji: "⬆️", hint: "う + え." },
        { jp: "いえ", meaning: "house / home", romaji: "ie", emoji: "🏠", hint: "い + え." },
      ],
    },
    { kind: "writing", char: "え", script: "hiragana" },
    {
      kind: "character",
      script: "hiragana",
      char: "お",
      romaji: "o",
      phonetic: "'o' as in 'go' — rounded.",
      mnemonic: "Like あ but with one extra flag-stroke on the right.",
      words: [
        { jp: "あお", meaning: "blue", romaji: "ao", emoji: "💙", hint: "あ + お — the color of the sky." },
        { jp: "おい", meaning: "Hey! (casual)", romaji: "oi", emoji: "👋" },
        { jp: "うお", meaning: "fish", romaji: "uo", emoji: "🐟", hint: "An old word for fish." },
      ],
    },
    { kind: "writing", char: "お", script: "hiragana" },
    {
      kind: "matching",
      intro: "Match each word to its meaning. Tap one on the left, then its pair on the right.",
      rounds: [
        {
          title: "Vowel words",
          pairs: [
            { id: "ao", left: "あお", romaji: "ao", right: "blue" },
            { id: "ie", left: "いえ", romaji: "ie", right: "house" },
            { id: "ue", left: "うえ", romaji: "ue", right: "above" },
            { id: "oi", left: "おい", romaji: "oi", right: "Hey!" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Looking for the house",
      emoji: "🏠",
      intro: "Hana is lost in Tanaka-san's neighbourhood. She calls out.",
      lines: [
        { speaker: "narrator", en: "Hana stands at a crossroads, looking up at the house numbers." },
        { speaker: "hana", jp: "おい！", romaji: "Oi!", en: "Hey!" },
        { speaker: "narrator", en: "Tanaka-san leans out of an upstairs window." },
        { speaker: "tanaka", jp: "うえ！", romaji: "Ue!", en: "Up here!" },
        { speaker: "hana", jp: "あ！ いえ。", romaji: "A! Ie.", en: "Ah! The house." },
        { speaker: "narrator", en: "Hana finds the door. The sky behind the roof is bright あお — blue." },
      ],
      comprehension: [
        {
          question: "Where was Tanaka-san?",
          options: ["In the street", "Above (upstairs)", "Inside the kitchen", "At the station"],
          correct: 1,
          explanation: "うえ means 'above' or 'up'. She was leaning out of an upstairs window.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["Wrote え and お from memory", "Read your first five-vowel words", "Followed a two-line dialogue"],
      badge: { name: "Vowels Complete", emoji: "🔤" },
    },
  ],
};
