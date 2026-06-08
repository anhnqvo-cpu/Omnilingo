import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import { romajiToHiragana, kanaEquals } from "@/data/romaji";
import type { TypingStep as TypingStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: TypingStepData;
  onNext: () => void;
}

export function TypingStep({ data, onNext }: Props) {
  const colors = useColors();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");
  const [showRomaji, setShowRomaji] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const converted = romajiToHiragana(input);
  const isCorrect = result === "correct";

  // Reset whenever we move to a new typing prompt.
  useEffect(() => {
    setInput("");
    setResult("idle");
    setShowRomaji(false);
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, [data.answer, data.prompt]);

  const check = () => {
    if (kanaEquals(converted, data.answer)) {
      setResult("correct");
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      setResult("wrong");
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const borderColor =
    result === "correct" ? colors.success : result === "wrong" ? colors.destructive : colors.border;

  return (
    <StepShell
      eyebrow="Type it"
      title="Type it in Japanese"
      subtitle="Type the romaji — it turns into kana as you go, just like a real Japanese keyboard."
      ctaLabel={isCorrect ? "Continue" : "Check"}
      onCta={isCorrect ? onNext : check}
      ctaDisabled={!isCorrect && converted.length === 0}
    >
      <View style={{ gap: 14, marginTop: 8 }}>
      {data.teach ? (
        <View style={[styles.teach, { backgroundColor: colors.muted, borderRadius: 12 }]}>
          <Text style={[styles.teachLabel, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>How typing works</Text>
          <Text style={[styles.teachText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{data.teach}</Text>
        </View>
      ) : null}

      {/* What to type */}
      <View style={[styles.promptCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: 14 }]}>
        <Text style={[styles.promptLabel, { color: colors.mutedForeground, fontFamily: "Inter_600SemiBold" }]}>{data.prompt}</Text>
        <View style={styles.targetRow}>
          <Text style={[styles.targetKana, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{data.answer}</Text>
          <SpeakButton text={data.answer} size={34} />
        </View>
        {data.meaning ? (
          <Text style={[styles.meaning, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{data.meaning}</Text>
        ) : null}
      </View>

      {/* Romaji input */}
      <TextInput
        ref={inputRef}
        value={input}
        onChangeText={(t) => {
          setInput(t);
          if (result !== "idle") setResult("idle");
        }}
        onSubmitEditing={() => (isCorrect ? onNext() : check())}
        placeholder="Type romaji here…"
        placeholderTextColor={colors.mutedForeground}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        spellCheck={false}
        editable={!isCorrect}
        style={[
          styles.input,
          { color: colors.foreground, backgroundColor: colors.card, borderColor, borderRadius: 12, fontFamily: "Inter_500Medium" },
        ]}
      />

      {/* Live kana preview */}
      <View style={[styles.preview, { borderColor: colors.border, borderRadius: 12 }]}>
        <Text style={[styles.previewLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>Becomes</Text>
        <Text style={[styles.previewKana, { color: converted ? colors.primary : colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>
          {converted || "…"}
        </Text>
      </View>

      {/* Reveal romaji hint */}
      <Pressable onPress={() => setShowRomaji((v) => !v)} style={styles.hintBtn} hitSlop={8}>
        <Feather name={showRomaji ? "eye-off" : "eye"} size={14} color={colors.mutedForeground} />
        <Text style={[styles.hintText, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
          {showRomaji ? `Type:  ${data.romaji.split("").join(" ")}` : "Stuck? Show the romaji"}
        </Text>
      </Pressable>

      {/* Feedback */}
      {result === "correct" ? (
        <View style={[styles.feedback, { backgroundColor: colors.success + "1A", borderColor: colors.success, borderRadius: 12 }]}>
          <Text style={[styles.feedbackLabel, { color: colors.success, fontFamily: "Inter_700Bold" }]}>正解！ Nailed it</Text>
          <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>
            {data.answer}{data.meaning ? ` — ${data.meaning}` : ""}
          </Text>
        </View>
      ) : result === "wrong" ? (
        <View style={[styles.feedback, { backgroundColor: colors.accent + "1A", borderColor: colors.accent, borderRadius: 12 }]}>
          <Text style={[styles.feedbackLabel, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>Not quite</Text>
          <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>
            You typed {converted || "nothing"} — we're after {data.answer}. Tap “Show the romaji” if you're stuck.
          </Text>
        </View>
      ) : null}
      </View>
    </StepShell>
  );
}

const styles = StyleSheet.create({
  teach: { padding: 14, gap: 4 },
  teachLabel: { fontSize: 11, letterSpacing: 1, textTransform: "uppercase" },
  teachText: { fontSize: 14, lineHeight: 20 },
  promptCard: { padding: 16, borderWidth: 1, gap: 8, alignItems: "center" },
  promptLabel: { fontSize: 14, textAlign: "center" },
  targetRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  targetKana: { fontSize: 44, lineHeight: 52 },
  meaning: { fontSize: 13 },
  input: { borderWidth: 2, paddingHorizontal: 16, paddingVertical: 14, fontSize: 20 },
  preview: { borderWidth: 1, borderStyle: "dashed", paddingHorizontal: 16, paddingVertical: 12, flexDirection: "row", alignItems: "center", gap: 12 },
  previewLabel: { fontSize: 11, textTransform: "uppercase", letterSpacing: 1 },
  previewKana: { fontSize: 28, flex: 1 },
  hintBtn: { flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 4 },
  hintText: { fontSize: 13 },
  feedback: { padding: 14, gap: 4, borderWidth: 1 },
  feedbackLabel: { fontSize: 13 },
  feedbackText: { fontSize: 13, lineHeight: 18 },
});
