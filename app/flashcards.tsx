import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getLearnedItems } from "@/data/curriculum";
import { FlashCard } from "@/components/FlashCard";

const SESSION_SIZE = 10;

export default function FlashcardsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { srsData, updateSRS, addXP, markGoal, languageCode, completedLessons } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 : insets.bottom;

  // Build the candidate pool ONLY from words in lessons the user completed.
  const sessionCards = useMemo(() => {
    const learned = getLearnedItems(languageCode, completedLessons);
    const now = Date.now();
    // Filter to due cards (new = no srs entry, or due date passed)
    const due = learned.vocab.filter((v) => {
      const d = srsData[v.id];
      return !d || d.dueDate <= now;
    });
    // Map to the FlashCard prop shape.
    return due.slice(0, SESSION_SIZE).map((v) => ({
      id: v.id,
      word: v.text,
      reading: v.romaji,
      meaning: v.meaning,
      partOfSpeech: "vocab",
      example: v.example?.jp ?? "",
      exampleMeaning: v.example?.en ?? "",
    }));
  }, [srsData, languageCode, completedLessons]);

  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [ratings, setRatings] = useState<{ id: string; rating: number }[]>([]);

  if (sessionCards.length === 0) {
    const learnedCount = getLearnedItems(languageCode, completedLessons).vocab.length;
    return (
      <View style={[styles.emptyWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name={learnedCount === 0 ? "lock" : "check-circle"} size={64} color={learnedCount === 0 ? colors.mutedForeground : colors.success} />
        <Text style={[styles.emptyTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          {learnedCount === 0 ? "No vocab yet" : "All caught up!"}
        </Text>
        <Text style={[styles.emptySub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {learnedCount === 0
            ? "Complete a lesson with vocab and we'll add it to your review pool."
            : "No cards due right now. Come back later — spaced repetition needs spacing!"}
        </Text>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backBtn, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
        >
          <Text style={[styles.backBtnText, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  if (done) {
    const good = ratings.filter((r) => r.rating >= 3).length;
    return (
      <View style={[styles.emptyWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="layers" size={64} color={colors.primary} />
        <Text style={[styles.emptyTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Session done!</Text>
        <Text style={[styles.emptySub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {good}/{ratings.length} cards answered well
        </Text>
        <View style={[styles.xpPill, { backgroundColor: colors.gold + "22", borderRadius: 24 }]}>
          <Feather name="zap" size={16} color={colors.gold} />
          <Text style={[styles.xpText, { color: colors.gold, fontFamily: "Inter_700Bold" }]}>+{ratings.length * 5} XP</Text>
        </View>
        <Pressable onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
          <Text style={[styles.backBtnText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Finish</Text>
        </Pressable>
      </View>
    );
  }

  const card = sessionCards[idx];
  const progress = idx / sessionCards.length;

  const handleRate = (rating: 1 | 2 | 3 | 4) => {
    updateSRS(card.id, rating);
    setRatings((r) => [...r, { id: card.id, rating }]);
    if (idx + 1 >= sessionCards.length) {
      addXP(sessionCards.length * 5);
      markGoal("vocab");
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8, paddingHorizontal: 16 }]}>
        <Pressable onPress={() => router.back()} style={[styles.headerBack, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1, gap: 6 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={[styles.progress, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{idx + 1} / {sessionCards.length}</Text>
          </View>
          <View style={[styles.progressBar, { backgroundColor: colors.muted }]}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` as any, backgroundColor: colors.primary }]} />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 24 }}>
        <FlashCard card={card} onRate={handleRate} />
      </View>

      <View style={{ height: botPad + 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingBottom: 16, flexDirection: "row", alignItems: "center", gap: 16 },
  headerBack: { padding: 10 },
  progress: { fontSize: 13 },
  progressBar: { height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  emptyWrap: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16, paddingHorizontal: 32 },
  emptyTitle: { fontSize: 26, textAlign: "center" },
  emptySub: { fontSize: 15, textAlign: "center", lineHeight: 22 },
  xpPill: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 20, paddingVertical: 10 },
  xpText: { fontSize: 18 },
  backBtn: { paddingHorizontal: 40, paddingVertical: 14, borderWidth: 1, marginTop: 8 },
  backBtnText: { fontSize: 15 },
});
