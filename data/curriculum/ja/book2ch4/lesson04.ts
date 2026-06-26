import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 6 (Te-form) · Lesson 4 — joining actions with the て-form.
 * Chain verbs for a sequence (おきて、たべて、いきます — only the last verb carries
 * tense/politeness), and mark “after doing” with 〜てから. No new kanji.
 */
export const book2Chapter4Lesson04: Lesson = {
  id: "ja-2-ch4-4",
  chapterId: "ja-2-ch4",
  number: 4,
  title: "Do this, then that — joining with て",
  titleNative: "〜て、〜てから",
  subtitle: "Sequences",
  summary:
    "The te-form's everyday job: stringing actions together. List a sequence with 〜て, 〜て, … (only the final verb shows tense), and say “after doing X” with 〜てから. Narrate a whole routine in one breath.",
  xp: 75,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch4-3",
  steps: [
    {
      kind: "intro",
      title: "One sentence, many steps",
      subtitle:
        "Until now each action was its own sentence. The te-form lets you chain them: “I get up, eat, and go to school” becomes one smooth sentence. The trick — only the last verb shows the tense and politeness; everything before it sits in plain て-form.",
      goals: [
        "Chain actions in order: おきて、たべて、いきます",
        "Mark “after doing X” with 〜てから",
        "Let the final verb carry tense and politeness for the whole chain",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro:
        "Time-of-day and sequence words to structure a routine — plus one new ichidan verb.",
      words: [
        { text: "あさ", romaji: "asa", meaning: "morning", emoji: "🌅", example: { jp: "あさ、おきます。", romaji: "Asa, okimasu.", en: "I get up in the morning." } },
        { text: "ばん", romaji: "ban", meaning: "evening / night", emoji: "🌙", example: { jp: "ばん、ねます。", romaji: "Ban, nemasu.", en: "I sleep at night." } },
        { text: "まず", romaji: "mazu", meaning: "first (of all)", emoji: "1️⃣", example: { jp: "まず、おきます。", romaji: "Mazu, okimasu.", en: "First, I get up." } },
        { text: "つぎに", romaji: "tsugi ni", meaning: "next", emoji: "2️⃣", example: { jp: "つぎに、たべます。", romaji: "Tsugi ni, tabemasu.", en: "Next, I eat." } },
        { text: "あびる", romaji: "abiru", meaning: "to take (a shower)", emoji: "🚿", example: { jp: "シャワー を あびる。", romaji: "Shawaa wo abiru.", en: "Take a shower." } },
        { text: "それから", romaji: "sore kara", meaning: "after that / and then", emoji: "➡️", example: { jp: "それから、いきます。", romaji: "Sore kara, ikimasu.", en: "After that, I go." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Two ways to sequence: a plain chain, and an explicit “after”.",
      patterns: [
        {
          id: "te-sequence",
          title: "〜て、〜て、… — and then",
          titleRomaji: "~te, ~te, …",
          subtitle: "Chain actions; the last verb sets the tense.",
          pattern: [
            { text: "おきて、", highlight: true },
            { text: "たべて、", highlight: true },
            { text: "いきます", highlight: false },
          ],
          patternRomaji: "okite, tabete, ikimasu",
          note: "Put each verb except the last into the て-form, and they read as a sequence: あさ おきて、ごはん を たべて、がっこう に いきます = “In the morning I get up, eat, and go to school.” Only the FINAL verb (いきます) shows the tense and politeness — it covers the whole chain. Switch it to past (いきました) and every step becomes past too. The order of the て-clauses is the order things happen.",
          tip: "This is why the て-form has no tense of its own — it borrows it from the end of the sentence. So you never stack ます on the middle verbs: it's おきて、たべて…, never ✗おきます、たべます… when joining into one sentence.",
          examples: [
            {
              jp: "あさ おきて、シャワー を あびて、でかけます。",
              romaji: "Asa okite, shawaa wo abite, dekakemasu.",
              en: "In the morning I get up, take a shower, and head out.",
              breakdown: [
                { jp: "あさ おきて", en: "get up in the morning and…" },
                { jp: "シャワー を あびて", en: "take a shower and…" },
                { jp: "でかけます", en: "head out (sets the tense)" },
              ],
            },
            {
              jp: "本 を 読んで、ねました。",
              romaji: "Hon wo yonde, nemashita.",
              en: "I read a book and went to sleep.",
              breakdown: [
                { jp: "本 を 読んで", en: "read a book and…" },
                { jp: "ねました", en: "went to sleep (past → whole chain is past)" },
              ],
            },
          ],
          apply: {
            prompt: "Join: “eat and (then) go.” (たべる, いく)",
            options: ["たべます、いきます。", "たべて、いきます。", "たべて、いって。"],
            optionsRomaji: ["Tabemasu, ikimasu.", "Tabete, ikimasu.", "Tabete, itte."],
            correct: 1,
            explanation: "Middle verb in て-form, last verb carries tense: たべて、いきます.",
          },
        },
        {
          id: "te-kara",
          title: "〜てから — after doing…",
          titleRomaji: "~te kara",
          subtitle: "Stress that one thing finishes before the next.",
          pattern: [
            { text: "たべて", highlight: true },
            { text: "から", highlight: false },
          ],
          patternRomaji: "tabete kara",
          note: "Add から to a て-form to mean “after doing…”: ごはん を たべてから、テレビ を みます = “after eating, I watch TV”. It's stronger than a plain て-chain — it insists the first action fully finishes before the second starts. Like a plain chain, the final verb carries the tense.",
          tip: "Don't confuse this から with the noun から (“from”, as in 9じ から). After a て-form it means “after (doing)”; after a noun it means “from”. The shape before it tells you which.",
          examples: [
            {
              jp: "しゅくだい を してから、あそびます。",
              romaji: "Shukudai wo shite kara, asobimasu.",
              en: "I'll play after I do my homework.",
              breakdown: [
                { jp: "しゅくだい を して", en: "do homework" },
                { jp: "から", en: "after" },
                { jp: "あそびます", en: "play (then)" },
              ],
            },
            {
              jp: "てを あらってから、たべます。",
              romaji: "Te wo aratte kara, tabemasu.",
              en: "I eat after washing my hands.",
              breakdown: [
                { jp: "てを あらって", en: "wash hands" },
                { jp: "から", en: "after" },
                { jp: "たべます", en: "eat (then)" },
              ],
            },
          ],
          apply: {
            prompt: "Say “after studying, I'll sleep.” (べんきょう を する, ねる)",
            options: ["べんきょう を して、ねます。", "べんきょう を してから、ねます。", "べんきょう から、ねます。"],
            optionsRomaji: ["Benkyou wo shite, nemasu.", "Benkyou wo shite kara, nemasu.", "Benkyou kara, nemasu."],
            correct: 1,
            explanation: "“After doing” = て-form + から: べんきょう を してから、ねます.",
          },
        },
      ],
      practice: [
        {
          question: "Chain it: “get up and eat.” (おきる, たべる)",
          options: ["おきます、たべます。", "おきて、たべます。", "おきてから たべて。"],
          optionsRomaji: ["Okimasu, tabemasu.", "Okite, tabemasu.", "Okite kara tabete."],
          correct: 1,
          explanation: "Middle verb → て-form, last verb keeps tense: おきて、たべます.",
          concept: "〜て (sequence)",
        },
        {
          question: "In a て-chain, which verb shows the tense?",
          options: ["The first one", "The last one", "Every verb", "None of them"],
          correct: 1,
          explanation: "Only the final verb carries tense/politeness for the whole chain.",
          concept: "tense in a chain",
        },
        {
          question: "“After buying bread, I'll go home.” パン を ＿＿、かえります。",
          jp: "パン を ＿＿、かえります。",
          romaji: "Pan wo ＿＿, kaerimasu.",
          options: ["かってから", "かいてから", "かうから"],
          optionsRomaji: ["katte kara", "kaite kara", "kau kara"],
          correct: 0,
          explanation: "かう → かって (う→って), then + から: かってから.",
          concept: "〜てから",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "あさ おきて、ごはん を たべて、がっこう に いきます", romaji: "asa okite, gohan wo tabete, gakkou ni ikimasu", en: "in the morning I get up, eat, and go to school" },
        { text: "しゅくだい を してから、あそびます", romaji: "shukudai wo shite kara, asobimasu", en: "I'll play after doing homework" },
        { text: "本 を 読んで、ねます", romaji: "hon wo yonde, nemasu", en: "I read a book and go to sleep" },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana describes her morning",
      emoji: "🌅",
      intro: "Yui asks about Hana's routine. Hana answers in one long te-form chain.",
      lines: [
        { speaker: "narrator", en: "Over breakfast, Yui is curious about Hana's mornings." },
        { speaker: "yui", jp: "Hana は あさ、なに を しますか？", romaji: "Hana wa asa, nani wo shimasu ka?", en: "Hana, what do you do in the morning?" },
        { speaker: "hana", jp: "まず おきて、シャワー を あびます。", romaji: "Mazu okite, shawaa wo abimasu.", en: "First I get up and take a shower." },
        { speaker: "hana", jp: "つぎに、ごはん を たべて、コーヒー を のみます。", romaji: "Tsugi ni, gohan wo tabete, koohii wo nomimasu.", en: "Next, I eat and drink coffee." },
        { speaker: "hana", jp: "それから、ニュース を 読んでから、でかけます。", romaji: "Sore kara, nyuusu wo yonde kara, dekakemasu.", en: "After that, I read the news and then head out." },
        { speaker: "yui", jp: "いそがしい あさ ですね！", romaji: "Isogashii asa desu ne!", en: "What a busy morning!" },
      ],
      comprehension: [
        {
          question: "What does Hana do first?",
          options: ["Eats breakfast", "Gets up and showers (おきて、あびます)", "Reads the news", "Drinks coffee"],
          correct: 1,
          explanation: "まず おきて、シャワー を あびます — first she gets up and showers.",
        },
        {
          question: "When does she head out?",
          options: ["Before eating", "After reading the news (読んでから)", "Right after waking", "She doesn't say"],
          correct: 1,
          explanation: "ニュース を 読んでから、でかけます — she heads out after reading the news.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Chain actions with 〜て: おきて、たべて、いきます",
        "Only the LAST verb shows tense/politeness — it covers the whole chain",
        "〜てから = after doing…: たべてから、… (insists the first finishes first)",
        "て-form から (after doing) ≠ noun から (from)",
      ],
      badge: { name: "In Sequence", emoji: "🔗" },
    },
  ],
};
