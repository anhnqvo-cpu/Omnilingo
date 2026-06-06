import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { speak, stopSpeech } from "@/hooks/useSpeech";
import type { SoundsStep as SoundsStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: SoundsStepData;
  onNext: () => void;
}

export function SoundsStep({ data, onNext }: Props) {
  const colors = useColors();
  const [idx, setIdx] = React.useState(0);
  const sound = data.sounds[idx];
  const isLast = idx === data.sounds.length - 1;

  // Auto-play whenever the current sound changes. Adaptive rate picks 0.3 for
  // single-kana sounds — slow enough to actually hear.
  useEffect(() => {
    if (!sound) return;
    const t = setTimeout(() => speak(sound.text), 250);
    return () => {
      clearTimeout(t);
      stopSpeech();
    };
  }, [sound]);

  const handleNext = () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    if (isLast) onNext();
    else setIdx((i) => i + 1);
  };

  const replay = () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    speak(sound.text); // adaptive
  };
  const replayFaster = () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    speak(sound.text, { rate: 0.75 });
  };

  return (
    <StepShell
      eyebrow="Sounds"
      title="Listen and feel the shape"
      subtitle={data.intro ?? "Each sound auto-plays. Tap a speed to replay."}
      ctaLabel={isLast ? "Continue" : "Next sound"}
      onCta={handleNext}
      secondaryLabel={idx > 0 ? "Back" : undefined}
      onSecondary={() => setIdx((i) => Math.max(0, i - 1))}
    >
      <View style={styles.progressRow}>
        {data.sounds.map((_, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              backgroundColor: i <= idx ? colors.primary : colors.border,
            }}
          />
        ))}
      </View>

      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius },
        ]}
      >
        <Text style={[styles.bigChar, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{sound.text}</Text>
        <Text style={[styles.romaji, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{sound.romaji}</Text>

        <View style={styles.speedRow}>
          <Pressable
            onPress={replay}
            style={({ pressed }) => [
              styles.speedBtn,
              { backgroundColor: colors.primary + "22", borderColor: colors.primary, borderRadius: 22 },
              pressed && { opacity: 0.7 },
            ]}
          >
            <Feather name="volume-2" size={16} color={colors.primary} />
            <Text style={[styles.speedLabel, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>Slow</Text>
          </Pressable>
          <Pressable
            onPress={replayFaster}
            style={({ pressed }) => [
              styles.speedBtn,
              { backgroundColor: colors.muted, borderColor: colors.border, borderRadius: 22 },
              pressed && { opacity: 0.7 },
            ]}
          >
            <Feather name="volume-2" size={16} color={colors.mutedForeground} />
            <Text style={[styles.speedLabel, { color: colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>Normal</Text>
          </Pressable>
        </View>
      </View>

      <View style={[styles.note, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
        <Text style={[styles.noteLabel, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>Sound</Text>
        <Text style={[styles.noteText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{sound.phonetic}</Text>
      </View>

      {sound.mnemonic ? (
        <View style={[styles.note, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
          <Text style={[styles.noteLabel, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>Mnemonic</Text>
          <Text style={[styles.noteText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{sound.mnemonic}</Text>
        </View>
      ) : null}

      <View
        style={[styles.repeatHint, { borderColor: colors.border, borderRadius: colors.radius - 6 }]}
      >
        <Text style={[styles.repeatHintText, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
          Say it out loud three times.
        </Text>
      </View>
    </StepShell>
  );
}

const styles = StyleSheet.create({
  progressRow: { flexDirection: "row", gap: 4, marginBottom: 14 },
  card: { padding: 20, borderWidth: 1, alignItems: "center", gap: 10 },
  bigChar: { fontSize: 90, lineHeight: 104 },
  romaji: { fontSize: 24 },
  speedRow: { flexDirection: "row", gap: 8, marginTop: 6 },
  speedBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, paddingVertical: 8, borderWidth: 1 },
  speedLabel: { fontSize: 12, letterSpacing: 0.5 },
  note: { padding: 14, marginTop: 14, gap: 4 },
  noteLabel: { fontSize: 11, letterSpacing: 1, textTransform: "uppercase" },
  noteText: { fontSize: 14, lineHeight: 20 },
  repeatHint: { padding: 12, marginTop: 12, borderWidth: 1, alignItems: "center", borderStyle: "dashed" },
  repeatHintText: { fontSize: 13 },
});
