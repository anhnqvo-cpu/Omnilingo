# Maintaining Omnilingo & Building the Full Journey

A practical companion to `CURRICULUM.md`. `CURRICULUM.md` is *what* to teach; this file is *how* to add it, verify it, ship it to Replit, and pace it into a 365-day beginner journey.

---

## 1. The data model in 60 seconds

Everything the learner sees is data, not code. Content lives in `data/curriculum/<lang>/`. The shapes are defined once in `data/curriculum/types.ts`:

```
Curriculum → Book[] → Chapter[] → Lesson[] → LessonStep[]
```

A **Lesson** is an ordered array of **steps**. Each step has a `kind` and the UI renders it automatically — you never touch a screen to add content. The step kinds (see `types.ts`):

`intro · sounds · character · writing · vocab · vocabDrill · grammar · matching · quiz · microstory · pronunciation · completion`

So adding a chapter = writing TypeScript objects. No new components, no styling.

### Where files live

```
data/curriculum/
  types.ts                  ← step + lesson + chapter + book shapes
  index.ts                  ← registry: getCurriculum("ja"), getLesson(...)
  ja/
    index.ts                ← assembles books[]; imports each chapter
    hiragana.ts             ← kana reference table
    strokeData.ts           ← per-character SVG stroke paths (watch/trace)
    chapter01/ … chapter03/ ← real content, one file per lesson
    stubs.ts                ← placeholder chapters/books (SOON badges)
```

---

## 2. Add a new lesson (the 90% case)

**Step 1 — create the lesson file.** Copy an existing lesson as a template (Chapter 2 lessons are the current "gold standard" — they have every pillar). Example `data/curriculum/ja/chapter04/lesson01.ts`:

```ts
import type { Lesson } from "@/data/curriculum/types";

export const chapter04Lesson01: Lesson = {
  id: "ja-4-1",            // ja-<chapter>-<lesson>, globally unique
  chapterId: "ja-ch4",
  number: 1,
  title: "Katakana: ア, イ, ウ, エ, オ",
  titleNative: "アイウエオ",
  subtitle: "Katakana foundations",
  summary: "…",
  xp: 50,
  estimateMinutes: 10,
  unlockAfter: "ja-3-5",   // last lesson of the previous chapter
  steps: [
    { kind: "intro", title: "…", goals: ["…"], estimateMinutes: 10 },
    { kind: "sounds", sounds: [ /* … */ ] },
    { kind: "character", script: "katakana", char: "ア", romaji: "a", phonetic: "…", words: [/* … */] },
    { kind: "writing", char: "ア", script: "katakana" },
    // …more character+writing pairs…
    { kind: "vocabDrill", words: [ /* … */ ] },
    { kind: "grammar", patterns: [ /* … */ ] },
    { kind: "microstory", setting: "…", lines: [ /* … */ ], comprehension: [ /* … */ ] },
    { kind: "completion", recap: ["…"], badge: { name: "…", emoji: "…" } },
  ],
};
```

**Step 2 — register it in the chapter index** (`chapter04/index.ts`): import it and add to `lessons: [...]`.

**Step 3 — make sure the chapter is in the book.** Real chapters are listed in `data/curriculum/ja/index.ts` under `ja-book1` (or the right book). If you're turning a *stub* into a real chapter, remove it from `stubs.ts` and import the real one in `index.ts` instead.

That's it. The lesson appears in the app on next reload.

### The lesson "definition of done" checklist

Every lesson should hit the five pillars (this is what "matches Chapter 1/2" means):

- [ ] **Comprehensible input** — at least one `microstory` at i+1 difficulty (mostly known words + 1–2 new).
- [ ] **Foundations** — `intro` (goals) and, for script lessons, `sounds`.
- [ ] **Character learning** — a `character` step for each new kana/kanji…
- [ ] **…paired with a `writing` step** for the same character (watch → trace → freehand).
- [ ] **New vocabulary** — a `vocab` or `vocabDrill` step.
- [ ] **Grammar** — a `grammar` step with rule + worked example + breakdown + a `tip` + an `apply` check.
- [ ] **Closeout** — a `completion` step with recap + badge.
- [ ] **Romaji everywhere** for beginner content (`optionsRomaji` on quiz/grammar options).
- [ ] Every `character`/`writing` char has stroke data (see §3).

---

## 3. Stroke data (watch + trace) — the one thing that needs data

