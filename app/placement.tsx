import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { getPlacementTest, scorePlacement } from "@/data/curriculum";
import type { PlacementResult } from "@/data/curriculum";
import { useColors } from "@/hooks/useColors";
import { speak } from "@/hooks/useSpeech";

function hasJP(s: string): boolean {
  return /[぀-ヿ㐀-鿿ｦ-ﾝ]/.test(s);
}

export default function PlacementScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { languageCode, applyPlacement, completeOnboarding } = useApp();

  const test = useMemo(() => getPlacementTest(languageCode), [languageCode]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<PlacementResult | null>(null);

  const topPad = (Platform.OS === "web" ? 24 : insets.top) + 12;

  // No test available for this language — fall back to beginner.
  if (!test) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background, paddingTop: topPad }]}>
        <Text style={[styles.resultTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          No placement test yet
        </Text>
        <Text style={[styles.resultSummary, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          We'll start you at the beginning for this language.
        </Text>
        <PrimaryButton
          label="Start at the beginning"
          onPress={() => {
            completeOnboarding();
            router.replace("/(tabs)");
          }}
        />
      </View>
    );
  }

  const q = test.questions[idx];
  const total = test.questions.length;
  const isLast = idx === total - 1;
  const answered = selected !== null;

  // Selecting is never locked — you can change your answer until you tap Next.
  const choose = (i: number) => {
    setSelected(i);
    if (hasJP(test.questions[idx].options[i])) speak(test.questions[idx].options[i]);
  };

  const isCorrect = answered && selected === q.correct;

  const next = () => {
    const nextAnswers = { ...answers, [q.id]: selected as number };
    setAnswers(nextAnswers);
    if (isLast) {
      setResult(scorePlacement(languageCode, nextAnswers));
    } else {
      setIdx((n) => n + 1);
      setSelected(null);
    }
  };

  const finish = () => {
    if (!result) return;
    applyPlacement(result.lessonIdsToComplete, result.levelLabel);
    router.replace("/(tabs)");
  };

  // ── Result screen ──
  if (result) {
    const pct = result.total === 0 ? 0 : Math.round((result.correct / result.total) * 100);
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{ paddingTop: topPad + 12, paddingBottom: insets.bottom + 32, paddingHorizontal: 22, gap: 22 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center", gap: 6 }}>
          <View style={[styles.badge, { backgroundColor: colors.success + "22" }]}>
            <Feather name="award" size={30} color={colors.success} />
          </View>
          <Text style={[styles.resultEyebrow, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>YOUR LEVEL</Text>
          <Text style={[styles.resultTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
            {result.levelLabel}
          </Text>
          <Text style={[styles.resultScore, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
            {result.correct}/{result.total} correct · {pct}%
          </Text>
        </View>

        <Text style={[styles.resultSummary, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>
          {result.summary}
        </Text>

        <View style={{ gap: 8 }}>
          <Text style={[styles.sectionLabel, { color: colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>BY SKILL</Text>
          {result.bySkill.map((s) => {
            const full = s.correct === s.total;
            return (
              <View
                key={s.skill}
                style={[styles.skillRow, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius - 4 }]}
              >
                <Feather
                  name={full ? "check-circle" : "alert-circle"}
                  size={16}
                  color={full ? colors.success : colors.accent}
                />
                <Text style={[styles.skillName, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>{s.skill}</Text>
                <Text style={[styles.skillScore, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
                  {s.correct}/{s.total}
                </Text>
              </View>
            );
          })}
        </View>

        <PrimaryButton label="Start here" onPress={finish} />
        <Pressable onPress={() => router.replace("/(tabs)")} style={{ alignItems: "center", paddingVertical: 6 }}>
          <Text style={[styles.linkText, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
            Maybe later
          </Text>
        </Pressable>
      </ScrollView>
    );
  }

  // ── Quiz screen ──
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad, paddingBottom: insets.bottom + 110, paddingHorizontal: 22, gap: 18 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Feather name="x" size={22} color={colors.mutedForeground} />
        </Pressable>
        <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
          <View style={[styles.progressFill, { width: `${((idx + (answered ? 1 : 0)) / total) * 100}%`, backgroundColor: colors.primary }]} />
        </View>
        <Text style={[styles.progressLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
          {idx + 1}/{total}
        </Text>
      </View>

      <Text style={[styles.skillTag, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>{q.skill.toUpperCase()}</Text>
      <Text style={[styles.prompt, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{q.prompt}</Text>

      {q.jp ? (
        <Pressable
          onPress={() => speak(q.jp!)}
          style={[styles.jpCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
        >
          <Text style={[styles.jpText, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{q.jp}</Text>
          {q.meaning ? (
            <Text style={[styles.jpMeaning, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{q.meaning}</Text>
          ) : null}
          <View style={styles.speakHint}>
            <Feather name="volume-2" size={13} color={colors.primary} />
            <Text style={[styles.speakHintText, { color: colors.primary, fontFamily: "Inter_500Medium" }]}>Tap to hear</Text>
          </View>
        </Pressable>
      ) : null}

      <View style={{ gap: 10, marginTop: 4 }}>
        {q.options.map((opt, i) => {
          const isSel = selected === i;
          // Instant feedback on the chosen option: green if right, red if wrong.
          const stateColor = isSel ? (i === q.correct ? colors.success : colors.destructive) : colors.border;
          return (
            <Pressable
              key={i}
              onPress={() => choose(i)}
              style={({ pressed }) => [
                styles.option,
                {
                  backgroundColor: isSel ? stateColor + "22" : colors.card,
                  borderColor: stateColor,
                  borderRadius: colors.radius - 2,
                },
                pressed && { opacity: 0.9 },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.optionText, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{opt}</Text>
                {q.optionsRomaji?.[i] ? (
                  <Text style={[styles.optionRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                    {q.optionsRomaji[i]}
                  </Text>
                ) : null}
              </View>
              {isSel ? (
                <Feather
                  name={i === q.correct ? "check-circle" : "x-circle"}
                  size={18}
                  color={i === q.correct ? colors.success : colors.destructive}
                />
              ) : null}
            </Pressable>
          );
        })}
      </View>

      {answered ? (
        <View style={styles.feedbackRow}>
          <Feather
            name={isCorrect ? "check-circle" : "x-circle"}
            size={16}
            color={isCorrect ? colors.success : colors.destructive}
          />
          <Text
            style={[
              styles.feedbackText,
              { color: isCorrect ? colors.success : colors.destructive, fontFamily: "Inter_600SemiBold" },
            ]}
          >
            {isCorrect ? "Correct!" : "Not quite — change your answer, or tap Next to keep it."}
          </Text>
        </View>
      ) : null}

      <View style={{ height: 8 }} />
      <PrimaryButton label={isLast ? "See my level" : "Next"} disabled={!answered} onPress={next} />
    </ScrollView>
  );
}

function PrimaryButton({ label, onPress, disabled }: { label: string; onPress: () => void; disabled?: boolean }) {
  const colors = useColors();
  return (
    <Pressable onPress={disabled ? undefined : onPress} style={({ pressed }) => [pressed && !disabled && { opacity: 0.9 }]}>
      <LinearGradient
        colors={disabled ? [colors.muted, colors.muted] : [colors.primary, colors.indigo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.primaryBtn, { borderRadius: colors.radius, opacity: disabled ? 0.6 : 1 }]}
      >
        <Text style={[styles.primaryBtnText, { fontFamily: "Inter_700Bold" }]}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", gap: 14, paddingHorizontal: 28 },

  progressTrack: { flex: 1, height: 8, borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 4 },
  progressLabel: { fontSize: 12, width: 38, textAlign: "right" },

  skillTag: { fontSize: 11, letterSpacing: 1.2 },
  prompt: { fontSize: 19, lineHeight: 26 },

  jpCard: { padding: 18, alignItems: "center", gap: 6, borderWidth: 1 },
  jpText: { fontSize: 40, letterSpacing: 2 },
  jpMeaning: { fontSize: 13 },
  speakHint: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 2 },
  speakHintText: { fontSize: 12 },

  option: { flexDirection: "row", alignItems: "center", gap: 10, padding: 16, borderWidth: 1.5 },
  optionText: { fontSize: 17 },
  optionRomaji: { fontSize: 13, marginTop: 2 },
  feedbackRow: { flexDirection: "row", alignItems: "center", gap: 7, marginTop: 2 },
  feedbackText: { fontSize: 14, flex: 1 },

  primaryBtn: { paddingVertical: 16, alignItems: "center" },
  primaryBtnText: { color: "#fff", fontSize: 16 },
  linkText: { fontSize: 14 },

  badge: { width: 64, height: 64, borderRadius: 32, alignItems: "center", justifyContent: "center", marginBottom: 4 },
  resultEyebrow: { fontSize: 11, letterSpacing: 1.5 },
  resultTitle: { fontSize: 24, textAlign: "center", lineHeight: 30 },
  resultScore: { fontSize: 14, marginTop: 2 },
  resultSummary: { fontSize: 15, lineHeight: 22, textAlign: "center" },
  sectionLabel: { fontSize: 11, letterSpacing: 1.2 },
  skillRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 12, borderWidth: 1 },
  skillName: { fontSize: 14, flex: 1 },
  skillScore: { fontSize: 13 },
});
