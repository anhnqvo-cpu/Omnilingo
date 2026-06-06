// Omnilingo curriculum data model.
// Language-agnostic. Add a new language by creating data/curriculum/<lang>/ and
// registering it in data/curriculum/index.ts.

export type LanguageCode = "ja" | "ko" | "zh" | "es" | "fr" | "de";

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

// ───────────────────────────────────────────────────────────────────────────────
// Step types
// ───────────────────────────────────────────────────────────────────────────────

export type StepKind =
  | "intro"
  | "sounds"
  | "character"
  | "writing"
  | "vocab"
  | "vocabDrill"
  | "grammar"
  | "matching"
  | "quiz"
  | "microstory"
  | "pronunciation"
  | "completion";

export interface IntroStep {
  kind: "intro";
  title: string;
  subtitle?: string;
  goals: string[]; // "Read あいうえお", "Say hello"
  estimateMinutes: number;
}

export interface SoundsStep {
  kind: "sounds";
  intro?: string;
  sounds: Array<{
    text: string; // "あ"
    romaji: string; // "a"
    phonetic: string; // "'a' as in 'father'"
    audio?: string; // url or asset key (optional — TTS fallback)
    mnemonic?: string;
  }>;
}

export interface CharacterStep {
  kind: "character";
  script: "hiragana" | "katakana" | "kanji" | "hangul" | "pinyin";
  char: string;
  romaji: string;
  phonetic: string;
  mnemonic?: string;
  /** Words this character appears in. */
  words?: Array<{ jp: string; meaning: string; romaji: string; emoji?: string; hint?: string }>;
}

export interface WritingStep {
  kind: "writing";
  /** Character to practice writing — must have stroke data registered. */
  char: string;
  script: "hiragana" | "katakana" | "kanji";
  /** Number of free practice tries before auto-advance. */
  tries?: number;
}

export interface VocabStep {
  kind: "vocab";
  intro?: string;
  words: Array<{
    text: string; // "がくせい"
    romaji: string; // "gakusei"
    meaning: string; // "student"
    example?: { jp: string; romaji: string; en: string };
    emoji?: string;
  }>;
}

/**
 * Drill-style vocabulary: one word at a time, with an intro screen + a recall
 * check (pick the Japanese among 3-4 options given the meaning + emoji).
 * Other words in the same drill act as distractors; explicit `distractors`
 * override that.
 */
export interface VocabDrillStep {
  kind: "vocabDrill";
  intro?: string;
  words: Array<{
    text: string;
    romaji: string;
    meaning: string;
    emoji?: string;
    example?: { jp: string; romaji: string; en: string };
    /** Optional explicit distractors. Each is shown as a wrong option in the recall test. */
    distractors?: Array<{ text: string; romaji: string }>;
  }>;
}

export interface GrammarPattern {
  id: string;
  title: string; // "X は Y です"
  titleRomaji: string; // "X wa Y desu"
  subtitle: string; // "The basic sentence pattern"
  pattern: Array<{ text: string; highlight: boolean }>;
  patternRomaji: string;
  note: string; // textbook explanation, 1-3 paragraphs
  tip?: string; // common mistake / nuance
  examples: Array<{
    jp: string;
    romaji: string;
    en: string;
    breakdown: Array<{ jp: string; en: string }>;
  }>;
  /** Optional quick-check after the concept. */
  apply?: {
    prompt: string;
    options: string[];
    optionsRomaji?: string[];
    correct: number;
    explanation: string;
  };
}

export interface GrammarStep {
  kind: "grammar";
  intro?: string;
  patterns: GrammarPattern[];
  /** Mixed practice at the end across all patterns above. */
  practice?: Array<{
    question: string;
    jp?: string;
    romaji?: string;
    options: string[];
    optionsRomaji?: string[];
    correct: number;
    explanation: string;
    concept: string;
  }>;
}

export interface MatchingStep {
  kind: "matching";
  intro?: string;
  rounds: Array<{
    title: string;
    pairs: Array<{ id: string; left: string; right: string; romaji?: string }>;
  }>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  jp?: string;
  romaji?: string;
  emoji?: string;
  meaning?: string;
  options: string[];
  /** Optional romaji shown under each option (same indexing as `options`). For beginner lessons. */
  optionsRomaji?: string[];
  correct: number;
  explanation: string;
  hint?: string;
}

export interface QuizStep {
  kind: "quiz";
  intro?: string;
  questions: QuizQuestion[];
}

export type MicrostorySpeaker = "narrator" | "hana" | "tanaka" | "kenji" | "yui";

