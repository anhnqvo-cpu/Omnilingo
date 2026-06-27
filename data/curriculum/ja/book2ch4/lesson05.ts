import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 6 (Te-form) · Lesson 5 — capstone. No new grammar or kanji:
 * it drills the て-form conjugation across all groups and weaves its three uses —
 * 〜てください, 〜ています, and 〜て／〜てから sequencing — into one Saturday with the cast.
 */
export const book2Chapter4Lesson05: Lesson = {
  id: "ja-2-ch4-5",
  chapterId: "ja-2-ch4",
  number: 5,
  title: "The te-form, all together",
  titleNative: "て‐form review",
  subtitle: "Chapter 6 review",
  summary:
    "Lock in the te-form: conjugate every group on sight, then use it three ways — requests (〜てください), ongoing actions (〜ています), and sequences (〜て／〜てから) — across one Saturday with everyone.",
  xp: 90,
  estimateMinutes: 13,
  unlockAfter: "ja-2-ch4-4",
  steps: [
    {
      kind: "intro",
      title: "Everything the te-form does",
      subtitle:
        "One form, three big jobs — and you've learned them all. Match verbs to their て-forms and the uses to their meanings, run a mixed review, then read a Saturday where requests, “-ing”, and sequences all show up naturally.",
      goals: [
        "Conjugate Group 1, Group 2, and irregular verbs to て-form on sight",
        "Pick the right use: 〜てください · 〜ています · 〜てから",
        "Read a full scene built on the te-form",
      ],
      estimateMinutes: 13,
    },
    {
      kind: "matching",
      intro: "Two rounds: turn each verb into its て-form, then match each use to its meaning.",
      rounds: [
        {
          title: "Verb → て-form",
          pairs: [
            { id: "t1", left: "たべる", right: "たべて", romaji: "taberu → tabete" },
            { id: "t2", left: "のむ", right: "のんで", romaji: "nomu → nonde" },
            { id: "t3", left: "書く", right: "書いて", romaji: "kaku → kaite" },
            { id: "t4", left: "いく", right: "いって", romaji: "iku → itte" },
          ],
        },
        {
          title: "Te-form use → meaning",
          pairs: [
            { id: "u1", left: "〜てください", right: "please do…", romaji: "~te kudasai" },
            { id: "u2", left: "〜ています", right: "is doing now", romaji: "~te imasu" },
            { id: "u3", left: "〜てから", right: "after doing…", romaji: "~te kara" },
            { id: "u4", left: "〜て、〜", right: "do this, then that", romaji: "~te, ~" },
          ],
        },
      ],
    },
    {
      kind: "grammar",
      intro: "The whole te-form system on one screen, then a mixed check.",
      patterns: [
        {
          id: "te-recap",
          title: "The te-form: build it, then use it",
          titleRomaji: "make it · use it",
          subtitle: "One conjugation, three jobs.",
          pattern: [
            { text: "build: る/って/んで/いて/して", highlight: true },
            { text: "use: ください・います・から", highlight: false },
          ],
          patternRomaji: "build → use",
          note: "Build it — Group 2: る→て (たべて). Irregular: する→して, くる→きて. Group 1 by ending: う・つ・る→って, む・ぶ・ぬ→んで, く→いて, ぐ→いで, す→して, and いく→いって. Use it — 〜てください (please do), 〜ています (doing right now / ongoing state), 〜て、〜 (sequence; last verb sets the tense), 〜てから (after doing). The て-form has no tense of its own; the end of the sentence supplies it.",
          tip: "If you only drill one thing, drill the Group 1 endings — they're the half that trips everyone. って vs んで vs いて becomes automatic with reps, and the Daily Review will keep bringing them back.",
          examples: [
            {
              jp: "ここ に きて、すわって ください。",
              romaji: "Koko ni kite, suwatte kudasai.",
              en: "Please come here and sit down.",
              breakdown: [
                { jp: "きて", en: "come (irregular て-form) and…" },
                { jp: "すわって", en: "sit (る→って)" },
                { jp: "ください", en: "please" },
              ],
            },
            {
              jp: "いま、本 を 読んでいます。",
              romaji: "Ima, hon wo yonde imasu.",
              en: "I'm reading a book right now.",
              breakdown: [
                { jp: "いま", en: "now" },
                { jp: "読んで", en: "read (む→んで)" },
                { jp: "います", en: "am …-ing" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "て-form of かう (to buy):",
          options: ["かいて", "かって", "かんで"],
          optionsRomaji: ["kaite", "katte", "kande"],
          correct: 1,
          explanation: "う・つ・る → って: かう → かって.",
          concept: "Group 1 て-form",
        },
        {
          question: "て-form of する (to do):",
          options: ["して", "すて", "しって"],
          optionsRomaji: ["shite", "sute", "shitte"],
          correct: 0,
          explanation: "する is irregular: する → して.",
          concept: "irregular て-form",
        },
        {
          question: "“Please wait a moment.” ちょっと ＿＿。",
          jp: "ちょっと ＿＿。",
          romaji: "Chotto ＿＿.",
          options: ["まちます", "まって ください", "まってから"],
          optionsRomaji: ["machimasu", "matte kudasai", "matte kara"],
          correct: 1,
          explanation: "Request = て-form + ください: まって ください.",
          concept: "〜てください",
        },
        {
          question: "“I'm listening to music.” おんがく を ＿＿。",
          jp: "おんがく を ＿＿。",
          romaji: "Ongaku wo ＿＿.",
          options: ["聞きます", "聞いています", "聞いてください"],
          optionsRomaji: ["kikimasu", "kiite imasu", "kiite kudasai"],
          correct: 1,
          explanation: "Ongoing now = て-form + います: 聞いて → 聞いています.",
          concept: "〜ています",
        },
        {
          question: "“After eating, I'll sleep.” ごはん を ＿＿、ねます。",
          jp: "ごはん を ＿＿、ねます。",
          romaji: "Gohan wo ＿＿, nemasu.",
          options: ["たべて から", "たべてから", "たべるから"],
          optionsRomaji: ["tabete kara", "tabete kara", "taberu kara"],
          correct: 1,
          explanation: "“After doing” = て-form + から: たべてから、ねます.",
          concept: "〜てから",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Saturday at the café",
      emoji: "☕",
      intro:
        "The whole group meets up. Requests, what everyone's up to, and a plan for the rest of the day — all in te-form.",
      lines: [
        { speaker: "narrator", en: "Hana arrives last and finds the others already settled in." },
        { speaker: "hana", jp: "おまたせ！みんな、なに を していますか？", romaji: "Omatase! Minna, nani wo shite imasu ka?", en: "Sorry to keep you waiting! What's everyone doing?" },
        { speaker: "kenji", jp: "ぼく は メニュー を 読んでいます。", romaji: "Boku wa menyuu wo yonde imasu.", en: "I'm reading the menu." },
        { speaker: "yui", jp: "わたし は ともだち に メッセージ を 書いています。", romaji: "Watashi wa tomodachi ni messeeji wo kaite imasu.", en: "I'm writing a message to a friend." },
        { speaker: "tanaka", jp: "Hana、コーヒー を かって きて ください。", romaji: "Hana, koohii wo katte kite kudasai.", en: "Hana, please go buy a coffee (and come back)." },
        { speaker: "hana", jp: "はい！かって きます。それから、はなしましょう。", romaji: "Hai! Katte kimasu. Sore kara, hanashimashou.", en: "Sure! I'll go buy it. After that, let's talk." },
        { speaker: "narrator", en: "Hana returns, and they plan the afternoon." },
        { speaker: "yui", jp: "ごはん を たべてから、えいが を みませんか？", romaji: "Gohan wo tabete kara, eiga wo mimasen ka?", en: "After we eat, shall we watch a movie?" },
        { speaker: "kenji", jp: "いいね！えき に いって、きっぷ を かいましょう。", romaji: "Ii ne! Eki ni itte, kippu wo kaimashou.", en: "Nice! Let's go to the station and buy tickets." },
      ],
      comprehension: [
        {
          question: "What is Yui doing when Hana arrives?",
          options: ["Reading the menu", "Writing a message (メッセージ を 書いています)", "Buying coffee", "Watching a movie"],
          correct: 1,
          explanation: "ともだち に メッセージ を 書いています — writing a message to a friend.",
        },
        {
          question: "What's the plan after eating?",
          options: ["Go home", "Watch a movie (ごはん を たべてから、えいが)", "Study", "Buy coffee"],
          correct: 1,
          explanation: "ごはん を たべてから、えいが を みませんか — after eating, watch a movie.",
        },
        {
          question: "Find a て-form sequence in Kenji's last line.",
          options: ["みませんか", "えき に いって、きっぷ を かいましょう", "していますか", "読んでいます"],
          correct: 1,
          explanation: "えき に いって、きっぷ を かいましょう — “go to the station and buy tickets” (いく→いって chaining into the next verb).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Build: る→て · する→して/くる→きて · う/つ/る→って · む/ぶ/ぬ→んで · く→いて · ぐ→いで · す→して · いく→いって",
        "Use: 〜てください (please) · 〜ています (now) · 〜て／〜てから (sequence)",
        "The final verb carries tense for a whole て-chain",
        "Kanji this chapter: 聞 話 読 書",
        "Keep the Group 1 endings sharp in the Daily Review",
      ],
      badge: { name: "Te-form Fluent", emoji: "🗝️" },
    },
  ],
};
