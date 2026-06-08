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
        {
          kind: "typing",
          teach: "On a Japanese keyboard you type the sound in romaji and it converts to kana as you go. Type the letter “a” and watch it become あ.",
          prompt: "Type the vowel:",
          answer: "あ",
          romaji: "a",
          meaning: "the sound “a”",
        },
        {
          kind: "typing",
          prompt: "Now a consonant + vowel:",
          answer: "か",
          romaji: "ka",
          meaning: "the sound “ka”",
        },
        {
          kind: "typing",
          prompt: "Type the whole word:",
          answer: "すし",
          romaji: "sushi",
          meaning: "sushi 🍣",
        },
        {
          kind: "typing",
          prompt: "Type the word for “cat”:",
          answer: "ねこ",
          romaji: "neko",
          meaning: "cat 🐱",
        },
        {
          kind: "typing",
          teach: "Some sounds need two letters: し is “shi”, つ is “tsu”, ち is “chi”. Type “yama”.",
          prompt: "Type the word for “mountain”:",
          answer: "やま",
          romaji: "yama",
          meaning: "mountain ⛰️",
        },
        {
          kind: "typing",
          teach: "ん is just “n”. Type “nihon”.",
          prompt: "Type the word for “Japan”:",
          answer: "にほん",
          romaji: "nihon",
          meaning: "Japan 🇯🇵",
        },
        {
          kind: "typing",
          teach: "A small っ comes from a doubled consonant: type “kk” for っk. And a long vowel is just typed out: “kou” → こう. Try “gakkou”.",
          prompt: "Type the word for “school”:",
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
