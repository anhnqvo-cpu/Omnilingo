import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getLearnedItems } from "@/data/curriculum";
import { characterGroups } from "@/data/writing";
import { SpeakButton } from "@/components/SpeakButton";
import { StrokeWriter } from "@/components/StrokeWriter";

export default function WritingScreen() {
  const { char: charParam } = useLocalSearchParams<{ char?: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { addXP, markGoal, languageCode, completedLessons } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 : insets.bottom;

  const learned = useMemo(
    () => getLearnedItems(languageCode, completedLessons),
    [languageCode, completedLessons]
  );
  const writingChars = learned.writingChars;

  // char → { romaji, example } so we can remind the learner what a character is
  // (its sound/reading) if they forgot. Static kana/kanji table provides the
  // example word; learned characters provide the authoritative romaji.
  const readingMap = useMemo(() => {
    const m: Record<string, { romaji?: string; example?: string }> = {};
    for (const g of characterGroups) for (const c of g.characters) m[c.char] = { romaji: c.reading, example: c.example };
    for (const c of learned.characters) m[c.char] = { romaji: c.romaji, example: m[c.char]?.example };
    return m;
  }, [learned]);

  // If a specific char is passed, run a single-char writing session.
  // Otherwise show the picker.
  const [picked, setPicked] = useState<string | null>(charParam ?? null);
  const [doneCount, setDoneCount] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // Hide the reading again whenever we switch to a different character.
  useEffect(() => setRevealed(false), [picked]);

  if (writingChars.length === 0) {
    return (
      <View style={[styles.emptyWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="lock" size={56} color={colors.mutedForeground} />
        <Text style={[styles.emptyTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>No characters yet</Text>
        <Text style={[styles.emptySub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          Complete a lesson with writing practice and the character will show up here for review.
        </Text>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}
        >
          <Text style={[styles.backBtnText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Back</Text>
        </Pressable>
      </View>
    );
  }

  // ─── Single-char writing session ─────────────────────────────────────────
  if (picked) {
    const handleComplete = () => {
      addXP(10);
      markGoal("writing");
      setDoneCount((c) => c + 1);
      setPicked(null);
    };
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={[styles.header, { paddingTop: topPad + 8 }]}>
          <Pressable onPress={() => setPicked(null)} style={[styles.headerBack, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
            <Feather name="arrow-left" size={20} color={colors.foreground} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <Text style={[styles.headerTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Writing — {picked}</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={{ padding: 20, gap: 14, paddingBottom: botPad + 20 }} showsVerticalScrollIndicator={false}>
          {readingMap[picked]?.romaji ? (
            <Pressable
              onPress={() => setRevealed((v) => !v)}
              style={({ pressed }) => [
                styles.reveal,
                { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius - 4 },
                pressed && { opacity: 0.85 },
              ]}
            >
              <Feather name={revealed ? "eye-off" : "eye"} size={16} color={colors.mutedForeground} />
              {revealed ? (
                <View style={{ flex: 1 }}>
                  <Text style={[styles.revealJp, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>
                    {picked} = {readingMap[picked]?.romaji}
                  </Text>
                  {readingMap[picked]?.example ? (
                    <Text style={[styles.revealEx, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                      {readingMap[picked]?.example}
                    </Text>
                  ) : null}
                </View>
              ) : (
                <Text style={[styles.revealHint, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
                  Forgot the reading? Tap to reveal
                </Text>
              )}
              {revealed ? <SpeakButton text={picked} size={30} /> : null}
            </Pressable>
          ) : null}
          <StrokeWriter char={picked} onComplete={handleComplete} />
        </ScrollView>
      </View>
    );
  }

  // ─── Picker ──────────────────────────────────────────────────────────────
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8 }]}>
        <Pressable onPress={() => router.back()} style={[styles.headerBack, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[styles.headerTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Writing practice</Text>
          <Text style={[styles.headerSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            Pick a character you've learned. {doneCount > 0 ? `${doneCount} done this session.` : ""}
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ padding: 20, gap: 12, paddingBottom: botPad + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {writingChars.map((c) => (
            <Pressable
              key={c}
              onPress={() => setPicked(c)}
              style={({ pressed }) => [
                styles.tile,
                { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius - 4 },
                pressed && { opacity: 0.85 },
              ]}
            >
              <Text style={[styles.tileText, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{c}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  reveal: { flexDirection: "row", alignItems: "center", gap: 10, padding: 12, borderWidth: 1 },
  revealHint: { fontSize: 13, flex: 1 },
  revealJp: { fontSize: 16 },
  revealEx: { fontSize: 12, marginTop: 2 },
  header: { paddingHorizontal: 16, paddingBottom: 12, flexDirection: "row", alignItems: "center", gap: 12 },
  headerBack: { padding: 10 },
  headerTitle: { fontSize: 16 },
  headerSub: { fontSize: 12, marginTop: 2 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  tile: { width: 72, height: 72, alignItems: "center", justifyContent: "center", borderWidth: 1 },
  tileText: { fontSize: 38 },
  emptyWrap: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12, paddingHorizontal: 32 },
  emptyTitle: { fontSize: 22, textAlign: "center" },
  emptySub: { fontSize: 14, textAlign: "center", lineHeight: 20 },
  backBtn: { paddingHorizontal: 28, paddingVertical: 12, marginTop: 12 },
  backBtnText: { fontSize: 15 },
});
