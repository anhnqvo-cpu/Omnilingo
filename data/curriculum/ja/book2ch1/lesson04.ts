import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 1 · Lesson 4 — the polite negative ません, the invitation
 * ませんか, and the direction particle へ. Kanji: 私.
 */
export const book2Chapter1Lesson04: Lesson = {
  id: "ja-2-ch1-4",
  chapterId: "ja-2-ch1",
  number: 4,
  title: "Saying no & inviting — ません / ませんか",
  titleNative: "ません・ませんか",
  subtitle: "Negatives and invitations",
  summary:
    "Turn any ます-verb negative (たべません = I don't eat), and use the very same ませんか to invite someone (いきませんか = won't you go?). Plus the direction particle へ. Write the kanji 私.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch1-3",
  steps: [
    {
      kind: "intro",
      title: "“I don't…” and “Won't you…?”",
      subtitle:
        "One small change to ます unlocks two things: saying you DON'T do something, and — surprisingly — inviting someone to do something with you.",
      goals: [
        "Make verbs negative: たべます → たべません",
        "Invite with ませんか: えいが を みませんか (won't you watch a movie?)",
        "Use へ for direction: うち へ かえります",
        "Write the kanji 私 (I)",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro: "A couple of things to do together, and the words for inviting.",
      words: [
        { text: "えいが", romaji: "eiga", meaning: "movie", emoji: "🎬", example: { jp: "えいが を みます。", romaji: "Eiga wo mimasu.", en: "I watch a movie." } },
        { text: "おんがく", romaji: "ongaku", meaning: "music", emoji: "🎵", example: { jp: "おんがく を ききます。", romaji: "Ongaku wo kikimasu.", en: "I listen to music." } },
        { text: "ききます", romaji: "kikimasu", meaning: "listen / ask", emoji: "👂", example: { jp: "おんがく を ききます。", romaji: "Ongaku wo kikimasu.", en: "I listen to music." } },
        { text: "いっしょに", romaji: "issho ni", meaning: "together", emoji: "🤝", example: { jp: "いっしょに いきませんか。", romaji: "Issho ni ikimasen ka.", en: "Won't you go together (with me)?" } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "私",
      romaji: "watashi / shi",
      phonetic: "Means “I / me / private”. Reading: watashi (also shi).",
      mnemonic: "A stalk of grain (禾) kept to oneself (厶) — what's “mine”, hence “I”.",
      words: [
        { jp: "私", meaning: "I / me", romaji: "watashi", emoji: "🙋", hint: "The polite, neutral word for “I”." },
        { jp: "私 は がくせい です。", meaning: "I am a student.", romaji: "Watashi wa gakusei desu.", emoji: "🎓", hint: "私 in a real sentence (は from Book 1)." },
      ],
    },
    { kind: "writing", char: "私", script: "kanji" },
    {
      kind: "grammar",
      intro: "Negative first, then the friendly twist that turns the negative question into an invitation.",
      patterns: [
        {
          id: "masen-negative",
          title: "Verb ません",
          titleRomaji: "Verb -masen",
          subtitle: "The polite “I don't / won't”.",
          pattern: [
            { text: "Verb", highlight: true },
            { text: "ません", highlight: false },
          ],
          patternRomaji: "Verb  -masen",
          note: "To make a polite verb negative, swap ます for ません. たべます → たべません (“I don't eat”). のみます → のみません. It covers present and future, just like ます: みません = “I don't / won't watch”. Nothing else in the sentence changes.",
          tip: "Just ます → ません. コーヒー を のみません = “I don't drink coffee.”",
          examples: [
            {
              jp: "コーヒー を のみません。",
              romaji: "Koohii wo nomimasen.",
              en: "I don't drink coffee.",
              breakdown: [
                { jp: "コーヒー を", en: "coffee (obj)" },
                { jp: "のみません", en: "don't drink" },
              ],
            },
            {
              jp: "きょう は がっこう に いきません。",
              romaji: "Kyou wa gakkou ni ikimasen.",
              en: "I'm not going to school today.",
              breakdown: [
                { jp: "きょう は", en: "today (topic)" },
                { jp: "がっこう に", en: "to school" },
                { jp: "いきません", en: "don't go" },
              ],
            },
          ],
          apply: {
            prompt: "Say “I don't watch TV.”",
            options: ["テレビ を みます。", "テレビ を みません。", "テレビ に みません。"],
            optionsRomaji: ["Terebi wo mimasu.", "Terebi wo mimasen.", "Terebi ni mimasen."],
            correct: 1,
            explanation: "みます → みません for the negative. テレビ is the object, so it keeps を.",
          },
        },
        {
          id: "masenka-invite",
          title: "Verb ませんか",
          titleRomaji: "Verb -masen ka",
          subtitle: "“Won't you…?” — a polite invitation.",
          pattern: [
            { text: "Verb", highlight: true },
            { text: "ません", highlight: false },
            { text: "か", highlight: true },
          ],
          patternRomaji: "Verb  -masen  ka",
          note: "Add か to the negative and it becomes an invitation: いきませんか = “Won't you go?” / “Shall we go?”. It sounds softer and more polite than いきます か. Add いっしょに (together) to make it warm: いっしょに えいが を みませんか = “Won't you watch a movie with me?”",
          tip: "ませんか literally asks “won't you…?” but means “let's…, how about it?” — it's how you invite people.",
          examples: [
            {
              jp: "いっしょに えいが を みませんか。",
              romaji: "Issho ni eiga wo mimasen ka.",
              en: "Won't you watch a movie (with me)?",
              breakdown: [
                { jp: "いっしょに", en: "together" },
                { jp: "えいが を", en: "a movie (obj)" },
                { jp: "みませんか", en: "won't you watch?" },
              ],
            },
            {
              jp: "コーヒー を のみませんか。",
              romaji: "Koohii wo nomimasen ka.",
              en: "Won't you have a coffee?",
              breakdown: [
                { jp: "コーヒー を", en: "coffee (obj)" },
                { jp: "のみませんか", en: "won't you drink?" },
              ],
            },
          ],
          apply: {
            prompt: "Invite a friend: “Won't you go together?”",
            options: ["いっしょに いきます。", "いっしょに いきませんか。", "いっしょに いきません。"],
            optionsRomaji: ["Issho ni ikimasu.", "Issho ni ikimasen ka.", "Issho ni ikimasen."],
            correct: 1,
            explanation: "ませんか makes it an invitation. Without か it's just a plain negative (“I don't go together”).",
          },
        },
      ],
      practice: [
        {
          question: "Make it negative: “I don't drink water.”",
          options: ["みず を のみます。", "みず を のみません。", "みず に のみません。"],
          optionsRomaji: ["Mizu wo nomimasu.", "Mizu wo nomimasen.", "Mizu ni nomimasen."],
          correct: 1,
          explanation: "のみます → のみません.",
          concept: "ません negative",
        },
        {
          question: "Which one is an invitation?",
          options: ["みます", "みません", "みませんか"],
          optionsRomaji: ["mimasu", "mimasen", "mimasen ka"],
          correct: 2,
          explanation: "ませんか = “won't you…?”, a polite invitation.",
          concept: "ませんか invitation",
        },
        {
          question: "“Won't you listen to music together?”",
          jp: "いっしょに おんがく を ＿。",
          romaji: "Issho ni ongaku wo ＿.",
          options: ["ききます", "ききません", "ききませんか"],
          optionsRomaji: ["kikimasu", "kikimasen", "kikimasen ka"],
          correct: 2,
          explanation: "ききませんか invites someone to listen with you.",
          concept: "ませんか invitation",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "コーヒー を のみません", romaji: "koohii wo nomimasen", en: "I don't drink coffee" },
        { text: "いっしょに えいが を みませんか", romaji: "issho ni eiga wo mimasen ka", en: "Won't you watch a movie with me?" },
        { text: "おんがく を ききませんか", romaji: "ongaku wo kikimasen ka", en: "Won't you listen to music?" },
      ],
    },
    {
      kind: "microstory",
      setting: "Kenji asks Hana out",
      emoji: "🎬",
      intro: "Kenji works up the nerve to invite Hana to a movie.",
      lines: [
        { speaker: "kenji", jp: "きょう、いっしょに えいが を みませんか。", romaji: "Kyou, issho ni eiga wo mimasen ka.", en: "Won't you watch a movie together today?" },
        { speaker: "hana", jp: "いいですね！", romaji: "Ii desu ne!", en: "Sounds good!" },
        { speaker: "hana", jp: "でも、コーヒー は のみません。", romaji: "Demo, koohii wa nomimasen.", en: "But I don't drink coffee." },
        { speaker: "kenji", jp: "オーケー。みず を のみます。", romaji: "Ookee. Mizu wo nomimasu.", en: "OK. I'll drink water." },
        { speaker: "narrator", en: "A date is made." },
      ],
      comprehension: [
        {
          question: "What does Kenji invite Hana to do?",
          options: ["Drink coffee", "Watch a movie", "Go to school", "Study"],
          correct: 1,
          explanation: "いっしょに えいが を みませんか = “Won't you watch a movie together?”",
        },
        {
          question: "What does Hana say she doesn't do?",
          options: ["Watch movies", "Drink coffee", "Listen to music"],
          correct: 1,
          explanation: "コーヒー は のみません = “I don't drink coffee.”",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "ます → ません makes a verb negative: たべません",
        "ませんか is a polite invitation: いきませんか (won't you go?)",
        "いっしょに = together, the warm word for inviting",
        "Kanji: 私 (I)",
      ],
      badge: { name: "Yes, No & Let's", emoji: "🎬" },
    },
  ],
};
