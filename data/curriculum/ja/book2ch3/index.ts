import type { Chapter } from "@/data/curriculum/types";
import { book2Chapter3Lesson01 } from "./lesson01";
import { book2Chapter3Lesson02 } from "./lesson02";
import { book2Chapter3Lesson03 } from "./lesson03";
import { book2Chapter3Lesson04 } from "./lesson04";
import { book2Chapter3Lesson05 } from "./lesson05";

/**
 * Book 2 · Chapter 4 (displayed) — Adjectives. The two adjective families (い and
 * な), present + past + negative, and likes/dislikes (すき／きらい). New kanji:
 * 大 小 高 安 (one or two per lesson, in context).
 *
 * Internal id is ja-2-ch3 (the third real content chapter); it shows as
 * Chapter 4 because the typing primer is Ch 1, Verbs is Ch 2, Existence is Ch 3.
 */
export const book2Chapter3: Chapter = {
  id: "ja-2-ch3",
  bookId: "ja-book2",
  number: 4,
  title: "Adjectives",
  subtitle: "い-adjectives + な-adjectives",
  description:
    "Describe things and share opinions: い-adjectives (おおきい, たかい) and な-adjectives (しずか, きれい), present and past, positive and negative, plus likes and dislikes (すき／きらい). Write 大 小 高 安.",
  cefr: "A2",
  jlpt: "N5",
  themeColor: "#ec4899",
  icon: "heart",
  lessons: [
    book2Chapter3Lesson01,
    book2Chapter3Lesson02,
    book2Chapter3Lesson03,
    book2Chapter3Lesson04,
    book2Chapter3Lesson05,
  ],
};
