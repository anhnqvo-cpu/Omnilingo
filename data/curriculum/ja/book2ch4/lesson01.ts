import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 6 (Te-form) · Lesson 1 — meet the て-form. Introduces the plain
 * (dictionary) form as the base, conjugates the easy half — Group 2 (る-verbs)
 * drop る + て, plus the two irregulars する→して / くる→きて — and puts it to work
 * immediately with 〜てください (polite requests). No new kanji; the concept is the load.
 */
export const book2Chapter4Lesson01: Lesson = {
  id: "ja-2-ch4-1",
  chapterId: "ja-2-ch4",
  number: 1,
  title: "Meet the て-form",
  titleNative: "て‐form ①",
  subtitle: "The master key",
  summary:
    "The te-form is the most useful shape a verb has — it unlocks requests, ongoing actions, and joining verbs. Start with the easy half: Group 2 る-verbs (たべる→たべて) and the irregulars, then ask for things with 〜てください.",
  xp: 70,
  estimateMinutes: 12,
  unlockAfter: "ja-2-review-3",
  steps: [
    {
      kind: "intro",
      title: "One form, many doors",
      subtitle:
        "Until now your verbs ended in ます. Meet their most powerful shape: the て-form. It doesn't mean anything on its own — it's a connector that unlocks “please do…”, “I'm doing…”, and “do this, then that”. We'll build it in two halves; today is the easy half plus your first use: making requests.",
      goals: [
        "Understand plain (dictionary) form as the base for the て-form",
        "Make the て-form of Group 2 verbs and the irregulars",
        "Ask politely with 〜てください (please do…)",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro:
        "Verbs in their plain (dictionary) form — the form a dictionary lists. You already know their ます-versions; here's the base they come from.",
      words: [
        { text: "たべる", romaji: "taberu", meaning: "to eat (= たべます)", emoji: "🍚", example: { jp: "ごはん を たべる。", romaji: "Gohan wo taberu.", en: "Eat a meal." } },
        { text: "みる", romaji: "miru", meaning: "to see / watch (= みます)", emoji: "👀", example: { jp: "テレビ を みる。", romaji: "Terebi wo miru.", en: "Watch TV." } },
        { text: "ねる", romaji: "neru", meaning: "to sleep (= ねます)", emoji: "😴", example: { jp: "はやく ねる。", romaji: "Hayaku neru.", en: "Sleep early." } },
        { text: "おきる", romaji: "okiru", meaning: "to get up (= おきます)", emoji: "⏰", example: { jp: "7じ に おきる。", romaji: "Shichi-ji ni okiru.", en: "Get up at 7." } },
        { text: "する", romaji: "suru", meaning: "to do (= します)", emoji: "✅", example: { jp: "べんきょう を する。", romaji: "Benkyou wo suru.", en: "Study (do study)." } },
        { text: "くる", romaji: "kuru", meaning: "to come (= きます)", emoji: "🚶", example: { jp: "うち に くる。", romaji: "Uchi ni kuru.", en: "Come to my house." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Two easy rules cover today's verbs. The harder group (Group 1) is next lesson.",
      patterns: [
        {
          id: "te-group2",
          title: "Group 2 (る-verbs): る → て",
          titleRomaji: "Group 2: -ru → -te",
          subtitle: "Drop る, add て.",
          pattern: [
            { text: "たべ", highlight: false },
            { text: "る → て", highlight: true },
          ],
          patternRomaji: "tabe-ru → tabe-te",
          note: "Every verb has a plain form (たべる) behind its polite ます-form (たべます). Group 2 verbs — also called る-verbs — end in る with an /e/ or /i/ sound before it: たべる, みる, ねる, おきる. To make the て-form, just drop る and add て: たべる → たべて, みる → みて, ねる → ねて. That's the whole rule for this group. (A handy shortcut: for these verbs, ます → て also works — たべます → たべて.)",
          tip: "A few verbs look like Group 2 but are secretly Group 1 — かえる (return), はいる (enter). We'll meet those next lesson; for now, the clean る-verbs above all follow the simple drop-る rule.",
          examples: [
            {
              jp: "ごはん を たべて…",
              romaji: "Gohan wo tabete…",
              en: "eat a meal and… (te-form of たべる)",
              breakdown: [
                { jp: "ごはん を", en: "a meal (object)" },
                { jp: "たべて", en: "eat-and… (て-form)" },
              ],
            },
            {
              jp: "テレビ を みて…",
              romaji: "Terebi wo mite…",
              en: "watch TV and… (te-form of みる)",
              breakdown: [
                { jp: "テレビ を", en: "TV (object)" },
                { jp: "みて", en: "watch-and… (て-form)" },
              ],
            },
          ],
          apply: {
            prompt: "What's the て-form of ねる (to sleep)?",
            options: ["ねて", "ねって", "ねります"],
            optionsRomaji: ["nete", "nette", "nerimasu"],
            correct: 0,
            explanation: "Group 2: drop る, add て → ねて.",
          },
        },
        {
          id: "te-irregular",
          title: "The two irregulars: する → して, くる → きて",
          titleRomaji: "suru → shite, kuru → kite",
          subtitle: "Just memorize these two.",
          pattern: [
            { text: "する → して", highlight: true },
            { text: "くる → きて", highlight: true },
          ],
          patternRomaji: "suru → shite · kuru → kite",
          note: "Japanese has only two truly irregular verbs, and they irregular-ize here too: する (“do”) → して, and くる (“come”) → きて. Because する attaches to nouns to make verbs (べんきょう する = “study”), this also gives you べんきょう して, りょこう して, and so on. Memorize して and きて and you've covered every irregular in the language.",
          tip: "Don't try to apply the る-rule to these — it's not ✗すて or ✗くて. They simply are して and きて.",
          examples: [
            {
              jp: "べんきょう を して…",
              romaji: "Benkyou wo shite…",
              en: "study and… (te-form of する)",
              breakdown: [
                { jp: "べんきょう を", en: "study (object)" },
                { jp: "して", en: "do-and… (て-form of する)" },
              ],
            },
            {
              jp: "うち に きて…",
              romaji: "Uchi ni kite…",
              en: "come home and… (te-form of くる)",
              breakdown: [
                { jp: "うち に", en: "to the house" },
                { jp: "きて", en: "come-and… (て-form of くる)" },
              ],
            },
          ],
          apply: {
            prompt: "What's the て-form of する (to do)?",
            options: ["すて", "して", "しって"],
            optionsRomaji: ["sute", "shite", "shitte"],
            correct: 1,
            explanation: "する is irregular: する → して.",
          },
        },
        {
          id: "te-kudasai",
          title: "〜てください — please do…",
          titleRomaji: "~te kudasai",
          subtitle: "Your first use of the て-form.",
          pattern: [
            { text: "みて", highlight: true },
            { text: "ください", highlight: false },
          ],
          patternRomaji: "mite kudasai",
          note: "Add ください after the て-form to make a polite request: みて ください = “please look”, たべて ください = “please eat”, きて ください = “please come”. It's how you ask someone to do something — at a shop, in class, with a friend. The verb in て-form carries the action; ください adds the “please”.",
          tip: "To be gentle, you can soften further with すみません (excuse me) up front: すみません、まって ください (“excuse me, please wait”). The て-form itself never changes for politeness — ください does that job.",
          examples: [
            {
              jp: "ここ を みて ください。",
              romaji: "Koko wo mite kudasai.",
              en: "Please look here.",
              breakdown: [
                { jp: "ここ を", en: "here (object)" },
                { jp: "みて", en: "look (て-form)" },
                { jp: "ください", en: "please" },
              ],
            },
            {
              jp: "また きて ください。",
              romaji: "Mata kite kudasai.",
              en: "Please come again.",
              breakdown: [
                { jp: "また", en: "again" },
                { jp: "きて", en: "come (て-form)" },
                { jp: "ください", en: "please" },
              ],
            },
          ],
          apply: {
            prompt: "Say “please eat.”",
            options: ["たべる ください。", "たべて ください。", "たべます ください。"],
            optionsRomaji: ["taberu kudasai.", "tabete kudasai.", "tabemasu kudasai."],
            correct: 1,
            explanation: "Request = て-form + ください: たべて ください.",
          },
        },
      ],
      practice: [
        {
          question: "て-form of みる (to watch):",
          options: ["みて", "みって", "みります"],
          optionsRomaji: ["mite", "mitte", "mirimasu"],
          correct: 0,
          explanation: "Group 2: drop る, add て → みて.",
          concept: "Group 2 て-form",
        },
        {
          question: "て-form of くる (to come):",
          options: ["くて", "きて", "くって"],
          optionsRomaji: ["kute", "kite", "kutte"],
          correct: 1,
          explanation: "くる is irregular: くる → きて.",
          concept: "irregular て-form",
        },
        {
          question: "“Please come here.” ここ に ＿＿。",
          jp: "ここ に ＿＿。",
          romaji: "Koko ni ＿＿.",
          options: ["きて ください", "くる ください", "きます ください"],
          optionsRomaji: ["kite kudasai", "kuru kudasai", "kimasu kudasai"],
          correct: 0,
          explanation: "Request = て-form + ください: きて ください.",
          concept: "〜てください",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "ここ を みて ください", romaji: "koko wo mite kudasai", en: "please look here" },
        { text: "ちょっと まって ください", romaji: "chotto matte kudasai", en: "please wait a moment" },
        { text: "また きて ください", romaji: "mata kite kudasai", en: "please come again" },
      ],
    },
    {
      kind: "microstory",
      setting: "First day at the language school",
      emoji: "🏫",
      intro: "Hana's teacher gives gentle instructions — every one is a 〜てください request.",
      lines: [
        { speaker: "narrator", en: "The teacher stands at the front of the class." },
        { speaker: "tanaka", jp: "みなさん、ここ を みて ください。", romaji: "Minasan, koko wo mite kudasai.", en: "Everyone, please look here." },
        { speaker: "tanaka", jp: "この ぶん を よんで ください。", romaji: "Kono bun wo yonde kudasai.", en: "Please read this sentence." },
        { speaker: "hana", jp: "すみません、もう いちど いって ください。", romaji: "Sumimasen, mou ichido itte kudasai.", en: "Excuse me, please say it once more." },
        { speaker: "tanaka", jp: "はい。ゆっくり して ください。", romaji: "Hai. Yukkuri shite kudasai.", en: "Sure. Please take it slow." },
        { speaker: "tanaka", jp: "じゃあ、また あした きて ください。", romaji: "Jaa, mata ashita kite kudasai.", en: "Okay — please come again tomorrow." },
      ],
      comprehension: [
        {
          question: "What does Hana ask the teacher to do?",
          options: ["Speak louder", "Say it once more (もう いちど いって ください)", "Write it down", "Slow down the class"],
          correct: 1,
          explanation: "もう いちど いって ください — please say it one more time.",
        },
        {
          question: "Which is the て-form of する in the story?",
          options: ["みて", "よんで", "して", "きて"],
          correct: 2,
          explanation: "ゆっくり して ください — して is the て-form of する. (よんで and いって are Group 1, coming next lesson.)",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Every verb has a plain (dictionary) form behind its ます-form",
        "Group 2 (る-verbs): drop る, add て — たべる → たべて, みる → みて",
        "The two irregulars: する → して, くる → きて",
        "〜てください = please do… — your first use of the て-form",
        "Next: the Group 1 (godan) rules — the trickier half",
      ],
      badge: { name: "Key Turner", emoji: "🔑" },
    },
  ],
};
