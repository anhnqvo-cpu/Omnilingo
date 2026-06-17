import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 1 · Lesson 5 — capstone. No new grammar or kanji: it weaves
 * everything from the chapter (ます-form, を/に/で/へ, negatives, invitations)
 * into a full day with the cast, plus a mixed review.
 */
export const book2Chapter1Lesson05: Lesson = {
  id: "ja-2-ch1-5",
  chapterId: "ja-2-ch1",
  number: 5,
  title: "A day in the life",
  titleNative: "いちにち",
  subtitle: "Chapter 1 review",
  summary:
    "Put it all together: verbs, を, に, で, へ, negatives, and invitations — across one full day with Hana, Tanaka, Kenji, and Yui.",
  xp: 70,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch1-4",
  steps: [
    {
      kind: "intro",
      title: "Everything, in one day",
      subtitle:
        "No new grammar — this is where it clicks. You'll match the particles to their jobs, run a mixed review, and read a whole day in Japanese.",
      goals: [
        "Match each particle (を・に・で) to what it marks",
        "Choose the right particle in real sentences",
        "Read a full day's worth of Japanese",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "matching",
      intro: "Three particles, three jobs. Pair them up.",
      rounds: [
        {
          title: "Particle → job",
          pairs: [
            { id: "p1", left: "を", right: "the object (what you act on)", romaji: "wo" },
            { id: "p2", left: "に", right: "destination / clock time", romaji: "ni" },
            { id: "p3", left: "で", right: "place of action / means", romaji: "de" },
          ],
        },
        {
          title: "Verb → meaning",
          pairs: [
            { id: "v1", left: "たべます", right: "eat", romaji: "tabemasu" },
            { id: "v2", left: "いきます", right: "go", romaji: "ikimasu" },
            { id: "v3", left: "かえります", right: "return home", romaji: "kaerimasu" },
            { id: "v4", left: "みます", right: "watch / see", romaji: "mimasu" },
          ],
        },
      ],
    },
    {
      kind: "grammar",
      intro: "One picture of the whole system, then a mixed check.",
      patterns: [
        {
          id: "particle-recap",
          title: "を・に・で together",
          titleRomaji: "wo / ni / de",
          subtitle: "The three workhorse particles in one sentence.",
          pattern: [
            { text: "Place で", highlight: true },
            { text: "Object を", highlight: true },
            { text: "Verb", highlight: false },
          ],
          patternRomaji: "Place de  Object wo  Verb",
          note: "A single sentence can stack them: each particle tags the word right before it. うち で ごはん を たべます = “I eat a meal at home” — うち で (place), ごはん を (object). Add に for a destination or time, へ for direction. The verb always lands last.",
          tip: "Read right-to-left from the verb: たべます ← what? ごはん を ← where? うち で.",
          examples: [
            {
              jp: "うち で ごはん を たべます。",
              romaji: "Uchi de gohan wo tabemasu.",
              en: "I eat a meal at home.",
              breakdown: [
                { jp: "うち で", en: "at home" },
                { jp: "ごはん を", en: "a meal (obj)" },
                { jp: "たべます", en: "eat" },
              ],
            },
            {
              jp: "バス で がっこう に いきます。",
              romaji: "Basu de gakkou ni ikimasu.",
              en: "I go to school by bus.",
              breakdown: [
                { jp: "バス で", en: "by bus" },
                { jp: "がっこう に", en: "to school" },
                { jp: "いきます", en: "go" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "“I drink coffee at the library.”",
          jp: "としょかん ＿ コーヒー ＿ のみます。",
          romaji: "Toshokan ＿ koohii ＿ nomimasu.",
          options: ["で … を", "に … を", "を … で"],
          optionsRomaji: ["de … wo", "ni … wo", "wo … de"],
          correct: 0,
          explanation: "Place of action → で (としょかん で); object → を (コーヒー を).",
          concept: "を / で",
        },
        {
          question: "Pick the particle: “I go to the station.”",
          jp: "えき ＿ いきます。",
          romaji: "Eki ＿ ikimasu.",
          options: ["で", "に", "を"],
          optionsRomaji: ["de", "ni", "wo"],
          correct: 1,
          explanation: "Destination with a motion verb → に.",
          concept: "に destination",
        },
        {
          question: "Make it an invitation: “Won't you eat together?”",
          jp: "いっしょに ＿。",
          romaji: "Issho ni ＿.",
          options: ["たべます", "たべません", "たべませんか"],
          optionsRomaji: ["tabemasu", "tabemasen", "tabemasen ka"],
          correct: 2,
          explanation: "ませんか turns it into a polite invitation.",
          concept: "ませんか invitation",
        },
        {
          question: "“I don't watch TV at home.”",
          jp: "うち ＿ テレビ を みません。",
          romaji: "Uchi ＿ terebi wo mimasen.",
          options: ["に", "で", "を"],
          optionsRomaji: ["ni", "de", "wo"],
          correct: 1,
          explanation: "Watching happens AT home → で. And みます → みません for the negative.",
          concept: "で + negative",
        },
        {
          question: "“I go home by train at 9:00.”",
          jp: "くじ ＿ でんしゃ ＿ うち ＿ かえります。",
          romaji: "Ku-ji ＿ densha ＿ uchi ＿ kaerimasu.",
          options: ["に … で … に", "で … に … で", "に … に … で"],
          optionsRomaji: ["ni … de … ni", "de … ni … de", "ni … ni … de"],
          correct: 0,
          explanation: "Time くじ に, means でんしゃ で, destination うち に.",
          concept: "に / で together",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "うち で ごはん を たべます", romaji: "uchi de gohan wo tabemasu", en: "I eat a meal at home", accept: ["家でご飯を食べます"] },
        { text: "バス で がっこう に いきます", romaji: "basu de gakkou ni ikimasu", en: "I go to school by bus", accept: ["バスで学校に行きます"] },
        { text: "いっしょに えいが を みませんか", romaji: "issho ni eiga wo mimasen ka", en: "Won't you watch a movie with me?", accept: ["一緒に映画を見ませんか"] },
      ],
    },
    {
      kind: "microstory",
      setting: "Hana's whole day",
      emoji: "🌅",
      intro: "Morning to night — every particle you learned, in one day.",
      lines: [
        { speaker: "narrator", en: "Morning." },
        { speaker: "hana", jp: "うち で ごはん を たべます。", romaji: "Uchi de gohan wo tabemasu.", en: "I eat breakfast at home." },
        { speaker: "hana", jp: "しちじ に バス で がっこう に いきます。", romaji: "Shichi-ji ni basu de gakkou ni ikimasu.", en: "At 7:00 I go to school by bus." },
        { speaker: "narrator", en: "Afternoon. Kenji texts." },
        { speaker: "kenji", jp: "いっしょに えいが を みませんか。", romaji: "Issho ni eiga wo mimasen ka.", en: "Won't you watch a movie together?" },
        { speaker: "hana", jp: "きょう は みません。べんきょうします。", romaji: "Kyou wa mimasen. Benkyou shimasu.", en: "Not today. I'm studying." },
        { speaker: "narrator", en: "Evening." },
        { speaker: "hana", jp: "くじ に うち に かえります。", romaji: "Ku-ji ni uchi ni kaerimasu.", en: "At 9:00 I go home." },
      ],
      comprehension: [
        {
          question: "How does Hana get to school?",
          options: ["By train", "By bus", "On foot", "By car"],
          correct: 1,
          explanation: "バス で がっこう に いきます = “I go to school by bus.”",
        },
        {
          question: "Does Hana watch a movie with Kenji today?",
          options: ["Yes", "No — she's studying", "Yes, at 9:00"],
          correct: 1,
          explanation: "きょう は みません。べんきょうします = “Not today. I'm studying.”",
        },
        {
          question: "When does Hana go home?",
          options: ["7:00", "9:00", "Now"],
          correct: 1,
          explanation: "くじ に うち に かえります = “At 9:00 I go home.”",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "ます-form verbs and the negative ません",
        "を (object) · に (destination/time) · で (place/means) · へ (direction)",
        "Inviting with ませんか and いっしょに",
        "Chapter 1 kanji: 食 · 行 · 見 · 私",
      ],
      badge: { name: "Verbs Mastered", emoji: "🏅" },
    },
  ],
};
