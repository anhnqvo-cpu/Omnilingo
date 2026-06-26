import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getLearnedItems } from "@/data/curriculum";
import { SpeakButton } from "@/components/SpeakButton";
import { StrokeWriter } from "@/components/StrokeWriter";

const SESSION_SIZE = 12;

/**
 * Daily Review — one adaptive session that pulls everything DUE today across
 * vocab, grammar, and writing, driven by the spaced-repetition engine in
 * AppContext. Vocab + grammar are graded multiple-choice; writing is a
 * stroke-practice card. Each answer reschedules its SRS card, so the review
 * adapts to what you keep getting wrong. Grammar and writing enter the SRS
 * schedule here for the first time (ids prefixed g: and w:).
 */

type ReviewItem =
  | {
      kind: "vocab";
      cardId: string;
      prompt: string;
      emoji?: string;
      options: Array<{ text: string; romaji: string }>;
      correct: number;
      answerJp: string;
      answerRomaji: string;
    }
  | {
      kind: "grammar";
      cardId: string;
      prompt: string;
      options: string[];
      optionsRomaji?: string[];
      correct: number;
      explanation: string;
    }
  | { kind: "writing"; cardId: string; char: string; romaji: string };

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function ReviewScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { srsData, updateSRS, addXP, markGoal, streak, languageCode, completedLessons } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 : insets.bottom;

  // Build the mixed session ONCE (useState initializer), so grading a card —
  // which mutates srsData — doesn't reshuffle the list mid-session.
  const [session] = useState<ReviewItem[]>(() => {
    const now = Date.now();
    const learned = getLearnedItems(languageCode, completedLessons);
    const isDue = (id: string) => {
      const c = srsData[id];
      return !c || c.dueDate <= now;
    };

    // Vocab → meaning-to-Japanese multiple choice.
    const vocabPool = learned.vocab;
    const vocabItems: ReviewItem[] = vocabPool
      .filter((v) => isDue(v.id))
      .map((v) => {
        const distractors = shuffle(vocabPool.filter((o) => o.text !== v.text))
          .slice(0, 3)
          .map((o) => ({ text: o.text, romaji: o.romaji }));
        const options = shuffle([{ text: v.text, romaji: v.romaji }, ...distractors]);
        return {
          kind: "vocab" as const,
          cardId: v.id,
          prompt: v.meaning,
          emoji: v.emoji,
          options,
          correct: options.findIndex((o) => o.text === v.text),
          answerJp: v.text,
          answerRomaji: v.romaji,
        };
      })
      // Need at least 2 options to be a real question.
      .filter((it) => it.kind === "vocab" && it.options.length >= 2);

    // Grammar → reuse each pattern's built-in `apply` quick-check.
    const grammarItems: ReviewItem[] = learned.grammar
      .filter((g) => g.pattern.apply)
      .filter((g) => isDue(`g:${g.pattern.id}`))
      .map((g) => {
        const a = g.pattern.apply!;
        return {
          kind: "grammar" as const,
          cardId: `g:${g.pattern.id}`,
          prompt: a.prompt,
          options: a.options,
          optionsRomaji: a.optionsRomaji,
          correct: a.correct,
          explanation: a.explanation,
        };
      });

    // Writing → stroke practice for due characters.
    const charRomaji: Record<string, string> = {};
    for (const c of learned.characters) charRomaji[c.char] = c.romaji;
    const writingItems: ReviewItem[] = learned.writingChars
      .filter((c) => isDue(`w:${c}`))
      .map((c) => ({ kind: "writing" as const, cardId: `w:${c}`, char: c, romaji: charRomaji[c] ?? "" }));

    // Interleave the three types (round-robin) so the session feels varied,
    // then cap it so a single day's review stays short.
    const lists = [shuffle(vocabItems), shuffle(grammarItems), shuffle(writingItems)];
    const mixed: ReviewItem[] = [];
    let added = true;
    while (added) {
      added = false;
      for (const list of lists) {
        const next = list.shift();
        if (next) {
          mixed.push(next);
          added = true;
        }
      }
    }
    return mixed.slice(0, SESSION_SIZE);
  });

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const counts = useState(() => {
    const c = { vocab: 0, grammar: 0, writing: 0 };
    for (const it of session) c[it.kind]++;
    return c;
  })[0];

  // ─── Empty state ───────────────────────────────────────────────────────────
  if (session.length === 0) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="check-circle" size={64} color={colors.success} />
        <Text style={[styles.bigTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>All caught up!</Text>
        <Text style={[styles.sub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          Nothing's due for review right now. Spaced repetition needs spacing — finish a new lesson, or come back later.
        </Text>
        <Pressable onPress={() => router.back()} style={[styles.cta, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
          <Text style={[styles.ctaText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  // ─── Summary state ───────────────────────────────────────────────────────────
  if (done) {
    const good = results.filter(Boolean).length;
    return (
      <View style={[styles.center, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="award" size={64} color={colors.gold} />
        <Text style={[styles.bigTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Review done!</Text>
        <Text style={[styles.sub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {good}/{results.length} correct · reviewed {counts.vocab} vocab, {counts.grammar} grammar, {counts.writing} writing
        </Text>
        <View style={styles.summaryPills}>
          <View style={[styles.pill, { backgroundColor: colors.gold + "22", borderRadius: 24 }]}>
            <Feather name="zap" size={16} color={colors.gold} />
            <Text style={[styles.pillText, { color: colors.gold, fontFamily: "Inter_700Bold" }]}>+{session.length * 5} XP</Text>
          </View>
          <View style={[styles.pill, { backgroundColor: colors.primary + "22", borderRadius: 24 }]}>
            <Feather name="zap" size={16} color={colors.primary} />
            <Text style={[styles.pillText, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>{streak} day streak</Text>
          </View>
        </View>
        <Pressable onPress={() => router.back()} style={[styles.cta, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
          <Text style={[styles.ctaText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Finish</Text>
        </Pressable>
      </View>
    );
  }

  const item = session[idx];
  const progress = idx / session.length;

  // Advance to the next card (or finish), recording the result + grading SRS.
  const advance = (correct: boolean) => {
    updateSRS(item.cardId, correct ? 3 : 1);
    const nextResults = [...results, correct];
    setResults(nextResults);
    setSelected(null);
    if (idx + 1 >= session.length) {
      addXP(session.length * 5);
      markGoal("quiz");
      if (counts.vocab > 0) markGoal("vocab");
      if (counts.writing > 0) markGoal("writing");
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  };

  const typeLabel = item.kind === "vocab" ? "Vocabulary" : item.kind === "grammar" ? "Grammar" : "Writing";
  const typeIcon = item.kind === "vocab" ? "layers" : item.kind === "grammar" ? "book-open" : "edit-3";

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header + progress */}
      <View style={[styles.header, { paddingTop: topPad + 8 }]}>
        <Pressable onPress={() => router.back()} style={[styles.headerBack, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1, gap: 6 }}>
          <Text style={[styles.progressNum, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{idx + 1} / {session.length}</Text>
          <View style={[styles.progressBar, { backgroundColor: colors.muted }]}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` as any, backgroundColor: colors.primary }]} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: botPad + 24, gap: 16 }} showsVerticalScrollIndicator={false}>
        <View style={[styles.typeChip, { backgroundColor: colors.muted, borderRadius: 20 }]}>
          <Feather name={typeIcon as any} size={13} color={colors.mutedForeground} />
          <Text style={[styles.typeChipText, { color: colors.mutedForeground, fontFamily: "Inter_600SemiBold" }]}>{typeLabel} review</Text>
        </View>

        {item.kind === "writing" ? (
          <View style={{ gap: 12 }}>
            <Text style={[styles.qPrompt, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
              Write this character{item.romaji ? ` — “${item.romaji}”` : ""}
            </Text>
            <StrokeWriter key={item.cardId} char={item.char} onComplete={() => advance(true)} />
          </View>
        ) : (
          <McqCard
            key={item.cardId}
            prompt={item.kind === "vocab" ? `What's the Japanese for “${item.prompt}”?` : item.prompt}
            emoji={item.kind === "vocab" ? item.emoji : undefined}
            options={item.kind === "vocab" ? item.options.map((o) => o.text) : item.options}
            optionsRomaji={item.kind === "vocab" ? item.options.map((o) => o.romaji) : item.optionsRomaji}
            correct={item.correct}
            selected={selected}
            onSelect={setSelected}
            explanation={
              item.kind === "grammar"
                ? item.explanation
                : `${item.answerJp}（${item.answerRomaji}）= ${item.prompt}`
            }
            speakText={item.kind === "vocab" ? item.answerJp : item.options[item.correct]}
            onContinue={() => advance(selected === item.correct)}
          />
        )}
      </ScrollView>
    </View>
  );
}

// ─── Shared multiple-choice card (vocab + grammar) ────────────────────────────
function McqCard(props: {
  prompt: string;
  emoji?: string;
  options: string[];
  optionsRomaji?: string[];
  correct: number;
  selected: number | null;
  onSelect: (i: number) => void;
  explanation: string;
  speakText: string;
  onContinue: () => void;
}) {
  const colors = useColors();
  const { prompt, emoji, options, optionsRomaji, correct, selected, onSelect, explanation, speakText, onContinue } = props;
  const answered = selected !== null;

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8, alignItems: "center" }}>
        {emoji ? <Text style={{ fontSize: 44 }}>{emoji}</Text> : null}
        <Text style={[styles.qPrompt, { color: colors.foreground, fontFamily: "Inter_700Bold", textAlign: "center" }]}>{prompt}</Text>
      </View>

      <View style={{ gap: 10 }}>
        {options.map((opt, i) => {
          const isCorrect = i === correct;
          const isPicked = selected === i;
          let bg = colors.card;
          let border = colors.border;
          if (answered && isCorrect) {
            bg = colors.success + "22";
            border = colors.success;
          } else if (answered && isPicked && !isCorrect) {
            bg = colors.destructive + "22";
            border = colors.destructive;
          }
          return (
            <Pressable
              key={i}
              disabled={answered}
              onPress={() => onSelect(i)}
              style={({ pressed }) => [
                styles.option,
                { backgroundColor: bg, borderColor: border, borderRadius: colors.radius - 2 },
                pressed && !answered && { opacity: 0.85 },
              ]}
            >
              <Text style={[styles.optionText, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{opt}</Text>
              {optionsRomaji?.[i] ? (
                <Text style={[styles.optionRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{optionsRomaji[i]}</Text>
              ) : null}
              {answered && isCorrect ? (
                <Feather name="check" size={18} color={colors.success} style={styles.optionIcon} />
              ) : answered && isPicked ? (
                <Feather name="x" size={18} color={colors.destructive} style={styles.optionIcon} />
              ) : null}
            </Pressable>
          );
        })}
      </View>

      {answered ? (
        <View style={[styles.feedback, { backgroundColor: colors.muted, borderRadius: 12 }]}>
          <View style={styles.feedbackHead}>
            <Text
              style={[
                styles.feedbackLabel,
                { color: selected === correct ? colors.success : colors.destructive, fontFamily: "Inter_700Bold" },
              ]}
            >
              {selected === correct ? "Correct!" : "Not quite"}
            </Text>
            <SpeakButton text={speakText} size={30} />
          </View>
          <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{explanation}</Text>
        </View>
      ) : null}

      {answered ? (
        <Pressable onPress={onContinue} style={[styles.cta, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
          <Text style={[styles.ctaText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Continue</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingBottom: 14, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", gap: 14 },
  headerBack: { padding: 10 },
  progressNum: { fontSize: 13 },
  progressBar: { height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },

  typeChip: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 6 },
  typeChipText: { fontSize: 11.5, letterSpacing: 0.3 },

  qPrompt: { fontSize: 20, lineHeight: 28 },

  option: { padding: 16, borderWidth: 1, minHeight: 56, justifyContent: "center" },
  optionText: { fontSize: 18 },
  optionRomaji: { fontSize: 12, marginTop: 2 },
  optionIcon: { position: "absolute", top: 12, right: 12 },

  feedback: { padding: 14, gap: 6 },
  feedbackHead: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  feedbackLabel: { fontSize: 14 },
  feedbackText: { fontSize: 14, lineHeight: 20 },

  center: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16, paddingHorizontal: 32 },
  bigTitle: { fontSize: 26, textAlign: "center" },
  sub: { fontSize: 15, textAlign: "center", lineHeight: 22 },
  summaryPills: { flexDirection: "row", gap: 10 },
  pill: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 18, paddingVertical: 10 },
  pillText: { fontSize: 15 },
  cta: { paddingHorizontal: 40, paddingVertical: 14, alignItems: "center" },
  ctaText: { fontSize: 15 },
});
