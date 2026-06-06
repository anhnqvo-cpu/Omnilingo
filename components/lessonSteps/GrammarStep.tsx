import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import { speak } from "@/hooks/useSpeech";
import type { GrammarStep as GrammarStepData, GrammarPattern } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

function hasJP(s: string): boolean {
  return /[぀-ヿ㐀-鿿ｦ-ﾝ]/.test(s);
}

interface Props {
  data: GrammarStepData;
  onNext: () => void;
}

type Phase = { kind: "concept"; idx: number } | { kind: "apply"; idx: number } | { kind: "practice"; qIdx: number } | { kind: "done" };

export function GrammarStep({ data, onNext }: Props) {
  const colors = useColors();
  const [phase, setPhase] = useState<Phase>({ kind: "concept", idx: 0 });

  const patternsCount = data.patterns.length;

  const advanceFromConcept = (i: number) => {
    const pattern = data.patterns[i];
    if (pattern.apply) setPhase({ kind: "apply", idx: i });
    else if (i + 1 < patternsCount) setPhase({ kind: "concept", idx: i + 1 });
    else if (data.practice && data.practice.length > 0) setPhase({ kind: "practice", qIdx: 0 });
    else onNext();
  };

  const advanceFromApply = (i: number) => {
    if (i + 1 < patternsCount) setPhase({ kind: "concept", idx: i + 1 });
    else if (data.practice && data.practice.length > 0) setPhase({ kind: "practice", qIdx: 0 });
    else onNext();
  };

  if (phase.kind === "concept") {
    const p = data.patterns[phase.idx];
    return (
      <StepShell
        eyebrow={`Grammar · ${phase.idx + 1}/${patternsCount}`}
        title={p.title}
        subtitle={p.subtitle}
        ctaLabel={p.apply ? "Quick check" : phase.idx + 1 < patternsCount ? "Next pattern" : "Practice"}
        onCta={() => advanceFromConcept(phase.idx)}
      >
        <ConceptBlock key={`concept-${phase.idx}`} pattern={p} />
      </StepShell>
    );
  }

  if (phase.kind === "apply") {
    const p = data.patterns[phase.idx];
    if (!p.apply) {
      advanceFromApply(phase.idx);
      return null;
    }
    return (
      <StepShell eyebrow="Quick check" title={p.title} subtitle="Apply what you just learned." onCta={undefined}>
        <ApplyBlock
          key={`apply-${phase.idx}`}
          apply={p.apply}
          onConfirm={() => advanceFromApply(phase.idx)}
        />
      </StepShell>
    );
  }

  if (phase.kind === "practice" && data.practice) {
    const q = data.practice[phase.qIdx];
    return (
      <StepShell eyebrow={`Practice · ${phase.qIdx + 1}/${data.practice.length}`} title="Mixed practice" subtitle="Pull together every pattern.">
        <PracticeBlock
          key={`practice-${phase.qIdx}`}
          question={q}
          onNext={() => {
            if (phase.qIdx + 1 < data.practice!.length) setPhase({ kind: "practice", qIdx: phase.qIdx + 1 });
            else onNext();
          }}
        />
      </StepShell>
    );
  }

  return null;
}

