import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 4 — comparisons. A は B より [adj]
 * (comparative), B より A のほうが [adj] with the どちら question, and [group] で
 * X が いちばん [adj] (superlative). Reuses the adjectives + が すき from earlier.
 * No new kanji.
 */
export const book2Chapter3Lesson04: Lesson = {
  id: "ja-2-ch3-4",
  chapterId: "ja-2-ch3",
  number: 4,
  title: "Bigger, cheaper, the best",
  titleNative: "〜より / いちばん",
  subtitle: "Comparing things",
  summary:
    "Compare two things with より (A は B より はやい, “A is faster than B”) and のほうが, ask which with どちら, and pick the top of a group with いちばん (X が いちばん すき, “I like X best”).",
  xp: 70,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch3-3",
  steps: [
    {
      kind: "intro",
      title: "This one or that one?",
      subtitle:
        "Adjectives really earn their keep when you compare. Japanese has no “-er/-est” endings — instead small words do the work: より (“than”), のほうが (“the … one is more”), and いちばん (“number one / the most”).",
      goals: [
        "Compare two things: A は B より たかい です (A is pricier than B)",
        "Ask & answer with どちら / のほうが",
        "Pick the top of a group with いちばん",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "vocabDrill",
      intro:
        "Things worth comparing — ways to travel, plus two category words for “the best of…”.",
      words: [
        { text: "でんしゃ", romaji: "densha", meaning: "train", emoji: "🚆", example: { jp: "でんしゃ は はやい です。", romaji: "Densha wa hayai desu.", en: "Trains are fast." } },
        { text: "バス", romaji: "basu", meaning: "bus", emoji: "🚌", example: { jp: "バス は やすい です。", romaji: "Basu wa yasui desu.", en: "Buses are cheap." } },
        { text: "ひこうき", romaji: "hikouki", meaning: "airplane", emoji: "✈️", example: { jp: "ひこうき は たかい です。", romaji: "Hikouki wa takai desu.", en: "Planes are expensive." } },
        { text: "くるま", romaji: "kuruma", meaning: "car", emoji: "🚗", example: { jp: "くるま が べんり です。", romaji: "Kuruma ga benri desu.", en: "Cars are convenient." } },
        { text: "くだもの", romaji: "kudamono", meaning: "fruit", emoji: "🍎", example: { jp: "くだもの が すき です。", romaji: "Kudamono ga suki desu.", en: "I like fruit." } },
        { text: "どうぶつ", romaji: "doubutsu", meaning: "animal", emoji: "🐾", example: { jp: "どうぶつ が すき です。", romaji: "Doubutsu ga suki desu.", en: "I like animals." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Three small tools: より to compare, のほうが to pick the bigger one, いちばん for the top.",
      patterns: [
        {
          id: "yori",
          title: "A は B より [adj] です",
          titleRomaji: "A wa B yori [adj] desu",
          subtitle: "“A is more [adj] than B.”",
          pattern: [
            { text: "ひこうき は", highlight: false },
            { text: "でんしゃ より", highlight: true },
            { text: "はやい です", highlight: false },
          ],
          patternRomaji: "hikouki wa  densha yori  hayai desu",
          note: "より means “than”, and it comes right after the thing you're comparing against: B より = “(more) than B”. The adjective itself doesn't change — Japanese has no “-er” form. ひこうき は でんしゃ より はやい です = “planes are faster than trains”. Word order is flexible, but the pattern A は B より [adj] です is the clearest.",
          tip: "より attaches to the LOSER of the comparison — the thing there's more than. ✗でんしゃ は ひこうき より はやい です would mean trains beat planes for speed. Put より after whichever one is less.",
          examples: [
            {
              jp: "ひこうき は バス より たかい です。",
              romaji: "Hikouki wa basu yori takai desu.",
              en: "Planes are more expensive than buses.",
              breakdown: [
                { jp: "ひこうき は", en: "planes (topic)" },
                { jp: "バス より", en: "than buses" },
                { jp: "たかい です", en: "are expensive" },
              ],
            },
            {
              jp: "ねこ は いぬ より ちいさい です。",
              romaji: "Neko wa inu yori chiisai desu.",
              en: "Cats are smaller than dogs.",
              breakdown: [
                { jp: "ねこ は", en: "cats (topic)" },
                { jp: "いぬ より", en: "than dogs" },
                { jp: "ちいさい です", en: "are small" },
              ],
            },
          ],
          apply: {
            prompt: "Say “trains are faster than buses.”",
            options: ["でんしゃ は バス より はやい です。", "バス は でんしゃ より はやい です。", "でんしゃ は バス より はやく です。"],
            optionsRomaji: ["Densha wa basu yori hayai desu.", "Basu wa densha yori hayai desu.", "Densha wa basu yori hayaku desu."],
            correct: 0,
            explanation: "より goes after the slower one (バス): でんしゃ は バス より はやい です.",
          },
        },
        {
          id: "nohou-ga",
          title: "どちら が…? — B より A のほうが…",
          titleRomaji: "dochira ga…? — A no hou ga…",
          subtitle: "Ask which, answer with のほうが.",
          pattern: [
            { text: "でんしゃ のほうが", highlight: true },
            { text: "はやい です", highlight: false },
          ],
          patternRomaji: "densha no hou ga  hayai desu",
          note: "To ask “which is more [adj]?”, use A と B と どちら が [adj] ですか (“between A and B, which is more…?”). To answer, point at the winner with のほうが (“the … side / one is more”): でんしゃ のほうが はやい です (“the train is faster”). You can add the loser with より: バス より でんしゃ のほうが はやい です.",
          tip: "どちら is for a choice between exactly two. For the favourite out of many, you'll use いちばん (next). And remember すき is an adjective here too: コーヒー と こうちゃ と どちら が すき ですか works the same way.",
          examples: [
            {
              jp: "コーヒー と こうちゃ と どちら が すき ですか。",
              romaji: "Koohii to koucha to dochira ga suki desu ka.",
              en: "Which do you like, coffee or tea?",
              breakdown: [
                { jp: "コーヒー と こうちゃ と", en: "coffee and tea —" },
                { jp: "どちら が", en: "which" },
                { jp: "すき ですか", en: "do you like?" },
              ],
            },
            {
              jp: "こうちゃ のほうが すき です。",
              romaji: "Koucha no hou ga suki desu.",
              en: "I like tea more.",
              breakdown: [
                { jp: "こうちゃ のほうが", en: "tea (the more)" },
                { jp: "すき です", en: "like" },
              ],
            },
          ],
          apply: {
            prompt: "Answer “the car is more convenient” (くるま, べんり).",
            options: ["くるま のほうが べんり です。", "くるま より べんり です。", "くるま が いちばん べんり です。"],
            optionsRomaji: ["Kuruma no hou ga benri desu.", "Kuruma yori benri desu.", "Kuruma ga ichiban benri desu."],
            correct: 0,
            explanation: "Point at the winner of a two-way choice with のほうが: くるま のほうが べんり です.",
          },
        },
        {
          id: "ichiban",
          title: "[group] で X が いちばん [adj]",
          titleRomaji: "[group] de X ga ichiban [adj]",
          subtitle: "The most / the best of a group.",
          pattern: [
            { text: "のりもの の なか で", highlight: false },
            { text: "ひこうき が いちばん", highlight: true },
            { text: "はやい です", highlight: false },
          ],
          patternRomaji: "norimono no naka de  hikouki ga ichiban  hayai desu",
          note: "いちばん literally means “number one”, and placed before an adjective it makes the superlative: いちばん はやい = “the fastest”. Name the group with 〜の なか で (“among…”) or just 〜で: くだもの の なか で りんご が いちばん すき です = “among fruits, I like apples best”. The top item takes が.",
          tip: "No special ending on the adjective — いちばん does all the work, just like より and のほうが. So it's いちばん たかい (“the most expensive”), never ✗たかいばん or ✗たかくいちばん.",
          examples: [
            {
              jp: "のりもの の なか で ひこうき が いちばん はやい です。",
              romaji: "Norimono no naka de hikouki ga ichiban hayai desu.",
              en: "Of all transport, planes are the fastest.",
              breakdown: [
                { jp: "のりもの の なか で", en: "among vehicles" },
                { jp: "ひこうき が いちばん", en: "planes are the most" },
                { jp: "はやい です", en: "fast" },
              ],
            },
            {
              jp: "どうぶつ の なか で ねこ が いちばん すき です。",
              romaji: "Doubutsu no naka de neko ga ichiban suki desu.",
              en: "Of all animals, I like cats best.",
              breakdown: [
                { jp: "どうぶつ の なか で", en: "among animals" },
                { jp: "ねこ が いちばん", en: "cats the most" },
                { jp: "すき です", en: "like" },
              ],
            },
          ],
          apply: {
            prompt: "Say “among fruit, I like apples best.” (くだもの, りんご)",
            options: ["くだもの の なか で りんご が いちばん すき です。", "くだもの より りんご が すき です。", "りんご のほうが いちばん すき です。"],
            optionsRomaji: ["Kudamono no naka de ringo ga ichiban suki desu.", "Kudamono yori ringo ga suki desu.", "Ringo no hou ga ichiban suki desu."],
            correct: 0,
            explanation: "Group with の なか で, top item + が + いちばん: くだもの の なか で りんご が いちばん すき です.",
          },
        },
      ],
      practice: [
        {
          question: "Which is correct for “planes are more expensive than trains”?",
          options: ["ひこうき は でんしゃ より たかい です。", "でんしゃ は ひこうき より たかい です。", "ひこうき は でんしゃ より たかく です。"],
          optionsRomaji: ["Hikouki wa densha yori takai desu.", "Densha wa hikouki yori takai desu.", "Hikouki wa densha yori takaku desu."],
          correct: 0,
          explanation: "より follows the cheaper one (でんしゃ): ひこうき は でんしゃ より たかい です.",
          concept: "〜より",
        },
        {
          question: "Fill in: “Which is faster, the bus or the train?” バス と でんしゃ と ＿＿ が はやい ですか。",
          jp: "バス と でんしゃ と ＿＿ が はやい ですか。",
          romaji: "Basu to densha to ＿＿ ga hayai desu ka.",
          options: ["どこ", "どちら", "どれ"],
          optionsRomaji: ["doko", "dochira", "dore"],
          correct: 1,
          explanation: "どちら = “which (of two)”. どこ = where; どれ = which (of three+ things).",
          concept: "どちら",
        },
        {
          question: "“Of all animals, I like cats best.” どうぶつ の なか で ねこ が ＿＿ すき です。",
          jp: "どうぶつ の なか で ねこ が ＿＿ すき です。",
          romaji: "Doubutsu no naka de neko ga ＿＿ suki desu.",
          options: ["より", "のほうが", "いちばん"],
          optionsRomaji: ["yori", "no hou ga", "ichiban"],
          correct: 2,
          explanation: "いちばん = “the most / number one” → the superlative: いちばん すき です.",
          concept: "いちばん",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "ひこうき は でんしゃ より はやい です", romaji: "hikouki wa densha yori hayai desu", en: "planes are faster than trains" },
        { text: "でんしゃ のほうが やすい です", romaji: "densha no hou ga yasui desu", en: "the train is cheaper" },
        { text: "どうぶつ の なか で ねこ が いちばん すき です", romaji: "doubutsu no naka de neko ga ichiban suki desu", en: "of all animals I like cats best" },
      ],
    },
    {
      kind: "microstory",
      setting: "Planning a trip",
      emoji: "🗺️",
      intro: "Hana, Tanaka, and Kenji are deciding how to get to Kyoto — by plane, train, or bus.",
      lines: [
        { speaker: "narrator", en: "Three options are on the table." },
        { speaker: "tanaka", jp: "ひこうき と でんしゃ と どちら が はやい ですか？", romaji: "Hikouki to densha to dochira ga hayai desu ka?", en: "Which is faster, the plane or the train?" },
        { speaker: "kenji", jp: "ひこうき のほうが はやい です。でも、たかい です。", romaji: "Hikouki no hou ga hayai desu. Demo, takai desu.", en: "The plane is faster. But it's expensive." },
        { speaker: "hana", jp: "バス は でんしゃ より やすい です よ。", romaji: "Basu wa densha yori yasui desu yo.", en: "The bus is cheaper than the train, you know." },
        { speaker: "tanaka", jp: "でも、バス が いちばん おそい です…", romaji: "Demo, basu ga ichiban osoi desu…", en: "But the bus is the slowest…" },
        { speaker: "kenji", jp: "じゃあ、でんしゃ が いちばん いい です ね。", romaji: "Jaa, densha ga ichiban ii desu ne.", en: "Then the train is the best, isn't it." },
        { speaker: "hana", jp: "はい！でんしゃ に しましょう。", romaji: "Hai! Densha ni shimashou.", en: "Yes! Let's go with the train." },
      ],
      comprehension: [
        {
          question: "Why don't they choose the plane?",
          options: ["It's the slowest", "It's faster but expensive", "It's cheaper than the bus", "It doesn't go to Kyoto"],
          correct: 1,
          explanation: "ひこうき のほうが はやい です。でも、たかい です — faster, but expensive.",
        },
        {
          question: "What do they decide is the best option?",
          options: ["The plane", "The bus", "The train", "Walking"],
          correct: 2,
          explanation: "でんしゃ が いちばん いい です — the train is the best (fast enough, not too pricey, not the slowest).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Comparative: A は B より [adj] です — より follows the lesser one",
        "Ask with A と B と どちら が…? · answer with X のほうが…",
        "Superlative: [group] の なか で X が いちばん [adj]",
        "Adjectives don't change shape — より / のほうが / いちばん do the work",
      ],
      badge: { name: "The Best", emoji: "🏆" },
    },
  ],
};
