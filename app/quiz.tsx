import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Animated, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getLearnedItems, type LearnedVocab } from "@/data/curriculum";

const QUIZ_SIZE = 10;

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface QuizQ {
  cardId: string;
  word: string;
  reading: string;
  correct: string;
  options: string[];
}

export default function QuizScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { addXP, markGoal, languageCode, completedLessons } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 : insets.bottom;

  const learnedVocab: LearnedVocab[] = useMemo(
    () => getLearnedItems(languageCode, completedLessons).vocab,
    [languageCode, completedLessons]
  );

  const buildQuiz = (): QuizQ[] => {
    const shuffled: LearnedVocab[] = shuffleArray(learnedVocab).slice(0, Math.min(QUIZ_SIZE, learnedVocab.length));
    return shuffled.map((card: LearnedVocab) => {
      const distractors = learnedVocab
        .filter((v: LearnedVocab) => v.id !== card.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((v: LearnedVocab) => v.meaning);
      // If fewer than 4 vocab items learned, pad with generic decoys.
      const padded = [card.meaning, ...distractors];
      while (padded.length < 4) padded.push(`option ${padded.length + 1}`);
      const options = shuffleArray(padded);
      return { cardId: card.id, word: card.text, reading: card.romaji, correct: card.meaning, options };
    });
  };

  const [questions] = useState<QuizQ[]>(() => buildQuiz());
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (questions.length === 0) {
    return (
      <View style={[styles.doneWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="lock" size={64} color={colors.mutedForeground} />
        <Text style={[styles.doneTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Quiz unlocks after lessons</Text>
        <Text style={[styles.doneSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          Complete a lesson with vocab and we'll build a quiz from what you've actually learned.
        </Text>
        <Pressable onPress={() => router.back()} style={[styles.btn, { backgroundColor: colors.primary, borderRadius: colors.radius, paddingHorizontal: 28 }]}>
          <Text style={[styles.btnText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Back</Text>
        </Pressable>
      </View>
    );
  }

  const question = questions[idx];
  const progress = idx / questions.length;

  const handleAnswer = (opt: string) => {
    if (selected !== null) return;
    setSelected(opt);
    const isCorrect = opt === question.correct;
    if (Platform.OS !== "web") {
      if (isCorrect) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      else Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      addXP(score * 10);
      markGoal("quiz");
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const rank = pct >= 90 ? "Outstanding" : pct >= 70 ? "Good job" : pct >= 50 ? "Keep going" : "Keep practicing";
    return (
      <View style={[styles.doneWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <LinearGradient colors={[colors.primary, colors.indigo]} style={[styles.scoreBubble, { borderRadius: 60 }]}>
          <Text style={[styles.scoreNum, { fontFamily: "Inter_700Bold" }]}>{pct}%</Text>
        </LinearGradient>
        <Text style={[styles.doneTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{rank}!</Text>
        <Text style={[styles.doneSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {score} out of {questions.length} correct
        </Text>
        <View style={[styles.xpPill, { backgroundColor: colors.gold + "22", borderRadius: 24 }]}>
          <Feather name="zap" size={16} color={colors.gold} />
          <Text style={[styles.xpText, { color: colors.gold, fontFamily: "Inter_700Bold" }]}>+{score * 10} XP</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 12, marginTop: 8, width: "100%" }}>
          <Pressable onPress={() => { setDone(false); setIdx(0); setSelected(null); setScore(0); }} style={[styles.btn, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
            <Text style={[styles.btnText, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>Play Again</Text>
          </Pressable>
          <Pressable onPress={() => router.back()} style={[styles.btn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
            <Text style={[styles.btnText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Done</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8, paddingHorizontal: 16 }]}>
        <Pressable onPress={() => router.back()} style={[styles.headerBack, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1, gap: 6 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={[styles.progressLabel, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{idx + 1}/{questions.length}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <Feather name="star" size={14} color={colors.gold} />
              <Text style={[styles.scoreLabel, { color: colors.gold, fontFamily: "Inter_600SemiBold" }]}>{score}</Text>
            </View>
          </View>
          <View style={[styles.progressBar, { backgroundColor: colors.muted }]}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` as any, backgroundColor: colors.primary }]} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, gap: 20, paddingBottom: botPad + 20 }} showsVerticalScrollIndicator={false}>
        <View style={[styles.questionCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
          <Text style={[styles.questionLabel, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>What does this mean?</Text>
          <Text style={[styles.questionWord, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{question.word}</Text>
          <Text style={[styles.questionReading, { color: colors.primary, fontFamily: "Inter_500Medium" }]}>{question.reading}</Text>
        </View>

        <View style={{ gap: 12 }}>
          {question.options.map((opt, i) => {
            const isCorrect = opt === question.correct;
            const isSelected = opt === selected;
            let bg = colors.card;
            let border = colors.border;
            let textColor = colors.foreground;
            if (selected !== null) {
              if (isCorrect) { bg = colors.success + "22"; border = colors.success; textColor = colors.success; }
              else if (isSelected) { bg = colors.destructive + "22"; border = colors.destructive; textColor = colors.destructive; }
            }
            return (
              <Pressable
                key={i}
                onPress={() => handleAnswer(opt)}
                style={({ pressed }) => [
                  styles.option,
                  { backgroundColor: bg, borderColor: border, borderRadius: colors.radius },
                  pressed && selected === null && { opacity: 0.8 },
                ]}
              >
                <Text style={[styles.optionText, { color: textColor, fontFamily: "Inter_500Medium" }]}>{opt}</Text>
                {selected !== null && isCorrect && <Feather name="check-circle" size={20} color={colors.success} />}
                {selected !== null && isSelected && !isCorrect && <Feather name="x-circle" size={20} color={colors.destructive} />}
              </Pressable>
            );
          })}
        </View>

        {selected !== null && (
          <Pressable onPress={handleNext} style={[styles.nextBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
            <Text style={[styles.nextBtnText, { fontFamily: "Inter_600SemiBold" }]}>
              {idx + 1 < questions.length ? "Next" : "See Results"}
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingBottom: 16, flexDirection: "row", alignItems: "center", gap: 16 },
  headerBack: { padding: 10 },
  progressLabel: { fontSize: 13 },
  scoreLabel: { fontSize: 14 },
  progressBar: { height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  questionCard: { padding: 24, gap: 8, borderWidth: 1, alignItems: "center" },
  questionLabel: { fontSize: 13 },
  questionWord: { fontSize: 56 },
  questionReading: { fontSize: 20 },
  option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, borderWidth: 1 },
  optionText: { fontSize: 16, flex: 1, lineHeight: 22 },
  nextBtn: { paddingVertical: 16, alignItems: "center" },
  nextBtnText: { color: "#fff", fontSize: 16 },
  doneWrap: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16, paddingHorizontal: 32 },
  scoreBubble: { width: 120, height: 120, borderRadius: 60, alignItems: "center", justifyContent: "center" },
  scoreNum: { fontSize: 36, color: "#fff" },
  doneTitle: { fontSize: 28 },
  doneSub: { fontSize: 16, textAlign: "center" },
  xpPill: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 20, paddingVertical: 10 },
  xpText: { fontSize: 18 },
  btn: { flex: 1, paddingVertical: 14, alignItems: "center", borderWidth: 1 },
  btnText: { fontSize: 15 },
});
