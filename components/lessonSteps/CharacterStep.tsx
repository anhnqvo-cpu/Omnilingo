import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import type { CharacterStep as CharacterStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: CharacterStepData;
  onNext: () => void;
}

export function CharacterStep({ data, onNext }: Props) {
  const colors = useColors();
  return (
    <StepShell
      eyebrow={data.script.charAt(0).toUpperCase() + data.script.slice(1)}
      title={`Meet ${data.char}`}
      subtitle={data.phonetic}
      ctaLabel="Continue"
      onCta={onNext}
    >
      <View
        style={[
          styles.heroCard,
          { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius },
        ]}
      >
        <Text style={[styles.bigChar, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{data.char}</Text>
        <View style={styles.metaCol}>
          <Text style={[styles.romaji, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{data.romaji}</Text>
          <SpeakButton text={data.char} />
        </View>
      </View>

      {data.mnemonic ? (
        <View style={[styles.note, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
          <Text style={[styles.noteLabel, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>Remember it like this</Text>
          <Text style={[styles.noteText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{data.mnemonic}</Text>
        </View>
      ) : null}

      {data.words && data.words.length > 0 ? (
        <View style={{ marginTop: 18, gap: 10 }}>
          <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>Words you can now read</Text>
          {data.words.map((w, i) => (
            <View
              key={i}
              style={[styles.wordRow, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius - 4 }]}
            >
              <Text style={[styles.wordEmoji]}>{w.emoji ?? "✦"}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.wordJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{w.jp}</Text>
                <Text style={[styles.wordRomaji, { color: colors.primary, fontFamily: "Inter_500Medium" }]}>{w.romaji}</Text>
                <Text style={[styles.wordMean, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{w.meaning}</Text>
                {w.hint ? (
                  <Text style={[styles.wordHint, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{w.hint}</Text>
                ) : null}
              </View>
              <SpeakButton text={w.jp} size={32} />
            </View>
          ))}
        </View>
      ) : null}
    </StepShell>
  );
}

const styles = StyleSheet.create({
  heroCard: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 24, borderWidth: 1 },
  bigChar: { fontSize: 96, lineHeight: 110 },
  metaCol: { alignItems: "flex-end", gap: 10 },
  romaji: { fontSize: 24 },
  note: { padding: 14, marginTop: 16, gap: 4 },
  noteLabel: { fontSize: 11, letterSpacing: 1, textTransform: "uppercase" },
  noteText: { fontSize: 14, lineHeight: 20 },
  sectionTitle: { fontSize: 14 },
  wordRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderWidth: 1 },
  wordEmoji: { fontSize: 26 },
  wordJp: { fontSize: 18 },
  wordRomaji: { fontSize: 13 },
  wordMean: { fontSize: 13 },
  wordHint: { fontSize: 12, marginTop: 4, fontStyle: "italic" },
});
