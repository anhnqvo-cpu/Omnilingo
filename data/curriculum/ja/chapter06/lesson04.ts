import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 6 · Lesson 4 — Telling time: 〜じ (o'clock), 〜ふん/ぷん (minutes), はん (half), なんじ.
 */
export const chapter06Lesson04: Lesson = {
  id: "ja-6-4",
  chapterId: "ja-ch6",
  number: 4,
  title: "Telling time",
  titleNative: "じかん",
  subtitle: "〜時 and 〜分",
  summary: "Say the hour with 〜じ and minutes with 〜ふん/ぷん. Watch the irregular hours (4, 7, 9) and the minute sound-changes. Ask the time with なんじ ですか.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-6-3",
  steps: [
    {
      kind: "intro",
      title: "What time is it?",
      subtitle: "Hours add じ to the number; minutes add ふん/ぷん. A few readings shift — especially 4, 7, 9 o'clock. はん means 'half past'.",
      goals: [
        "Say the hour: いちじ, にじ … (and よじ, しちじ, くじ)",
        "Add minutes with 〜ふん/ぷん and はん (half)",
        "Ask なんじ ですか",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocab",
      intro: "The hours to watch are 4, 7, 9 — they don't use the reading you'd expect.",
      words: [
        { text: "いちじ（一時）", romaji: "ichi-ji", meaning: "1:00", emoji: "🕐" },
        { text: "よじ（四時）", romaji: "yo-ji", meaning: "4:00 (not よん!)", emoji: "🕓" },
        { text: "しちじ（七時）", romaji: "shichi-ji", meaning: "7:00 (not なな)", emoji: "🕖" },
        { text: "くじ（九時）", romaji: "ku-ji", meaning: "9:00 (not きゅう)", emoji: "🕘" },
        { text: "はん（半）", romaji: "han", meaning: "half past (:30)", emoji: "🕜" },
        { text: "なんじ（何時）", romaji: "nan-ji", meaning: "what time", emoji: "❓" },
      ],
    },
    {
      kind: "grammar",
      intro: "Hours first, then minutes.",
      patterns: [
        {
          id: "hours-ji",
          title: "[number] じ — o'clock",
          titleRomaji: "[number]-ji",
          subtitle: "Add じ to the hour. Mind 4, 7, 9.",
          pattern: [
            { text: "number", highlight: true },
            { text: "じ", highlight: false },
            { text: "(+ はん)", highlight: false },
          ],
          patternRomaji: "[number] ji (+ han = :30)",
          note: "Add じ to a number for the hour: いちじ (1:00), ごじ (5:00), じゅうじ (10:00). Three are irregular: 4:00 = よじ, 7:00 = しちじ, 9:00 = くじ. Add はん for half past: にじはん = 2:30.",
          tip: "ごぜん = a.m., ごご = p.m.: ごご さんじ = 3 p.m.",
          examples: [
            {
              jp: "いま、よじ です。",
              romaji: "Ima, yo-ji desu.",
              en: "It's 4 o'clock now.",
              breakdown: [
                { jp: "いま", en: "now" },
                { jp: "よじ", en: "4:00" },
                { jp: "です。", en: "is" },
              ],
            },
            {
              jp: "にじはん です。",
              romaji: "Ni-ji-han desu.",
              en: "It's 2:30.",
              breakdown: [
                { jp: "にじ", en: "2:00" },
                { jp: "はん", en: "half past" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "How do you say '3 o'clock'?",
            options: ["さんぷん", "さんじ", "さんにん"],
            optionsRomaji: ["san-pun", "san-ji", "san-nin"],
            correct: 1,
            explanation: "じ marks the hour: さんじ. さんぷん is '3 minutes'; さんにん is '3 people'.",
          },
        },
        {
          id: "minutes-fun",
          title: "[number] ふん / ぷん — minutes",
          titleRomaji: "[number]-fun / -pun",
          subtitle: "Some numbers trigger ぷん.",
          pattern: [
            { text: "number", highlight: true },
            { text: "ふん / ぷん", highlight: false },
          ],
          patternRomaji: "go-fun, jup-pun, san-pun …",
          note: "Minutes take ふん, but after some numbers it becomes ぷん: いっぷん(1), さんぷん(3), よんぷん(4), ろっぷん(6), はっぷん(8), じゅっぷん(10). The others use ふん: にふん(2), ごふん(5), ななふん(7), きゅうふん(9). Put it after the hour: さんじ ごふん = 3:05.",
          tip: "Don't stress the ふん/ぷん split now — say it, and your ear will tune in. はん (half) is far more common in casual speech.",
          examples: [
            {
              jp: "くじ じゅっぷん です。",
              romaji: "Ku-ji jup-pun desu.",
              en: "It's 9:10.",
              breakdown: [
                { jp: "くじ", en: "9:00" },
                { jp: "じゅっぷん", en: "10 minutes" },
                { jp: "です。", en: "is" },
              ],
            },
            {
              jp: "なんじ ですか。",
              romaji: "Nan-ji desu ka.",
              en: "What time is it?",
              breakdown: [
                { jp: "なんじ", en: "what time" },
                { jp: "ですか。", en: "is it?" },
              ],
            },
          ],
          apply: {
            prompt: "Ask 'What time is it?'",
            options: ["なんにん ですか。", "なんじ ですか。", "いくら ですか。"],
            optionsRomaji: ["Nan-nin desu ka.", "Nan-ji desu ka.", "Ikura desu ka."],
            correct: 1,
            explanation: "なんじ = what time. なんにん = how many people; いくら = how much.",
          },
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Making a plan",
      emoji: "🕘",
      intro: "Yui and Hana set a time to meet.",
      lines: [
        { speaker: "yui", jp: "カフェ、なんじ ですか。", romaji: "Kafe, nan-ji desu ka.", en: "What time at the café?" },
        { speaker: "hana", jp: "くじ は どう ですか。", romaji: "Ku-ji wa dou desu ka.", en: "How about 9 o'clock?" },
        { speaker: "yui", jp: "くじ は ちょっと… くじはん は？", romaji: "Ku-ji wa chotto... ku-ji-han wa?", en: "9 is a bit... how about 9:30?" },
        { speaker: "hana", jp: "オーケー！ くじはん です。", romaji: "Ookee! Ku-ji-han desu.", en: "OK! 9:30 it is." },
      ],
      comprehension: [
        {
          question: "What time do they settle on?",
          options: ["9:00 (くじ)", "9:30 (くじはん)", "4:00 (よじ)", "2:30 (にじはん)"],
          correct: 1,
          explanation: "くじはん です — 9:30.",
        },
      ],
    },
    {
      kind: "completion",
      recap: ["[number]じ o'clock — and よじ, しちじ, くじ", "Minutes with ふん/ぷん, はん = half past", "なんじ ですか"],
      badge: { name: "On the Clock", emoji: "🕘" },
    },
  ],
};
