import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 6 · Lesson 5 — Money, dates & capstone: 〜えん, 〜がつ (months), 〜ようび (weekdays).
 * Pays off the café thread — Book 1 ends with the group settling the bill.
 */
export const chapter06Lesson05: Lesson = {
  id: "ja-6-5",
  chapterId: "ja-ch6",
  number: 5,
  title: "Money, dates & the bill",
  titleNative: "おかね・ひにち",
  subtitle: "Chapter 6 capstone",
  summary: "Read prices in 〜えん, say months (〜がつ) and weekdays (〜ようび), then settle the café bill — the payoff of Book 1.",
  xp: 75,
  estimateMinutes: 13,
  unlockAfter: "ja-6-4",
  steps: [
    {
      kind: "intro",
      title: "Pay the bill, mark the calendar",
      subtitle: "Prices use 〜えん (¥). Months are just number + がつ; weekdays end in 〜ようび. Then a mixed review of all of Chapter 6.",
      goals: [
        "Read prices: ごひゃくえん = ¥500",
        "Say months (〜がつ) and weekdays (〜ようび)",
        "Handle a real café bill",
      ],
      estimateMinutes: 13,
    },
    {
      kind: "vocabDrill",
      intro: "Money and the calendar.",
      words: [
        { text: "えん（円）", romaji: "en", meaning: "yen (¥)", emoji: "💴" },
        { text: "ごひゃくえん（五百円）", romaji: "go-hyaku-en", meaning: "500 yen", emoji: "🪙" },
        { text: "いちがつ（一月）", romaji: "ichi-gatsu", meaning: "January", emoji: "🗓️" },
        { text: "しがつ（四月）", romaji: "shi-gatsu", meaning: "April (し, not よん)", emoji: "🌸" },
        { text: "きょう（今日）", romaji: "kyou", meaning: "today", emoji: "📅" },
        { text: "げつようび（月曜日）", romaji: "getsu-youbi", meaning: "Monday", emoji: "📆" },
      ],
    },
    {
      kind: "grammar",
      intro: "Prices, then the calendar — then a full review.",
      patterns: [
        {
          id: "prices-en",
          title: "[number] えん — prices",
          titleRomaji: "[number]-en",
          subtitle: "Yen comes after the number.",
          pattern: [
            { text: "number", highlight: true },
            { text: "えん", highlight: false },
          ],
          patternRomaji: "[number] en",
          note: "Add えん (円, ¥) to any number for a price: ひゃくえん = ¥100, ごひゃくえん = ¥500, せんえん = ¥1,000. Ask the price with いくら ですか and answer with the number + えん.",
          tip: "Japan is largely cash-and-coin; ¥100 and ¥500 are coins, so these come up constantly.",
          examples: [
            {
              jp: "コーヒー は よんひゃくえん です。",
              romaji: "Koohii wa yon-hyaku-en desu.",
              en: "The coffee is ¥400.",
              breakdown: [
                { jp: "コーヒー は", en: "the coffee" },
                { jp: "よんひゃく", en: "400" },
                { jp: "えん です。", en: "yen is" },
              ],
            },
            {
              jp: "ぜんぶ で せんえん です。",
              romaji: "Zenbu de sen-en desu.",
              en: "It's ¥1,000 in total.",
              breakdown: [
                { jp: "ぜんぶ で", en: "in total" },
                { jp: "せん", en: "1,000" },
                { jp: "えん です。", en: "yen is" },
              ],
            },
          ],
          apply: {
            prompt: "How much is ごひゃくえん?",
            options: ["¥50", "¥500", "¥5,000"],
            optionsRomaji: ["go-juu-en", "go-hyaku-en", "go-sen-en"],
            correct: 1,
            explanation: "ごひゃく = 500, + えん = ¥500.",
          },
        },
        {
          id: "months-weekdays",
          title: "Months 〜がつ & weekdays 〜ようび",
          titleRomaji: "~gatsu / ~youbi",
          subtitle: "Number + がつ; day + ようび.",
          pattern: [
            { text: "number がつ", highlight: true },
            { text: "/ day ようび", highlight: true },
          ],
          patternRomaji: "ichi-gatsu … / getsu-youbi …",
          note: "Months are simply the number + がつ: いちがつ (Jan), にがつ (Feb)… Watch しがつ (4/April), しちがつ (7/July), くがつ (9/Sept). Weekdays end in ようび: げつ (Mon), か (Tue), すい (Wed), もく (Thu), きん (Fri), ど (Sat), にち (Sun) → げつようび, かようび…",
          tip: "The weekday roots are the classical elements: 月(moon) 火(fire) 水(water) 木(wood) 金(gold) 土(earth) 日(sun).",
          examples: [
            {
              jp: "きょう は げつようび です。",
              romaji: "Kyou wa getsu-youbi desu.",
              en: "Today is Monday.",
              breakdown: [
                { jp: "きょう は", en: "today" },
                { jp: "げつようび", en: "Monday" },
                { jp: "です。", en: "is" },
              ],
            },
            {
              jp: "しがつ です。",
              romaji: "Shi-gatsu desu.",
              en: "It's April.",
              breakdown: [
                { jp: "しがつ", en: "April (month 4)" },
                { jp: "です。", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "Which is 'April'?",
            options: ["よんがつ", "しがつ", "しがつび"],
            optionsRomaji: ["yon-gatsu", "shi-gatsu", "shi-gatsu-bi"],
            correct: 1,
            explanation: "April is しがつ (uses し, not よん). Months are number + がつ.",
          },
        },
      ],
      practice: [
        {
          question: "What number is 百?",
          options: ["10", "100", "1,000", "10,000"],
          correct: 1,
          explanation: "百 = ひゃく = 100.",
          concept: "Number kanji",
        },
        {
          question: "How do you say 25?",
          options: ["ごじゅうに", "にじゅうご", "にじゅうじゅう", "ふたじゅうご"],
          optionsRomaji: ["go-juu-ni", "ni-juu-go", "ni-juu-juu", "futa-juu-go"],
          correct: 1,
          explanation: "Tens first: にじゅう (20) + ご (5).",
          concept: "Compound numbers",
        },
        {
          question: "Order 'two coffees'.",
          options: ["コーヒー を に ください。", "コーヒー を ふたつ ください。", "コーヒー を ふたり ください。", "コーヒー を にじ ください。"],
          optionsRomaji: ["Koohii wo ni kudasai.", "Koohii wo futatsu kudasai.", "Koohii wo futari kudasai.", "Koohii wo ni-ji kudasai."],
          correct: 1,
          explanation: "Things use 〜つ: ふたつ. ふたり counts people.",
          concept: "Counters (〜つ)",
        },
        {
          question: "How do you say '3 o'clock'?",
          options: ["さんぷん", "さんじ", "さんにん", "さんがつ"],
          optionsRomaji: ["san-pun", "san-ji", "san-nin", "san-gatsu"],
          correct: 1,
          explanation: "じ marks the hour: さんじ.",
          concept: "Telling time (〜じ)",
        },
        {
          question: "How much is ごひゃくえん?",
          options: ["¥50", "¥500", "¥5,000", "¥15"],
          correct: 1,
          explanation: "ごひゃく (500) + えん = ¥500.",
          concept: "Prices (〜えん)",
        },
      ],
    },
    {
      kind: "matching",
      intro: "Capstone match — numbers, time, and money.",
      rounds: [
        {
          title: "Chapter 6 review",
          pairs: [
            { id: "hyaku", left: "百", romaji: "hyaku", right: "100" },
            { id: "sen", left: "千", romaji: "sen", right: "1,000" },
            { id: "futari", left: "ふたり", romaji: "futari", right: "two people" },
            { id: "yoji", left: "よじ", romaji: "yo-ji", right: "4 o'clock" },
            { id: "en", left: "えん", romaji: "en", right: "yen" },
            { id: "han", left: "はん", romaji: "han", right: "half past" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Settling the bill — Book 1 finale",
      emoji: "💴",
      intro: "Friday again. The group has eaten well. Time to pay.",
      lines: [
        { speaker: "hana", jp: "すみません、おかいけい おねがいします。", romaji: "Sumimasen, okaikei onegaishimasu.", en: "Excuse me, the bill please." },
        { speaker: "tanaka", jp: "はい。ぜんぶ で せんはっぴゃくえん です。", romaji: "Hai. Zenbu de sen-happyaku-en desu.", en: "Sure. That's ¥1,800 in total." },
        { speaker: "kenji", jp: "よにん だから… ひとり よんひゃくごじゅうえん。", romaji: "Yo-nin dakara... hitori yon-hyaku-go-juu-en.", en: "Four people, so... ¥450 each." },
        { speaker: "yui", jp: "けいさん、はやい！", romaji: "Keisan, hayai!", en: "Quick math!" },
        { speaker: "hana", jp: "また らいしゅう。げつようび は どう ですか。", romaji: "Mata raishuu. Getsu-youbi wa dou desu ka.", en: "Again next week. How about Monday?" },
        { speaker: "narrator", en: "Hana read the menu, ordered, asked the time, and split the bill — all in Japanese. That's Book 1. 🎉" },
      ],
      comprehension: [
        {
          question: "What was the total bill?",
          options: ["¥1,800 (せんはっぴゃくえん)", "¥800", "¥450", "¥1,000"],
          correct: 0,
          explanation: "ぜんぶ で せんはっぴゃくえん です — ¥1,800 total (¥450 each for four).",
        },
        {
          question: "When does Hana suggest meeting again?",
          options: ["Tuesday", "Monday (げつようび)", "Today", "April"],
          correct: 1,
          explanation: "げつようび は どう ですか — 'How about Monday?'",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Prices in 〜えん, months 〜がつ, weekdays 〜ようび",
        "All of Chapter 6: numbers, counters, time, money",
        "🎉 Book 1 complete — you can read kana, hold a basic conversation, and get through a café",
      ],
      badge: { name: "Book 1 Complete", emoji: "🎓" },
    },
  ],
};
