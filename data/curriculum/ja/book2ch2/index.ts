import type { Chapter } from "@/data/curriculum/types";
import { book2Chapter2Lesson01 } from "./lesson01";
import { book2Chapter2Lesson02 } from "./lesson02";
import { book2Chapter2Lesson03 } from "./lesson03";
import { book2Chapter2Lesson04 } from "./lesson04";
import { book2Chapter2Lesson05 } from "./lesson05";

/**
 * Book 2 · Chapter 3 (displayed) — Existence & location. あります / います, the
 * particles に / が / の, the full set of position nouns, and ここ／そこ／あそこ／
 * どこ. New kanji: 上 下 人 中 (one or two per lesson, in context).
 *
 * Internal id is ja-2-ch2 (the second real content chapter); it shows as
 * Chapter 3 because the typing primer is Chapter 1 and Verbs is Chapter 2.
 */
export const book2Chapter2: Chapter = {
  id: "ja-2-ch2",
  bookId: "ja-book2",
  number: 3,
  title: "Existence & location",
  subtitle: "What's there, and where",
  description:
    "Say what exists and where it is: あります for things, います for people and animals, position words (上・下・中・まえ・うしろ・となり), and asking どこ. Write 上 下 人 中.",
  cefr: "A2",
  jlpt: "N5",
  themeColor: "#84cc16",
  icon: "compass",
  lessons: [
    book2Chapter2Lesson01,
    book2Chapter2Lesson02,
    book2Chapter2Lesson03,
    book2Chapter2Lesson04,
    book2Chapter2Lesson05,
  ],
};
