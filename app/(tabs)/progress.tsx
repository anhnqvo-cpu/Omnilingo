import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { vocabulary } from "@/data/vocabulary";
import { stories } from "@/data/stories";
import { lessons } from "@/data/lessons";

const XP_PER_LEVEL = 500;

function StatCard({ label, value, icon, color }: { label: string; value: string; icon: string; color: string }) {
  const colors = useColors();
  return (
    <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
      <View style={[styles.statIcon, { backgroundColor: color + "22", borderRadius: 10 }]}>
        <Feather name={icon as any} size={18} color={color} />
      </View>
      <Text style={[styles.statValue, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{label}</Text>
    </View>
  );
}

function StreakCalendar({ streak }: { streak: number }) {
  const colors = useColors();
  const today = new Date();
  const days: { date: Date; active: boolean }[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push({ date: d, active: i < streak });
  }
  const weeks: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <View style={[styles.calCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
      <Text style={[styles.calTitle, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>Last 30 Days</Text>
      <View style={styles.calGrid}>
        {weeks.map((week, wi) => (
          <View key={wi} style={styles.calWeek}>
            {week.map((day, di) => (
              <View
                key={di}
                style={[
                  styles.calDot,
                  { backgroundColor: day.active ? colors.primary : colors.muted, borderRadius: 4 },
                ]}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

export default function ProgressScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { streak, xp, level, completedStories, completedLessons, srsData } = useApp();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 + 50 : insets.bottom + 50;

  const xpInLevel = xp % XP_PER_LEVEL;
  const progress = xpInLevel / XP_PER_LEVEL;
  const wordsLearned = Object.keys(srsData).length;
  const totalWords = vocabulary.length;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad + 16, paddingBottom: botPad, paddingHorizontal: 16, gap: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.heading, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Progress</Text>

      <LinearGradient
        colors={[colors.primary, colors.indigo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.levelCard, { borderRadius: colors.radius }]}
      >
        <View style={styles.levelTop}>
          <View>
            <Text style={[styles.levelLabel, { fontFamily: "Inter_400Regular" }]}>Current Level</Text>
            <Text style={[styles.levelNum, { fontFamily: "Inter_700Bold" }]}>Level {level}</Text>
          </View>
          <View style={styles.xpRight}>
            <Text style={[styles.xpNum, { fontFamily: "Inter_700Bold" }]}>{xp.toLocaleString()}</Text>
            <Text style={[styles.xpLabel, { fontFamily: "Inter_400Regular" }]}>total XP</Text>
          </View>
        </View>
        <View style={styles.xpBarTrack}>
          <View style={[styles.xpBarFill, { width: `${progress * 100}%` as any }]} />
        </View>
        <Text style={[styles.xpProgress, { fontFamily: "Inter_400Regular" }]}>{xpInLevel} / {XP_PER_LEVEL} XP to Level {level + 1}</Text>
      </LinearGradient>

      <StreakCalendar streak={streak} />

      <View style={styles.statsGrid}>
        <StatCard label="Day Streak" value={String(streak)} icon="zap" color={colors.gold} />
        <StatCard label="Words Learned" value={`${wordsLearned}/${totalWords}`} icon="book-open" color={colors.jade} />
        <StatCard label="Stories" value={`${completedStories.length}/${stories.length}`} icon="file-text" color={colors.primary} />
        <StatCard label="Lessons" value={`${completedLessons.length}/${lessons.length}`} icon="book" color={colors.indigo} />
      </View>

      <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>Vocabulary by Tag</Text>
      {[
        { tag: "verbs", label: "Verbs", icon: "activity", color: colors.primary },
        { tag: "nouns", label: "Nouns", icon: "box", color: colors.jade },
        { tag: "adjectives", label: "Adjectives", icon: "star", color: colors.gold },
        { tag: "time", label: "Time", icon: "clock", color: colors.indigo },
      ].map(({ tag, label, icon, color }) => {
        const total = vocabulary.filter((v) => v.tags.includes(tag)).length;
        const learned = vocabulary.filter((v) => v.tags.includes(tag) && srsData[v.id]).length;
        const pct = total > 0 ? learned / total : 0;
        return (
          <View key={tag} style={[styles.tagRow, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
            <View style={[styles.tagIcon, { backgroundColor: color + "22", borderRadius: 8 }]}>
              <Feather name={icon as any} size={16} color={color} />
            </View>
            <View style={{ flex: 1, gap: 6 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={[styles.tagLabel, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>{label}</Text>
                <Text style={[styles.tagCount, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{learned}/{total}</Text>
              </View>
              <View style={[styles.tagBar, { backgroundColor: colors.muted }]}>
                <View style={[styles.tagFill, { width: `${pct * 100}%` as any, backgroundColor: color }]} />
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 28 },
  levelCard: { padding: 20, gap: 12 },
  levelTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  levelLabel: { fontSize: 12, color: "rgba(255,255,255,0.7)" },
  levelNum: { fontSize: 28, color: "#fff" },
  xpRight: { alignItems: "flex-end" },
  xpNum: { fontSize: 22, color: "#fff" },
  xpLabel: { fontSize: 12, color: "rgba(255,255,255,0.7)" },
  xpBarTrack: { height: 8, backgroundColor: "rgba(255,255,255,0.25)", borderRadius: 4, overflow: "hidden" },
  xpBarFill: { height: "100%", backgroundColor: "#fff", borderRadius: 4 },
  xpProgress: { fontSize: 12, color: "rgba(255,255,255,0.75)", textAlign: "right" },
  calCard: { padding: 16, borderWidth: 1, gap: 12 },
  calTitle: { fontSize: 15 },
  calGrid: { flexDirection: "row", gap: 4 },
  calWeek: { gap: 4 },
  calDot: { width: 14, height: 14 },
  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  statCard: { flex: 1, minWidth: "45%", padding: 14, borderWidth: 1, gap: 8, alignItems: "flex-start" },
  statIcon: { padding: 8 },
  statValue: { fontSize: 24 },
  statLabel: { fontSize: 12 },
  sectionTitle: { fontSize: 17, marginTop: 4 },
  tagRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 14, borderWidth: 1 },
  tagIcon: { padding: 8 },
  tagLabel: { fontSize: 14 },
  tagCount: { fontSize: 13 },
  tagBar: { height: 5, borderRadius: 3, overflow: "hidden" },
  tagFill: { height: "100%", borderRadius: 3 },
});
