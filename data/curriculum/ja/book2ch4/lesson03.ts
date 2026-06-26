import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 6 (Te-form) · Lesson 3 — 〜ています for ongoing actions
 * (and a few ongoing states like すんでいます). Builds straight on the て-form:
 * te + います = “am doing”. Kanji 読 (読む→読んでいます) and 書 (書く→書いています).
 */
export const book2Chapter4Lesson03: Lesson = {
  id: "ja-2-ch4-3",
  chapterId: "ja-2-ch4",
  number: 3,
  title: "Right now — 〜ています",
  titleNative: "〜ています",
  subtitle: "Ongoing actions",
  summary:
    "Add います to the て-form to say something is happening right now: たべています (“I'm eating”), 読んでいます (“I'm reading”). Ask なに を していますか, and use it for ongoing states like すんでいます (“I live in…”). Kanji 読 and 書.",
  xp: 75,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch4-2",
  steps: [
    {
      kind: "intro",
      title: "What are you doing… right now?",
      subtitle:
        "You can ask the て-form to do more than make requests. Attach います and it becomes the “-ing” form — the action in progress this very moment. It's the same います you met for living things; here it keeps an action “alive”.",
      goals: [
        "Form 〜ています from any verb's て-form",
        "Ask and answer なに を していますか (what are you doing?)",
        "Use it for ongoing states; read and write 読 and 書",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro:
        "Everyday activities to narrate in progress — what someone's busy with right now.",
      words: [
        { text: "しごと", romaji: "shigoto", meaning: "work / job", emoji: "💼", example: { jp: "しごと を しています。", romaji: "Shigoto wo shite imasu.", en: "I'm working." } },
        { text: "しゅくだい", romaji: "shukudai", meaning: "homework", emoji: "📝", example: { jp: "しゅくだい を しています。", romaji: "Shukudai wo shite imasu.", en: "I'm doing homework." } },
        { text: "でんわ", romaji: "denwa", meaning: "phone / phone call", emoji: "📞", example: { jp: "でんわ を しています。", romaji: "Denwa wo shite imasu.", en: "I'm on the phone." } },
        { text: "しんぶん", romaji: "shinbun", meaning: "newspaper", emoji: "📰", example: { jp: "しんぶん を 読んでいます。", romaji: "Shinbun wo yonde imasu.", en: "I'm reading the newspaper." } },
        { text: "てがみ", romaji: "tegami", meaning: "letter", emoji: "✉️", example: { jp: "てがみ を 書いています。", romaji: "Tegami wo kaite imasu.", en: "I'm writing a letter." } },
        { text: "おんがく", romaji: "ongaku", meaning: "music", emoji: "🎵", example: { jp: "おんがく を 聞いています。", romaji: "Ongaku wo kiite imasu.", en: "I'm listening to music." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "読",
      romaji: "yo / doku",
      phonetic: "Means “read”. Kun-reading: yo(mu). On-reading: doku.",
      mnemonic: "Words 言 being sold 売 — reading aloud “sells” the words to your ears. (言 = speech, 売 = sell.)",
      words: [
        { jp: "読む", meaning: "to read", romaji: "yomu", emoji: "📖", hint: "Group 1, ends in む → て-form 読んで." },
        { jp: "本 を 読んでいます", meaning: "is reading a book", romaji: "hon wo yonde imasu", emoji: "📚", hint: "む → んで, then + います: 読む → 読んで → 読んでいます." },
      ],
    },
    { kind: "writing", char: "読", script: "kanji" },
    {
      kind: "character",
      script: "kanji",
      char: "書",
      romaji: "ka / sho",
      phonetic: "Means “write”. Kun-reading: ka(ku). On-reading: sho.",
      mnemonic: "A hand holding a brush, drawing strokes down onto a page 日 — writing.",
      words: [
        { jp: "書く", meaning: "to write", romaji: "kaku", emoji: "✍️", hint: "Group 1, ends in く → て-form 書いて." },
        { jp: "てがみ を 書いています", meaning: "is writing a letter", romaji: "tegami wo kaite imasu", emoji: "✉️", hint: "く → いて, then + います: 書く → 書いて → 書いています." },
      ],
    },
    { kind: "writing", char: "書", script: "kanji" },
    {
      kind: "grammar",
      intro: "One new piece — います on the て-form — and a question to go with it.",
      patterns: [
        {
          id: "te-imasu",
          title: "〜て + います — happening now",
          titleRomaji: "~te imasu",
          subtitle: "The “-ing” form: an action in progress.",
          pattern: [
            { text: "たべて", highlight: true },
            { text: "います", highlight: false },
          ],
          patternRomaji: "tabete imasu",
          note: "Take any verb's て-form and add います: たべて → たべています (“I'm eating”), 読む → 読んで → 読んでいます (“I'm reading”), する → して → しています (“I'm doing”). It describes an action happening right now. The います conjugates like the verb you know — negative 〜ていません, past 〜ていました — while the て-form stays put.",
          tip: "In casual speech the い often drops: たべてる, 読んでる. You'll hear it constantly. Stick with the full 〜ています for now; just recognize the short form when you meet it.",
          examples: [
            {
              jp: "いま、ごはん を たべています。",
              romaji: "Ima, gohan wo tabete imasu.",
              en: "I'm eating right now.",
              breakdown: [
                { jp: "いま", en: "now" },
                { jp: "ごはん を", en: "a meal (object)" },
                { jp: "たべています", en: "am eating" },
              ],
            },
            {
              jp: "本 を 読んでいます。",
              romaji: "Hon wo yonde imasu.",
              en: "I'm reading a book.",
              breakdown: [
                { jp: "本 を", en: "a book (object)" },
                { jp: "読んでいます", en: "am reading (読んで + います)" },
              ],
            },
          ],
          apply: {
            prompt: "Say “I'm writing a letter.” (書く → 書いて)",
            options: ["てがみ を 書きます。", "てがみ を 書いています。", "てがみ を 書いてください。"],
            optionsRomaji: ["Tegami wo kakimasu.", "Tegami wo kaite imasu.", "Tegami wo kaite kudasai."],
            correct: 1,
            explanation: "て-form + います = ongoing: 書いて + います → 書いています.",
          },
        },
        {
          id: "nani-shite-imasu",
          title: "なに を していますか — what are you doing?",
          titleRomaji: "nani wo shite imasu ka",
          subtitle: "Ask, and answer, about right now.",
          pattern: [
            { text: "なに を", highlight: false },
            { text: "していますか", highlight: true },
          ],
          patternRomaji: "nani wo shite imasu ka",
          note: "していますか is the 〜ています form of する plus か — “what are you doing?”. Answer with any 〜ています: テレビ を みています (“I'm watching TV”), おんがく を 聞いています (“I'm listening to music”). It's the natural way to check in with someone over the phone or in a message.",
          tip: "To ask where something stands generally (not this instant), Japanese still often uses 〜ています — for jobs and habits: ぎんこう で はたらいています (“I work at a bank”). It frames an ongoing situation, not just this second.",
          examples: [
            {
              jp: "いま、なに を していますか。",
              romaji: "Ima, nani wo shite imasu ka.",
              en: "What are you doing right now?",
              breakdown: [
                { jp: "いま", en: "now" },
                { jp: "なに を", en: "what (object)" },
                { jp: "していますか", en: "are you doing?" },
              ],
            },
            {
              jp: "おんがく を 聞いています。",
              romaji: "Ongaku wo kiite imasu.",
              en: "I'm listening to music.",
              breakdown: [
                { jp: "おんがく を", en: "music (object)" },
                { jp: "聞いて", en: "listen (て-form)" },
                { jp: "います", en: "am …-ing" },
              ],
            },
          ],
          apply: {
            prompt: "Answer “I'm studying.” (べんきょう を する)",
            options: ["べんきょう を します。", "べんきょう を しています。", "べんきょう を してください。"],
            optionsRomaji: ["Benkyou wo shimasu.", "Benkyou wo shite imasu.", "Benkyou wo shite kudasai."],
            correct: 1,
            explanation: "Ongoing action = て-form + います: して + います → しています.",
          },
        },
        {
          id: "te-imasu-states",
          title: "Ongoing states: すんでいます, しっています",
          titleRomaji: "sunde imasu, shitte imasu",
          subtitle: "Some verbs describe a continuing condition.",
          pattern: [
            { text: "とうきょう に", highlight: false },
            { text: "すんでいます", highlight: true },
          ],
          patternRomaji: "Toukyou ni sunde imasu",
          note: "A handful of verbs use 〜ています for an ongoing STATE rather than an action in motion. The two you'll use daily: すむ → すんでいます (“(I) live in…”) and しる → しっています (“(I) know”). とうきょう に すんでいます = “I live in Tokyo”. These are simply how Japanese expresses the present condition — you almost never say すみます / しります for the plain present.",
          tip: "The negative of しっています is special: “I don't know” is しりません (not ✗しっていません). It's an idiom worth memorizing.",
          examples: [
            {
              jp: "とうきょう に すんでいます。",
              romaji: "Toukyou ni sunde imasu.",
              en: "I live in Tokyo.",
              breakdown: [
                { jp: "とうきょう に", en: "in Tokyo" },
                { jp: "すんでいます", en: "live (ongoing state)" },
              ],
            },
            {
              jp: "Hana を しっていますか。",
              romaji: "Hana wo shitte imasu ka.",
              en: "Do you know Hana?",
              breakdown: [
                { jp: "Hana を", en: "Hana (object)" },
                { jp: "しっていますか", en: "do you know?" },
              ],
            },
          ],
          apply: {
            prompt: "Say “I live in Osaka.” (おおさか, すむ)",
            options: ["おおさか に すみます。", "おおさか に すんでいます。", "おおさか に すんでください。"],
            optionsRomaji: ["Oosaka ni sumimasu.", "Oosaka ni sunde imasu.", "Oosaka ni sunde kudasai."],
            correct: 1,
            explanation: "“Live” is an ongoing state → すんでいます.",
          },
        },
      ],
      practice: [
        {
          question: "Make it ongoing: のむ (drink) → “I'm drinking”.",
          options: ["のみます", "のんでいます", "のんでください"],
          optionsRomaji: ["nomimasu", "nonde imasu", "nonde kudasai"],
          correct: 1,
          explanation: "む→んで, then + います: のんでいます.",
          concept: "〜ています",
        },
        {
          question: "“What are you doing now?”",
          options: ["なに を しますか。", "なに を していますか。", "なに が ありますか。"],
          optionsRomaji: ["Nani wo shimasu ka.", "Nani wo shite imasu ka.", "Nani ga arimasu ka."],
          correct: 1,
          explanation: "Right-now question = していますか.",
          concept: "していますか",
        },
        {
          question: "“I'm reading a newspaper.” しんぶん を ＿＿。",
          jp: "しんぶん を ＿＿。",
          romaji: "Shinbun wo ＿＿.",
          options: ["読みます", "読んでいます", "読んでください"],
          optionsRomaji: ["yomimasu", "yonde imasu", "yonde kudasai"],
          correct: 1,
          explanation: "読む → 読んで → 読んでいます (ongoing).",
          concept: "〜ています",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "いま、なに を していますか", romaji: "ima, nani wo shite imasu ka", en: "what are you doing now?" },
        { text: "本 を 読んでいます", romaji: "hon wo yonde imasu", en: "I'm reading a book", accept: ["本を読んでいます"] },
        { text: "とうきょう に すんでいます", romaji: "Toukyou ni sunde imasu", en: "I live in Tokyo", accept: ["東京に住んでいます"] },
      ],
    },
    {
      kind: "microstory",
      setting: "A group phone call",
      emoji: "📞",
      intro: "Hana calls the group to plan the weekend — but everyone's in the middle of something.",
      lines: [
        { speaker: "narrator", en: "Hana dials in. Everyone picks up from somewhere different." },
        { speaker: "hana", jp: "もしもし。みんな、いま なに を していますか？", romaji: "Moshi moshi. Minna, ima nani wo shite imasu ka?", en: "Hello. Everyone, what are you all doing right now?" },
        { speaker: "kenji", jp: "ぼく は てがみ を 書いています。", romaji: "Boku wa tegami wo kaite imasu.", en: "I'm writing a letter." },
        { speaker: "yui", jp: "わたし は おんがく を 聞いています。", romaji: "Watashi wa ongaku wo kiite imasu.", en: "I'm listening to music." },
        { speaker: "tanaka", jp: "わたし は しごと を しています。いそがしい です。", romaji: "Watashi wa shigoto wo shite imasu. Isogashii desu.", en: "I'm working. I'm busy." },
        { speaker: "hana", jp: "そう ですか。Tanaka さん は どこ に すんでいますか？", romaji: "Sou desu ka. Tanaka-san wa doko ni sunde imasu ka?", en: "I see. Where do you live, Tanaka?" },
        { speaker: "tanaka", jp: "えき の ちかく に すんでいます。", romaji: "Eki no chikaku ni sunde imasu.", en: "I live near the station." },
      ],
      comprehension: [
        {
          question: "What is Kenji doing?",
          options: ["Listening to music", "Writing a letter (てがみ を 書いています)", "Working", "Reading"],
          correct: 1,
          explanation: "ぼく は てがみ を 書いています — writing a letter.",
        },
        {
          question: "Where does Tanaka live?",
          options: ["In Tokyo", "Near the station (えき の ちかく)", "At the office", "Far away"],
          correct: 1,
          explanation: "えき の ちかく に すんでいます — lives near the station (ongoing state).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "て-form + います = happening now: たべています, 読んでいます",
        "Ask なに を していますか; answer with any 〜ています",
        "Ongoing states: すんでいます (live), しっています (know) — but “don't know” = しりません",
        "Casual short form drops the い: たべてる, 読んでる",
        "New kanji: 読 (read) and 書 (write)",
      ],
      badge: { name: "In Progress", emoji: "🎧" },
    },
  ],
};
