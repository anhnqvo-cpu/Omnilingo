import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import { speak, stopSpeech } from "@/hooks/useSpeech";
import type { QuizStep as QuizStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

// Heuristic — does a string contain Japanese characters?
function hasJP(s: string): boolean {
  return /[぀-ヿ㐀-鿿ｦ-ﾝ]/.test(s);
}

interface Props {
  data: QuizStepData;
  onNext: () => void;
}

export function QuizStep({ data, onNext }: Props) {
  const colors = useColors();
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const q = data.questions[qIdx];
  const answered = selected !== null;
  const isCorrect = selected === q.correct;
  const isLast = qIdx === data.questions.length - 1;

  // Auto-play the question's Japanese as the question appears.
  useEffect(() => {
    if (q.jp) {
      const t = setTimeout(() => speak(q.jp!), 280);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [q.jp, qIdx]);
  useEffect(() => () => stopSpeech(), []);

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
    if (Platform.OS !== "web") {
      if (i === q.correct) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      else Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    // Speak the selected option (if it contains Japanese) so it clicks audibly.
    const opt = q.options[i];
    if (opt && hasJP(opt)) {
      setTimeout(() => speak(opt), 180);
    }
  };

  const handleNext = () => {
    if (isLast) onNext();
    else {
      setQIdx((i) => i + 1);
      setSelected(null);
      setShowHint(false);
    }
  };

  return (
    <StepShell
      eyebrow={`Quiz · ${qIdx + 1}/${data.questions.length}`}
      title="Check yourself"
      subtitle={data.intro ?? "No pressure — wrong answers explain why."}
    >
      <View style={styles.progressRow}>
        {data.questions.map((_, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              backgroundColor: i <= qIdx ? colors.primary : colors.border,
            }}
          />
        ))}
      </View>

      <View style={[styles.qCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
        {q.emoji ? <Text style={styles.emoji}>{q.emoji}</Text> : null}
        <Text style={[styles.qPrompt, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{q.question}</Text>
        {q.jp ? (
          <View style={styles.jpRow}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.qJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{q.jp}</Text>
              {q.romaji ? (
                <Text style={[styles.qRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{q.romaji}</Text>
              ) : null}
              {q.meaning ? (
                <Text style={[styles.qMeaning, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{q.meaning}</Text>
              ) : null}
            </View>
            <SpeakButton text={q.jp} size={36} />
          </View>
        ) : null}
        {q.hint && !answered ? (
          <Pressable
            onPress={() => setShowHint((s) => !s)}
            style={[styles.hintBtn, { borderColor: colors.border }]}
          >
            <Feather name="help-circle" size={14} color={colors.mutedForeground} />
            <Text style={[styles.hintBtnText, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
              {showHint ? "Hide hint" : "Hint"}
            </Text>
          </Pressable>
        ) : null}
        {showHint && q.hint ? (
          <Text style={[styles.hintText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{q.hint}</Text>
        ) : null}
      </View>

      <View style={{ gap: 10 }}>
        {q.options.map((opt, i) => {
          let bg = colors.card;
          let border = colors.border;
          let textColor = colors.foreground;
          if (answered) {
            if (i === q.correct) { bg = colors.success + "22"; border = colors.success; textColor = colors.success; }
            else if (i === selected) { bg = colors.destructive + "22"; border = colors.destructive; textColor = colors.destructive; }
          }
          const romaji = q.optionsRomaji?.[i];
          return (
            <Pressable
              key={i}
              onPress={() => handleSelect(i)}
              style={({ pressed }) => [
                styles.option,
                { backgroundColor: bg, borderColor: border, borderRadius: colors.radius - 4 },
                pressed && !answered && { opacity: 0.85 },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.optionText, { color: textColor, fontFamily: "Inter_500Medium" }]}>{opt}</Text>
                {romaji ? (
                  <Text style={[styles.optionRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{romaji}</Text>
                ) : null}
              </View>
              {answered && i === q.correct && <Feather name="check" size={18} color={colors.success} />}
              {answered && i === selected && i !== q.correct && <Feather name="x" size={18} color={colors.destructive} />}
            </Pressable>
          );
        })}
      </View>

      {answered ? (
        <View style={[styles.feedback, { backgroundColor: isCorrect ? colors.success + "1A" : colors.accent + "1A", borderColor: isCorrect ? colors.success : colors.accent, borderRadius: 12 }]}>
          <Text style={[styles.feedbackLabel, { color: isCorrect ? colors.success : colors.accent, fontFamily: "Inter_700Bold" }]}>
            {isCorrect ? "Correct!" : "Not quite"}
          </Text>
          <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{q.explanation}</Text>
        </View>
      ) : null}

      {answered ? (
        <Pressable
          onPress={handleNext}
          style={({ pressed }) => [styles.nextBtn, { backgroundColor: colors.primary, borderRadius: colors.radius - 4 }, pressed && { opacity: 0.85 }]}
        >
          <Text style={[styles.nextBtnText, { fontFamily: "Inter_600SemiBold" }]}>
            {isLast ? `Finish (${score}/${data.questions.length})` : "Next question"}
          </Text>
          <Feather name="arrow-right" size={16} color="#fff" />
        </Pressable>
      ) : null}
    </StepShell>
  );
}

const styles = StyleSheet.create({
  progressRow: { flexDirection: "row", gap: 4, marginBottom: 12 },
  qCard: { padding: 16, borderWidth: 1, gap: 10, alignItems: "flex-start" },
  emoji: { fontSize: 32 },
  qPrompt: { fontSize: 16, lineHeight: 22 },
  jpRow: { flexDirection: "row", alignItems: "center", gap: 12, width: "100%" },
  qJp: { fontSize: 28 },
  qRomaji: { fontSize: 13, fontStyle: "italic", marginTop: 2 },
  qMeaning: { fontSize: 13, marginTop: 2 },
  hintBtn: { flexDirection: "row", gap: 6, alignItems: "center", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, borderWidth: 1 },
  hintBtnText: { fontSize: 12 },
  hintText: { fontSize: 13, lineHeight: 18, fontStyle: "italic" },
  option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 14, borderWidth: 1, gap: 10 },
  optionText: { fontSize: 15 },
  optionRomaji: { fontSize: 12, fontStyle: "italic", marginTop: 2 },
  feedback: { padding: 14, gap: 6, marginTop: 14, borderWidth: 1 },
  feedbackLabel: { fontSize: 13 },
  feedbackText: { fontSize: 13, lineHeight: 18 },
  nextBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 14, marginTop: 12 },
  nextBtnText: { color: "#fff", fontSize: 15 },
});
