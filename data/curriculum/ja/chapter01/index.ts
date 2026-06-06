import type { Chapter } from "@/data/curriculum/types";

import { chapter01Lesson01 } from "./lesson01";
import { chapter01Lesson02 } from "./lesson02";
import { chapter01Lesson03 } from "./lesson03";
import { chapter01Lesson04 } from "./lesson04";
import { chapter01Lesson05 } from "./lesson05";

export const chapter01: Chapter = {
  id: "ja-ch1",
  bookId: "ja-book1",
  number: 1,
  title: "Foundations",
  subtitle: "Hiragana vowels, greetings, first sentences",
  description:
    "Your first chapter. Read the five vowels, write them by hand, exchange greetings, and form your very first Japanese sentence.",
  cefr: "A1",
  jlpt: "N5",
  themeColor: "#e85d75",
  icon: "edit-3",
  lessons: [
    chapter01Lesson01,
    chapter01Lesson02,
    chapter01Lesson03,
    chapter01Lesson04,
    chapter01Lesson05,
  ],
};
