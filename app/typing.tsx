import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getLearnedItems } from "@/data/curriculum";
import { TypingStep } from "@/components/lessonSteps";
import type { TypingStep as TypingStepData } from "@/data/curriculum/types";

export default function TypingScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { addXP, languageCode, completedLessons } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 : insets.bottom;

  const prompts = useMemo(
    () => getLearnedItems(languageCode, completedLessons).typingPrompts,
    [languageCode, completedLessons]
  );

  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  // ─── Nothing learned yet ────────────────────────────────────────────────
  if (prompts.length === 0) {
    return (
      <View style={[styles.emptyWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="type" size={56} color={colors.mutedForeground} />
        <Text style={[styles.emptyTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>No typing yet</Text>
        <Text style={[styles.emptySub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          Finish the “Type your first Japanese” lesson at the start of Book 2 and your prompts will show up here for practice.
        </Text>
        <Pressable onPress={() => router.back()} style={[styles.btn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
          <Text style={[styles.btnText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Back</Text>
        </Pressable>
      </View>
    );
  }

  // ─── Session complete ───────────────────────────────────────────────────
  if (done) {
    return (
      <View style={[styles.emptyWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Text style={{ fontSize: 56 }}>⌨️</Text>
        <Text style={[styles.emptyTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Nice typing!</Text>
        <Text style={[styles.emptySub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          You typed {prompts.length} prompt{prompts.length === 1 ? "" : "s"} in Japanese.
        </Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
          <Pressable
            onPress={() => { setIdx(0); setDone(false); }}
            style={[styles.btn, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: colors.radius }]}
          >
            <Text style={[styles.btnText, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>Again</Text>
          </Pressable>
          <Pressable onPress={() => router.back()} style={[styles.btn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
            <Text style={[styles.btnText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Done</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // ─── Active session ─────────────────────────────────────────────────────
  const current = prompts[idx];
  const data: TypingStepData = {
    kind: "typing",
    prompt: current.prompt,
    answer: current.answer,
    romaji: current.romaji,
    meaning: current.meaning,
  };

  const handleNext = () => {
    addXP(5);
    if (idx + 1 < prompts.length) setIdx((i) => i + 1);
    else setDone(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8 }]}>
        <Pressable onPress={() => router.back()} style={[styles.headerBack, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[styles.headerTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Typing practice</Text>
          <Text style={[styles.headerSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            {idx + 1} / {prompts.length}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TypingStep key={current.id} data={data} onNext={handleNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 16, paddingBottom: 12, flexDirection: "row", alignItems: "center", gap: 12 },
  headerBack: { padding: 10 },
  headerTitle: { fontSize: 16 },
  headerSub: { fontSize: 12, marginTop: 2 },
  emptyWrap: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12, paddingHorizontal: 32 },
  emptyTitle: { fontSize: 22, textAlign: "center" },
  emptySub: { fontSize: 14, textAlign: "center", lineHeight: 20 },
  btn: { paddingHorizontal: 28, paddingVertical: 12, marginTop: 4 },
  btnText: { fontSize: 15 },
});