export interface MicrostoryLine {
  speaker: MicrostorySpeaker;
  jp?: string;
  romaji?: string;
  en: string;
}

export interface MicrostoryStep {
  kind: "microstory";
  intro?: string;
  setting: string; // "Hana's first morning in Tokyo"
  emoji?: string;
  lines: MicrostoryLine[];
  /** Comprehension check at the end. */
  comprehension?: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
}

export interface PronunciationStep {
  kind: "pronunciation";
  prompts: Array<{ text: string; romaji: string; en: string }>;
}

export interface CompletionStep {
  kind: "completion";
  recap: string[];
  badge?: { name: string; emoji: string };
}

export type LessonStep =
  | IntroStep
  | SoundsStep
  | CharacterStep
  | WritingStep
  | VocabStep
  | VocabDrillStep
  | GrammarStep
  | MatchingStep
  | QuizStep
  | MicrostoryStep
  | PronunciationStep
  | CompletionStep;

// ───────────────────────────────────────────────────────────────────────────────
// Lesson / chapter / book
// ───────────────────────────────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  chapterId: string;
  number: number; // 1-indexed within chapter
  title: string;
  titleNative?: string; // e.g. "ひらがな - 母音"
  subtitle?: string; // "Sounds & Writing"
  summary: string;
  xp: number;
  estimateMinutes: number;
  steps: LessonStep[];
  /** Lesson the user must complete before this one. Use only inside the same chapter. */
  unlockAfter?: string;
}

export interface Chapter {
  id: string;
  bookId: string;
  number: number;
  title: string;
  subtitle?: string;
  description: string;
  cefr: CEFRLevel;
  jlpt?: JLPTLevel;
  themeColor: string; // hex
  icon?: string; // feather/sf-symbol name
  lessons: Lesson[];
  /** True if this chapter is a placeholder — content not yet written. */
  comingSoon?: boolean;
}

export interface Book {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  cefr: CEFRLevel;
  jlptRange?: [JLPTLevel, JLPTLevel];
  chapters: Chapter[];
  isFree?: boolean;
  /** True if all chapters in this book are placeholders. */
  comingSoon?: boolean;
}

export interface Curriculum {
  language: LanguageCode;
  /** Human-readable name in the user's UI language. */
  languageName: string;
  /** Native name. */
  languageNameNative: string;
  /** Scripts this language uses. Drives availability of writing step. */
  scripts: Array<"hiragana" | "katakana" | "kanji" | "hangul" | "pinyin" | "latin">;
  books: Book[];
}

// ───────────────────────────────────────────────────────────────────────────────
// Placement test
// ───────────────────────────────────────────────────────────────────────────────

export interface PlacementQuestion {
  id: string;
  /** The chapter whose mastery this question verifies. */
  chapterId: string;
  /** Short skill label for the result screen, e.g. "Katakana", "Particles". */
  skill: string;
  prompt: string;
  jp?: string;
  romaji?: string;
  meaning?: string;
  options: string[];
  /** Optional romaji shown under each option (same indexing as `options`). */
  optionsRomaji?: string[];
  correct: number;
}

export interface PlacementTest {
  language: LanguageCode;
  /** Chapter IDs in curriculum order — the test can place into any of these. */
  chapterOrder: string[];
  questions: PlacementQuestion[];
}

export interface PlacementResult {
  /** Chapter the learner should start at. null = tested out of all current content. */
  targetChapterId: string | null;
  /** Lessons to mark complete (everything before the target chapter). */
  lessonIdsToComplete: string[];
  /** Human label, e.g. "Book 1 · Chapter 3 — Hiragana Complete". */
  levelLabel: string;
  /** One-line explanation for the learner. */
  summary: string;
  /** Per-skill correct/total for the result screen. */
  bySkill: Array<{ skill: string; correct: number; total: number }>;
  correct: number;
  total: number;
}

// ───────────────────────────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────────────────────────

export function findLesson(curriculum: Curriculum, id: string): Lesson | undefined {
  for (const book of curriculum.books) {
    for (const ch of book.chapters) {
      const found = ch.lessons.find((l) => l.id === id);
      if (found) return found;
    }
  }
  return undefined;
}

export function findChapter(curriculum: Curriculum, id: string): Chapter | undefined {
  for (const book of curriculum.books) {
    const found = book.chapters.find((c) => c.id === id);
    if (found) return found;
  }
  return undefined;
}

export function findBook(curriculum: Curriculum, id: string): Book | undefined {
  return curriculum.books.find((b) => b.id === id);
}
