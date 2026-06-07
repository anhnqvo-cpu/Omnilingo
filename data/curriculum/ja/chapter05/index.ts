import type { Chapter } from "@/data/curriculum/types";

import { chapter05Lesson01 } from "./lesson01";
import { chapter05Lesson02 } from "./lesson02";
import { chapter05Lesson03 } from "./lesson03";
import { chapter05Lesson04 } from "./lesson04";
import { chapter05Lesson05 } from "./lesson05";
import { chapter05Lesson06 } from "./lesson06";

export const chapter05: Chapter = {
  id: "ja-ch5",
  bookId: "ja-book1",
  number: 5,
  title: "First Real Sentences",
  subtitle: "Introduce yourself, describe, ask",
  description: "No new script — now you build sentences. Introduce yourself (わたし は ___ です), link and point at things with の and この/その/あの, describe the world with い- and な-adjectives (and their negatives), say what you like, and ask anything with question words. By the end you can hold a basic self-introduction and conversation.",
  cefr: "A1",
  jlpt: "N5",
  themeColor: "#a855f7",
  icon: "message-circle",
  lessons: [
    chapter05Lesson01,
    chapter05Lesson02,
    chapter05Lesson03,
    chapter05Lesson04,
    chapter05Lesson05,
    chapter05Lesson06,
  ],
};
