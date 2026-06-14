import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getLearnedItems, type LearnedGrammar } from "@/data/curriculum";
import { SpeakButton } from "@/components/SpeakButton";

/**
 * Grammar notebook — every grammar pattern the learner has met in completed
 * lessons, collected in one place to review and memorize. Tap a card to expand
 * the full rule, a worked example, and the tip.
 */
export default function GrammarScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { languageCode, completedLessons } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 : insets.bottom;

  // Collect learned grammar, de-duplicated by pattern (same point taught twice
  // shouldn't appear twice), newest first.
  const patterns = useMemo(() => {
    const all = getLearnedItems(languageCode, completedLessons).grammar;
    const seen = new Set<string>();
    const out: LearnedGrammar[] = [];
    for (const g of all) {
      if (seen.has(g.pattern.id)) continue;
      seen.add(g.pattern.id);
      out.push(g);
    }
    return out.reverse();
  }, [languageCode, completedLessons]);

  if (patterns.length === 0) {
    return (
      <View style={[styles.emptyWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="book-open" size={60} color={colors.mutedForeground} />
        <Text style={[styles.emptyTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>No grammar yet</Text>
        <Text style={[styles.emptySub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          Finish a lesson with a grammar point and it'll be collected here for you to review and memorize.
        </Text>
        <Pressable onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
          <Text style={[styles.backBtnText, { color: "#fff", fontFamily: "Inter_600SemiBold" }]}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8 }]}>
        <Pressable onPress={() => router.back()} style={[styles.headerBack, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[styles.headerTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Grammar</Text>
          <Text style={[styles.headerSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            {patterns.length} pattern{patterns.length === 1 ? "" : "s"} you've learned · tap to study
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: botPad + 24 }} showsVerticalScrollIndicator={false}>
        {patterns.map((g, i) => (
          <GrammarCard key={g.id} item={g} defaultOpen={i === 0} />
        ))}
      </ScrollView>
    </View>
  );
}

function GrammarCard({ item, defaultOpen }: { item: LearnedGrammar; defaultOpen?: boolean }) {
  const colors = useColors();
  const [open, setOpen] = useState(!!defaultOpen);
  const p = item.pattern;
  const ex = p.examples[0];

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
      <Pressable onPress={() => setOpen((o) => !o)} style={styles.cardHead}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.cardTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{p.title}</Text>
          <Text style={[styles.cardSubtitle, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{p.subtitle}</Text>
        </View>
        <Feather name={open ? "chevron-up" : "chevron-down"} size={20} color={colors.mutedForeground} />
      </Pressable>

      {/* Pattern chips — always visible, the at-a-glance reminder. */}
      <View style={styles.patternRow}>
        {p.pattern.map((tok, i) => (
          <View
            key={i}
            style={[
              styles.patternToken,
              {
                backgroundColor: tok.highlight ? colors.primary + "33" : "transparent",
                borderColor: tok.highlight ? colors.primary : colors.border,
                borderRadius: 8,
              },
            ]}
          >
            <Text style={[styles.patternText, { color: tok.highlight ? colors.primary : colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>{tok.text}</Text>
          </View>
        ))}
      </View>

      {open ? (
        <View style={{ gap: 12, marginTop: 4 }}>
          {/* Worked example */}
          <View style={[styles.exampleCard, { backgroundColor: colors.background, borderRadius: colors.radius - 4 }]}>
            <View style={styles.exHeader}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.exJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{ex.jp}</Text>
                <Text style={[styles.exRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{ex.romaji}</Text>
              </View>
              <SpeakButton text={ex.jp} size={34} />
            </View>
            <View style={styles.breakdownRow}>
              {ex.breakdown.map((b, i) => (
                <View key={i} style={[styles.breakdownChip, { backgroundColor: colors.muted, borderRadius: 8 }]}>
                  <Text style={[styles.breakdownJp, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{b.jp}</Text>
                  <Text style={[styles.breakdownEn, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{b.en}</Text>
                </View>
              ))}
            </View>
            <Text style={[styles.exEn, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{ex.en}</Text>
          </View>

          {/* Rule */}
          <View style={[styles.note, { backgroundColor: colors.muted, borderRadius: 12 }]}>
            <Text style={[styles.noteLabel, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>Explanation</Text>
            <Text style={[styles.noteText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{p.note}</Text>
          </View>

          {p.tip ? (
            <View style={[styles.note, { backgroundColor: colors.muted, borderRadius: 12 }]}>
              <Text style={[styles.noteLabel, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>Tip</Text>
              <Text style={[styles.noteText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{p.tip}</Text>
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingBottom: 14, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", gap: 14 },
  headerBack: { padding: 10 },
  headerTitle: { fontSize: 22 },
  headerSub: { fontSize: 12.5, marginTop: 2 },

  card: { borderWidth: 1, padding: 14, gap: 10 },
  cardHead: { flexDirection: "row", alignItems: "center", gap: 12 },
  cardTitle: { fontSize: 17 },
  cardSubtitle: { fontSize: 12.5, marginTop: 2 },

  patternRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 6 },
  patternToken: { paddingHorizontal: 9, paddingVertical: 5, borderWidth: 1 },
  patternText: { fontSize: 14 },

  exampleCard: { padding: 14, gap: 10 },
  exHeader: { flexDirection: "row", alignItems: "center", gap: 10 },
  exJp: { fontSize: 18 },
  exRomaji: { fontSize: 12, marginTop: 2 },
  breakdownRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  breakdownChip: { paddingHorizontal: 8, paddingVertical: 5, alignItems: "center" },
  breakdownJp: { fontSize: 13 },
  breakdownEn: { fontSize: 10, marginTop: 1 },
  exEn: { fontSize: 14 },

  note: { padding: 12, gap: 4 },
  noteLabel: { fontSize: 11, letterSpacing: 0.6, textTransform: "uppercase" },
  noteText: { fontSize: 13.5, lineHeight: 20 },

  emptyWrap: { flex: 1, alignItems: "center", justifyContent: "center", gap: 14, paddingHorizontal: 32 },
  emptyTitle: { fontSize: 24, textAlign: "center" },
  emptySub: { fontSize: 15, textAlign: "center", lineHeight: 22 },
  backBtn: { paddingHorizontal: 40, paddingVertical: 14, marginTop: 6 },
  backBtnText: { fontSize: 15 },
});
