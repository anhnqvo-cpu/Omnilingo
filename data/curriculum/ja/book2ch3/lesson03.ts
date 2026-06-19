import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 4 (Adjectives) · Lesson 3 — adjectives as adverbs. い-adjectives
 * → 〜く, な-adjectives → 〜に, describing HOW an action is done (はやく たべます,
 * きれいに かきます), with いい → よく. Recycles the ます-verbs from Book 2 Ch2.
 * No new kanji — the new ground is the adverb transformation itself.
 */
export const book2Chapter3Lesson03: Lesson = {
  id: "ja-2-ch3-3",
  chapterId: "ja-2-ch3",
  number: 3,
  title: "Quickly, neatly — adjectives as adverbs",
  titleNative: "〜く / 〜に",
  subtitle: "Describing how",
  summary:
    "Turn an adjective into an adverb to describe an action: い-adjectives become 〜く (はやく たべます, “eat quickly”) and な-adjectives become 〜に (きれいに かきます, “write neatly”), with the usual いい → よく.",
  xp: 65,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch3-2",
  steps: [
    {
      kind: "intro",
      title: "Not what — but how",
      subtitle:
        "So far adjectives describe things (はやい でんしゃ, “a fast train”). Now describe actions: はやく あるきます (“walk fast”). The same two families split the same way — い-adjectives take 〜く, な-adjectives take 〜に.",
      goals: [
        "Make い-adverbs: はやい → はやく (たべます)",
        "Make な-adverbs: きれい → きれいに (かきます)",
        "Use the irregular よく, and skill words じょうず／へた",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocabDrill",
      intro:
        "Speed, skill, and two verbs to pin them to. じょうず and へた are な-adjectives.",
      words: [
        { text: "はやい", romaji: "hayai", meaning: "fast / early", emoji: "⚡", example: { jp: "はやい でんしゃ。", romaji: "Hayai densha.", en: "A fast train." } },
        { text: "おそい", romaji: "osoi", meaning: "slow / late", emoji: "🐢", example: { jp: "おそい バス。", romaji: "Osoi basu.", en: "A slow bus." } },
        { text: "じょうず", romaji: "jouzu", meaning: "skillful / good at", emoji: "🎯", example: { jp: "にほんご が じょうず です。", romaji: "Nihongo ga jouzu desu.", en: "Good at Japanese." } },
        { text: "へた", romaji: "heta", meaning: "unskillful / bad at", emoji: "😅", example: { jp: "りょうり が へた です。", romaji: "Ryouri ga heta desu.", en: "Bad at cooking." } },
        { text: "はなします", romaji: "hanashimasu", meaning: "to speak", emoji: "💬", example: { jp: "にほんご を はなします。", romaji: "Nihongo wo hanashimasu.", en: "Speak Japanese." } },
        { text: "あるきます", romaji: "arukimasu", meaning: "to walk", emoji: "🚶", example: { jp: "えき まで あるきます。", romaji: "Eki made arukimasu.", en: "Walk to the station." } },
      ],
    },
    {
      kind: "grammar",
      intro: "Each family has one adverb ending — and they line up with the negatives you know.",
      patterns: [
        {
          id: "i-adv-ku",
          title: "い-adjective → 〜く (adverb)",
          titleRomaji: "~i → ~ku",
          subtitle: "Drop the い, add く, then the verb.",
          pattern: [
            { text: "はや", highlight: false },
            { text: "く", highlight: true },
            { text: "たべます", highlight: false },
          ],
          patternRomaji: "haya-ku  tabemasu",
          note: "To describe HOW an action happens, turn the い-adjective into an adverb: drop the final い and add く. はやい → はやく (“quickly”): はやく たべます = “eat quickly”. The adverb goes in front of the verb. This is the same く you already add for the negative (はやくない) and past (はやかった) — the stem never changes, only the tail. いい is irregular: いい → よく (“well”), as in よく わかります (“I understand well”).",
          tip: "English often uses the same word for adjective and adverb (“a fast car” / “drive fast”), but Japanese marks the difference: はやい でんしゃ (adjective) vs はやく はしります (adverb). Don't leave it as はやい before a verb.",
          examples: [
            {
              jp: "まいあさ はやく おきます。",
              romaji: "Maiasa hayaku okimasu.",
              en: "I get up early every morning.",
              breakdown: [
                { jp: "まいあさ", en: "every morning" },
                { jp: "はやく", en: "early (adverb)" },
                { jp: "おきます", en: "get up" },
              ],
            },
            {
              jp: "おおきく かきます。",
              romaji: "Ookiku kakimasu.",
              en: "I write big.",
              breakdown: [
                { jp: "おおきく", en: "big (adverb)" },
                { jp: "かきます", en: "write" },
              ],
            },
          ],
          apply: {
            prompt: "Say “eat quickly” (はやい + たべます).",
            options: ["はやい たべます", "はやく たべます", "はやに たべます"],
            optionsRomaji: ["hayai tabemasu", "hayaku tabemasu", "haya ni tabemasu"],
            correct: 1,
            explanation: "い-adjective → く before a verb: はやく たべます.",
          },
        },
        {
          id: "na-adv-ni",
          title: "な-adjective → 〜に (adverb)",
          titleRomaji: "na-adjective → ~ni",
          subtitle: "Add に, then the verb.",
          pattern: [
            { text: "きれい", highlight: false },
            { text: "に", highlight: true },
            { text: "かきます", highlight: false },
          ],
          patternRomaji: "kirei ni  kakimasu",
          note: "な-adjectives become adverbs with に: きれい → きれいに (“neatly / cleanly”): きれいに かきます = “write neatly”. しずか → しずかに (“quietly”), じょうず → じょうずに (“skillfully”). It mirrors the families perfectly — い-adjectives take く, な-adjectives take に.",
          tip: "Skill words じょうず／へた take が for the activity (にほんご が じょうず です, “good at Japanese”), and as adverbs describe the doing: じょうずに はなします (“speak skillfully”). Don't mark the skill with を.",
          examples: [
            {
              jp: "Yui は じょうずに にほんご を はなします。",
              romaji: "Yui wa jouzu ni nihongo wo hanashimasu.",
              en: "Yui speaks Japanese skillfully.",
              breakdown: [
                { jp: "Yui は", en: "Yui (topic)" },
                { jp: "じょうずに", en: "skillfully" },
                { jp: "にほんご を はなします", en: "speaks Japanese" },
              ],
            },
            {
              jp: "しずかに あるきます。",
              romaji: "Shizuka ni arukimasu.",
              en: "I walk quietly.",
              breakdown: [
                { jp: "しずかに", en: "quietly" },
                { jp: "あるきます", en: "walk" },
              ],
            },
          ],
          apply: {
            prompt: "Say “write neatly” (きれい + かきます).",
            options: ["きれい かきます", "きれく かきます", "きれいに かきます"],
            optionsRomaji: ["kirei kakimasu", "kireku kakimasu", "kirei ni kakimasu"],
            correct: 2,
            explanation: "な-adjective → に before a verb: きれいに かきます. (きれい is な, so never きれく.)",
          },
        },
      ],
      practice: [
        {
          question: "Make an adverb: はやい (fast) + はしります (run).",
          options: ["はやい はしります", "はやく はしります", "はやに はしります"],
          optionsRomaji: ["hayai hashirimasu", "hayaku hashirimasu", "haya ni hashirimasu"],
          correct: 1,
          explanation: "い-adjective → く: はやく はしります (run fast).",
          concept: "〜く",
        },
        {
          question: "Make an adverb: しずか (quiet) + はなします (speak).",
          options: ["しずかく はなします", "しずかに はなします", "しずかな はなします"],
          optionsRomaji: ["shizukaku hanashimasu", "shizuka ni hanashimasu", "shizuka na hanashimasu"],
          correct: 1,
          explanation: "な-adjective → に: しずかに はなします (speak quietly).",
          concept: "〜に",
        },
        {
          question: "The adverb form of いい (good) is…",
          options: ["いく", "よく", "いに"],
          optionsRomaji: ["iku", "yoku", "ii ni"],
          correct: 1,
          explanation: "いい is irregular everywhere it bends: adverb is よく (e.g. よく わかります, “understand well”).",
          concept: "いい → よく",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "はやく たべます", romaji: "hayaku tabemasu", en: "eat quickly" },
        { text: "きれいに かきます", romaji: "kirei ni kakimasu", en: "write neatly" },
        { text: "じょうずに にほんご を はなします", romaji: "jouzu ni nihongo wo hanashimasu", en: "speak Japanese skillfully" },
      ],
    },
    {
      kind: "microstory",
      setting: "Sunday morning at home",
      emoji: "🍳",
      intro: "Kenji is learning to cook. Yui gives pointers — all about how he's doing it.",
      lines: [
        { speaker: "narrator", en: "Kenji chops vegetables a little too fast." },
        { speaker: "yui", jp: "はやい です ね！でも、しずかに きって ください。", romaji: "Hayai desu ne! Demo, shizuka ni kitte kudasai.", en: "Fast! But chop quietly, please." },
        { speaker: "kenji", jp: "はい。ゆっくり、きれいに します。", romaji: "Hai. Yukkuri, kirei ni shimasu.", en: "Okay. I'll do it slowly and neatly." },
        { speaker: "yui", jp: "Kenji は りょうり が じょうず です ね。", romaji: "Kenji wa ryouri ga jouzu desu ne.", en: "You're good at cooking, Kenji." },
        { speaker: "kenji", jp: "いいえ、へた です。でも、たのしい です！", romaji: "Iie, heta desu. Demo, tanoshii desu!", en: "No, I'm bad at it. But it's fun!" },
        { speaker: "narrator", en: "The food turns out delicious anyway." },
        { speaker: "yui", jp: "わあ、おいしい！はやく たべましょう。", romaji: "Waa, oishii! Hayaku tabemashou.", en: "Wow, delicious! Let's eat quickly." },
      ],
      comprehension: [
        {
          question: "How does Yui ask Kenji to chop?",
          options: ["Quickly", "Quietly", "Slowly and neatly", "Skillfully"],
          correct: 2,
          explanation: "She says しずかに (quietly), and Kenji replies ゆっくり、きれいに します — slowly and neatly.",
        },
        {
          question: "What does Kenji say about his own cooking?",
          options: ["He's skillful (じょうず)", "He's bad at it (へた) but enjoys it", "He hates it", "It's expensive"],
          correct: 1,
          explanation: "へた です。でも、たのしい です — bad at it, but it's fun.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "い-adjective → 〜く adverb: はやい → はやく (たべます)",
        "な-adjective → 〜に adverb: きれい → きれいに (かきます)",
        "Irregular: いい → よく (よく わかります)",
        "Skill words じょうず／へた take が: にほんご が じょうず です",
      ],
      badge: { name: "How You Do It", emoji: "🎯" },
    },
  ],
};
