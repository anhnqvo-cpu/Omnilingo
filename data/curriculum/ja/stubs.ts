// Placeholder chapters + books for the rest of the curriculum.
// Each has comingSoon: true and an empty lessons array. The UI uses these
// to show learners the full journey ahead without giving them lessons that
// haven't been written yet.
//
// When you write real content for one of these, replace the stub with the
// real Chapter and remove the comingSoon flag.

import type { Book, Chapter } from "@/data/curriculum/types";
import { chapter2Typing } from "./chapter2typing";
import { book2Chapter1 } from "./book2ch1";
import { book2Chapter2 } from "./book2ch2";

// ─── Book 1 — Foundations: all six chapters are now real ─────────────────────

// Ch 1–6 are all fully built (see ./chapter01 … ./chapter06). No Book 1 stubs remain.
const book1Stubs: Chapter[] = [];

// ─── Books 2–6: fully stubbed ────────────────────────────────────────────────

function placeholderChapter(args: {
  id: string;
  bookId: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  cefr: Chapter["cefr"];
  jlpt?: Chapter["jlpt"];
  color: string;
  icon: string;
}): Chapter {
  return {
    id: args.id,
    bookId: args.bookId,
    number: args.number,
    title: args.title,
    subtitle: args.subtitle,
    description: args.description,
    cefr: args.cefr,
    jlpt: args.jlpt,
    themeColor: args.color,
    icon: args.icon,
    lessons: [],
    comingSoon: true,
  };
}

// ja-2-ch1 (Verbs) and ja-2-ch2 (Existence) are now real — see ./book2ch1 and
// ./book2ch2. The rest stay placeholders.
const BOOK_2_CHAPTERS: Chapter[] = [
  placeholderChapter({ id: "ja-2-ch3", bookId: "ja-book2", number: 3, title: "Adjectives", subtitle: "い-adjectives + な-adjectives", description: "Describe things. Likes, dislikes, opinions. Present and past adjective forms.", cefr: "A2", jlpt: "N5", color: "#ec4899", icon: "heart" }),
  placeholderChapter({ id: "ja-2-ch4", bookId: "ja-book2", number: 4, title: "Te-form", subtitle: "Requests, ongoing actions, sequences", description: "The Swiss-Army-knife verb form. 〜てください, 〜ています, joining verbs together.", cefr: "A2", jlpt: "N5", color: "#ef4444", icon: "link" }),
  placeholderChapter({ id: "ja-2-ch5", bookId: "ja-book2", number: 5, title: "Past tense", subtitle: "ました and でした", description: "Talk about yesterday. Past polite verbs, past adjectives, past です.", cefr: "A2", jlpt: "N5", color: "#8b5cf6", icon: "rewind" }),
  placeholderChapter({ id: "ja-2-ch6", bookId: "ja-book2", number: 6, title: "First 80 kanji", subtitle: "Stroke-guided kanji writing", description: "Learn 80 essential kanji — person, day, month, year, water, fire, etc. Read short signs and menus.", cefr: "A2", jlpt: "N5", color: "#0891b2", icon: "edit-3" }),
  placeholderChapter({ id: "ja-2-ch7", bookId: "ja-book2", number: 7, title: "Real-world reading", subtitle: "Menus, signs, diaries", description: "Read short authentic Japanese — café menus, station signs, an elementary-school diary.", cefr: "A2", jlpt: "N5", color: "#14b8a6", icon: "book-open" }),
];

