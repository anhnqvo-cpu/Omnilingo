import type { Curriculum } from "@/data/curriculum/types";

import { chapter01 } from "./chapter01";
import { chapter02 } from "./chapter02";
import { chapter03 } from "./chapter03";
import { chapter04 } from "./chapter04";
import { chapter05 } from "./chapter05";
import { chapter06 } from "./chapter06";
import { book1ChapterStubs, STUB_BOOKS } from "./stubs";

export const japaneseCurriculum: Curriculum = {
  language: "ja",
  languageName: "Japanese",
  languageNameNative: "日本語",
  scripts: ["hiragana", "katakana", "kanji"],
  books: [
    {
      id: "ja-book1",
      number: 1,
      title: "Foundations",
      subtitle: "Read, write, and greet — A1 / JLPT N5 starter",
      description: "Six chapters that take you from zero to reading basic Japanese signs and exchanging real greetings. Free.",
      cefr: "A1",
      jlptRange: ["N5", "N5"],
      isFree: true,
      chapters: [chapter01, chapter02, chapter03, chapter04, chapter05, chapter06, ...book1ChapterStubs],
    },
    ...STUB_BOOKS,
  ],
};
