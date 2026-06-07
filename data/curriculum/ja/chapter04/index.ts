import type { Chapter } from "@/data/curriculum/types";

import { chapter04Lesson01 } from "./lesson01";
import { chapter04Lesson02 } from "./lesson02";
import { chapter04Lesson03 } from "./lesson03";
import { chapter04Lesson04 } from "./lesson04";
import { chapter04Lesson05 } from "./lesson05";

export const chapter04: Chapter = {
  id: "ja-ch4",
  bookId: "ja-book1",
  number: 4,
  title: "Katakana",
  subtitle: "The second script — for loanwords and ordering",
  description: "Learn all 46 katakana, written stroke by stroke, plus voicing marks and small kana. Katakana is the script for foreign words, so every lesson reads real loanwords — コーヒー, ラーメン, テレビ — and builds café-survival grammar: です, ですか, ～が ほしい, ～を ください. By the end you can read every Japanese script except kanji, and order anything.",
  cefr: "A1",
  jlpt: "N5",
  themeColor: "#3b82f6",
  icon: "type",
  lessons: [chapter04Lesson01, chapter04Lesson02, chapter04Lesson03, chapter04Lesson04, chapter04Lesson05],
};
