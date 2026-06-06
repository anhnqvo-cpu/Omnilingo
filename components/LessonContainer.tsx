import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import {
  CharacterStep,
  CompletionStep,
  GrammarStep,
  IntroStep,
  MatchingStep,
  MicrostoryStep,
  PronunciationStep,
  QuizStep,
  SoundsStep,
  VocabStep,
  VocabDrillStep,
  WritingStep,
} from "@/components/lessonSteps";
import type { Lesson, LessonStep } from "@/data/curriculum/types";

interface Props {
  lesson: Lesson;
}

export function LessonContainer({ lesson }: Props) {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { addXP, markLessonComplete, completedLessons } = useApp();

  const [idx, setIdx] = useState(0);
  const [granted, setGranted] = useState(false);

  const total = lesson.steps.length;
  const step = lesson.steps[idx];
  const progress = total <= 1 ? 100 : (idx / (total - 1)) * 100;

  const alreadyDone = completedLessons.includes(lesson.id);
  const topPad = Platform.OS === "web" ? 67 : insets.top;

  // Grant XP + mark complete the moment the learner reaches the completion step
  // (or the last step, if there's no explicit completion step).
  useEffect(() => {
    if (granted) return;
    const reachedCompletion = step?.kind === "completion";
    const reachedLastStep = idx === total - 1;
    if (reachedCompletion || reachedLastStep) {
      setGranted(true);
      if (!alreadyDone) {
        addXP(lesson.xp);
        markLessonComplete(lesson.id);
      }
    }
  }, [idx, step, granted, alreadyDone, addXP, markLessonComplete, lesson.xp, lesson.id, total]);

  const handleNext = () => {
    if (idx + 1 < total) setIdx((i) => i + 1);
    else router.back();
  };

  const handleBack = () => {
    if (idx > 0) setIdx((i) => i - 1);
    else router.back();
  };

  const handleFinish = () => router.back();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8 }]}>
        <Pressable
          onPress={handleBack}
          style={({ pressed }) => [styles.iconBtn, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }, pressed && { opacity: 0.7 }]}
        >
          <Feather name="arrow-left" size={18} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <View style={[styles.progressTrack, { backgroundColor: colors.border, borderRadius: 4 }]}>
            <View style={[styles.progressFill, { width: `${progress}%`, backgroundColor: colors.primary, borderRadius: 4 }]} />
          </View>
          <Text style={[styles.headerLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
            {idx + 1} / {total} · {lesson.title}
          </Text>
        </View>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.iconBtn, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }, pressed && { opacity: 0.7 }]}
        >
          <Feather name="x" size={18} color={colors.foreground} />
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        <StepRenderer step={step} xp={lesson.xp} onNext={handleNext} onFinish={handleFinish} />
      </View>
    </View>
  );
}

function StepRenderer({
  step,
  xp,
  onNext,
  onFinish,
}: {
  step: LessonStep;
  xp: number;
  onNext: () => void;
  onFinish: () => void;
}) {
  switch (step.kind) {
    case "intro":
      return <IntroStep data={step} onNext={onNext} />;
    case "sounds":
      return <SoundsStep data={step} onNext={onNext} />;
    case "character":
      return <CharacterStep data={step} onNext={onNext} />;
    case "writing":
      return <WritingStep data={step} onNext={onNext} />;
    case "vocab":
      return <VocabStep data={step} onNext={onNext} />;
    case "vocabDrill":
      return <VocabDrillStep data={step} onNext={onNext} />;
    case "grammar":
      return <GrammarStep data={step} onNext={onNext} />;
    case "matching":
      return <MatchingStep data={step} onNext={onNext} />;
    case "quiz":
      return <QuizStep data={step} onNext={onNext} />;
    case "microstory":
      return <MicrostoryStep data={step} onNext={onNext} />;
    case "pronunciation":
      return <PronunciationStep data={step} onNext={onNext} />;
    case "completion":
      return <CompletionStep data={step} xp={xp} onFinish={onFinish} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 16, paddingBottom: 12 },
  iconBtn: { padding: 10 },
  progressTrack: { height: 6, overflow: "hidden" },
  progressFill: { height: "100%" },
  headerLabel: { fontSize: 11, marginTop: 6, textAlign: "center" },
});