function ConceptBlock({ pattern }: { pattern: GrammarPattern }) {
  const colors = useColors();
  const [exIdx, setExIdx] = useState(0);
  const ex = pattern.examples[exIdx];
  return (
    <View style={{ gap: 14 }}>
      <View style={[styles.patternBox, { backgroundColor: colors.muted, borderColor: colors.primary, borderRadius: 14 }]}>
        <Text style={[styles.patternLabel, { color: colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>Pattern</Text>
        <View style={styles.patternRow}>
          {pattern.pattern.map((p, i) => (
            <View
              key={i}
              style={[
                styles.patternToken,
                {
                  backgroundColor: p.highlight ? colors.primary + "33" : "transparent",
                  borderColor: p.highlight ? colors.primary : "transparent",
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={[styles.patternText, { color: p.highlight ? colors.primary : colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>{p.text}</Text>
            </View>
          ))}
        </View>
        <Text style={[styles.patternRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{pattern.patternRomaji}</Text>
      </View>

      <View style={[styles.exampleCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: 14 }]}>
        <View style={styles.exTabs}>
          {pattern.examples.map((_, i) => (
            <Pressable
              key={i}
              onPress={() => setExIdx(i)}
              style={[styles.exTab, i === exIdx && { borderBottomColor: colors.primary }]}
            >
              <Text style={[styles.exTabText, { color: i === exIdx ? colors.primary : colors.mutedForeground, fontFamily: "Inter_600SemiBold" }]}>Ex {i + 1}</Text>
            </Pressable>
          ))}
        </View>
        <View style={{ padding: 16, gap: 10 }}>
          <View style={styles.exHeader}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.exJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{ex.jp}</Text>
              <Text style={[styles.exRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{ex.romaji}</Text>
            </View>
            <SpeakButton text={ex.jp} size={36} />
          </View>
          <View style={styles.breakdownRow}>
            {ex.breakdown.map((b, i) => (
              <View key={i} style={[styles.breakdownChip, { backgroundColor: colors.muted, borderRadius: 8 }]}>
                <Text style={[styles.breakdownJp, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{b.jp}</Text>
                <Text style={[styles.breakdownEn, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{b.en}</Text>
              </View>
            ))}
          </View>
          <Text style={[styles.exEn, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{ex.en}</Text>
        </View>
      </View>

      <View style={[styles.note, { backgroundColor: colors.muted, borderRadius: 12 }]}>
        <Text style={[styles.noteLabel, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>Explanation</Text>
        <Text style={[styles.noteText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{pattern.note}</Text>
      </View>

      {pattern.tip ? (
        <View style={[styles.note, { backgroundColor: colors.muted, borderRadius: 12 }]}>
          <Text style={[styles.noteLabel, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>Tip</Text>
          <Text style={[styles.noteText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{pattern.tip}</Text>
        </View>
      ) : null}
    </View>
  );
}

function ApplyBlock({ apply, onConfirm }: { apply: NonNullable<GrammarPattern["apply"]>; onConfirm: () => void }) {
  const colors = useColors();
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === apply.correct;

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (Platform.OS !== "web") {
      if (i === apply.correct) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      else Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    const opt = apply.options[i];
    if (opt && hasJP(opt)) setTimeout(() => speak(opt), 180);
  };

  return (
    <View style={{ gap: 12 }}>
      <Text style={[styles.questionText, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{apply.prompt}</Text>
      <View style={{ gap: 10 }}>
        {apply.options.map((opt, i) => {
          const isAnswerThis = i === apply.correct;
          const isPickedThis = i === selected;
          let bg = colors.card;
          let border = colors.border;
          let textColor = colors.foreground;
          if (answered) {
            if (isAnswerThis) { bg = colors.success + "22"; border = colors.success; textColor = colors.success; }
            else if (isPickedThis) { bg = colors.destructive + "22"; border = colors.destructive; textColor = colors.destructive; }
          }
          const romaji = apply.optionsRomaji?.[i];
          return (
            <Pressable
              key={i}
              onPress={() => handleSelect(i)}
              style={({ pressed }) => [
                styles.option,
                { backgroundColor: bg, borderColor: border, borderRadius: 12 },
                pressed && !answered && { opacity: 0.85 },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.optionText, { color: textColor, fontFamily: "Inter_500Medium" }]}>{opt}</Text>
                {romaji ? (
                  <Text style={[styles.optionRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{romaji}</Text>
                ) : null}
              </View>
              {answered && isAnswerThis && <Feather name="check" size={18} color={colors.success} />}
              {answered && isPickedThis && !isAnswerThis && <Feather name="x" size={18} color={colors.destructive} />}
            </Pressable>
          );
        })}
      </View>
      {answered ? (
        <View style={[styles.feedback, { backgroundColor: isCorrect ? colors.success + "1A" : colors.accent + "1A", borderColor: isCorrect ? colors.success : colors.accent, borderRadius: 12 }]}>
          <Text style={[styles.feedbackLabel, { color: isCorrect ? colors.success : colors.accent, fontFamily: "Inter_700Bold" }]}>
            {isCorrect ? "Correct! 🎉" : "Not quite — read below"}
          </Text>
          <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{apply.explanation}</Text>
        </View>
      ) : null}
      {answered ? (
        <Pressable
          onPress={onConfirm}
          style={({ pressed }) => [styles.nextBtn, { backgroundColor: colors.primary, borderRadius: 12 }, pressed && { opacity: 0.85 }]}
        >
          <Text style={[styles.nextBtnText, { fontFamily: "Inter_600SemiBold" }]}>Continue</Text>
          <Feather name="arrow-right" size={16} color="#fff" />
        </Pressable>
      ) : null}
    </View>
  );
}

function PracticeBlock({
  question,
  onNext,
}: {
  question: NonNullable<GrammarStepData["practice"]>[number];
  onNext: () => void;
}) {
  const colors = useColors();
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === question.correct;

  // Auto-play the question's jp when it appears.
  useEffect(() => {
    if (question.jp) {
      const t = setTimeout(() => speak(question.jp!, { rate: 0.6 }), 280);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [question.jp]);

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    const opt = question.options[i];
    if (opt && hasJP(opt)) setTimeout(() => speak(opt), 180);
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(
        i === question.correct ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error
      );
    }
  };

  return (
    <View style={{ gap: 12 }}>
      <View style={[styles.questionCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: 12 }]}>
        <Text style={[styles.questionText, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{question.question}</Text>
        {question.jp ? (
          <View style={styles.qJpRow}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.exJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{question.jp}</Text>
              {question.romaji ? (
                <Text style={[styles.exRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{question.romaji}</Text>
              ) : null}
            </View>
            <SpeakButton text={question.jp} size={32} />
          </View>
        ) : null}
        <Text style={[styles.conceptTag, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{question.concept}</Text>
      </View>
      <View style={{ gap: 10 }}>
        {question.options.map((opt, i) => {
          let bg = colors.card;
          let border = colors.border;
          let textColor = colors.foreground;
          if (answered) {
            if (i === question.correct) { bg = colors.success + "22"; border = colors.success; textColor = colors.success; }
            else if (i === selected) { bg = colors.destructive + "22"; border = colors.destructive; textColor = colors.destructive; }
          }
          const romaji = question.optionsRomaji?.[i];
          return (
            <Pressable
              key={i}
              onPress={() => handleSelect(i)}
              style={({ pressed }) => [
                styles.option,
                { backgroundColor: bg, borderColor: border, borderRadius: 12 },
                pressed && !answered && { opacity: 0.85 },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.optionText, { color: textColor, fontFamily: "Inter_500Medium" }]}>{opt}</Text>
                {romaji ? (
                  <Text style={[styles.optionRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{romaji}</Text>
                ) : null}
              </View>
              {answered && i === question.correct && <Feather name="check" size={18} color={colors.success} />}
              {answered && i === selected && i !== question.correct && <Feather name="x" size={18} color={colors.destructive} />}
            </Pressable>
          );
        })}
      </View>
      {answered ? (
        <View style={[styles.feedback, { backgroundColor: isCorrect ? colors.success + "1A" : colors.accent + "1A", borderColor: isCorrect ? colors.success : colors.accent, borderRadius: 12 }]}>
          <Text style={[styles.feedbackLabel, { color: isCorrect ? colors.success : colors.accent, fontFamily: "Inter_700Bold" }]}>
            {isCorrect ? "Correct!" : "Not quite"}
          </Text>
          <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{question.explanation}</Text>
        </View>
      ) : null}
      {answered ? (
        <Pressable
          onPress={onNext}
          style={({ pressed }) => [styles.nextBtn, { backgroundColor: colors.primary, borderRadius: 12 }, pressed && { opacity: 0.85 }]}
        >
          <Text style={[styles.nextBtnText, { fontFamily: "Inter_600SemiBold" }]}>Next</Text>
          <Feather name="arrow-right" size={16} color="#fff" />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  patternBox: { padding: 18, borderWidth: 2, alignItems: "center", gap: 10 },
  patternLabel: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase" },
  patternRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 6 },
  patternToken: { paddingHorizontal: 10, paddingVertical: 6, borderWidth: 1 },
  patternText: { fontSize: 20 },
  patternRomaji: { fontSize: 13, fontStyle: "italic" },
  exampleCard: { borderWidth: 1, overflow: "hidden" },
  exTabs: { flexDirection: "row", borderBottomWidth: StyleSheet.hairlineWidth },
  exTab: { flex: 1, paddingVertical: 10, alignItems: "center", borderBottomWidth: 2, borderBottomColor: "transparent" },
  exTabText: { fontSize: 12 },
  exHeader: { flexDirection: "row", alignItems: "center", gap: 12 },
  exJp: { fontSize: 20 },
  exRomaji: { fontSize: 13, fontStyle: "italic", marginTop: 2 },
  exEn: { fontSize: 15 },
  breakdownRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  breakdownChip: { paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" },
  breakdownJp: { fontSize: 13 },
  breakdownEn: { fontSize: 10 },
  note: { padding: 14, gap: 4 },
  noteLabel: { fontSize: 11, letterSpacing: 1, textTransform: "uppercase" },
  noteText: { fontSize: 14, lineHeight: 20 },
  questionCard: { padding: 14, borderWidth: 1, gap: 10 },
  qJpRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  questionText: { fontSize: 15, lineHeight: 22 },
  conceptTag: { fontSize: 11, letterSpacing: 1, textTransform: "uppercase" },
  option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 14, borderWidth: 1, gap: 10 },
  optionText: { fontSize: 15 },
  optionRomaji: { fontSize: 12, fontStyle: "italic", marginTop: 2 },
  feedback: { padding: 14, gap: 6, borderWidth: 1 },
  feedbackLabel: { fontSize: 13 },
  feedbackText: { fontSize: 13, lineHeight: 18 },
  nextBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 14 },
  nextBtnText: { color: "#fff", fontSize: 15 },
});
