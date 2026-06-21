import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Checkpoint (Review) · Lesson 2 — existence & adjectives. Gathers
 * あります／います + に／が + position words (Ch3) and the whole adjective toolbox
 * (Ch4) into two maps, with applied practice and a describe-the-room microstory.
 */
export const book2ReviewLesson02: Lesson = {
  id: "ja-2-review-2",
  chapterId: "ja-2-review",
  number: 2,
  title: "Existence & describing, together",
  titleNative: "ふくしゅう ②",
  subtitle: "Checkpoint review",
  summary:
    "Consolidate the other half of Book 2: あります vs います with position words, and the full adjective toolbox (connect, past, adverbs, compare) — then use them together to describe a room.",
  xp: 70,
  estimateMinutes: 12,
  unlockAfter: "ja-2-review-1",
  steps: [
    {
      kind: "intro",
      title: "What's there, and what it's like",
      subtitle:
        "Two big systems from this book: saying what exists and where (あります／います), and describing it (adjectives). Here they are side by side — then you'll put them together to walk through a room and give your opinion on everything in it.",
      goals: [
        "Choose あります vs います and place things with position words",
        "Recall the adjective toolbox: 〜くて／〜で, past, adverbs, comparison",
        "Describe a real scene combining both",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "grammar",
      intro: "The two systems, each on one screen.",
      patterns: [
        {
          id: "review-existence",
          title: "あります / います + place に + が",
          titleRomaji: "arimasu / imasu",
          subtitle: "There is — objects vs living things.",
          pattern: [
            { text: "Place に", highlight: false },
            { text: "Thing が", highlight: true },
            { text: "あります／います", highlight: true },
          ],
          patternRomaji: "Place ni  Thing ga  arimasu / imasu",
          note: "Use あります for non-living things and います for people and animals. The place takes に, the thing that exists takes が: へや に つくえ が あります (“there's a desk in the room”), こうえん に ねこ が います (“there's a cat in the park”). Pinpoint the spot with a position word + の: つくえ の 上 (“on the desk”), いす の 下 (“under the chair”). Ask where with どこ: えき は どこ ですか.",
          tip: "The split is aliveness, not movement: a parked car is あります (it's an object), but a sleeping cat is います (it's alive). Plants count as objects → あります.",
          examples: [
            {
              jp: "つくえ の 上 に ほん が あります。",
              romaji: "Tsukue no ue ni hon ga arimasu.",
              en: "There's a book on the desk.",
              breakdown: [
                { jp: "つくえ の 上 に", en: "on the desk" },
                { jp: "ほん が", en: "a book" },
                { jp: "あります", en: "there is (object)" },
              ],
            },
            {
              jp: "へや の 中 に ねこ が います。",
              romaji: "Heya no naka ni neko ga imasu.",
              en: "There's a cat in the room.",
              breakdown: [
                { jp: "へや の 中 に", en: "in the room" },
                { jp: "ねこ が", en: "a cat" },
                { jp: "います", en: "there is (living)" },
              ],
            },
          ],
        },
        {
          id: "review-adjective-toolbox",
          title: "The adjective toolbox",
          titleRomaji: "connect · past · adverb · compare",
          subtitle: "Same two families, four jobs.",
          pattern: [
            { text: "〜くて／〜で", highlight: true },
            { text: "〜かった／でした", highlight: true },
            { text: "〜く／〜に", highlight: true },
            { text: "より・いちばん", highlight: false },
          ],
          patternRomaji: "kute/de · katta/deshita · ku/ni · yori/ichiban",
          note: "Connect: い → くて (おおきくて), な → で (しずかで). Past: い → かった です (たのしかった), な/noun → でした (しずか でした). Adverb: い → く (はやく), な → に (きれいに). Compare: A は B より [adj], and [group] で X が いちばん [adj]. The only irregular is いい → よくて／よかった／よく.",
          tip: "One line to remember it all: い-adjectives change their own ending (くて, かった, く); な-adjectives lean on で／でした／に. Comparison words (より・のほうが・いちばん) never change the adjective at all.",
          examples: [
            {
              jp: "へや は ひろくて あかるい です。",
              romaji: "Heya wa hirokute akarui desu.",
              en: "The room is spacious and bright.",
              breakdown: [
                { jp: "ひろくて", en: "spacious and… (connect)" },
                { jp: "あかるい です", en: "is bright" },
              ],
            },
            {
              jp: "りょこう は たのしかった です。",
              romaji: "Ryokou wa tanoshikatta desu.",
              en: "The trip was fun.",
              breakdown: [
                { jp: "りょこう は", en: "the trip (topic)" },
                { jp: "たのしかった", en: "was fun (past)" },
                { jp: "です", en: "(polite)" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "Which verb? “There's a cat in the room.” へや に ねこ が ＿＿。",
          jp: "へや に ねこ が ＿＿。",
          romaji: "Heya ni neko ga ＿＿.",
          options: ["あります", "います", "です"],
          optionsRomaji: ["arimasu", "imasu", "desu"],
          correct: 1,
          explanation: "A cat is alive → います.",
          concept: "あります／います",
        },
        {
          question: "“Under the chair” is…",
          options: ["いす の 上", "いす の 下", "いす の 中"],
          optionsRomaji: ["isu no ue", "isu no shita", "isu no naka"],
          correct: 1,
          explanation: "下 (した) = under / below. 上 = on top, 中 = inside.",
          concept: "position words",
        },
        {
          question: "Connect: “big and new” (おおきい + あたらしい).",
          options: ["おおきい あたらしい", "おおきくて あたらしい", "おおきで あたらしい"],
          optionsRomaji: ["ookii atarashii", "ookikute atarashii", "ooki de atarashii"],
          correct: 1,
          explanation: "い-adjectives connect with くて: おおきくて あたらしい.",
          concept: "〜くて",
        },
        {
          question: "Past tense: “The festival was fun.” おまつり は ＿＿ です。",
          jp: "おまつり は ＿＿ です。",
          romaji: "Omatsuri wa ＿＿ desu.",
          options: ["たのしい でした", "たのしかった", "たのしくない"],
          optionsRomaji: ["tanoshii deshita", "tanoshikatta", "tanoshikunai"],
          correct: 1,
          explanation: "い-adjective past: たのしい → たのしかった です.",
          concept: "〜かった です",
        },
        {
          question: "Compare: “planes are faster than trains.” ひこうき は でんしゃ ＿ はやい です。",
          jp: "ひこうき は でんしゃ ＿ はやい です。",
          romaji: "Hikouki wa densha ＿ hayai desu.",
          options: ["より", "から", "で"],
          optionsRomaji: ["yori", "kara", "de"],
          correct: 0,
          explanation: "より = “than”, placed after the lesser one (でんしゃ).",
          concept: "〜より",
        },
      ],
    },
    {
      kind: "matching",
      intro: "Two rounds: position words to meanings, then adjectives to their past form.",
      rounds: [
        {
          title: "Position word → meaning",
          pairs: [
            { id: "ps1", left: "上", right: "on / above", romaji: "ue" },
            { id: "ps2", left: "下", right: "under / below", romaji: "shita" },
            { id: "ps3", left: "中", right: "inside", romaji: "naka" },
            { id: "ps4", left: "となり", right: "next to", romaji: "tonari" },
          ],
        },
        {
          title: "Adjective → past form",
          pairs: [
            { id: "pf1", left: "たのしい", right: "たのしかった", romaji: "tanoshii → tanoshikatta" },
            { id: "pf2", left: "いい", right: "よかった", romaji: "ii → yokatta" },
            { id: "pf3", left: "しずか", right: "しずか でした", romaji: "shizuka → shizuka deshita" },
            { id: "pf4", left: "たかい", right: "たかかった", romaji: "takai → takakatta" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Yui visits the new apartment",
      emoji: "🛋️",
      intro: "Yui comes over and reacts to everything — what's there, and what she thinks of it.",
      lines: [
        { speaker: "narrator", en: "Yui steps in and looks around." },
        { speaker: "yui", jp: "ひろくて あかるい へや ですね！", romaji: "Hirokute akarui heya desu ne!", en: "What a spacious, bright room!" },
        { speaker: "hana", jp: "ありがとう。つくえ の 上 に あたらしい パソコン が あります。", romaji: "Arigatou. Tsukue no ue ni atarashii pasokon ga arimasu.", en: "Thanks. There's a new computer on the desk." },
        { speaker: "yui", jp: "あ、いす の 下 に ねこ が います！", romaji: "A, isu no shita ni neko ga imasu!", en: "Oh, there's a cat under the chair!" },
        { speaker: "hana", jp: "はい。ちいさくて かわいい です。", romaji: "Hai. Chiisakute kawaii desu.", en: "Yes. It's small and cute." },
        { speaker: "yui", jp: "まえ の へや より ひろい ですね。", romaji: "Mae no heya yori hiroi desu ne.", en: "It's more spacious than your old room." },
        { speaker: "hana", jp: "はい。それに、しずかで べんり です。", romaji: "Hai. Soreni, shizuka de benri desu.", en: "Yes. And it's quiet and convenient." },
      ],
      comprehension: [
        {
          question: "What's on the desk, and which verb is used?",
          options: ["A cat — います", "A computer — あります", "A book — います", "Nothing"],
          correct: 1,
          explanation: "つくえ の 上 に あたらしい パソコン が あります — a computer (object) → あります.",
        },
        {
          question: "How does Hana describe the cat?",
          options: ["Big and loud", "Small and cute (ちいさくて かわいい)", "Old and quiet", "Fast"],
          correct: 1,
          explanation: "ちいさくて かわいい です — small and cute (い-adjectives joined with くて).",
        },
        {
          question: "How does the new room compare to the old one?",
          options: ["Smaller", "More spacious (より ひろい)", "Darker", "Noisier"],
          correct: 1,
          explanation: "まえ の へや より ひろい です — more spacious than the previous room (より = than).",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "あります (objects) / います (living) · place takes に, thing takes が",
        "Pinpoint with position words: つくえ の 上, いす の 下, へや の 中",
        "Adjective toolbox: 〜くて／〜で · 〜かった／でした · 〜く／〜に · より／いちばん",
        "い-adjectives change themselves; な-adjectives lean on で／でした／に",
      ],
      badge: { name: "Room Reader", emoji: "🛋️" },
    },
  ],
};
