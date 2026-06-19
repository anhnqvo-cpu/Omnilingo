import type { Chapter } from "@/data/curriculum/types";
import { book2Chapter3Lesson01 } from "./lesson01";
import { book2Chapter3Lesson02 } from "./lesson02";
import { book2Chapter3Lesson03 } from "./lesson03";
import { book2Chapter3Lesson04 } from "./lesson04";
import { book2Chapter3Lesson05 } from "./lesson05";

/**
 * Book 2 · Chapter 4 (displayed) — Adjectives, level two. Builds on the
 * present-tense adjectives from Book 1 Ch5 with four new tools: connecting
 * (〜くて／〜で), past tense (〜かった／でした), adverbs (〜く／〜に), and comparison
 * (より／のほうが／いちばん). New kanji: 大 小 高 安 (one or two per lesson, in context).
 *
 * Internal id is ja-2-ch3 (the third real content chapter); it shows as
 * Chapter 4 because the typing primer is Ch 1, Verbs is Ch 2, Existence is Ch 3.
 */
export const book2Chapter3: Chapter = {
  id: "ja-2-ch3",
  bookId: "ja-book2",
  number: 4,
  title: "Adjectives",
  subtitle: "Connect, past, adverbs, compare",
  description:
    "Take adjectives further: join two at once (おおきくて あたらしい), talk about the past (たのしかった です), describe actions (はやく たべます), and compare things (でんしゃ より はやい, いちばん すき). Write 大 小 高 安.",
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