The `writing` step's **watch** and **trace** phases need real per-stroke SVG paths. Without them, `StrokeWriter` falls back to freehand-only. Paths live in `data/curriculum/ja/strokeData.ts`, keyed by character, in a 109×109 viewBox:

```ts
き: {
  char: "き", romaji: "ki",
  strokes: [
    { d: "M…", startHint: "Start top-left", directionHint: "Draw the top bar right", end: { x: 70, y: 30 } },
    // one entry per stroke, in stroke order
  ],
},
```

**The right way to get accurate paths: run the fetch script (one command, on your machine).** Replit/your laptop can reach GitHub; the Cowork sandbox can't, which is why Ch2's paths were hand-approximated.

```bash
node scripts/fetch-strokes.mjs            # all hiragana
node scripts/fetch-strokes.mjs アイウエオ   # just these characters
```

It pulls [KanjiVG](https://kanjivg.tagaini.net) (CC BY-SA 3.0) and rewrites `strokeData.ts` with pixel-perfect geometry. **Run it once after adding katakana/kanji** — KanjiVG covers all of them, so the same pipeline scales from kana to the 2000+ jōyō kanji. Re-running it will overwrite the hand-authored Ch2 approximations with exact paths (do this when convenient).

> Tip: extend the `ALL_HIRAGANA` / `ROMAJI` maps in `scripts/fetch-strokes.mjs` to include katakana and kanji as you reach them.

---

## 4. Verify before you ship

From the project root:

```bash
# Type-check (catches schema mistakes, wrong field names, etc.)
npx tsc --noEmit

# Quick coverage check: every character/writing char has stroke data
node -e '
  const fs=require("fs");
  const files=require("child_process").execSync("ls data/curriculum/ja/chapter*/lesson*.ts").toString().split(/\s+/).filter(Boolean);
  const sd=fs.readFileSync("data/curriculum/ja/strokeData.ts","utf8");
  const chars=new Set();
  for(const f of files) for(const m of fs.readFileSync(f,"utf8").matchAll(/char:\s*"([^"]+)"/g)) chars.add(m[1]);
  for(const c of chars) if(!sd.includes(`  ${c}: {`)) console.log("MISSING stroke data:", c);
  console.log("checked", chars.size, "characters");
'
```

`npx tsc --noEmit` is the single most important gate — the whole curriculum is typed, so a missing field or typo fails the build instead of shipping broken.

---

## 5. Ship to Replit

1. Replace the project files with the new folder (drag the unzipped `nihongo-journey/` in, or `git push` if you wire up git).
2. In the Replit shell: `pnpm install` (only needed if `package.json`/lockfile changed).
3. `pnpm dev` (or the Run button) → scan the QR in Expo Go.

**Don't ship `node_modules`** — the zip excludes it on purpose; Replit reinstalls from `pnpm-lock.yaml`. Content-only changes (new chapters) need no reinstall, just a reload.

---

## 6. The 365-day beginner journey (5–10 min/day)

### Honest expectations first

5–10 min/day for a year is ~30–60 hours of study. That is **not** enough for fluency — real conversational fluency in Japanese is a multi-thousand-hour, multi-year road (that's what Books 3–6 are for). What 365 consistent days *will* reliably deliver:

- **All of hiragana + katakana**, read fluently.
- **~150–250 kanji** with stroke-correct writing.
- **N5 grammar complete and N4 well underway.**
- **~600–900 words** in active recall via spaced repetition.
- The ability to read simple signs/menus/messages and hold a basic self-introduction conversation.

In CEFR terms: a strong **A1 → A2**. That's a genuinely great Year 1 — and the same engine carries the learner to fluency over Years 2–4.

### The daily loop

Consistency beats volume. Design each day as one short session:

- **New-content day:** one lesson (5–10 min). Hits a couple of new kana/words + one grammar point + a story.
- **Review day:** no new lesson — just the **Practice tab** (SRS over everything learned). 3–5 min.

A sustainable weekly rhythm: **4 new-content days + 3 review days**. Review is where retention actually happens; resist the urge to make every day a new lesson.

### Mapping content to the year

| Phase | Days (approx) | Content | Outcome |
| --- | --- | --- | --- |
| Weeks 1–6 | ~40 | Book 1 Ch 1–3 (all hiragana) + review | Reads all hiragana |
| Weeks 7–12 | ~40 | Book 1 Ch 4 (katakana) + Ch 5–6 (sentences, numbers/time/money) | Reads both kana; basic sentences |
| Weeks 13–28 | ~110 | Book 2 (everyday verbs, particles, adjectives, te-form, past tense, first ~80 kanji) | Core N5 grammar + first kanji |
| Weeks 29–44 | ~110 | Book 3 start (plain form, casual speech, ~200 kanji) — paced gently | Into N4 |
| Weeks 45–52 | ~55 | Consolidation: heavy SRS, re-read all microstories, mock N5 | N5 solid, N4 underway |

At ~4 new lessons/week you'll complete roughly **Book 1 + Book 2 + the start of Book 3** in a year — which is exactly the A1→A2 outcome above. The remaining days are SRS, which the app already supports.

### What to build, in order (your authoring backlog)

**Book 1 is fully built — all six chapters are real** (kana complete + first sentences + numbers/time/money). Remaining work is Books 2–6 (still stubs). Author in this order:

1. ~~**Book 1 Ch 4 — Katakana**~~ ✅ **Done** — 5 lessons, café/loanword theme, grammar arc です → ですか → ～が ほしい → ～を ください. `fetch-strokes.mjs` now includes katakana.
2. ~~**Book 1 Ch 5 — First Real Sentences**~~ ✅ **Done** — 6 lessons: X は Y です self-intro, の/この, い- & な-adjectives (+ negative), が すき likes, question words. No new kana → no character/writing steps.
3. ~~**Book 1 Ch 6 — Numbers, Time, Money**~~ ✅ **Done** — 5 lessons: numbers 0–10,000 (kanji recognized, not written), 〜つ/〜人 counters, time, money/dates; capstone settles the café bill.
4. **Book 2** (next) — chapters one at a time; introduce the first **kanji** here. The `fetch-strokes.mjs` pipeline already pulls real KanjiVG geometry (proven on kana) — extend its maps to the target kanji and re-run. This is where `character`/`writing` steps return.

> **Note on Ch 5–6 shape:** because they introduce no new script, they intentionally drop the `character`/`writing` pillars and lead with grammar + vocab + microstory + a 5-question `grammar.practice[]` review on capstones. Ch 6 *recognises* number kanji (一, 百…) but does not drill writing them — kanji writing starts in Book 2.

Turn each stub into a real chapter by writing its lessons (§2) and swapping the stub import for the real one in `data/curriculum/ja/index.ts`.

### A repeatable authoring recipe

For each new chapter, ask me (or yourself) to:

1. Draft the 5–6 lessons against the `CURRICULUM.md` spine, each passing the §2 checklist.
2. Keep the recurring cast (Hana, Tanaka, Kenji, Yui) moving through the microstories so the learner stays invested.
3. Add any new characters to `strokeData.ts` via `fetch-strokes.mjs`.
4. **Add the chapter to the placement test** (see §7): 2 questions in `data/curriculum/ja/placement.ts` tagged with the new chapter's `id`, and make sure the id is in `chapterOrder`.
5. Run `npx tsc --noEmit` + the coverage check (§4).
6. Re-zip and push to Replit (§5).

Doing one chapter at a time keeps each change small, typed, and verifiable — and steadily turns the stubbed-out ladder into a real beginner-to-fluent journey.

---

## 7. Placement test (find a learner's level)

New users choose, on first launch (`app/onboarding.tsx`), between "I'm new" (start at Chapter 1) and "I've studied before" (take the test). The test (`app/placement.tsx`) is also reachable anytime via **"Check my level"** on the Learn screen — re-taking it every few weeks doubles as a progress benchmark.

**How placement works.** Questions live in `data/curriculum/ja/placement.ts`, each tagged with the `chapterId` whose material it proves. `scorePlacement` (in `data/curriculum/index.ts`) walks `chapterOrder` and drops the learner at the **first chapter they didn't fully pass** (both of that chapter's questions correct). Everything before it is marked complete via `applyPlacement`, so the streak, Practice/SRS pool, and "Continue learning" banner all reflect their real level. It's deliberately conservative — a single slip keeps them a chapter earlier (a little review) rather than stranding them too far ahead. Retaking only ever *adds* completed lessons; it never un-completes anything.

**To extend it as you add chapters:** add 2 questions for the new chapter (tagged with its `id`), confirm the `id` is in `chapterOrder`, and `npx tsc --noEmit`. That's it — the onboarding flow, scoring, and result screen all pick it up automatically. The same pattern works for a new language: create `data/curriculum/<lang>/placement.ts` and register it in the `PLACEMENT_REGISTRY` in `data/curriculum/index.ts`.
