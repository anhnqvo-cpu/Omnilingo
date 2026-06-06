// Legacy shim. The Home and Progress tabs were written against the old flat
// lessons list. We now generate that list from the new curriculum so those
// screens keep working without a rewrite.
//
// New code should import from "@/data/curriculum" instead.

import { japaneseCurriculum } from "@/data/curriculum/ja";

export interface LegacyLesson {
  id: string;
  title: string;
  titleJapanese: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  duration: string;
  summary: string;
  xp: number;
}

export type Lesson = LegacyLesson;

function build(): LegacyLesson[] {
  const out: LegacyLesson[] = [];
  for (const book of japaneseCurriculum.books) {
    for (const chapter of book.chapters) {
      for (const lesson of chapter.lessons) {
        out.push({
          id: lesson.id,
          title: lesson.title,
          titleJapanese: lesson.titleNative ?? lesson.title,
          level: chapter.jlpt ?? "N5",
          duration: `~${lesson.estimateMinutes} min`,
          summary: lesson.summary,
          xp: lesson.xp,
        });
      }
    }
  }
  return out;
}

export const lessons: LegacyLesson[] = build();
