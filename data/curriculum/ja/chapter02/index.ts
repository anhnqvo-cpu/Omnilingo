import type { Chapter } from "@/data/curriculum/types";

import { chapter02Lesson01 } from "./lesson01";
import { chapter02Lesson02 } from "./lesson02";
import { chapter02Lesson03 } from "./lesson03";
import { chapter02Lesson04 } from "./lesson04";
import { chapter02Lesson05 } from "./lesson05";

export const chapter02: Chapter = {
  id: "ja-ch2",
  bookId: "ja-book1",
  number: 2,
  title: "Hiragana Continued",
  subtitle: "k / s / t / n / h rows + first grammar",
  description: "Add 25 more hiragana — written stroke by stroke — and your first real grammar: を, も, い-adjectives, これ・それ・あれ, and going places with に・へ. By the end you can read every 'pure' kana except the m, y, r, and w rows, and build short sentences of your own.",
  cefr: "A1",
  jlpt: "N5",
  themeColor: "#f59e0b",
  icon: "edit-3",
  lessons: [chapter02Lesson01, chapter02Lesson02, chapter02Lesson03, chapter02Lesson04, chapter02Lesson05],
};
