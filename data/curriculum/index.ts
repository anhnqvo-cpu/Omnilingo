import type { Book, Chapter, Curriculum, LanguageCode, Lesson, PlacementResult, PlacementTest } from "./types";
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

  // Reward demonstrated mastery: place the learner just past the HIGHEST chapter
  // they passed (both questions correct). This way an isolated early slip doesn't
  // sink someone who clearly knows later material — we trust the furthest proof.
  let highestPassedIdx = -1;
  test.chapterOrder.forEach((chId, i) => {
    const c = perChapter.get(chId);
    if (c && c.total > 0 && c.correct === c.total) highestPassedIdx = i;
  });
  const targetChapterId: string | null =
    highestPassedIdx === -1
      ? test.chapterOrder[0] // passed nothing → start at the very beginning
      : test.chapterOrder[highestPassedIdx + 1] ?? null; // null = passed the last chapter

  // Resolve the target chapter in the curriculum and collect every lesson before it.
  const lessonIdsToComplete: string[] = [];
  let targetChapter: Chapter | undefined;
  let targetBook: Book | undefined;
  outer: for (const book of curriculum.books) {
    for (const ch of book.chapters) {
      if (targetChapterId && ch.id === targetChapterId) {
        targetChapter = ch;
        targetBook = book;
        break outer;
      }
      for (const l of ch.lessons) lessonIdsToComplete.push(l.id);
    }
  }

  const bySkill = Array.from(perSkillMap.entries()).map(([skill, v]) => ({ skill, ...v }));
  const total = test.questions.length;

  // "Tested out of everything built" = passed every chapter, OR the next chapter up
  // is still a coming-soon stub (no content authored to place into yet).
  const testedOut = targetChapterId === null || !!targetChapter?.comingSoon;
  const atBeginning = targetChapterId === test.chapterOrder[0];

  let levelLabel: string;
  let summary: string;
  if (testedOut) {
    levelLabel = "Caught up with current content";
    summary =
      "Impressive — you're ahead of everything we've built so far. We've marked all available lessons complete; more advanced chapters are coming soon.";
  } else if (targetChapter && targetBook) {
    levelLabel = `Book ${targetBook.number} · Chapter ${targetChapter.number} — ${targetChapter.title}`;
    summary = atBeginning
      ? "We'll start you right at the beginning so your foundations are rock solid."
      : `Based on your answers we're starting you at ${levelLabel}. Everything before it is marked complete — revisit any lesson anytime.`;
  } else {
    // Target chapter id not found in the curriculum (shouldn't happen).
    levelLabel = "Beginner";
    summary = "Starting you at the recommended lesson.";
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

export interface LearnedTypingPrompt {
  id: string;
  prompt: string;
  answer: string;
  romaji: string;
  meaning?: string;
  fromLessonId: string;
}

export interface LearnedItems {
  vocab: LearnedVocab[];
  characters: LearnedCharacter[];
  /** Characters the user has practiced writing — subset of `characters`, plus any extras from writing steps. */
  writingChars: string[];
  grammar: LearnedGrammar[];
  /** Romaji→kana prompts the learner has typed (from `typing` steps). */
  typingPrompts: LearnedTypingPrompt[];
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
  const typingPrompts: LearnedTypingPrompt[] = [];

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
          } else if (step.kind === "typing") {
            typingPrompts.push({
              id: `${lesson.id}-typing-${step.answer}`,
              prompt: step.prompt,
              answer: step.answer,
              romaji: step.romaji,
              meaning: step.meaning,
              fromLessonId: lesson.id,
            });
          }
        }
      }
    }
  }

  return { vocab, characters, writingChars: Array.from(writingChars), grammar, typingPrompts };
}
