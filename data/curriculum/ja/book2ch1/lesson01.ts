import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 1 (Verbs) · Lesson 1 — the polite ます-form + the object
 * particle を. The learner's first verbs (たべます・のみます・みます) and their
 * first kanji, 食. Everything stays in known kana; を is the only new particle.
 */
export const book2Chapter1Lesson01: Lesson = {
  id: "ja-2-ch1-1",
  chapterId: "ja-2-ch1",
  number: 1,
  title: "Verbs & を — what you do",
  titleNative: "たべます・のみます",
  subtitle: "Your first verbs",
  summary:
    "Meet the polite ます-form and the particle を, which marks what a verb acts on. Say what you eat, drink, and watch — and write your first kanji, 食.",
  xp: 60,
  estimateMinutes: 11,
  steps: [
    {
      kind: "intro",
      title: "Now you can DO things",
      subtitle:
        "Book 1 was about naming things (X は Y です). Now you'll act on them: eat, drink, watch. Polite Japanese verbs end in ます, and one little particle — を — marks what the action happens to.",
      goals: [
        "Use the polite ます-form: たべます (eat), のみます (drink), みます (watch)",
        "Mark the object with を: ごはん を たべます (I eat a meal)",
        "Write your first kanji: 食 (eat)",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro:
        "Three verbs and two things to act on. Notice every verb ends in ます — that's the polite ending you'll use all the time.",
      words: [
        { text: "たべます", romaji: "tabemasu", meaning: "eat", emoji: "🍚", example: { jp: "ごはん を たべます。", romaji: "Gohan wo tabemasu.", en: "I eat a meal." } },
        { text: "のみます", romaji: "nomimasu", meaning: "drink", emoji: "☕", example: { jp: "コーヒー を のみます。", romaji: "Koohii wo nomimasu.", en: "I drink coffee." } },
        { text: "みます", romaji: "mimasu", meaning: "watch / see", emoji: "📺", example: { jp: "テレビ を みます。", romaji: "Terebi wo mimasu.", en: "I watch TV." } },
        { text: "ごはん", romaji: "gohan", meaning: "rice / a meal", emoji: "🍚", example: { jp: "ごはん を たべます。", romaji: "Gohan wo tabemasu.", en: "I eat a meal." } },
        { text: "みず", romaji: "mizu", meaning: "water", emoji: "💧", example: { jp: "みず を のみます。", romaji: "Mizu wo nomimasu.", en: "I drink water." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "食",
      romaji: "ta / shoku",
      phonetic: "Means “eat / food”. Kun-reading: ta(beru). On-reading: shoku.",
      mnemonic: "A roof (𠆢) over a table piled with food — the place where you eat.",
      words: [
        { jp: "食べます", meaning: "eat (polite)", romaji: "tabemasu", emoji: "🍚", hint: "食 carries the meaning; べます is written in kana." },
        { jp: "食事", meaning: "a meal", romaji: "shokuji", emoji: "🍱", hint: "Here 食 uses its on-reading, shoku." },
      ],
    },
    { kind: "writing", char: "食", script: "kanji" },
    {
      kind: "grammar",
      intro: "Two ideas: how a polite verb is shaped, and how to attach the thing it acts on.",
      patterns: [
        {
          id: "masu-form",
          title: "Verb ます",
          titleRomaji: "Verb -masu",
          subtitle: "The polite “I do / I will do”.",
          pattern: [
            { text: "Verb", highlight: true },
            { text: "ます", highlight: false },
          ],
          patternRomaji: "Verb  -masu",
          note: "Polite Japanese verbs end in ます (masu). たべます means “I eat” — and also “I will eat”: one form covers present and future. You don't need a subject. たべます on its own means “I eat”, and the very same word works for you / he / she / they — context tells you who. To ask a question, just add か at the end: たべます か = “Do you eat?”",
          tip: "ます is pronounced “mass” — the u is almost silent, exactly like です sounds like “des”.",
          examples: [
            {
              jp: "たべます。",
              romaji: "Tabemasu.",
              en: "I eat. / I'll eat.",
              breakdown: [
                { jp: "たべ", en: "eat" },
                { jp: "ます", en: "(polite)" },
              ],
            },
            {
              jp: "のみます か？",
              romaji: "Nomimasu ka?",
              en: "Do you drink (it)?",
              breakdown: [
                { jp: "のみ", en: "drink" },
                { jp: "ます", en: "(polite)" },
                { jp: "か", en: "(question)" },
              ],
            },
          ],
          apply: {
            prompt: "How do you politely say “I watch (it)”?",
            options: ["みる。", "みます。", "みます か。"],
            optionsRomaji: ["Miru.", "Mimasu.", "Mimasu ka."],
            correct: 1,
            explanation: "みます is the polite form. みる is the plain/dictionary form (that's Book 3). Adding か would turn it into a question.",
          },
        },
        {
          id: "wo-object",
          title: "Object を Verb",
          titleRomaji: "Object wo Verb",
          subtitle: "を marks what the verb acts on.",
          pattern: [
            { text: "Object", highlight: true },
            { text: "を", highlight: true },
            { text: "Verb", highlight: false },
          ],
          patternRomaji: "Object  wo  Verb",
          note: "を (wo) marks the direct object — the thing the action happens to. ごはん を たべます = “I eat rice” (rice is what gets eaten). The order is Object を Verb, and the verb always comes last. を is written with its own kana を, and it is ONLY ever used as this particle — you'll never find を inside a word. It's pronounced just like お (“o”).",
          tip: "Japanese puts the verb at the END. English “I drink water” becomes “water を drink”: みず を のみます。",
          examples: [
            {
              jp: "ごはん を たべます。",
              romaji: "Gohan wo tabemasu.",
              en: "I eat a meal.",
              breakdown: [
                { jp: "ごはん", en: "meal" },
                { jp: "を", en: "(object)" },
                { jp: "たべます", en: "eat" },
              ],
            },
            {
              jp: "みず を のみます。",
              romaji: "Mizu wo nomimasu.",
              en: "I drink water.",
              breakdown: [
                { jp: "みず", en: "water" },
                { jp: "を", en: "(object)" },
                { jp: "のみます", en: "drink" },
              ],
            },
          ],
          apply: {
            prompt: "Put it in order: “I watch TV.” (テレビ = TV)",
            options: ["みます を テレビ。", "テレビ を みます。", "テレビ みます を。"],
            optionsRomaji: ["Mimasu wo terebi.", "Terebi wo mimasu.", "Terebi mimasu wo."],
            correct: 1,
            explanation: "Object (テレビ) + を + Verb (みます). The verb comes last.",
          },
        },
      ],
      practice: [
        {
          question: "Which particle marks the object — the thing you eat or drink?",
          options: ["は", "を", "です"],
          optionsRomaji: ["wa", "wo", "desu"],
          correct: 1,
          explanation: "を marks the direct object. は marks the topic; です is the copula.",
          concept: "を particle",
        },
        {
          question: "Fill the blank: “I drink coffee.”",
          jp: "コーヒー ＿ のみます。",
          romaji: "Koohii ＿ nomimasu.",
          options: ["は", "を", "か"],
          optionsRomaji: ["wa", "wo", "ka"],
          correct: 1,
          explanation: "コーヒー is the object of のみます, so it takes を.",
          concept: "を particle",
        },
        {
          question: "“I eat”, politely, is…",
          options: ["たべる", "たべます", "たべません"],
          optionsRomaji: ["taberu", "tabemasu", "tabemasen"],
          correct: 1,
          explanation: "たべます is the polite present. たべる is the plain form; たべません is the negative (next lesson).",
          concept: "ます-form",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "たべます", romaji: "tabemasu", en: "I eat", accept: ["食べます"] },
        { text: "ごはん を たべます", romaji: "gohan wo tabemasu", en: "I eat a meal", accept: ["ご飯を食べます"] },
        { text: "コーヒー を のみます", romaji: "koohii wo nomimasu", en: "I drink coffee", accept: ["コーヒーを飲みます"] },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's breakfast",
      emoji: "🍳",
      intro: "It's morning. Hana sits down to eat, and Tanaka calls.",
      lines: [
        { speaker: "narrator", en: "Morning at Hana's apartment." },
        { speaker: "hana", jp: "ごはん を たべます。", romaji: "Gohan wo tabemasu.", en: "I'm eating breakfast." },
        { speaker: "tanaka", jp: "コーヒー を のみます か？", romaji: "Koohii wo nomimasu ka?", en: "Do you drink coffee?" },
        { speaker: "hana", jp: "はい、のみます。", romaji: "Hai, nomimasu.", en: "Yes, I do." },
        { speaker: "narrator", en: "Then she turns on the television." },
        { speaker: "hana", jp: "テレビ を みます。", romaji: "Terebi wo mimasu.", en: "I watch TV." },
      ],
      comprehension: [
        {
          question: "What does Hana drink?",
          options: ["Water", "Coffee", "Tea", "Nothing"],
          correct: 1,
          explanation: "Tanaka asks コーヒー を のみます か？ and Hana answers はい、のみます (yes, I drink).",
        },
        {
          question: "Where does を sit in the sentence?",
          options: ["Before the object", "After the object, before the verb", "At the very end"],
          correct: 1,
          explanation: "The order is Object を Verb — を sits between the object and the verb.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "ます-form — the polite “I do”: たべます, のみます, みます",
        "を marks the object — the thing the verb acts on",
        "Word order: Object を Verb (the verb comes last)",
        "Your first kanji: 食 (eat)",
      ],
      badge: { name: "First Verbs", emoji: "🍚" },
    },
  ],
};
