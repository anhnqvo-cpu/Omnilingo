import type { Chapter } from "@/data/curriculum/types";
import { book2ReviewLesson01 } from "./lesson01";
import { book2ReviewLesson02 } from "./lesson02";
import { book2ReviewLesson03 } from "./lesson03";

/**
 * Book 2 · Checkpoint (Review) — a consolidation chapter placed at the current
 * end of real Book 2 content. No new grammar or kanji: it gathers everything from
 * Ch 2–4 (verbs & particles, existence & location, adjectives) into grammar maps,
 * applied mixed practice, and stories that recombine it all — the "summary after a
 * book" pause so the grammar stops piling up unconsolidated.
 *
 * Displayed as Chapter 5 (after Adjectives); the remaining stub chapters renumber
 * after it. When Book 2 is finished, this can grow into the full end-of-book review.
 */
export const book2Review: Chapter = {
  id: "ja-2-review",
  bookId: "ja-book2",
  number: 5,
  title: "Checkpoint — Book 2 review",
  subtitle: "Summarize & put it to use",
  description:
    "A breather to tie Book 2 together: the particles を・に・で・へ and ます-verbs, あります／います with position words, and the full adjective toolbox — recapped, drilled, and woven into stories. No new grammar; just consolidation and applied practice.",
  cefr: "A2",
  jlpt: "N5",
  themeColor: "#f59e0b",
  icon: "award",
  lessons: [book2ReviewLesson01, book2ReviewLesson02, book2ReviewLesson03],
};
