import type { Chapter } from "@/data/curriculum/types";
import { book2Chapter4Lesson01 } from "./lesson01";
import { book2Chapter4Lesson02 } from "./lesson02";
import { book2Chapter4Lesson03 } from "./lesson03";
import { book2Chapter4Lesson04 } from "./lesson04";
import { book2Chapter4Lesson05 } from "./lesson05";

/**
 * Book 2 · Chapter 6 (displayed) — Te-form. The most useful verb form: its
 * conjugation across all groups (Group 2 る→て, the godan endings, irregulars),
 * then its three core uses — 〜てください (requests), 〜ています (ongoing actions),
 * and 〜て／〜てから (joining/sequencing). New kanji: 聞 話 読 書 (all verbs that
 * drill the te-form rules).
 *
 * Internal id is ja-2-ch4 (the fourth real content chapter); it shows as
 * Chapter 6 — after the typing primer (1), Verbs (2), Existence (3),
 * Adjectives (4), and the Checkpoint review (5).
 */
export const book2Chapter4: Chapter = {
  id: "ja-2-ch4",
  bookId: "ja-book2",
  number: 6,
  title: "Te-form",
  subtitle: "Requests, ongoing actions, sequences",
  description:
    "The Swiss-Army-knife verb form. Build the て-form for every verb group, then use it three ways: 〜てください (please do…), 〜ています (-ing / right now), and 〜て／〜てから (joining actions). Write 聞 話 読 書.",
  cefr: "A2",
  jlpt: "N5",
  themeColor: "#ef4444",
  icon: "link",
  lessons: [
    book2Chapter4Lesson01,
    book2Chapter4Lesson02,
    book2Chapter4Lesson03,
    book2Chapter4Lesson04,
    book2Chapter4Lesson05,
  ],
};
