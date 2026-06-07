import type { Chapter } from "@/data/curriculum/types";

import { chapter06Lesson01 } from "./lesson01";
import { chapter06Lesson02 } from "./lesson02";
import { chapter06Lesson03 } from "./lesson03";
import { chapter06Lesson04 } from "./lesson04";
import { chapter06Lesson05 } from "./lesson05";

export const chapter06: Chapter = {
  id: "ja-ch6",
  bookId: "ja-book1",
  number: 6,
  title: "Numbers, Time, Money",
  subtitle: "Counters, dates, prices",
  description: "Count, tell time, and pay. Numbers 0–10,000 (with the kanji 一–万 for recognition), the all-purpose 〜つ and 〜人 counters, telling time with 〜じ and 〜分, and reading prices in 〜えん, months, and weekdays. Book 1 ends with the group settling the café bill — entirely in Japanese.",
  cefr: "A1",
  jlpt: "N5",
  themeColor: "#06b6d4",
  icon: "clock",
  lessons: [
    chapter06Lesson01,
    chapter06Lesson02,
    chapter06Lesson03,
    chapter06Lesson04,
    chapter06Lesson05,
  ],
};