const BOOK_3_CHAPTERS: Chapter[] = [
  placeholderChapter({ id: "ja-3-ch1", bookId: "ja-book3", number: 1, title: "Plain form (dictionary form)", subtitle: "Casual speech", description: "Drop the masu. Talk like you would to a friend.", cefr: "B1", jlpt: "N4", color: "#f59e0b", icon: "users" }),
  placeholderChapter({ id: "ja-3-ch2", bookId: "ja-book3", number: 2, title: "ない-form", subtitle: "Casual negative", description: "Negate verbs without ません. New patterns: 〜ないでください.", cefr: "B1", jlpt: "N4", color: "#dc2626", icon: "slash" }),
  placeholderChapter({ id: "ja-3-ch3", bookId: "ja-book3", number: 3, title: "Potential form", subtitle: "What you can / can't do", description: "食べられる, 行ける, できる. Express ability and possibility.", cefr: "B1", jlpt: "N4", color: "#16a34a", icon: "zap" }),
  placeholderChapter({ id: "ja-3-ch4", bookId: "ja-book3", number: 4, title: "Volitional", subtitle: "Let's, I think I'll", description: "〜ましょう / 〜よう. Invitations, intentions, suggestions.", cefr: "B1", jlpt: "N4", color: "#7c3aed", icon: "arrow-up-right" }),
  placeholderChapter({ id: "ja-3-ch5", bookId: "ja-book3", number: 5, title: "Giving and receiving", subtitle: "あげる・もらう・くれる", description: "Three verbs for the same action — depending on who gives whom what. Famously tricky.", cefr: "B1", jlpt: "N4", color: "#0ea5e9", icon: "gift" }),
  placeholderChapter({ id: "ja-3-ch6", bookId: "ja-book3", number: 6, title: "Modifying nouns with verbs", subtitle: "Relative clauses", description: "'The book I bought yesterday.' Verbs modifying nouns directly.", cefr: "B1", jlpt: "N4", color: "#e11d48", icon: "filter" }),
  placeholderChapter({ id: "ja-3-ch7", bookId: "ja-book3", number: 7, title: "200 more kanji + reading", subtitle: "Stories, posts, blogs", description: "Cumulative 280 kanji. Read short stories and social-media posts.", cefr: "B1", jlpt: "N4", color: "#65a30d", icon: "book" }),
];

const BOOK_4_CHAPTERS: Chapter[] = [
  placeholderChapter({ id: "ja-4-ch1", bookId: "ja-book4", number: 1, title: "Keigo: respectful & humble", subtitle: "Honorific speech", description: "Sonkeigo (raise the other person) and kenjōgo (lower yourself). Workplace and customer-service language.", cefr: "B2", jlpt: "N3", color: "#9333ea", icon: "award" }),
  placeholderChapter({ id: "ja-4-ch2", bookId: "ja-book4", number: 2, title: "Causative / passive", subtitle: "Make, let, be made to", description: "〜させる, 〜される, 〜させられる. The grammar that hurts every learner.", cefr: "B2", jlpt: "N3", color: "#be123c", icon: "users" }),
  placeholderChapter({ id: "ja-4-ch3", bookId: "ja-book4", number: 3, title: "Conditionals", subtitle: "と・ば・たら・なら", description: "Four ways to say 'if/when'. Each has a flavour. Pick the right one.", cefr: "B2", jlpt: "N3", color: "#0d9488", icon: "git-branch" }),
  placeholderChapter({ id: "ja-4-ch4", bookId: "ja-book4", number: 4, title: "Reported speech & quotation", subtitle: "と言う・と思う", description: "Quoting what people said or thought. Indirect speech patterns.", cefr: "B2", jlpt: "N3", color: "#c2410c", icon: "message-square" }),
  placeholderChapter({ id: "ja-4-ch5", bookId: "ja-book4", number: 5, title: "~500 more kanji", subtitle: "Workplace vocabulary", description: "Cumulative ~780 kanji. Email Japanese, news headlines, business writing.", cefr: "B2", jlpt: "N3", color: "#475569", icon: "edit-3" }),
  placeholderChapter({ id: "ja-4-ch6", bookId: "ja-book4", number: 6, title: "Reading: news + op-eds", subtitle: "Real Japanese journalism", description: "Read NHK Easy News, then real news. Op-eds, interviews, work emails.", cefr: "B2", jlpt: "N3", color: "#0c4a6e", icon: "newspaper" }),
];

const BOOK_5_CHAPTERS: Chapter[] = [
  placeholderChapter({ id: "ja-5-ch1", bookId: "ja-book5", number: 1, title: "Nuance particles", subtitle: "は・が・も・さえ・こそ・しか", description: "The particles that mark feeling. The 'just', 'even', 'precisely' of Japanese.", cefr: "C1", jlpt: "N2", color: "#1d4ed8", icon: "type" }),
  placeholderChapter({ id: "ja-5-ch2", bookId: "ja-book5", number: 2, title: "Advanced grammar patterns", subtitle: "〜ものの, 〜ばかりか, 〜ようがない", description: "Literary and formal patterns. The grammar of essays and novels.", cefr: "C1", jlpt: "N2", color: "#a21caf", icon: "feather" }),
  placeholderChapter({ id: "ja-5-ch3", bookId: "ja-book5", number: 3, title: "~1000 kanji", subtitle: "Literary range", description: "Cumulative ~1200 kanji. Now you can read most adult Japanese with a dictionary handy.", cefr: "C1", jlpt: "N2", color: "#374151", icon: "edit-3" }),
  placeholderChapter({ id: "ja-5-ch4", bookId: "ja-book5", number: 4, title: "Reading: novel excerpts", subtitle: "Modern Japanese literature", description: "Murakami, Yoshimoto, Kawabata. Excerpts with vocabulary scaffolding.", cefr: "C1", jlpt: "N2", color: "#a16207", icon: "book-open" }),
  placeholderChapter({ id: "ja-5-ch5", bookId: "ja-book5", number: 5, title: "Business reports + formal writing", subtitle: "Professional Japanese", description: "Quarterly reports, formal letters, policy documents. The Japanese of work and government.", cefr: "C1", jlpt: "N2", color: "#475569", icon: "briefcase" }),
];

