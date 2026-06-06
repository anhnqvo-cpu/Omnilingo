import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import type { IntroStep as IntroStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: IntroStepData;
  onNext: () => void;
}

export function IntroStep({ data, onNext }: Props) {
  const colors = useColors();
  return (
    <StepShell
      eyebrow="Lesson"
      title={data.title}
      subtitle={data.subtitle}
      ctaLabel="Let's go"
      onCta={onNext}
    >
      <View style={[styles.timerPill, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
        <Feather name="clock" size={13} color={colors.mutedForeground} />
        <Text style={[styles.timerText, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
          ~{data.estimateMinutes} min
        </Text>
      </View>

      <Text style={[styles.heading, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>
        By the end you'll be able to:
      </Text>
      <View style={{ gap: 8, marginTop: 6 }}>
        {data.goals.map((g, i) => (
          <View key={i} style={styles.goalRow}>
            <View style={[styles.goalDot, { backgroundColor: colors.primary }]} />
            <Text style={[styles.goalText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{g}</Text>
          </View>
        ))}
      </View>
    </StepShell>
  );
}

const styles = StyleSheet.create({
  timerPill: { flexDirection: "row", alignSelf: "flex-start", alignItems: "center", gap: 6, paddingHorizontal: 12, paddingVertical: 6, marginTop: 4 },
  timerText: { fontSize: 12 },
  heading: { fontSize: 14, marginTop: 18 },
  goalRow: { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  goalDot: { width: 6, height: 6, borderRadius: 3, marginTop: 8 },
  goalText: { fontSize: 15, lineHeight: 22, flex: 1 },
});
