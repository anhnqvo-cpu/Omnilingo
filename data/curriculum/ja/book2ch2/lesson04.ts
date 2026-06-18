import type { Lesson } from "@/data/curriculum/types";

/**
 * Book 2 · Chapter 3 · Lesson 4 — the こ/そ/あ/ど place series (ここ・そこ・
 * あそこ・どこ) and the これ/それ/あれ things series, used to ask for and give
 * directions to real places. No new kanji — consolidates the existence pattern.
 */
export const book2Chapter2Lesson04: Lesson = {
  id: "ja-2-ch2-4",
  chapterId: "ja-2-ch2",
  number: 4,
  title: "Here, there, over there — どこ?",
  titleNative: "ここ・そこ・あそこ・どこ",
  subtitle: "Asking the way",
  summary:
    "Point to places with ここ／そこ／あそこ and ask どこ. Find the station, the restroom, the convenience store — and answer with the position words you already know.",
  xp: 60,
  estimateMinutes: 11,
  unlockAfter: "ja-2-ch2-3",
  steps: [
    {
      kind: "intro",
      title: "The こ・そ・あ・ど family",
      subtitle:
        "You met この／その／あの in Book 1. The place words follow the exact same pattern: ここ (here), そこ (there), あそこ (over there), どこ (where?). Now you can ask for — and give — simple directions.",
      goals: [
        "Point to places: ここ here / そこ there / あそこ over there",
        "Ask どこ ですか and answer with a place or position",
        "Talk about real spots: えき, トイレ, コンビニ, ぎんこう",
      ],
      estimateMinutes: 11,
    },
    {
      kind: "vocab",
      intro: "Places you'll look for in any town.",
      words: [
        { text: "えき", romaji: "eki", meaning: "(train) station", emoji: "🚉", example: { jp: "えき は どこ ですか？", romaji: "Eki wa doko desu ka?", en: "Where's the station?" } },
        { text: "トイレ", romaji: "toire", meaning: "restroom", emoji: "🚻", example: { jp: "トイレ は あそこ です。", romaji: "Toire wa asoko desu.", en: "The restroom is over there." } },
        { text: "コンビニ", romaji: "konbini", meaning: "convenience store", emoji: "🏪", example: { jp: "コンビニ は えき の まえ です。", romaji: "Konbini wa eki no mae desu.", en: "The convenience store is in front of the station." } },
        { text: "ぎんこう", romaji: "ginkou", meaning: "bank", emoji: "🏦", example: { jp: "ぎんこう は となり です。", romaji: "Ginkou wa tonari desu.", en: "The bank is next door." } },
        { text: "びょういん", romaji: "byouin", meaning: "hospital", emoji: "🏥", example: { jp: "びょういん は どこ ですか？", romaji: "Byouin wa doko desu ka?", en: "Where's the hospital?" } },
      ],
    },
    {
      kind: "grammar",
      intro: "Two small word families, then the question that uses them.",
      patterns: [
        {
          id: "koso-ado-place",
          title: "ここ・そこ・あそこ・どこ",
          titleRomaji: "koko / soko / asoko / doko",
          subtitle: "Here, there, over there, where.",
          pattern: [
            { text: "ここ", highlight: true },
            { text: "／そこ／あそこ／", highlight: false },
            { text: "どこ", highlight: true },
          ],
          patternRomaji: "koko / soko / asoko / doko",
          note: "Same こ・そ・あ・ど logic as この／その／あの: こ = near me, そ = near you, あ = away from both, ど = the question. For places: ここ (here, by me), そこ (there, by you), あそこ (over there), どこ (where?). These are nouns, so they slot straight into X は ___ です: トイレ は あそこ です = “the restroom is over there”.",
          tip: "Don't confuse the two series: ここ/そこ/あそこ/どこ are full place words (“here”), while この/その/あの/どの attach to a noun (“this ___”). One ends in こ and stands alone; the other needs a noun after it.",
          examples: [
            {
              jp: "トイレ は あそこ です。",
              romaji: "Toire wa asoko desu.",
              en: "The restroom is over there.",
              breakdown: [
                { jp: "トイレ は", en: "the restroom (topic)" },
                { jp: "あそこ", en: "over there" },
                { jp: "です", en: "is" },
              ],
            },
            {
              jp: "ぎんこう は ここ です。",
              romaji: "Ginkou wa koko desu.",
              en: "The bank is right here.",
              breakdown: [
                { jp: "ぎんこう は", en: "the bank (topic)" },
                { jp: "ここ", en: "here" },
                { jp: "です", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "Someone points across the street and says it's far from both of you. Which word?",
            options: ["ここ", "そこ", "あそこ"],
            optionsRomaji: ["koko", "soko", "asoko"],
            correct: 2,
            explanation: "あそこ = over there, away from both speakers. ここ is by me, そこ is by you.",
          },
        },
        {
          id: "doko-desu-ka",
          title: "X は どこ ですか",
          titleRomaji: "X wa doko desu ka",
          subtitle: "“Where is X?”",
          pattern: [
            { text: "X は", highlight: true },
            { text: "どこ", highlight: true },
            { text: "ですか", highlight: false },
          ],
          patternRomaji: "X wa  doko  desu ka",
          note: "The everyday way to ask where a place is: X は どこ ですか. えき は どこ ですか = “where's the station?”. Note this uses です, not あります — when you want to know which spot something is at (rather than emphasising that it exists), です is the natural, lighter choice. Answer with a place word or a position: あそこ です / えき の まえ です.",
          tip: "どこ ですか (where is it?) vs どこ に あります か (where does it exist?) — both are fine. Beginners get the most mileage from the です version; save the あります version for when existence itself is the point.",
          examples: [
            {
              jp: "えき は どこ ですか？",
              romaji: "Eki wa doko desu ka?",
              en: "Where's the station?",
              breakdown: [
                { jp: "えき は", en: "the station (topic)" },
                { jp: "どこ", en: "where" },
                { jp: "ですか", en: "is it?" },
              ],
            },
            {
              jp: "コンビニ の となり です。",
              romaji: "Konbini no tonari desu.",
              en: "It's next to the convenience store.",
              breakdown: [
                { jp: "コンビニ の となり", en: "next to the convenience store" },
                { jp: "です", en: "it is" },
              ],
            },
          ],
          apply: {
            prompt: "Ask “Where's the convenience store?”",
            options: ["コンビニ は どこ ですか。", "コンビニ は なに ですか。", "コンビニ を どこ ですか。"],
            optionsRomaji: ["Konbini wa doko desu ka.", "Konbini wa nani desu ka.", "Konbini wo doko desu ka."],
            correct: 0,
            explanation: "X は どこ ですか. なに = what (wrong question word); を can't mark the topic.",
          },
        },
        {
          id: "kore-sore-are",
          title: "これ・それ・あれ・どれ",
          titleRomaji: "kore / sore / are / dore",
          subtitle: "This one, that one, which one.",
          pattern: [
            { text: "これ", highlight: true },
            { text: "／それ／あれ／", highlight: false },
            { text: "どれ", highlight: true },
          ],
          patternRomaji: "kore / sore / are / dore",
          note: "The same family for things you can point at: これ (this one, by me), それ (that one, by you), あれ (that one over there), どれ (which one?). They stand alone as the subject: これ は ほん です = “this is a book”. Note the ‑れ ending mirrors the ‑こ place words and the ‑の noun-modifiers — one tidy grid.",
          tip: "これ は… (“this is…”) stands alone; この ほん は… (“this book is…”) needs a noun. -れ = a thing on its own; -の = attached to a noun.",
          examples: [
            {
              jp: "これ は なん ですか？",
              romaji: "Kore wa nan desu ka?",
              en: "What is this?",
              breakdown: [
                { jp: "これ は", en: "this (topic)" },
                { jp: "なん", en: "what" },
                { jp: "ですか", en: "is it?" },
              ],
            },
            {
              jp: "それ は わたし の かばん です。",
              romaji: "Sore wa watashi no kaban desu.",
              en: "That's my bag.",
              breakdown: [
                { jp: "それ は", en: "that (topic)" },
                { jp: "わたし の かばん", en: "my bag" },
                { jp: "です", en: "is" },
              ],
            },
          ],
          apply: {
            prompt: "You hold up an object and ask the other person “what is this?” Which word for “this”?",
            options: ["これ", "それ", "あれ"],
            optionsRomaji: ["kore", "sore", "are"],
            correct: 0,
            explanation: "これ = this one, near the speaker. それ is near the listener; あれ is far from both.",
          },
        },
      ],
      practice: [
        {
          question: "“Over there” (far from both of us) is…",
          options: ["ここ", "そこ", "あそこ"],
          optionsRomaji: ["koko", "soko", "asoko"],
          correct: 2,
          explanation: "あそこ. ここ = here (by me), そこ = there (by you).",
          concept: "ここ／そこ／あそこ",
        },
        {
          question: "Ask where the hospital is.",
          options: ["びょういん は どこ ですか。", "びょういん は どれ ですか。", "びょういん に どこ あります。"],
          optionsRomaji: ["Byouin wa doko desu ka.", "Byouin wa dore desu ka.", "Byouin ni doko arimasu."],
          correct: 0,
          explanation: "X は どこ ですか asks where a place is. どれ = which one (for choosing among things).",
          concept: "どこ ですか",
        },
        {
          question: "Pointing at a thing right next to you, you'd call it…",
          options: ["これ", "それ", "あれ"],
          optionsRomaji: ["kore", "sore", "are"],
          correct: 0,
          explanation: "これ = this one (by the speaker).",
          concept: "これ／それ／あれ",
        },
      ],
    },
    {
      kind: "pronunciation",
      prompts: [
        { text: "えき は どこ ですか", romaji: "eki wa doko desu ka", en: "where's the station?" },
        { text: "トイレ は あそこ です", romaji: "toire wa asoko desu", en: "the restroom is over there" },
        { text: "コンビニ は えき の まえ です", romaji: "konbini wa eki no mae desu", en: "the convenience store is in front of the station" },
      ],
    },
    {
      kind: "microstory",
      setting: "Lost near the station",
      emoji: "🗺️",
      intro: "Kenji is new to the neighborhood and stops Yui to ask for directions.",
      lines: [
        { speaker: "kenji", jp: "すみません、えき は どこ ですか？", romaji: "Sumimasen, eki wa doko desu ka?", en: "Excuse me, where's the station?" },
        { speaker: "yui", jp: "あそこ です。コンビニ の となり です。", romaji: "Asoko desu. Konbini no tonari desu.", en: "Over there. It's next to the convenience store." },
        { speaker: "kenji", jp: "トイレ も ありますか？", romaji: "Toire mo arimasu ka?", en: "Is there a restroom too?" },
        { speaker: "yui", jp: "はい、えき の 中 に あります。", romaji: "Hai, eki no naka ni arimasu.", en: "Yes, inside the station." },
        { speaker: "kenji", jp: "ありがとう ございます！", romaji: "Arigatou gozaimasu!", en: "Thank you very much!" },
      ],
      comprehension: [
        {
          question: "Where is the station?",
          options: ["Behind the bank", "Next to the convenience store", "Inside the hospital", "Far away"],
          correct: 1,
          explanation: "あそこ です。コンビニ の となり です — over there, next to the convenience store.",
        },
        {
          question: "Where's the restroom?",
          options: ["In front of the station", "Inside the station", "Next to the bank", "There isn't one"],
          correct: 1,
          explanation: "えき の 中 に あります — inside the station.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "Place words: ここ here · そこ there · あそこ over there · どこ where?",
        "Thing words: これ・それ・あれ・どれ (this/that one, which one)",
        "X は どこ ですか — the everyday “where is X?”",
        "Answer with a place word or position: あそこ です / えき の まえ です",
      ],
      badge: { name: "Way-Finder", emoji: "🗺️" },
    },
  ],
};
