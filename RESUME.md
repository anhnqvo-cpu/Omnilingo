# Resume — where we left off

> Update this file at the end of a work session so the next one (any computer, any Claude account) picks up cleanly. Last updated: **2026-06-06**.

## Status: Book 1 COMPLETE ✅
All six chapters of Book 1 are built and live (`data/curriculum/ja/chapter01…06`):

| Ch | Title | Notes |
|----|-------|-------|
| 1–3 | Hiragana (Foundations → Complete) | all hiragana + first grammar |
| 4 | Katakana | café/loanword theme; grammar arc です → ですか → ～が ほしい → ～を ください |
| 5 | First Real Sentences | X は Y です, の/この, い-&な-adjectives (+negative), が すき, question words |
| 6 | Numbers, Time, Money | 0–10,000 (kanji recognized, not written), 〜つ/〜人 counters, time, money/dates; capstone = paying the café bill |

Ch 5–6 introduce **no new kana**, so they have no character/writing steps — they're grammar + vocab + microstory + practice.

## Also done recently
- **Real KanjiVG stroke data** for all kana (`scripts/fetch-strokes.mjs` now includes katakana).
- **Placement test**: "reward mastery" scoring (places past the highest chapter passed; clearing Book 1 → "Caught up with current content"). Answers lock with instant ✓/✗ feedback.
- **Logo**: 4-script globe (`components/OmnilingoLogo.tsx`); light version is the app icon + a cream chip in headers. Mission tagline under the wordmark.
- **Light/dark theme toggle**: floating sun/moon on every tab (`components/ThemeToggle.tsx`), persisted in `AppContext`, status bar follows it. Default dark.
- **PWA auto-update**: poller reloads the app on a new deploy — no reinstall/cache-clearing.

Live: **https://anhnqvo-cpu.github.io/Omnilingo/**

## NEXT UP 👉 Book 2 — Everyday Japanese (PAUSED, the agreed next big step)
This is where the **first kanji** arrive, so `character`/`writing` steps return:
1. Extend the char maps in `scripts/fetch-strokes.mjs` to the target kanji and re-run for real stroke data.
2. Author chapters one at a time to the gold-standard structure (copy `chapter04/lesson01.ts`). Spine in `CURRICULUM.md`: ます-verbs + を/に/で, directions (あります/います), い/な-adj likes, te-form, past tense, first ~80 kanji, short reading.
3. Per new chapter: add 2 placement questions (tagged with its id) in `placement.ts`, ensure the id is in `chapterOrder`.
4. Verify (`tsc` + `expo export --platform web`), commit, user pushes via GitHub Desktop.

## Optional / backlog
- A Japanese-accuracy proofread of Ch 5–6 (offered, not yet done).
- Add the theme toggle is already everywhere; TestFlight/App-Store path via EAS is available (`RELEASING.md`) but secondary to the web PWA.
