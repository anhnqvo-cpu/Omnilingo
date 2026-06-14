import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getLearnedItems } from "@/data/curriculum";

interface PracticeCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  gradient: [string, string];
  route: string;
  badge?: string;
  disabled?: boolean;
}

export default function PracticeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { languageCode, completedLessons } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 + 50 : insets.bottom + 50;

  const learned = useMemo(
    () => getLearnedItems(languageCode, completedLessons),
    [languageCode, completedLessons]
  );

  const hasLearned = learned.vocab.length + learned.characters.length + learned.grammar.length > 0;

  if (!hasLearned) {
    return (
      <View style={[styles.empty, { backgroundColor: colors.background, paddingTop: topPad + 32 }]}>
        <Feather name="lock" size={40} color={colors.mutedForeground} />
        <Text style={[styles.emptyTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Practice unlocks as you learn</Text>
        <Text style={[styles.emptySub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          Finish your first lesson and we'll fill this tab with flashcards, writing, and quizzes — all built from what you've actually learned.
        </Text>
        <Pressable
          onPress={() => router.push("/")}
          style={({ pressed }) => [styles.emptyBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }, pressed && { opacity: 0.85 }]}
        >
          <Text style={[styles.emptyBtnText, { fontFamily: "Inter_600SemiBold" }]}>Go to Learn</Text>
        </Pressable>
      </View>
    );
  }

  const cards: PracticeCard[] = [
    {
      id: "flashcards",
      title: "Flashcards",
      subtitle: `${learned.vocab.length} words you've learned`,
      icon: "layers",
      gradient: [colors.primary, "#6366f1"],
      route: "/flashcards",
      disabled: learned.vocab.length === 0,
    },
    {
      id: "grammar",
      title: "Grammar",
      subtitle:
        learned.grammar.length > 0
          ? `${learned.grammar.length} pattern${learned.grammar.length === 1 ? "" : "s"} to review`
          : "No grammar yet",
      icon: "book-open",
      gradient: [colors.accent, "#ec4899"],
      route: "/grammar",
      disabled: learned.grammar.length === 0,
    },
    {
      id: "writing",
      title: "Writing Practice",
      subtitle:
        learned.writingChars.length > 0
          ? `${learned.writingChars.length} character${learned.writingChars.length === 1 ? "" : "s"}`
          : "No characters yet",
      icon: "edit-3",
      gradient: [colors.jade, "#0ea5e9"],
      route: "/writing",
      disabled: learned.writingChars.length === 0,
    },
    {
      id: "typing",
      title: "Typing",
      subtitle:
        learned.typingPrompts.length > 0
          ? `${learned.typingPrompts.length} prompt${learned.typingPrompts.length === 1 ? "" : "s"} · romaji → kana`
          : "Start the Book 2 typing lesson",
      icon: "type",
      gradient: ["#6366f1", "#22d3ee"],
      route: "/typing",
      disabled: learned.typingPrompts.length === 0,
    },
    {
      id: "quiz",
      title: "Quiz",
      subtitle:
        learned.vocab.length > 0 || learned.grammar.length > 0
          ? `${learned.vocab.length + learned.grammar.length} items in pool`
          : "Quiz pool empty",
      icon: "help-circle",
      gradient: [colors.gold, "#f97316"],
      route: "/quiz",
      disabled: learned.vocab.length + learned.grammar.length === 0,
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad + 16, paddingBottom: botPad, paddingHorizontal: 16, gap: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ gap: 4 }}>
        <Text style={[styles.heading, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Practice</Text>
        <Text style={[styles.sub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          Reinforce what you've already learned. Scope grows with each lesson.
        </Text>
      </View>

      {cards.map((card) => (
        <Pressable
          key={card.id}
          onPress={() => !card.disabled && router.push(card.route as any)}
          disabled={card.disabled}
          style={({ pressed }) => [{ borderRadius: colors.radius, overflow: "hidden" }, card.disabled && { opacity: 0.45 }, pressed && !card.disabled && { opacity: 0.88 }]}
        >
          <LinearGradient colors={card.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.practiceCard}>
            <View style={styles.practiceCardInner}>
              <View style={styles.iconWrap}>
                <Feather name={card.icon as any} size={28} color="#fff" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.cardTitle, { fontFamily: "Inter_700Bold" }]}>{card.title}</Text>
                <Text style={[styles.cardSub, { fontFamily: "Inter_400Regular" }]}>{card.subtitle}</Text>
              </View>
              <Feather name={card.disabled ? "lock" : "chevron-right"} size={20} color="rgba(255,255,255,0.85)" />
            </View>
          </LinearGradient>
        </Pressable>
      ))}

      {learned.writingChars.length > 0 ? (
        <>
          <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Inter_700Bold", marginTop: 8 }]}>
            Your characters
          </Text>
          <View style={styles.charGrid}>
            {learned.writingChars.map((c) => (
              <Pressable
                key={c}
                onPress={() => router.push({ pathname: "/writing", params: { char: c } })}
                style={({ pressed }) => [
                  styles.charTile,
                  { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius - 4 },
                  pressed && { opacity: 0.85 },
                ]}
              >
                <Text style={[styles.charTileText, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{c}</Text>
              </Pressable>
            ))}
          </View>
        </>
      ) : null}

      {learned.vocab.length > 0 ? (
        <>
          <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Inter_700Bold", marginTop: 8 }]}>
            Your vocabulary
          </Text>
          <View style={{ gap: 8 }}>
            {learned.vocab.slice(0, 20).map((w) => (
              <View
                key={w.id}
                style={[styles.vocabRow, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius - 4 }]}
              >
                <Text style={styles.vocabEmoji}>{w.emoji ?? "📘"}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.vocabJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{w.text}</Text>
                  <Text style={[styles.vocabRomaji, { color: colors.primary, fontFamily: "Inter_500Medium" }]}>{w.romaji}</Text>
                </View>
                <Text style={[styles.vocabMean, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{w.meaning}</Text>
              </View>
            ))}
            {learned.vocab.length > 20 ? (
              <Text style={[styles.moreText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                +{learned.vocab.length - 20} more
              </Text>
            ) : null}
          </View>
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  empty: { flex: 1, alignItems: "center", padding: 28, gap: 12 },
  emptyTitle: { fontSize: 20, textAlign: "center" },
  emptySub: { fontSize: 14, lineHeight: 20, textAlign: "center" },
  emptyBtn: { paddingHorizontal: 28, paddingVertical: 12, marginTop: 14 },
  emptyBtnText: { color: "#fff", fontSize: 15 },

  heading: { fontSize: 28 },
  sub: { fontSize: 14 },
  practiceCard: { padding: 20 },
  practiceCardInner: { flexDirection: "row", alignItems: "center", gap: 16 },
  iconWrap: { width: 52, height: 52, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
  cardTitle: { fontSize: 19, color: "#fff" },
  cardSub: { fontSize: 12, color: "rgba(255,255,255,0.85)", marginTop: 2 },
  sectionTitle: { fontSize: 18 },

  charGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  charTile: { width: 56, height: 56, alignItems: "center", justifyContent: "center", borderWidth: 1 },
  charTileText: { fontSize: 28 },

  vocabRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderWidth: 1 },
  vocabEmoji: { fontSize: 22 },
  vocabJp: { fontSize: 18 },
  vocabRomaji: { fontSize: 11, marginTop: 2 },
  vocabMean: { fontSize: 12 },
  moreText: { fontSize: 12, textAlign: "center", marginTop: 4, fontStyle: "italic" },
});