const BOOK_6_CHAPTERS: Chapter[] = [
  placeholderChapter({ id: "ja-6-ch1", bookId: "ja-book6", number: 1, title: "Literary & archaic forms", subtitle: "Old grammar that still appears", description: "Bungo, classical patterns you'll see in literature and formal writing.", cefr: "C2", jlpt: "N1", color: "#7c2d12", icon: "book" }),
  placeholderChapter({ id: "ja-6-ch2", bookId: "ja-book6", number: 2, title: "Idioms + yojijukugo", subtitle: "Four-character idioms", description: "一期一会, 四面楚歌, etc. The proverbs and idioms native speakers grew up with.", cefr: "C2", jlpt: "N1", color: "#92400e", icon: "star" }),
  placeholderChapter({ id: "ja-6-ch3", bookId: "ja-book6", number: 3, title: "~2000 kanji + technical reading", subtitle: "JLPT N1 readiness", description: "Cumulative ~2200 kanji. Read technical/scientific Japanese.", cefr: "C2", jlpt: "N1", color: "#171717", icon: "edit-3" }),
  placeholderChapter({ id: "ja-6-ch4", bookId: "ja-book6", number: 4, title: "Classical literature", subtitle: "Genji to modern", description: "Read excerpts spanning a thousand years of Japanese literature.", cefr: "C2", jlpt: "N1", color: "#581c87", icon: "feather" }),
];

// Export Book 1 stubs separately so they can be appended to the real chapters,
// and the rest as fully-stubbed books.
export const book1ChapterStubs: Chapter[] = book1Stubs;

export const STUB_BOOKS: Book[] = [
  {
    id: "ja-book2",
    number: 2,
    title: "Everyday Japanese",
    subtitle: "Verbs, particles, te-form, past tense — A2 / N5 complete",
    description: "Build complete daily-life conversations. Travel, shopping, work, ordering food.",
    cefr: "A2",
    jlptRange: ["N5", "N5"],
    // Book 2: a "typing" opener (1) + the real Verbs (2) and Existence (3)
    // chapters; the remaining chapters are still coming soon (renumbered 4…8).
    chapters: [chapter2Typing, book2Chapter1, book2Chapter2, ...BOOK_2_CHAPTERS.map((c, i) => ({ ...c, number: i + 4 }))],
    comingSoon: false,
  },
  {
    id: "ja-book3",
    number: 3,
    title: "Conversational Japanese",
    subtitle: "Casual speech, modifying clauses, 200 more kanji — B1 / N4",
    description: "Hold real conversations. Speak like a friend, not a textbook.",
    cefr: "B1",
    jlptRange: ["N4", "N4"],
    chapters: BOOK_3_CHAPTERS,
    comingSoon: true,
  },
  {
    id: "ja-book4",
    number: 4,
    title: "Working Japanese",
    subtitle: "Keigo, conditionals, causative — B2 / N3",
    description: "The Japanese you need for work and adult life. Keigo, business writing, the news.",
    cefr: "B2",
    jlptRange: ["N3", "N3"],
    chapters: BOOK_4_CHAPTERS,
    comingSoon: true,
  },
  {
    id: "ja-book5",
    number: 5,
    title: "Fluent Japanese",
    subtitle: "Nuance, literature, 1000+ kanji — C1 / N2",
    description: "Read novels, write essays, understand subtle nuance.",
    cefr: "C1",
    jlptRange: ["N2", "N2"],
    chapters: BOOK_5_CHAPTERS,
    comingSoon: true,
  },
  {
    id: "ja-book6",
    number: 6,
    title: "Mastery",
    subtitle: "Classical, idioms, ~2000 kanji — C2 / N1",
    description: "Reading-comprehension parity with educated native speakers.",
    cefr: "C2",
    jlptRange: ["N1", "N1"],
    chapters: BOOK_6_CHAPTERS,
    comingSoon: true,
  },
];
