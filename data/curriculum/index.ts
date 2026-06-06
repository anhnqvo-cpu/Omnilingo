import type { Curriculum, LanguageCode, Lesson, PlacementResult, PlacementTest } from "./types";
import { findChapter, findLesson } from "./types";
import { japaneseCurriculum } from "./ja";
import { jaPlacement } from "./ja/placement";

const REGISTRY: Partial<Record<LanguageCode, Curriculum>> = {
  ja: japaneseCurriculum,
};

export function getCurriculum(language: LanguageCode = "ja"): Curriculum {
  const cur = REGISTRY[language];
  if (!cur) {
    // Fallback to Japanese until other languages ship.
    return japaneseCurriculum;
  }
  return cur;
}

export function getLesson(language: LanguageCode, id: string): Lesson | undefined {
  return findLesson(getCurriculum(language), id);
}

export function getChapter(language: LanguageCode, id: string) {
  return findChapter(getCurriculum(language), id);
}

export type { Curriculum, Lesson, LanguageCode } from "./types";
export type { PlacementTest, PlacementQuestion, PlacementResult } from "./types";

// ─── Placement test ──────────────────────────────────────────────────────────

const PLACEMENT_REGISTRY: Partial<Record<LanguageCode, PlacementTest>> = {
  ja: jaPlacement,
};

export function getPlacementTest(language: LanguageCode = "ja"): PlacementTest | undefined {
  return PLACEMENT_REGISTRY[language];
}

/**
 * Score a placement test. `answers` maps questionId → selected option index.
 *
 * A chapter is "passed" only if every one of its questions was answered correctly.
 * The learner is placed at the FIRST chapter (in curriculum order) they did not
 * pass; everything before it is returned in `lessonIdsToComplete`. If they pass
 * every chapter, they've tested out of all current content (targetChapterId = null).
 */
export function scorePlacement(
  language: LanguageCode,
  answers: Record<string, number>
): PlacementResult {
  const curriculum = getCurriculum(language);
  const test = getPlacementTest(language);

  if (!test) {
    return {
      targetChapterId: null,
      lessonIdsToComplete: [],
      levelLabel: "Beginner",
      summary: "Starting you at the very beginning.",
      bySkill: [],
      correct: 0,
      total: 0,
    };
  }

  const perChapter = new Map<string, { correct: number; total: number }>();
  const perSkillMap = new Map<string, { correct: number; total: number }>();
  let correct = 0;

  for (const q of test.questions) {
    const right = answers[q.id] === q.correct;
    if (right) correct += 1;
    const c = perChapter.get(q.chapterId) ?? { correct: 0, total: 0 };
    c.total += 1;
    if (right) c.correct += 1;
    perChapter.set(q.chapterId, c);
    const s = perSkillMap.get(q.skill) ?? { correct: 0, total: 0 };
    s.total += 1;
    if (right) s.correct += 1;
    perSkillMap.set(q.skill, s);
  }

  // First chapter they did not fully pass.
  let targetChapterId: string | null = null;
  for (const chId of test.chapterOrder) {
    const c = perChapter.get(chId);
    const passed = !!c && c.total > 0 && c.correct === c.total;
    if (!passed) {
      targetChapterId = chId;
      break;
    }
  }

  // Collect every lesson before the target chapter.
  const lessonIdsToComplete: string[] = [];
  let levelLabel = "";
  let targetFound = false;
  outer: for (const book of curriculum.books) {
    for (const ch of book.chapters) {
      if (targetChapterId && ch.id === targetChapterId) {
        levelLabel = `Book ${book.number} · Chapter ${ch.number} — ${ch.title}`;
        targetFound = true;
        break outer;
      }
      for (const l of ch.lessons) lessonIdsToComplete.push(l.id);
    }
  }

  const bySkill = Array.from(perSkillMap.entries()).map(([skill, v]) => ({ skill, ...v }));
  const total = test.questions.length;

  let summary: string;
  if (!targetChapterId) {
    levelLabel = "Beyond current content";
    summary =
      "Impressive — you answered everything correctly. We've unlocked all available lessons; start at the newest one.";
  } else if (targetChapterId === test.chapterOrder[0]) {
    levelLabel = levelLabel || "Beginner";
    summary = "We'll start you right at the beginning so your foundations are rock solid.";
  } else if (targetFound) {
    summary = `Based on your answers we're starting you at ${levelLabel}. Everything before it is marked complete — revisit any lesson anytime.`;
  } else {
    // Target chapter exists in the test order but not in the curriculum (shouldn't happen).
    summary = "Starting you at the recommended lesson.";
    levelLabel = levelLabel || "Beginner";
  }

  return { targetChapterId, lessonIdsToComplete, levelLabel, summary, bySkill, correct, total };
}

// ─── Practice-tab helpers ────────────────────────────────────────────────────

export interface LearnedVocab {
  id: string;
  text: string;
  romaji: string;
  meaning: string;
  emoji?: string;
  example?: { jp: string; romaji: string; en: string };
  fromLessonId: string;
}

export interface LearnedCharacter {
  id: string;
  char: string;
  romaji: string;
  script: "hiragana" | "katakana" | "kanji" | "hangul" | "pinyin";
  fromLessonId: string;
}

export interface LearnedGrammar {
  id: string;
  title: string;
  titleRomaji: string;
  subtitle: string;
  fromLessonId: string;
}

export interface LearnedItems {
  vocab: LearnedVocab[];
  characters: LearnedCharacter[];
  /** Characters the user has practiced writing — subset of `characters`, plus any extras from writing steps. */
  writingChars: string[];
  grammar: LearnedGrammar[];
}

/**
 * Extract everything the learner has been taught from a set of completed lesson IDs.
 * Used by the Practice tab to scope flashcards/writing/quiz to known material.
 */
export function getLearnedItems(language: LanguageCode, completedLessonIds: string[]): LearnedItems {
  const curriculum = getCurriculum(language);
  const completedSet = new Set(completedLessonIds);
  const vocab: LearnedVocab[] = [];
  const characters: LearnedCharacter[] = [];
  const writingChars = new Set<string>();
  const grammar: LearnedGrammar[] = [];

  for (const book of curriculum.books) {
    for (const chapter of book.chapters) {
      for (const lesson of chapter.lessons) {
        if (!completedSet.has(lesson.id)) continue;
        for (const step of lesson.steps) {
          if (step.kind === "vocab" || step.kind === "vocabDrill") {
            for (const w of step.words) {
              vocab.push({
                id: `${lesson.id}-vocab-${w.text}`,
                text: w.text,
                romaji: w.romaji,
                meaning: w.meaning,
                emoji: w.emoji,
                example: w.example,
                fromLessonId: lesson.id,
              });
            }
          } else if (step.kind === "character") {
            characters.push({
              id: `${lesson.id}-char-${step.char}`,
              char: step.char,
              romaji: step.romaji,
              script: step.script,
              fromLessonId: lesson.id,
            });
            writingChars.add(step.char);
          } else if (step.kind === "writing") {
            writingChars.add(step.char);
          } else if (step.kind === "grammar") {
            for (const p of step.patterns) {
              grammar.push({
                id: `${lesson.id}-grammar-${p.id}`,
                title: p.title,
                titleRomaji: p.titleRomaji,
                subtitle: p.subtitle,
                fromLessonId: lesson.id,
              });
            }
          }
        }
      }
    }
  }

  return { vocab, characters, writingChars: Array.from(writingChars), grammar };
}
