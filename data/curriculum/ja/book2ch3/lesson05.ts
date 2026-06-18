import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 5 — capstone. No new grammar or kanji:
 * it weaves both adjective families (い and な), present + past + negative, and
 * likes/dislikes into one apartment-hunting afternoon with the cast, plus a
 * mixed review.
 */
export const book2Chapter3Lesson05: Lesson = {
  id: "ja-2-ch3-5",
  chapterId: "ja-2-ch3",
  number: 5,
  title: "Describing it all",
  titleNative: "けいようし",
  subtitle: "Chapter 4 review",
  summary:
    "Put both adjective families together: い vs な, present and past, positive and negative, and likes/dislikes — across one afternoon hunting for an apartment with Hana, Tanaka, and Yui.",
  xp: 80,
  estimateMinutes: 12,
  unlockAfter: "ja-2-ch3-4",
  steps: [
    {
      kind: "intro",
      title: "Everything you can describe",
      subtitle:
        "No new grammar — this is where it clicks. Match opposites and families, run a mixed review, then read a whole apartment hunt where every line is an opinion.",
      goals: [
        "Tell い- and な-adjectives apart and conjugate each correctly",
        "Switch between present, past, and negative with confidence",
        "Read a full apartment-hunting scene in Japanese",
      ],
      estimateMinutes: 12,
    },
    {
      kind: "matching",
      intro: "Two quick rounds: opposites, then which family each adjective belongs to.",
      rounds: [
        {
          title: "Match the opposites",
          pairs: [
            { id: "o1", left: "おおきい", right: "ちいさい", romaji: "ookii ↔ chiisai" },
            { id: "o2", left: "たかい", right: "やすい", romaji: "takai ↔ yasui" },
            { id: "o3", left: "あたらしい", right: "ふるい", romaji: "atarashii ↔ furui" },
            { id: "o4", left: "いい", right: "わるい", romaji: "ii ↔ warui" },
          ],
        },
        {
          title: "い-adjective or な-adjective?",
          pairs: [
            { id: "f1", left: "おいしい", right: "い-adjective", romaji: "oishii" },
            { id: "f2", left: "しずか", right: "な-adjective", romaji: "shizuka" },
            { id: "f3", left: "たかい", right: "い-adjective", romaji: "takai" },
            { id: "f4", left: "きれい", right: "な-adjective", romaji: "kirei (trap!)" },
          ],
        },
      ],
    },
    {
      kind: "grammar",
      intro: "One table of the whole system, then a mixed check.",
      patterns: [
        {
          id: "adj-recap",
          title: "The four forms, both families",
          titleRomaji: "present / past × positive / negative",
          subtitle: "い-adjectives conjugate themselves; な-adjectives lean on です.",
          pattern: [
            { text: "い: たかい", highlight: true },
            { text: "・", highlight: false },
            { text: "な: しずか", highlight: true },
          ],
          patternRomaji: "i: takai · na: shizuka",
          note: "い-adjectives (たかい): present たかい です · negative たかくない です · past たかかった です · past-neg たかくなかった です. な-adjectives (しずか): present しずか です · negative しずか じゃ ない です · past しずか でした · past-neg しずか じゃ なかった です. Before a noun, い-adjectives attach bare (たかい ビル) and な-adjectives take な (しずかな へや). Only one word breaks the い-pattern: いい → よくない／よかった／よくなかった.",
          tip: "The whole chapter in one sentence: い-adjectives change their own ending; な-adjectives (and nouns) hand the work to です／でした／じゃ ない. Never mix the two systems.",
          examples: [
            {
              jp: "この かばん は たかくなかった です。",
              romaji: "Kono kaban wa takakunakatta desu.",
              en: "This bag wasn't expensive.",
              breakdown: [
                { jp: "この かばん は", en: "this bag (topic)" },
                { jp: "たかくなかった", en: "wasn't expensive" },
                { jp: "です", en: "(polite)" },
              ],
            },
            {
              jp: "へや は きれい でした。",
              romaji: "Heya wa kirei deshita.",
              en: "The room was clean.",
              breakdown: [
                { jp: "へや は", en: "the room (topic)" },
                { jp: "きれい", en: "clean (な-adj)" },
                { jp: "でした", en: "was" },
              ],
            },
          ],
        },
      ],
      practice: [
        {
          question: "Which means “a big, new house”?",
          options: ["おおきい あたらしい いえ", "おおきいな あたらしいな いえ", "いえ おおきい あたらしい"],
          optionsRomaji: ["ookii atarashii ie", "ookii na atarashii na ie", "ie ookii atarashii"],
          correct: 0,
          explanation: "い-adjectives stack straight in front of the noun, no な: おおきい あたらしい いえ.",
          concept: "い-adj + noun",
        },
        {
          question: "Negative of きれい (a な-adjective):",
          options: ["きれくない です", "きれい じゃ ない です", "きれいくない です"],
          optionsRomaji: ["kirekunai desu", "kirei ja nai desu", "kireikunai desu"],
          correct: 1,
          explanation: "な-adjectives negate with じゃ ない です — even きれい, which only looks like an い-adjective.",
          concept: "な-adj negative",
        },
        {
          question: "Past tense: “The movie was interesting.” えいが は ＿＿ です。",
          jp: "えいが は ＿＿ です。",
          romaji: "Eiga wa ＿＿ desu.",
          options: ["おもしろい でした", "おもしろかった", "おもしろくない"],
          optionsRomaji: ["omoshiroi deshita", "omoshirokatta", "omoshirokunai"],
          correct: 1,
          explanation: "い-adjective past: おもしろい → おもしろかった です. です stays です.",
          concept: "〜かった です",
        },
        {
          question: "Which particle? なっとう ＿ きらい です (I dislike nattō).",
          jp: "なっとう ＿ きらい です。",
          romaji: "Nattou ＿ kirai desu.",
          options: ["を", "が", "に"],
          optionsRomaji: ["wo", "ga", "ni"],
          correct: 1,
          explanation: "すき／きらい take が for the thing liked/disliked: なっとう が きらい です.",
          concept: "が すき／きらい",
        },
        {
          question: "“The trip was good.” (mind the irregular)",
          options: ["りょこう は いい でした。", "りょこう は よかった です。", "りょこう は よくない です。"],
          optionsRomaji: ["Ryokou wa ii deshita.", "Ryokou wa yokatta desu.", "Ryokou wa yokunai desu."],
          correct: 1,
          explanation: "いい conjugates as よ-: past is よかった です. ✗いい でした is wrong.",
          concept: "いい → よかった",
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Apartment hunting",
      emoji: "🔑",
      intro:
        "Hana, Tanaka, and Yui tour an apartment for rent. Everything you learned this chapter, in one walk-through.",
      lines: [
        { speaker: "narrator", en: "The three of them step into an empty apartment." },
        { speaker: "tanaka", jp: "おおきい へや です ね。それに、あたらしい です。", romaji: "Ookii heya desu ne. Soreni, atarashii desu.", en: "It's a big room. And it's new." },
        { speaker: "yui", jp: "でも、ちょっと たかい です ね。", romaji: "Demo, chotto takai desu ne.", en: "But it's a bit expensive, isn't it." },
        { speaker: "hana", jp: "そう です か？わたし は たかくない と おもいます。", romaji: "Sou desu ka? Watashi wa takakunai to omoimasu.", en: "Really? I don't think it's expensive." },
        { speaker: "tanaka", jp: "まち は しずか です。べんりな みせ も あります。", romaji: "Machi wa shizuka desu. Benri na mise mo arimasu.", en: "The town is quiet. There's a convenient shop too." },
        { speaker: "yui", jp: "まえ の アパート は どう でした か？", romaji: "Mae no apaato wa dou deshita ka?", en: "How was the previous apartment?" },
        { speaker: "hana", jp: "ふるかった です。そして、きれい じゃ なかった です。", romaji: "Furukatta desu. Soshite, kirei ja nakatta desu.", en: "It was old. And it wasn't clean." },
        { speaker: "tanaka", jp: "じゃあ、ここ が いい です ね！", romaji: "Jaa, koko ga ii desu ne!", en: "Then this place is good, isn't it!" },
        { speaker: "hana", jp: "はい。この へや が すき です。", romaji: "Hai. Kono heya ga suki desu.", en: "Yes. I like this room." },
      ],
      comprehension: [
        {
          question: "What does Yui think about the price?",
          options: ["It's cheap", "It's a bit expensive", "It's free", "It's old"],
          correct: 1,
          explanation: "ちょっと たかい です ね — it's a bit expensive. (Hana disagrees: たかくない.)",
        },
        {
          question: "How was Hana's previous apartment?",
          options: ["New and clean", "Old, and not clean", "Big and cheap", "Quiet and convenient"],
          correct: 1,
          explanation: "ふるかった です。きれい じゃ なかった です — it was old and wasn't clean.",
        },
        {
          question: "Which adjective in the story is a な-adjective?",
          options: ["おおきい", "たかい", "きれい", "ふるい"],
          correct: 2,
          explanation: "きれい is な (きれい じゃ なかった です). The others — おおきい, たかい, ふるい — are い-adjectives.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "い-adjectives conjugate themselves: 〜い / 〜くない / 〜かった / 〜くなかった",
        "な-adjectives lean on です: です / じゃ ない / でした / じゃ なかった",
        "Before a noun: い-adj bare (おおきい いえ) · な-adj + な (しずかな へや)",
        "Likes/dislikes: が すき／きらい · Irregular: いい → よ-",
        "Kanji this chapter: 大 小 高 安",
      ],
      badge: { name: "Wordsmith", emoji: "🔑" },
    },
  ],
};
