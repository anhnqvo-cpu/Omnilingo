import type { Chapter } from "@/data/curriculum/types";

/**
 * Book 2 · opening chapter — "Type your first Japanese".
 * Teaches romaji→kana input (how a real Japanese keyboard/IME works) via a
 * guided, one-prompt-at-a-time typing lesson. No new grammar; it's a skill
 * (typing) that the rest of Book 2 — and the Practice → Typing mode — builds on.
 */
export const chapter2Typing: Chapter = {
  id: "ja-2-typing",
  bookId: "ja-book2",
  number: 1,
  title: "Type your first Japanese",
  subtitle: "Romaji → kana input",
  description: "Learn to type Japanese the way everyone actually does: type romaji and watch it turn into kana.",
  cefr: "A2",
  jlpt: "N5",
  themeColor: "#f97316",
  icon: "type",
  lessons: [
    {
      id: "ja-2-typing-1",
      chapterId: "ja-2-typing",
      number: 1,
      title: "Type your first Japanese",
      titleNative: "タイピング",
      subtitle: "Romaji → kana",
      summary: "Type romaji and watch it become kana — exactly how Japanese keyboards work. Start with single sounds, then whole words.",
      xp: 50,
      estimateMinutes: 8,
      // No unlockAfter: this opener is available any time as your intro to Book 2.
      steps: [
        {
          kind: "intro",
          title: "Type Japanese the real way",
          subtitle: "Japanese keyboards don't have kana keys — you type romaji and the computer turns it into kana. Let's do it.",
          goals: [
            "Type single kana: a → あ, ka → か",
            "Type whole words: sushi → すし",
            "Handle っ, ん and long vowels: gakkou → がっこう",
          ],
          estimateMinutes: 8,
        },
        // ── Learn the mechanic (kana shown, audio available) ──────────────
        {
          kind: "typing",
          showTarget: true,
          teach: "On a Japanese keyboard you type the sound in romaji and it converts to kana as you go. Type the letter “a” and watch it become あ.",
          prompt: "Type this kana:",
          answer: "あ",
          romaji: "a",
          meaning: "the sound “a”",
        },
        {
          kind: "typing",
          showTarget: true,
          prompt: "Now a consonant + vowel:",
          answer: "か",
          romaji: "ka",
          meaning: "the sound “ka”",
        },
        {
          kind: "typing",
          showTarget: true,
          teach: "A word is just its syllables, left to right. Type ね then こ.",
          prompt: "Type this word:",
          answer: "ねこ",
          romaji: "neko",
          meaning: "cat 🐱",
        },
        // ── Now test recall: only the meaning is shown — type it from memory,
        //    then hear it. (“Stuck? Show the romaji” is the safety net.) ─────
        {
          kind: "typing",
          teach: "From here it's from memory. A few sounds take two letters: し = shi, つ = tsu, ち = chi.",
          prompt: "What's the Japanese for…",
          answer: "すし",
          romaji: "sushi",
          meaning: "sushi 🍣",
        },
        {
          kind: "typing",
          prompt: "What's the Japanese for…",
          answer: "やま",
          romaji: "yama",
          meaning: "mountain ⛰️",
        },
        {
          kind: "typing",
          teach: "Tip: ん is just “n”.",
          prompt: "What's the Japanese for…",
          answer: "にほん",
          romaji: "nihon",
          meaning: "Japan 🇯🇵",
        },
        {
          kind: "typing",
          teach: "Tip: a doubled consonant makes a small っ — type the consonant twice (e.g. “kk”). Long vowels are spelled out (…ou → …おう).",
          prompt: "What's the Japanese for…",
          answer: "がっこう",
          romaji: "gakkou",
          meaning: "school 🏫",
        },
        {
          kind: "completion",
          recap: [
            "Type romaji → it becomes kana (あ, か, すし)",
            "し=shi, つ=tsu, ち=chi; ん=n",
            "Double consonant → っ (gakkou → がっこう)",
          ],
          badge: { name: "First Keystrokes", emoji: "⌨️" },
        },
      ],
    },
  ],
};
