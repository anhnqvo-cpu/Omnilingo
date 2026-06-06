# Omnilingo Curriculum — Beginner → Fluent

This is the long-term spine. It maps CEFR levels (A1–C2) to JLPT levels (N5–N1) and to **books** (the unit a user buys/owns) → **chapters** → **lessons** → **steps**. Japanese is the first language; the spine is designed so other languages can plug in by language code.

## Design principles

- **Foundations first.** Phonology and script before vocab. Vocab before grammar. Grammar before free production.
- **Comprehensible input every lesson.** Every lesson includes a `microstory` step at i+1 difficulty — content the learner mostly understands, with one or two new things to absorb.
- **Textbook depth, app interactivity.** Every new pattern gets: a clear rule, a worked example, a non-example (common mistake), a guided practice, and a graded quiz. We don't ship one-liner explanations.
- **Stroke-guided writing for CJK.** Watch → guided trace → freehand. Built on KanjiVG path data so it scales to katakana and kanji.
- **Spaced review.** Every new card (vocab, kana, kanji, grammar pattern) becomes an SRS card. The Practice tab is where retrieval happens.
- **A lesson is 5–10 minutes.** Multiple step types per lesson, so a session feels like a chapter of a textbook, not a Duolingo treadmill.

## Step types

A lesson is an ordered list of steps. The same step type can appear many times in one lesson with different content.

| Type | Purpose |
| --- | --- |
| `intro` | Set the scene, motivation, what the learner will be able to do at the end. |
| `sounds` | Phonology — listen and repeat a sound or syllable. |
| `character` | Introduce a kana/kanji with reading, mnemonic, and stroke-order preview. |
| `writing` | Stroke-guided writing practice (watch → trace → freehand). |
| `vocab` | Word cards with reading, meaning, example sentence. Tap to play TTS. |
| `grammar` | Pattern + rule + 2–3 examples + word-by-word breakdown + tip. |
| `matching` | Drag/tap to match pairs (kana↔romaji, word↔meaning, phrase↔situation). |
| `quiz` | Multiple-choice or short-answer with feedback and explanation. |
| `microstory` | Mini-dialogue or short text using only known material + 1–2 new items. **Always present.** |
| `pronunciation` | Speak aloud, optional mic check. |
| `completion` | XP, badge, "what you learned", suggested next lesson. |

## Books

Each book is a publishable unit (~6–10 chapters, ~30–60 lessons, ~10–30 hours of study). On the app-store path, books are how we monetize: Book 1 free, later books unlocked by subscription or single purchase.

### Book 1 — Foundations (A1 / JLPT N5 starter, ~6 chapters)

The "I can read kana and survive a conversation" book.

- **Ch 1 — Hiragana Foundations.** Vowels + greetings. 5 lessons.
- **Ch 2 — Hiragana Continued.** k/s/t/n/h rows. 5 lessons.
- **Ch 3 — Hiragana Complete.** m/y/r/w/n + dakuten/handakuten/yōon/small つ. 5 lessons.
- **Ch 4 — Katakana.** Full katakana + loanwords. 5 lessons.
- **Ch 5 — First Sentences.** です・は・の・か, self-introduction, this/that, basic adjectives. 6 lessons.
- **Ch 6 — Numbers, Time, Money.** 0–10000, counters, days/months, ¥. 5 lessons.

### Book 2 — Everyday Japanese (A2 / N5 complete, ~7 chapters)

- Ch 1 — Basic verbs (ます-form), particles を・に・で.
- Ch 2 — Asking and giving directions, location (あります／います).
- Ch 3 — い-adjectives and な-adjectives. Likes and dislikes.
- Ch 4 — Te-form: requests, ongoing actions, sequences.
- Ch 5 — Past tense: ました／でした.
- Ch 6 — First 80 kanji (with stroke-guided writing).
- Ch 7 — Reading: short diary entries, menus, signs.

### Book 3 — Conversational Japanese (B1 / N4, ~7 chapters)

- Plain form, casual speech, ない-form, potential form.
- Volitional, conditional, comparisons.
- Giving/receiving (あげる／もらう／くれる).
- Relative clauses (modifying nouns with verbs).
- ~200 more kanji.
- Reading: short stories, social-media posts.

### Book 4 — Working Japanese (B2 / N3, ~6 chapters)

- Keigo (敬語) — sonkeigo, kenjōgo, teineigo.
- Causative, passive, causative-passive.
- Conditional patterns: と／ば／たら／なら.
- ~500 cumulative kanji.
- Reading: news headlines, op-eds, workplace email.

### Book 5 — Fluent Japanese (C1 / N2, ~5 chapters)

- Nuance particles: は／が／も／さえ／こそ／しか.
- Advanced grammar (〜ものの, 〜ばかりか, 〜ようがない, etc.).
- ~1000 cumulative kanji.
- Reading: full novels (excerpts), business reports.

### Book 6 — Mastery (C2 / N1, ~4 chapters)

- Literary and archaic forms.
- Idioms, yojijukugo, proverbs.
- ~2000 cumulative kanji.
- Reading: classical literature, technical writing.

## Comprehensible input thread

Each chapter has a recurring cast (Hana, Tanaka, Kenji, Yui) whose lives the learner follows. Book 1 they're introduced; by Book 6 the learner is reading them deal with adult problems. This is the "world" the learner is invested in — same idea as why people finish entire Netflix series but quit textbooks.

## Multi-language note

Curriculum is keyed by language code (`ja`, `ko`, `zh`, `es`, …). Step types are language-agnostic. Language-specific data (stroke data, kana/hangul/zhuyin tables) lives under `data/curriculum/<lang>/`. When we add Korean, we reuse every step type and add `data/curriculum/ko/`.
