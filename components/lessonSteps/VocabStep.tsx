import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import type { VocabStep as VocabStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: VocabStepData;
  onNext: () => void;
}

export function VocabStep({ data, onNext }: Props) {
  const colors = useColors();
  return (
    <StepShell
      eyebrow="Vocabulary"
      title="New words"
      subtitle={data.intro ?? "Tap each card to hear the word. Notice the example sentences."}
      ctaLabel="I've studied these"
      onCta={onNext}
    >
      <View style={{ gap: 12 }}>
        {data.words.map((w, i) => (
          <View
            key={i}
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
          >
            <View style={styles.top}>
              <Text style={[styles.emoji]}>{w.emoji ?? "📘"}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.jp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{w.text}</Text>
                <Text style={[styles.romaji, { color: colors.primary, fontFamily: "Inter_500Medium" }]}>{w.romaji}</Text>
                <Text style={[styles.meaning, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{w.meaning}</Text>
              </View>
              <SpeakButton text={w.text} size={36} />
            </View>
            {w.example ? (
              <View style={[styles.example, { borderTopColor: colors.border }]}>
                <Text style={[styles.exJp, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>{w.example.jp}</Text>
                <Text style={[styles.exRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{w.example.romaji}</Text>
                <Text style={[styles.exEn, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{w.example.en}</Text>
              </View>
            ) : null}
          </View>
        ))}
      </View>
    </StepShell>
  );
}

const styles = StyleSheet.create({
  card: { padding: 14, borderWidth: 1, gap: 12 },
  top: { flexDirection: "row", gap: 12, alignItems: "center" },
  emoji: { fontSize: 28 },
  jp: { fontSize: 20 },
  romaji: { fontSize: 13, marginTop: 2 },
  meaning: { fontSize: 13, marginTop: 2 },
  example: { paddingTop: 12, borderTopWidth: StyleSheet.hairlineWidth, gap: 2 },
  exJp: { fontSize: 15 },
  exRomaji: { fontSize: 12, fontStyle: "italic" },
  exEn: { fontSize: 12 },
});
