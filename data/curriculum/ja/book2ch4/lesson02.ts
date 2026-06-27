import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 6 (Te-form) · Lesson 2 — the Group 1 (godan) て-form rules,
 * grouped by the dictionary ending: う・つ・る→って, む・ぶ・ぬ→んで, く→いて,
 * ぐ→いで, す→して, plus the special いく→いって. Kanji 聞 (聞く→聞いて) and
 * 話 (話す→話して) demonstrate two of the rules in context.
 */
export const book2Chapter4Lesson02: Lesson = {
  id: "ja-2-ch4-2",
  chapterId: "ja-2-ch4",
  number: 2,
  title: "The te-form of Group 1 verbs",
  titleNative: "て‐form ②",
  subtitle: "The godan rules",
  summary:
    "The trickier half: Group 1 (godan) verbs change their て-form by their ending — う・つ・る→って, む・ぶ・ぬ→んで, く→いて, ぐ→いで, す→して, plus the special いく→いって. New kanji: 聞 and 話.",
  xp: 75,
  estimateMinutes: 13,
  unlockAfter: "ja-2-ch4-1",
  steps: [
    {
      kind: "intro",
      title: "The famous te-form song",
      subtitle:
        "Group 1 verbs (everything that isn't a clean る-verb or irregular) pick their て-ending based on how the plain form ends. There are five little rules. Learn them once and every godan verb falls into place — there's even a song for it.",
      goals: [
        "Apply the five Group 1 endings: って・んで・いて・いで・して",
        "Remember the one special case: いく → いって",
        "Read and write 聞 (listen) and 話 (speak)",
      ],
      estimateMinutes: 13,
    },
    {
      kind: "vocabDrill",
      intro:
        "Group 1 verbs in plain form, one for each ending you'll learn. Each turns into a different て-shape.",
      words: [
        { text: "かう", romaji: "kau", meaning: "to buy", emoji: "🛒", example: { jp: "パン を かう。", romaji: "Pan wo kau.", en: "Buy bread." } },
        { text: "まつ", romaji: "matsu", meaning: "to wait", emoji: "⏳", example: { jp: "ともだち を まつ。", romaji: "Tomodachi wo matsu.", en: "Wait for a friend." } },
        { text: "のむ", romaji: "nomu", meaning: "to drink", emoji: "🥤", example: { jp: "みず を のむ。", romaji: "Mizu wo nomu.", en: "Drink water." } },
        { text: "あそぶ", romaji: "asobu", meaning: "to play / hang out", emoji: "🎮", example: { jp: "ともだち と あそぶ。", romaji: "Tomodachi to asobu.", en: "Hang out with a friend." } },
        { text: "およぐ", romaji: "oyogu", meaning: "to swim", emoji: "🏊", example: { jp: "うみ で およぐ。", romaji: "Umi de oyogu.", en: "Swim in the sea." } },
        { text: "いく", romaji: "iku", meaning: "to go", emoji: "🚶", example: { jp: "がっこう に いく。", romaji: "Gakkou ni iku.", en: "Go to school." } },
      ],
    },
    {
      kind: "character",
      script: "kanji",
      char: "聞",
      romaji: "ki / bun",
      phonetic: "Means “listen / hear / ask”. Kun-reading: ki(ku). On-reading: bun.",
      mnemonic: "An ear 耳 inside a gate 門 — leaning at the gate to hear what's going on.",
      words: [
        { jp: "聞く", meaning: "to listen / hear / ask", romaji: "kiku", emoji: "👂", hint: "Group 1, ends in く → て-form 聞いて." },
        { jp: "おんがく を 聞いて", meaning: "listen to music and…", romaji: "ongaku wo kiite", emoji: "🎧", hint: "く → いて, so 聞く → 聞いて." },
      ],
    },
    { kind: "writing", char: "聞", script: "kanji" },
    {
      kind: "character",
      script: "kanji",
      char: "話",
      romaji: "hana / wa",
      phonetic: "Means “speak / talk; a story”. Kun-reading: hana(su). On-reading: wa.",
      mnemonic: "Words 言 coming off a tongue 舌 — speaking. (言 = speech, 舌 = tongue.)",
      words: [
        { jp: "話す", meaning: "to speak / talk", romaji: "hanasu", emoji: "💬", hint: "Group 1, ends in す → て-form 話して." },
        { jp: "にほんご を 話して", meaning: "speak Japanese and…", romaji: "nihongo wo hanashite", emoji: "🗣️", hint: "す → して, so 話す → 話して." },
      ],
    },
    { kind: "writing", char: "話", script: "kanji" },
    {
      kind: "grammar",
      intro: "Five endings, sorted by the last sound of the plain form. This is the whole system.",
      patterns: [
        {
          id: "te-tte",
          title: "う・つ・る → って",
          titleRomaji: "u / tsu / ru → tte",
          subtitle: "Three endings, one result: small っ + て.",
          pattern: [
            { text: "か", highlight: false },
            { text: "う → って", highlight: true },
          ],
          patternRomaji: "ka-u → ka-tte",
          note: "If the plain form ends in う, つ, or る (the Group 1 る), replace that ending with って: かう → かって (“buy”), まつ → まって (“wait”), とる → とって (“take”). The little っ (small tsu) gives it that double-consonant catch. This is also where the “secret Group 1” verbs land: かえる → かえって, はいる → はいって.",
          tip: "Yes — both Group 2 る (→ て) and Group 1 る (→ って) exist. たべる is Group 2 (たべて), but とる is Group 1 (とって). The /a/ /u/ /o/ sound before る usually means Group 1; /e/ /i/ usually means Group 2.",
          examples: [
            {
              jp: "パン を かって…",
              romaji: "Pan wo katte…",
              en: "buy bread and… (て-form of かう)",
              breakdown: [
                { jp: "パン を", en: "bread (object)" },
                { jp: "かって", en: "buy-and… (う→って)" },
              ],
            },
            {
              jp: "ちょっと まって…",
              romaji: "Chotto matte…",
              en: "wait a sec and… (て-form of まつ)",
              breakdown: [
                { jp: "ちょっと", en: "a little" },
                { jp: "まって", en: "wait-and… (つ→って)" },
              ],
            },
          ],
          apply: {
            prompt: "What's the て-form of かう (to buy)?",
            options: ["かいて", "かって", "かんで"],
            optionsRomaji: ["kaite", "katte", "kande"],
            correct: 1,
            explanation: "う・つ・る → って: かう → かって.",
          },
        },
        {
          id: "te-nde",
          title: "む・ぶ・ぬ → んで",
          titleRomaji: "mu / bu / nu → nde",
          subtitle: "These three take ん + で.",
          pattern: [
            { text: "の", highlight: false },
            { text: "む → んで", highlight: true },
          ],
          patternRomaji: "no-mu → no-nde",
          note: "If the plain form ends in む, ぶ, or ぬ, replace it with んで: のむ → のんで (“drink”), あそぶ → あそんで (“play”), しぬ → しんで (“die”). Note it's で, not て — the ん softens it. (しぬ is the only common ぬ-verb in the whole language.)",
          tip: "Compare with って: む・ぶ・ぬ are “heavy” nasal endings, so they take ん + で; う・つ・る take っ + て. Group the sounds and the choice is automatic.",
          examples: [
            {
              jp: "みず を のんで…",
              romaji: "Mizu wo nonde…",
              en: "drink water and… (て-form of のむ)",
              breakdown: [
                { jp: "みず を", en: "water (object)" },
                { jp: "のんで", en: "drink-and… (む→んで)" },
              ],
            },
            {
              jp: "こうえん で あそんで…",
              romaji: "Kouen de asonde…",
              en: "play in the park and… (て-form of あそぶ)",
              breakdown: [
                { jp: "こうえん で", en: "in the park" },
                { jp: "あそんで", en: "play-and… (ぶ→んで)" },
              ],
            },
          ],
          apply: {
            prompt: "What's the て-form of のむ (to drink)?",
            options: ["のって", "のんで", "のいて"],
            optionsRomaji: ["notte", "nonde", "noite"],
            correct: 1,
            explanation: "む・ぶ・ぬ → んで: のむ → のんで.",
          },
        },
        {
          id: "te-ite-shite",
          title: "く→いて · ぐ→いで · す→して · いく→いって",
          titleRomaji: "ku→ite · gu→ide · su→shite",
          subtitle: "The last three, plus one exception.",
          pattern: [
            { text: "か", highlight: false },
            { text: "く → いて", highlight: true },
            { text: "・ す → して", highlight: true },
          ],
          patternRomaji: "ka-ku → ka-ite · su → shite",
          note: "く → いて: かく → かいて (“write”), 聞く → 聞いて (“listen”). ぐ → いで: およぐ → およいで (“swim”). す → して: 話す → 話して (“speak”), かす → かして (“lend”). And the one exception every learner memorizes: いく (“go”) does NOT become ✗いいて — it's いって, like the う・つ・る group.",
          tip: "く and ぐ are a pair (いて / いで — voiced ぐ gives voiced で). す always behaves like its irregular cousin する → して. And いく is the single odd one out — burn いって into memory.",
          examples: [
            {
              jp: "てがみ を かいて…",
              romaji: "Tegami wo kaite…",
              en: "write a letter and… (て-form of かく)",
              breakdown: [
                { jp: "てがみ を", en: "a letter (object)" },
                { jp: "かいて", en: "write-and… (く→いて)" },
              ],
            },
            {
              jp: "えき に いって…",
              romaji: "Eki ni itte…",
              en: "go to the station and… (て-form of いく)",
              breakdown: [
                { jp: "えき に", en: "to the station" },
                { jp: "いって", en: "go-and… (いく → いって, special!)" },
              ],
            },
          ],
          apply: {
            prompt: "What's the て-form of 話す / はなす (to speak)?",
            options: ["はなって", "はないて", "はなして"],
            optionsRomaji: ["hanatte", "hanaite", "hanashite"],
            correct: 2,
            explanation: "す → して: 話す → 話して.",
          },
        },
      ],
      practice: [
        {
          question: "て-form of まつ (to wait):",
          options: ["まいて", "まって", "まんで"],
          optionsRomaji: ["maite", "matte", "mande"],
          correct: 1,
          explanation: "う・つ・る → って: まつ → まって.",
          concept: "つ → って",
        },
        {
          question: "て-form of 聞く / きく (to listen):",
          options: ["きいて", "きって", "きんで"],
          optionsRomaji: ["kiite", "kitte", "kinde"],
          correct: 0,
          explanation: "く → いて: 聞く → 聞いて.",
          concept: "く → いて",
        },
        {
          question: "て-form of あそぶ (to play):",
          options: ["あそって", "あそいて", "あそんで"],
          optionsRomaji: ["asotte", "asoite", "asonde"],
          correct: 2,
          explanation: "む・ぶ・ぬ → んで: あそぶ → あそんで.",
          concept: "ぶ → んで",
        },
        {
          question: "te-form of いく (to go) — careful!",
          options: ["いいて", "いって", "いきて"],
          optionsRomaji: ["iite", "itte", "ikite"],
          correct: 1,
          explanation: "いく is the famous exception: いく → いって (not ✗いいて).",
          concept: "いく → いって",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "パン を かって ください", romaji: "pan wo katte kudasai", en: "please buy bread" },
        { text: "おんがく を 聞いて ください", romaji: "ongaku wo kiite kudasai", en: "please listen to music", accept: ["音楽を聞いてください"] },
        { text: "にほんご を 話して ください", romaji: "nihongo wo hanashite kudasai", en: "please speak Japanese", accept: ["日本語を話してください"] },
      ],
    },
    {
      kind: "microstory",
      setting: "Getting ready to go out",
      emoji: "🚪",
      intro: "Yui is rushing Kenji out the door — a flurry of te-form requests, all Group 1 verbs.",
      lines: [
        { speaker: "narrator", en: "They're running late to meet the others." },
        { speaker: "yui", jp: "Kenji、ちょっと まって！", romaji: "Kenji, chotto matte!", en: "Kenji, wait a sec!" },
        { speaker: "yui", jp: "コンビニ で みず を かって ください。", romaji: "Konbini de mizu wo katte kudasai.", en: "Please buy water at the convenience store." },
        { speaker: "kenji", jp: "わかった。きっぷ も かう？", romaji: "Wakatta. Kippu mo kau?", en: "Got it. Buy tickets too?" },
        { speaker: "yui", jp: "うん。それから、Hana に 電話して。", romaji: "Un. Sorekara, Hana ni denwa shite.", en: "Yeah. And then call Hana." },
        { speaker: "kenji", jp: "りょうかい。えき まで いって、まつ ね。", romaji: "Ryoukai. Eki made itte, matsu ne.", en: "Roger. I'll go to the station and wait." },
      ],
      comprehension: [
        {
          question: "What does Yui ask Kenji to buy?",
          options: ["Tickets only", "Water (みず を かって)", "Music", "Nothing"],
          correct: 1,
          explanation: "みず を かって ください — please buy water (かう → かって).",
        },
        {
          question: "What's the て-form of いく that appears at the end?",
          options: ["いきて", "いいて", "いって", "いんで"],
          correct: 2,
          explanation: "えき まで いって — いく is the exception, いって.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "う・つ・る → って (かう→かって, まつ→まって)",
        "む・ぶ・ぬ → んで (のむ→のんで, あそぶ→あそんで)",
        "く → いて · ぐ → いで · す → して (聞く→聞いて, 話す→話して)",
        "Exception: いく → いって",
        "New kanji: 聞 (listen) and 話 (speak)",
      ],
      badge: { name: "Godan Master", emoji: "🎵" },
    },
  ],
};
