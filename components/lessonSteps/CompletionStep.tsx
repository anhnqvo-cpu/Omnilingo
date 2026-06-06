import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import type { CompletionStep as CompletionStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: CompletionStepData;
  xp: number;
  onFinish: () => void;
}

export function CompletionStep({ data, xp, onFinish }: Props) {
  const colors = useColors();
  return (
    <StepShell
      eyebrow="Lesson complete"
      title={data.badge ? `${data.badge.emoji} ${data.badge.name}` : "🎉 Nice work"}
      subtitle="Here's what you just locked in:"
      ctaLabel="Back to chapter"
      onCta={onFinish}
      centered
    >
      <View style={[styles.xpPill, { backgroundColor: colors.accent + "22", borderRadius: 999 }]}>
        <Feather name="zap" size={16} color={colors.accent} />
        <Text style={[styles.xpText, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>+{xp} XP</Text>
      </View>

      <View style={{ gap: 8, marginTop: 14, alignSelf: "stretch" }}>
        {data.recap.map((line, i) => (
          <View key={i} style={[styles.recapRow, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius - 4 }]}>
            <Feather name="check-circle" size={16} color={colors.success} />
            <Text style={[styles.recapText, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>{line}</Text>
          </View>
        ))}
      </View>
    </StepShell>
  );
}

const styles = StyleSheet.create({
  xpPill: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 18, paddingVertical: 8 },
  xpText: { fontSize: 16 },
  recapRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 12, borderWidth: 1 },
  recapText: { fontSize: 14, flex: 1 },
});
