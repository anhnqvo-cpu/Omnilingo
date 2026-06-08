import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 6 · Lesson 1 — Numbers 0–10 (and their kanji 一–十, for recognition).
 * No new kana, no kanji writing — just reading the digits.
 */
export const chapter06Lesson01: Lesson = {
  id: "ja-6-1",
  chapterId: "ja-ch6",
  number: 1,
  title: "Numbers 0–10",
  titleNative: "すうじ 0〜10",
  subtitle: "Counting starts here",
  summary: "Learn 0 through 10 — the readings and the kanji (一–十) you'll see on signs and menus. A few numbers have two readings.",
  xp: 55,
  estimateMinutes: 10,
  unlockAfter: "ja-5-6",
  steps: [
    {
      kind: "intro",
      title: "The numbers behind everything",
      subtitle: "Prices, times, dates, counting — all start here. You'll read both the kana readings and the kanji (一–十). You don't have to write the kanji; just recognise them.",
      goals: [
        "Say 0–10 in Japanese",
        "Recognise the kanji 一, 二, 三 … 十",
        "Know the double readings: 四, 七, 九",
      ],
      estimateMinutes: 10,
    },
    {
      kind: "vocabDrill",
      intro: "Zero to ten. The kanji is in (parentheses) — you'll see it everywhere, but you only need to read it.",
      words: [
        { text: "ゼロ / れい", romaji: "zero / rei", meaning: "0", emoji: "0️⃣" },
        { text: "いち（一）", romaji: "ichi", meaning: "1", emoji: "1️⃣" },
        { text: "に（二）", romaji: "ni", meaning: "2", emoji: "2️⃣" },
        { text: "さん（三）", romaji: "san", meaning: "3", emoji: "3️⃣" },
        { text: "よん / し（四）", romaji: "yon / shi", meaning: "4", emoji: "4️⃣" },
        { text: "ご（五）", romaji: "go", meaning: "5", emoji: "5️⃣" },
        { text: "ろく（六）", romaji: "roku", meaning: "6", emoji: "6️⃣" },
        { text: "なな / しち（七）", romaji: "nana / shichi", meaning: "7", emoji: "7️⃣" },
        { text: "はち（八）", romaji: "hachi", meaning: "8", emoji: "8️⃣" },
        { text: "きゅう / く（九）", romaji: "kyuu / ku", meaning: "9", emoji: "9️⃣" },
        { text: "じゅう（十）", romaji: "juu", meaning: "10", emoji: "🔟" },
      ],
    },
    {
      kind: "grammar",
      intro: "Three numbers have two readings. Knowing which is common saves confusion.",
      patterns: [
        {
          id: "number-readings",
          title: "Double readings: 4, 7, 9",
          titleRomaji: "yon/shi, nana/shichi, kyuu/ku",
          subtitle: "Pick the common one.",
          pattern: [
            { text: "四 = よん / し", highlight: true },
            { text: "七 = なな / しち", highlight: true },
            { text: "九 = きゅう / く", highlight: true },
          ],
          patternRomaji: "4 · 7 · 9 each have two readings",
          note: "Most numbers have one reading, but 4, 7, and 9 have two. When counting on their own, よん (4), なな (7), and きゅう (9) are the safe, common choices. し and しち get avoided partly because し also means 'death' — but you'll still hear them in fixed times and dates (Lesson 4–5).",
          tip: "Default to よん / なな / きゅう unless a set phrase uses the other reading.",
          examples: [
            {
              jp: "よん（四）",
              romaji: "yon",
              en: "4 — common reading",
              breakdown: [
                { jp: "四", en: "the kanji for 4" },
                { jp: "よん", en: "common reading" },
                { jp: "し", en: "also possible" },
              ],
            },
            {
              jp: "なな（七）",
              romaji: "nana",
              en: "7 — common reading",
              breakdown: [
                { jp: "七", en: "the kanji for 7" },
                { jp: "なな", en: "common reading" },
                { jp: "しち", en: "also possible" },
              ],
            },
          ],
          apply: {
            prompt: "What's the common, everyday reading of 四 (4)?",
            options: ["し", "よん", "なな"],
            optionsRomaji: ["shi", "yon", "nana"],
            correct: 1,
            explanation: "よん is the common reading; し is avoided in many contexts.",
          },
        },
      ],
    },
    {
      kind: "quiz",
      intro: "Read the kanji numbers.",
      questions: [
        {
          id: "q-three",
          question: "What number is 三?",
          options: ["2", "3", "5", "8"],
          correct: 1,
          explanation: "三 = さん = 3.",
        },
        {
          id: "q-ten",
          question: "What number is 十?",
          options: ["1", "10", "100", "7"],
          correct: 1,
          explanation: "十 = じゅう = 10.",
        },
        {
          id: "q-five",
          question: "Which kanji means 5?",
          options: ["五", "六", "九", "二"],
          optionsRomaji: ["go", "roku", "kyuu", "ni"],
          correct: 0,
          explanation: "五 = ご = 5.",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Counting cats",
      emoji: "🐱",
      intro: "Yui spots the café cats.",
      lines: [
        { speaker: "yui", jp: "ねこ！ いち、に、さん…", romaji: "Neko! Ichi, ni, san...", en: "Cats! One, two, three..." },
        { speaker: "kenji", jp: "よん ひき います！", romaji: "Yon hiki imasu!", en: "There are four!" },
        { speaker: "yui", jp: "あ、ご ひき！", romaji: "A, go hiki!", en: "Oh, five!" },
        { speaker: "hana", jp: "ろく… ろく ひき です。", romaji: "Roku... roku hiki desu.", en: "Six... it's six." },
        { speaker: "yui", jp: "にぎやか ですね！", romaji: "Nigiyaka desu ne!", en: "How lively!" },
      ],
      comprehension: [
        {
          question: "How many cats in the end?",
          options: ["Four (よん)", "Five (ご)", "Six (ろく)", "Ten (じゅう)"],
          correct: 2,
          explanation: "ろく ひき です — six cats.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["0–10 in Japanese", "Kanji 一–十 (recognition)", "Double readings for 4, 7, 9"],
      badge: { name: "Counter Online", emoji: "🔢" },
    },
  ],
};
