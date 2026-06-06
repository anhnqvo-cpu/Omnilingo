import type { Chapter } from "@/data/curriculum/types";

import { chapter03Lesson01 } from "./lesson01";
import { chapter03Lesson02 } from "./lesson02";
import { chapter03Lesson03 } from "./lesson03";
import { chapter03Lesson04 } from "./lesson04";
import { chapter03Lesson05 } from "./lesson05";

export const chapter03: Chapter = {
  id: "ja-ch3",
  bookId: "ja-book1",
  number: 3,
  title: "Hiragana Complete",
  subtitle: "m / y / r / w rows + ん + voicing + combos",
  description: "Finish hiragana. By the end you can read every hiragana word in Japanese — pure, voiced, and combined.",
  cefr: "A1",
  jlpt: "N5",
  themeColor: "#10b981",
  icon: "edit-3",
  lessons: [chapter03Lesson01, chapter03Lesson02, chapter03Lesson03, chapter03Lesson04, chapter03Lesson05],
};
