import type { Lesson } from "@/data/curriculum/types";

/**
 * Chapter 4 · Lesson 5 — Katakana finale: ワ ヲ ン + voicing marks (゛゜) + small kana.
 * Completes katakana. By the end the learner can read every Japanese script except kanji.
 * Chapter-4 capstone brings the full cast to the café.
 */
export const chapter04Lesson05: Lesson = {
  id: "ja-4-5",
  chapterId: "ja-ch4",
  number: 5,
  title: "Katakana: ワ, ヲ, ン + voicing marks",
  titleNative: "ワ ヲ ン ゛゜",
  subtitle: "Finishing katakana + chapter capstone",
  summary: "The last three katakana, plus the voicing marks (゛゜) and small kana that complete the script. After this you can read ラーメン, テレビ, ピザ — and every Japanese script except kanji.",
  xp: 70,
  estimateMinutes: 13,
  unlockAfter: "ja-4-4",
  steps: [
    {
      kind: "intro",
      title: "The last of katakana",
      subtitle: "Three final kana — ワ, ヲ, ン — plus the dakuten ゛ and handakuten ゜ marks (exactly like hiragana) and the small kana. Then you've got the whole script.",
      goals: [
        "Recognise ワ, ヲ, ン (and tell ン from ソ)",
        "Read voiced katakana: ガ, ザ, ダ, バ, パ",
        "Read full loanwords: ラーメン, テレビ, ピザ, ジュース",
      ],
      estimateMinutes: 13,
    },
    {
      kind: "sounds",
      intro: "ン is the only standalone consonant — a soft 'n'. Watch it against ソ (so). The voicing marks work just like hiragana: ゛ voices a kana, ゜ makes the p-sounds.",
      sounds: [
        { text: "ワ", romaji: "wa", phonetic: "'wah'.", mnemonic: "An open box with a tail — same 'wa' as わ." },
        { text: "ヲ", romaji: "wo", phonetic: "'oh' — the particle を, rarely written in katakana.", mnemonic: "You'll almost never need to write it." },
        { text: "ン", romaji: "n", phonetic: "'n' — a soft nasal ending.", mnemonic: "A short stroke sweeping UP from below (ソ sweeps DOWN from the top)." },
        { text: "ガ", romaji: "ga", phonetic: "カ + ゛ = 'ga'.", mnemonic: "Two dots voice the k-row into g." },
        { text: "ザ", romaji: "za", phonetic: "サ + ゛ = 'za'.", mnemonic: "s-row + ゛ = z." },
        { text: "ダ", romaji: "da", phonetic: "タ + ゛ = 'da'.", mnemonic: "t-row + ゛ = d." },
        { text: "バ", romaji: "ba", phonetic: "ハ + ゛ = 'ba'.", mnemonic: "h-row + ゛ = b." },
        { text: "パ", romaji: "pa", phonetic: "ハ + ゜ = 'pa'.", mnemonic: "h-row + the little circle ゜ = p." },
      ],
    },
    { kind: "character", script: "katakana", char: "ワ", romaji: "wa", phonetic: "'wah'.", mnemonic: "An open box with a tail.", words: [{ jp: "ワイン", meaning: "wine", romaji: "wain", emoji: "🍷", hint: "ワ + イ + ン." }] },
    { kind: "writing", char: "ワ", script: "katakana" },
    { kind: "character", script: "katakana", char: "ヲ", romaji: "wo", phonetic: "'oh' — the rare particle.", mnemonic: "The katakana for を; you'll basically only see it on old signs.", words: [{ jp: "ヲ", meaning: "particle 'wo' (rare)", romaji: "wo", emoji: "📜", hint: "Recognise it; you won't need to write it often." }] },
    { kind: "writing", char: "ヲ", script: "katakana" },
    { kind: "character", script: "katakana", char: "ン", romaji: "n", phonetic: "soft 'n'.", mnemonic: "Short stroke sweeping UP — not ソ (which sweeps down).", words: [{ jp: "メロン", meaning: "melon", romaji: "meron", emoji: "🍈", hint: "メ + ロ + ン." }] },
    { kind: "writing", char: "ン", script: "katakana" },
    {
      kind: "vocabDrill",
      intro: "Full loanwords — every sound now in reach, voicing marks and all.",
      words: [
        { text: "ラーメン", romaji: "raamen", meaning: "ramen", emoji: "🍜", example: { jp: "ラーメン を ください。", romaji: "Raamen wo kudasai.", en: "Ramen, please." } },
        { text: "テレビ", romaji: "terebi", meaning: "TV", emoji: "📺", example: { jp: "テレビ を みる。", romaji: "Terebi wo miru.", en: "Watch TV." } },
        { text: "パン", romaji: "pan", meaning: "bread", emoji: "🍞", example: { jp: "パン が ほしい。", romaji: "Pan ga hoshii.", en: "I want bread." } },
        { text: "ピザ", romaji: "piza", meaning: "pizza", emoji: "🍕", example: { jp: "ピザ を ください。", romaji: "Piza wo kudasai.", en: "Pizza, please." } },
        { text: "ゲーム", romaji: "geemu", meaning: "game", emoji: "🎮", example: { jp: "ゲーム が すき。", romaji: "Geemu ga suki.", en: "I like games." } },
        { text: "ジュース", romaji: "juusu", meaning: "juice", emoji: "🧃", example: { jp: "ジュース を ください。", romaji: "Juusu wo kudasai.", en: "Juice, please." } },
      ],
    },
    {
      kind: "grammar",
      intro: "One concept to finish the script — then a mixed review of everything from Chapter 4.",
      patterns: [
        {
          id: "katakana-voicing",
          title: "Voicing marks: ゛ and ゜",
          titleRomaji: "dakuten / handakuten",
          subtitle: "Same marks as hiragana.",
          pattern: [
            { text: "k · s · t · h", highlight: true },
            { text: "+ ゛", highlight: false },
            { text: "→ g · z · d · b", highlight: true },
          ],
          patternRomaji: "+ ゛ voices it · + ゜ on h-row → p",
          note: "Just like hiragana, two small dots (゛, dakuten) voice a kana: カ→ガ (ka→ga), サ→ザ, タ→ダ, ハ→バ. A small circle (゜, handakuten) on the h-row makes p-sounds: ハ→パ, ヒ→ピ, フ→プ. The small kana ャ ュ ョ and the small ッ (a held pause) also work exactly as in hiragana.",
          tip: "ー (long vowel) and small kana let katakana spell almost any foreign sound — that's why menus and brand names are full of it.",
          examples: [
            {
              jp: "テレビ",
              romaji: "terebi",
              en: "TV (te-re-bi)",
              breakdown: [
                { jp: "テ", en: "te" },
                { jp: "レ", en: "re" },
                { jp: "ビ", en: "bi (ヒ + ゛)" },
              ],
            },
            {
              jp: "ピザ",
              romaji: "piza",
              en: "pizza (pi-za)",
              breakdown: [
                { jp: "ピ", en: "pi (ヒ + ゜)" },
                { jp: "ザ", en: "za (サ + ゛)" },
              ],
            },
          ],
          apply: {
            prompt: "Which katakana reads 'ga'?",
            options: ["カ", "ガ", "ナ", "サ"],
            optionsRomaji: ["ka", "ga", "na", "sa"],
            correct: 1,
            explanation: "カ + the dakuten ゛ = ガ (ga).",
          },
        },
      ],
      practice: [
        {
          question: "You're at the café — order ramen politely.",
          options: ["ラーメン が ほしい か。", "ラーメン を ください。", "ラーメン です か。", "ラーメン は ください。"],
          optionsRomaji: ["Raamen ga hoshii ka.", "Raamen wo kudasai.", "Raamen desu ka.", "Raamen wa kudasai."],
          correct: 1,
          explanation: "Noun を ください is the polite way to order: 'Ramen, please.'",
          concept: "Noun を ください",
        },
        {
          question: "Ask 'Is that coffee?'",
          jp: "それ は コーヒー ＿。",
          romaji: "Sore wa koohii __.",
          options: ["です", "ですか", "ください", "ほしい"],
          optionsRomaji: ["desu", "desu ka", "kudasai", "hoshii"],
          correct: 1,
          explanation: "か at the end makes it a yes/no question.",
          concept: "Noun ですか",
        },
        {
          question: "Say 'I want a notebook.'",
          options: ["ノート を ください。", "ノート が ほしい。", "ノート ですか。", "ノート は です。"],
          optionsRomaji: ["Nooto wo kudasai.", "Nooto ga hoshii.", "Nooto desu ka.", "Nooto wa desu."],
          correct: 1,
          explanation: "Noun が ほしい states what you want. (を ください would be ordering it from someone.)",
          concept: "Noun が ほしい",
        },
        {
          question: "Read this word: ピザ",
          options: ["biza", "piza", "hiza", "pisa"],
          correct: 1,
          explanation: "ピ = ヒ + ゜ (pi), ザ = サ + ゛ (za) → piza.",
          concept: "Voicing marks",
        },
        {
          question: "Say 'This is ramen' politely.",
          options: ["これ は ラーメン。", "これ は ラーメン です。", "これ を ラーメン です。", "これ は ラーメン か。"],
          optionsRomaji: ["Kore wa raamen.", "Kore wa raamen desu.", "Kore wo raamen desu.", "Kore wa raamen ka."],
          correct: 1,
          explanation: "は marks the topic, です makes it a polite statement.",
          concept: "Noun です",
        },
      ],
    },
    {
      kind: "matching",
      intro: "Capstone match — loanwords from across Chapter 4.",
      rounds: [
        {
          title: "Katakana loanwords",
          pairs: [
            { id: "keeki", left: "ケーキ", romaji: "keeki", right: "cake" },
            { id: "koohii", left: "コーヒー", romaji: "koohii", right: "coffee" },
            { id: "takushii", left: "タクシー", romaji: "takushii", right: "taxi" },
            { id: "hoteru", left: "ホテル", romaji: "hoteru", right: "hotel" },
            { id: "raamen", left: "ラーメン", romaji: "raamen", right: "ramen" },
            { id: "terebi", left: "テレビ", romaji: "terebi", right: "TV" },
          ],
        },
      ],
    },
    {
      kind: "microstory",
      setting: "Friday night at the café — Chapter 4 capstone",
      emoji: "🌏",
      intro: "The whole group meets up. Everyone orders — all in katakana.",
      lines: [
        { speaker: "narrator", en: "Friday evening. Hana, Kenji, and Yui crowd the counter. Tanaka has the notepad." },
        { speaker: "tanaka", jp: "ごちゅうもん は？", romaji: "Gochuumon wa?", en: "What'll it be?" },
        { speaker: "hana", jp: "ラーメン を ください。", romaji: "Raamen wo kudasai.", en: "Ramen, please." },
        { speaker: "kenji", jp: "ピザ が ほしい です。", romaji: "Piza ga hoshii desu.", en: "I'd like pizza." },
        { speaker: "yui", jp: "それ は ジュース ですか。", romaji: "Sore wa juusu desu ka.", en: "Is that juice?" },
        { speaker: "tanaka", jp: "はい。 オレンジ ジュース です。", romaji: "Hai. Orenji juusu desu.", en: "Yes. Orange juice." },
        { speaker: "yui", jp: "ジュース を ください！", romaji: "Juusu wo kudasai!", en: "Juice, please!" },
        { speaker: "narrator", en: "Three orders, three scripts read with ease. Hana smiles — she can read the whole menu now." },
      ],
      comprehension: [
        {
          question: "What did Kenji want?",
          options: ["Ramen (ラーメン)", "Pizza (ピザ)", "Juice (ジュース)", "Coffee (コーヒー)"],
          correct: 1,
          explanation: "ピザ が ほしい です — 'I'd like pizza.'",
        },
        {
          question: "How did Yui order the juice?",
          options: ["ジュース が ほしい か", "ジュース を ください", "ジュース です", "ジュース は どこ"],
          correct: 1,
          explanation: "ジュース を ください — the polite way to order it.",
        },
      ],
    },
    {
      kind: "completion",
      recap: [
        "All 46 katakana + voicing marks + small kana",
        "You can now read every Japanese script except kanji",
        "Café survival grammar: です・ですか・が ほしい・を ください",
        "Dozens of real loanwords: コーヒー, ラーメン, テレビ, ピザ…",
      ],
      badge: { name: "Chapter 4 Complete", emoji: "🌏" },
    },
  ],
};
