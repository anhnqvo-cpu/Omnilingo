import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Checkpoint (Review) · Lesson 1 — verbs & particles. No new grammar:
 * it gathers the ます-verbs and the workhorse particles を・に・で・へ (plus
 * ません／ませんか) from Chapter 2 into one map, with applied mixed practice and a
 * day-in-the-life microstory that puts them all to use.
 */
export const book2ReviewLesson01: Lesson = {
  id: "ja-2-review-1",
  chapterId: "ja-2-review",
  number: 1,
  title: "Verbs & particles, together",
  titleNative: "ふくしゅう ①",
  subtitle: "Checkpoint review",
  summary:
    "Take a breath and consolidate: the ます-verbs and the four workhorse particles を・に・で・へ, plus ません／ませんか — all in one map, then used together across a single day.",
  xp: 70,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch3-5",
  steps: [
    {
      kind: "intro",
      title: "Let's tie it together",
      subtitle:
        "You've learned a lot of pieces — verbs, particles, existence, adjectives. Before moving on, let's stop and connect them. No new grammar here: just the big picture, lots of practice, and stories that use everything at once. Start with the engine of every sentence: a verb and its particles.",
      goals: [
        "See を・に・で・へ side by side and pick the right one",
        "Switch between ます・ません・ませんか with confidence",
        "Read a whole day built from verbs and particles",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "grammar",
      intro: "The whole particle toolkit from Chapter 2, on one screen.",
      patterns: [
        {
          id: "review-particle-map",
          title: "The particle map: を・に・で・へ",
          titleRomaji: "wo · ni · de · e",
          subtitle: "Four small words, four different jobs.",
          pattern: [
            { text: "を object", highlight: true },
            { text: "に place/time", highlight: true },
            { text: "で where/how", highlight: true },
            { text: "へ direction", highlight: false },
          ],
          patternRomaji: "wo · ni · de · e",
          note: "を marks the thing the verb acts on: コーヒー を のみます (“drink coffee”). に marks a destination or a clock time: がっこう に いきます (“go to school”), 7じ に おきます (“get up at 7”). で marks where an action happens, or the means: カフェ で たべます (“eat at a café”), でんしゃ で いきます (“go by train”). へ also points to a destination, much like に — うち へ かえります (“head home”). The verb sits at the very end.",
          tip: "The classic mix-up is に vs で. Use に for the place you END UP (destination of motion) or a point in time; use で for the place an action HAPPENS. いえ に かえります (go home) vs いえ で たべます (eat at home).",
          examples: [
            {
              jp: "カフェ で コーヒー を のみます。",
              romaji: "Kafe de koohii wo nomimasu.",
              en: "I drink coffee at the café.",
              breakdown: [
                { jp: "カフェ で", en: "at the café (place of action)" },
                { jp: "コーヒー を", en: "coffee (object)" },
                { jp: "のみます", en: "drink" },
              ],
            },
            {
              jp: "でんしゃ で がっこう に いきます。",
              romaji: "Densha de gakkou ni ikimasu.",
              en: "I go to school by train.",
              breakdown: [
                { jp: "でんしゃ で", en: "by train (means)" },
                { jp: "がっこう に", en: "to school (destination)" },
                { jp: "いきます", en: "go" },
              ],
            },
          ],
        },
        {
          id: "review-verb-forms",
          title: "ます · ません · ませんか",
          titleRomaji: "-masu · -masen · -masen ka",
          subtitle: "Do, don't, and “shall we?”",
          pattern: [
            { text: "たべます", highlight: false },
            { text: "たべません", highlight: true },
            { text: "たべませんか", highlight: true },
          ],
          patternRomaji: "tabemasu · tabemasen · tabemasen ka",
          note: "The polite present is 〜ます (“I do / will do”): たべます (“eat”). The negative swaps it to 〜ません (“I don't / won't”): たべません. Add か for a question, and 〜ませんか becomes a soft invitation: たべませんか (“won't you eat? / shall we eat?”). Same endings on every verb you've met — のみます, いきます, みます, します…",
          tip: "〜ませんか is an invitation, not a real “no” question — answer はい、たべましょう (“yes, let's eat”) to accept. It's the friendly way to suggest doing something together.",
          examples: [
            {
              jp: "コーヒー を のみません。",
              romaji: "Koohii wo nomimasen.",
              en: "I don't drink coffee.",
              breakdown: [
                { jp: "コーヒー を", en: "coffee (object)" },
                { jp: "のみません", en: "don't drink" },
              ],
            },
            {
              jp: "いっしょに えいが を みませんか。",
              romaji: "Issho ni eiga wo mimasen ka.",
              en: "Won't you watch a movie with me?",
              breakdown: [
                { jp: "いっしょに", en: "together" },
                { jp: "えいが を", en: "a movie (object)" },
                { jp: "みませんか", en: "won't you watch?" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "Particle: “I read a book.” ほん ＿ よみます。",
          jp: "ほん ＿ よみます。",
          romaji: "Hon ＿ yomimasu.",
          options: ["を", "に", "で"],
          optionsRomaji: ["wo", "ni", "de"],
          correct: 0,
          explanation: "を marks the object the verb acts on: ほん を よみます.",
          concept: "を (object)",
        },
        {
          question: "Particle: “I go to school.” がっこう ＿ いきます。",
          jp: "がっこう ＿ いきます。",
          romaji: "Gakkou ＿ ikimasu.",
          options: ["を", "に", "で"],
          optionsRomaji: ["wo", "ni", "de"],
          correct: 1,
          explanation: "に marks the destination of motion: がっこう に いきます.",
          concept: "に (destination)",
        },
        {
          question: "Particle: “I eat at the café.” カフェ ＿ たべます。",
          jp: "カフェ ＿ たべます。",
          romaji: "Kafe ＿ tabemasu.",
          options: ["を", "に", "で"],
          optionsRomaji: ["wo", "ni", "de"],
          correct: 2,
          explanation: "で marks where an action happens: カフェ で たべます.",
          concept: "で (place of action)",
        },
        {
          question: "“I don't drink coffee.” コーヒー を ＿＿。",
          jp: "コーヒー を ＿＿。",
          romaji: "Koohii wo ＿＿.",
          options: ["のみます", "のみません", "のみませんか"],
          optionsRomaji: ["nomimasu", "nomimasen", "nomimasen ka"],
          correct: 1,
          explanation: "Negative polite = 〜ません: のみません (“don't drink”).",
          concept: "〜ません",
        },
        {
          question: "Invite a friend: “Won't you eat together?” いっしょに ＿＿。",
          jp: "いっしょに ＿＿。",
          romaji: "Issho ni ＿＿.",
          options: ["たべます", "たべません", "たべませんか"],
          optionsRomaji: ["tabemasu", "tabemasen", "tabemasen ka"],
          correct: 2,
          explanation: "〜ませんか is the polite invitation: たべませんか (“won't you eat?”).",
          concept: "〜ませんか",
        },
      ],
    },
    {
      kind: "matching",
      intro: "Two quick rounds: match each particle to its job, then each verb to its meaning.",
      rounds: [
        {
          title: "Particle → job",
          pairs: [
            { id: "pm1", left: "を", right: "the object", romaji: "wo" },
            { id: "pm2", left: "に", right: "destination / time", romaji: "ni" },
            { id: "pm3", left: "で", right: "place of action / means", romaji: "de" },
            { id: "pm4", left: "が", right: "the subject", romaji: "ga" },
          ],
        },
        {
          title: "Verb → meaning",
          pairs: [
            { id: "vm1", left: "たべます", right: "eat", romaji: "tabemasu" },
            { id: "vm2", left: "いきます", right: "go", romaji: "ikimasu" },
            { id: "vm3", left: "みます", right: "see / watch", romaji: "mimasu" },
            { id: "vm4", left: "かえります", right: "return home", romaji: "kaerimasu" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's Tuesday",
      emoji: "🌇",
      intro: "One ordinary day, start to finish — every line is a verb and its particles.",
      lines: [
        { speaker: "narrator", en: "Morning. Hana gets ready and heads out." },
        { speaker: "hana", jp: "7じ に おきます。でんしゃ で がっこう に いきます。", romaji: "Shichi-ji ni okimasu. Densha de gakkou ni ikimasu.", en: "I get up at 7. I go to school by train." },
        { speaker: "narrator", en: "At lunchtime she meets Kenji." },
        { speaker: "kenji", jp: "カフェ で ひるごはん を たべませんか。", romaji: "Kafe de hirugohan wo tabemasen ka.", en: "Won't you have lunch at the café?" },
        { speaker: "hana", jp: "いいですね。でも、コーヒー を のみません。こうちゃ を のみます。", romaji: "Ii desu ne. Demo, koohii wo nomimasen. Koucha wo nomimasu.", en: "Sounds good. But I don't drink coffee. I'll have tea." },
        { speaker: "narrator", en: "After class, they study together." },
        { speaker: "kenji", jp: "としょかん で べんきょうします か。", romaji: "Toshokan de benkyou shimasu ka.", en: "Shall we study at the library?" },
        { speaker: "hana", jp: "はい。そのあと、うち に かえります。", romaji: "Hai. Sono ato, uchi ni kaerimasu.", en: "Yes. After that, I'll head home." },
      ],
      comprehension: [
        {
          question: "How does Hana get to school?",
          options: ["By bus", "By train (でんしゃ で)", "On foot", "By car"],
          correct: 1,
          explanation: "でんしゃ で がっこう に いきます — で marks the means (by train).",
        },
        {
          question: "Why does Hana order tea instead of coffee?",
          options: ["Coffee is expensive", "She doesn't drink coffee (のみません)", "The café was out", "Kenji told her to"],
          correct: 1,
          explanation: "コーヒー を のみません — she doesn't drink coffee, so こうちゃ を のみます (drinks tea).",
        },
        {
          question: "Where do they study?",
          options: ["At the café", "At home", "At the library (としょかん で)", "At school"],
          correct: 2,
          explanation: "としょかん で べんきょうします — で marks where the action happens (at the library).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "を = object · に = destination/time · で = place of action/means · へ = direction",
        "に vs で: where you END UP vs where the ACTION happens",
        "ます (do) · ません (don't) · ませんか (won't you…? — an invitation)",
        "The verb always comes last",
      ],
      badge: { name: "Sentence Builder", emoji: "🧩" },
    },
  ],
};
