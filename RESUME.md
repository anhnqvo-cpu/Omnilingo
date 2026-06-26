# Resume — where we left off

> Update this file at the end of a work session so the next one (any computer, any Claude account) picks up cleanly. Last updated: **2026-06-18**.

## Status: Book 1 COMPLETE ✅
All six chapters of Book 1 are built and live (`data/curriculum/ja/chapter01…06`):

| Ch | Title | Notes |
|----|-------|-------|
| 1–3 | Hiragana (Foundations → Complete) | all hiragana + first grammar |
| 4 | Katakana | café/loanword theme; grammar arc です → ですか → ～が ほしい → ～を ください |
| 5 | First Real Sentences | X は Y です, の/この, い-&な-adjectives (+negative), が すき, question words |
| 6 | Numbers, Time, Money | 0–10,000 (kanji recognized, not written), 〜つ/〜人 counters, time, money/dates; capstone = paying the café bill |

Ch 5–6 introduce **no new kana**, so they have no character/writing steps — they're grammar + vocab + microstory + practice.

## Practice / retention
- **Daily Review hub** (`app/review.tsx`, route `/review`) ✅ NEW — one adaptive spaced-repetition session that pulls everything **due today** across vocab (meaning→JP MCQ), grammar (reuses each pattern's `apply` check), and writing (inline `StrokeWriter`). Grades via the existing SRS engine in `AppContext` (`updateSRS`), so grammar & writing now enter the schedule for the first time (card ids prefixed `g:` / `w:`). Entry point is a gold hero card at the top of the Practice tab showing the live due count. `progress.tsx` word-count filters out `g:`/`w:` keys so the "words learned" stat stays vocab-only. The SRS engine (SM-2-style, `computeNextInterval`) already existed but was wired only into Flashcards.

## Also done recently
- **Real KanjiVG stroke data** for all kana (`scripts/fetch-strokes.mjs` now includes katakana).
- **Placement test**: "reward mastery" scoring (places past the highest chapter passed; clearing Book 1 → "Caught up with current content"). Answers lock with instant ✓/✗ feedback.
- **Logo**: 4-script globe (`components/OmnilingoLogo.tsx`); light version is the app icon + a cream chip in headers. Mission tagline under the wordmark.
- **Light/dark theme toggle**: floating sun/moon on every tab (`components/ThemeToggle.tsx`), persisted in `AppContext`, status bar follows it. Default dark.
- **PWA auto-update**: poller reloads the app on a new deploy — no reinstall/cache-clearing.

Live: **https://anhnqvo-cpu.github.io/Omnilingo/**

## Book 2 — Everyday Japanese (IN PROGRESS — finishing in order before Book 3)
This is where the **first kanji** arrive, so `character`/`writing` steps return. Built so far:
- **Ch1 — Typing** (`ja-2-typing`): 3 lessons (IME romaji→kana primer).
- **Ch2 — Verbs ます-form** (`ja-2-ch1`, dir `book2ch1`): 5 lessons; を/に/で/へ; kanji 食 行 見 私.
- **Ch3 — Existence & location** (`ja-2-ch2`, dir `book2ch2`): 5 lessons ✅ — あります/います, position nouns (上・下・中・まえ・うしろ・となり・みぎ・ひだり), ここ/そこ/あそこ/どこ; kanji **上 下 人 中** (real KanjiVG strokes).
- **Ch4 — Adjectives** (`ja-2-ch3`, dir `book2ch3`): 5 lessons ✅ NEW — a deliberate level-up on Book 1 Ch5 (which already did present-tense い/な + 〜くない + が すき). The four NEW tools: L1 connecting 〜くて／〜で, L2 past 〜かった／でした (+ kanji), L3 adverbs 〜く／〜に, L4 comparison より／のほうが／いちばん／どちら, L5 capstone. Present-tense basics are recall, not re-taught. Kanji **大 小 高 安** (real KanjiVG strokes; 大小 in L1, 高安 in L2). L5 capstone uses the duplicate-card matching (now fixed). Placement: 2 questions (comparison + past) + chapterOrder for ja-2-ch3.

- **Checkpoint — Book 2 review** (`ja-2-review`, dir `book2review`): 3 lessons ✅ NEW — a consolidation chapter (displayed Ch5, after Adjectives) with NO new grammar/kanji. L1 verbs & particles (を・に・で・へ, ます/ません/ませんか), L2 existence & adjectives (あります/います + position words, the adjective toolbox), L3 capstone (big combined microstory + 10-question mixed `quiz`). Built in response to user feeling overwhelmed by accumulating grammar — gives a "summary after a book" pause + applied practice. The recap `grammar` steps use new pattern ids so they also surface as consolidated cards in the Grammar notebook (`app/grammar.tsx`). Not in placement (review chapters teach nothing new). When Book 2 finishes, this can grow into the full end-of-book review.

**NEXT UP 👉 Book 2 Ch6 — Te-form** (`ja-2-ch4`, displayed Ch6 now): 〜てください, 〜ています, joining verbs. Then past tense, first-80 kanji, reading. Consider a parallel Book 1 review checkpoint (user wants a summary after every book). Authoring recipe per chapter:
1. Extend the char maps in `scripts/fetch-strokes.mjs` to the target kanji (kanji policy: ~1–2/lesson) and re-run for real stroke data (network works here).
2. Author lessons to the gold-standard structure (copy `book2ch2/lesson01.ts`). Bake in organic-memory discipline: recycle prior verbs/vocab into microstories, teach kanji via compounds, use typing/speaking to review old items.
3. Add 2 placement questions tagged with the chapter id in `placement.ts`; ensure the id is in `chapterOrder`.
4. Wire into `stubs.ts` (drop the placeholder, import the real chapter, renumber).
5. Verify (`tsc` + `expo export --platform web`), commit, user pushes via GitHub Desktop.

## Optional / backlog
- A Japanese-accuracy proofread of Ch 5–6 (offered, not yet done).
- Add the theme toggle is already everywhere; TestFlight/App-Store path via EAS is available (`RELEASING.md`) but secondary to the web PWA.
