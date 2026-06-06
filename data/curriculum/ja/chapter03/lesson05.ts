import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 3 · Lesson 5 — Yōon (combo kana like しゃ・きょう) and small っ.
 * The last two systematic features of hiragana. After this, you can read EVERY hiragana.
 * Chapter 3 capstone microstory uses everything.
 */
export const chapter03Lesson05: Lesson = {
  id: "ja-3-5",
  chapterId: "ja-ch3",
  number: 5,
  title: "Combo kana + small っ",
  titleNative: "ようおん・そくおん",
  subtitle: "Hiragana capstone",
  summary: "ょ・ゅ・ゃ (small y-row) combine with i-column kana to make new sounds: きょう, しゅみ, ちゃ. Small っ doubles the next consonant: がっこう, きって.",
  xp: 70,
  estimateMinutes: 13,
  unlockAfter: "ja-3-4",
  steps: [
    {
      kind: "intro",
      title: "The last two systematic features of hiragana",
      subtitle: "After this you can read EVERY hiragana word in Japanese.",
      goals: [
        "Read yōon (contracted sounds): きゃ, しゅ, ちょ, etc.",
        "Use small っ for doubled consonants: がっこう, きって, ちょっと",
        "Read a full multi-paragraph microstory unaided",
      ],
      estimateMinutes: 13,
    },
    {
      kind: "grammar",
      intro: "Two final mechanics. Both reuse kana you already know — just smaller.",
      patterns: [
        {
          id: "youon",
          title: "Combo kana: i-column + small や・ゆ・よ",
          titleRomaji: "yōon",
          subtitle: "Squish two kana into one syllable",
          pattern: [
            { text: "き", highlight: true },
            { text: " + ", highlight: false },
            { text: "ょ", highlight: true },
            { text: " → ", highlight: false },
            { text: "きょ", highlight: true },
            { text: " (kyo)", highlight: false },
          ],
          patternRomaji: "ki + small yo → kyo",
          note: "Take any i-column kana (き, し, ち, に, ひ, み, り) plus a small ゃ・ゅ・ょ — they merge into a single syllable. The small kana is ~half the size of a normal one.",
          tip: "Without the small marker, きよ would be two syllables (ki-yo). With it, きょ is one (kyo). The size matters!",
          examples: [
            { jp: "きょう", romaji: "Kyou", en: "Today", breakdown: [{ jp: "きょ", en: "kyo" }, { jp: "う", en: "u (long vowel)" }] },
            { jp: "しゃしん", romaji: "Shashin", en: "Photograph", breakdown: [{ jp: "しゃ", en: "sha" }, { jp: "しん", en: "shin" }] },
            { jp: "ちょっと", romaji: "Chotto", en: "A little / wait a moment", breakdown: [{ jp: "ちょ", en: "cho" }, { jp: "っと", en: "tto (with double t)" }] },
          ],
        },
        {
          id: "sokuon",
          title: "Small っ: doubled consonant",
          titleRomaji: "sokuon",
          subtitle: "The 'pause + double the next consonant' marker",
          pattern: [
            { text: "が", highlight: true },
            { text: " + ", highlight: false },
            { text: "っ", highlight: true },
            { text: " + ", highlight: false },
            { text: "こう", highlight: true },
            { text: " → ", highlight: false },
            { text: "がっこう", highlight: true },
          ],
          patternRomaji: "ga + small tsu + kou → gakkou",
          note: "A small っ (half the size of a normal つ) tells you to double the next consonant. In speech it's a tiny pause before the doubled consonant. Romanised as kk, tt, pp, ss, etc.",
          tip: "Never appears before vowels or before n/m. Always before k, s, t, p, ch.",
          examples: [
            { jp: "がっこう", romaji: "Gakkou", en: "School", breakdown: [{ jp: "が", en: "ga" }, { jp: "っ", en: "(pause)" }, { jp: "こう", en: "kou" }] },
            { jp: "きって", romaji: "Kitte", en: "Postage stamp", breakdown: [{ jp: "き", en: "ki" }, { jp: "っ", en: "(pause)" }, { jp: "て", en: "te" }] },
          ],
        },
      ],
      practice: [
        {
          question: "How is きょう read?",
          jp: "きょう",
          options: ["ki-yo-u", "kyou (one syllable + long u)", "ki-you", "kyu"],
          correct: 1,
          explanation: "きょ is one squished syllable. う lengthens the vowel. = 'kyou' = today.",
          concept: "yōon",
        },
        {
          question: "What does ちょっと mean?",
          jp: "ちょっと",
          options: ["A little / wait a moment", "Big", "Very fast", "Quiet"],
          correct: 0,
          explanation: "ちょ (cho) + っ (double t) + と (to) → 'chotto'. Common conversational filler.",
          concept: "sokuon",
        },
        {
          question: "Which is 'school'?",
          options: ["がこう", "がっこう", "かっこう", "ががこう"],
          optionsRomaji: ["gakou", "gakkou", "kakkou", "gagakou"],
          correct: 1,
          explanation: "がっこう — note the small っ doubling the k.",
          concept: "sokuon",
        },
      ],
    },
    {
      kind: "vocabDrill",
      intro: "Ten common words showing yōon + small っ in real use.",
      words: [
        { text: "きょう", romaji: "kyou", meaning: "today", emoji: "📅", example: { jp: "きょう は さむい。", romaji: "Kyou wa samui.", en: "Today is cold." } },
        { text: "あした", romaji: "ashita", meaning: "tomorrow", emoji: "➡️", example: { jp: "あした、 また。", romaji: "Ashita, mata.", en: "See you tomorrow." } },
        { text: "しゃしん", romaji: "shashin", meaning: "photograph", emoji: "📷", example: { jp: "しゃしん を とる。", romaji: "Shashin wo toru.", en: "Take a photo." } },
        { text: "ちょっと", romaji: "chotto", meaning: "a little / wait a moment", emoji: "🤏", example: { jp: "ちょっと まって。", romaji: "Chotto matte.", en: "Wait a moment." } },
        { text: "りょこう", romaji: "ryokou", meaning: "trip / travel", emoji: "🧳", example: { jp: "にほん へ りょこう。", romaji: "Nihon e ryokou.", en: "A trip to Japan." } },
        { text: "ぎゅうにゅう", romaji: "gyuunyuu", meaning: "(cow's) milk", emoji: "🥛", example: { jp: "ぎゅうにゅう を のむ。", romaji: "Gyuunyuu wo nomu.", en: "Drink milk." } },
        { text: "きって", romaji: "kitte", meaning: "postage stamp", emoji: "📮", example: { jp: "きって を かう。", romaji: "Kitte wo kau.", en: "Buy a stamp." } },
        { text: "ざっし", romaji: "zasshi", meaning: "magazine", emoji: "📰", example: { jp: "ざっし を よむ。", romaji: "Zasshi wo yomu.", en: "Read a magazine." } },
        { text: "おちゃ", romaji: "ocha", meaning: "tea", emoji: "🍵", example: { jp: "おちゃ を のむ。", romaji: "Ocha wo nomu.", en: "Drink tea." } },
        { text: "じゅぎょう", romaji: "jugyou", meaning: "class / lecture", emoji: "🎓", example: { jp: "じゅぎょう が ある。", romaji: "Jugyou ga aru.", en: "I have class." } },
      ],
    },
    {
      kind: "matching",
      intro: "Capstone match — kana mechanics from across Chapter 3.",
      rounds: [
        {
          title: "Modified kana",
          pairs: [
            { id: "ga", left: "が", romaji: "ga", right: "voiced か" },
            { id: "ji", left: "じ", romaji: "ji", right: "voiced し" },
            { id: "pa", left: "ぱ", romaji: "pa", right: "は + ゜" },
            { id: "kyo", left: "きょ", romaji: "kyo", right: "き + small ょ" },
            { id: "tto", left: "っ", romaji: "(double)", right: "doubles next consonant" },
            { id: "n", left: "ん", romaji: "n", right: "standalone nasal" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Chapter 3 capstone — Hana's first photo album",
      emoji: "📷",
      intro: "It's late summer. Hana shows her photo album to the family.",
      lines: [
        { speaker: "hana", jp: "これ は きょう の しゃしん です。", romaji: "Kore wa kyou no shashin desu.", en: "These are today's photos." },
        { speaker: "yui", jp: "わあ！ ねこ も いる！", romaji: "Waa! Neko mo iru!", en: "Wow! The cat's in there too!" },
        { speaker: "kenji", jp: "これ は りょこう？", romaji: "Kore wa ryokou?", en: "Is this from a trip?" },
        { speaker: "hana", jp: "ええ。 やま と さくら。", romaji: "Ee. Yama to sakura.", en: "Yes. Mountains and cherry blossoms." },
        { speaker: "tanaka", jp: "がっこう の しゃしん も？", romaji: "Gakkou no shashin mo?", en: "Photos from school too?" },
        { speaker: "hana", jp: "はい、 たくさん。 じゅぎょう、 ともだち、 ぜんぶ。", romaji: "Hai, takusan. Jugyou, tomodachi, zenbu.", en: "Yes, lots. Classes, friends, everything." },
        { speaker: "yui", jp: "わたし も しゃしん とる！", romaji: "Watashi mo shashin toru!", en: "I'll take a photo too!" },
        { speaker: "narrator", en: "Yui aims her phone at the cat. The cat is unimpressed." },
      ],
      comprehension: [
        { question: "What is in Hana's album?", options: ["Only photos of cats", "Today's photos plus a trip plus school", "Family heirlooms", "Recipes"], correct: 1, explanation: "きょう の しゃしん (today's), りょこう (trip), がっこう (school) — all in there." },
        { question: "What does ぜんぶ mean (from context)?", options: ["nothing", "everything", "a few", "yesterday"], correct: 1, explanation: "ぜんぶ = everything / all. Hana said 'classes, friends, everything'." },
      ],
    },
    {
      kind: "completion",
      recap: [
        "All hiragana — 46 base kana + voicing + combos + double っ",
        "~80 vocabulary words across Books 1's first three chapters",
        "First paragraph-length Japanese read mostly unaided",
      ],
      badge: { name: "Hiragana Complete", emoji: "🏆" },
    },
  ],
};
