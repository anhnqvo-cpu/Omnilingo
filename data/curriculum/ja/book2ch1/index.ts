import type { Chapter } from "@/data/curriculum/types";
import { book2Chapter1Lesson01 } from "./lesson01";

/**
 * Book 2 · Chapter 1 — Verbs in the polite ます-form, with the particles
 * を / に / で / へ. The first real grammar chapter of Book 2 and where the
 * first kanji are introduced (a couple per lesson, tied to that lesson's verbs).
 */
export const book2Chapter1: Chapter = {
  id: "ja-2-ch1",
  bookId: "ja-book2",
  number: 2,
  title: "Verbs in ます-form",
  subtitle: "Your first verbs",
  description:
    "Polite present/future verbs and the particles を, に, で, へ. Build everyday sentences about what you do — and write your first kanji.",
  cefr: "A2",
  jlpt: "N5",
  themeColor: "#f97316",
  icon: "play",
  lessons: [book2Chapter1Lesson01],
};
