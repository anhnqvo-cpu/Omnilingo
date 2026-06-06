import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { stories } from "@/data/stories";

export default function StoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { addXP, markStoryComplete, markGoal, completedStories } = useApp();

  const [showTranslation, setShowTranslation] = useState(false);
  const [completed, setCompleted] = useState(false);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 34 : insets.bottom;

  const story = stories.find((s) => s.id === id);
  if (!story) return null;

  const alreadyDone = completedStories.includes(story.id);

  const handleComplete = () => {
    if (!alreadyDone) {
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      addXP(story.xp);
      markStoryComplete(story.id);
      markGoal("reading");
    }
    setCompleted(true);
  };

  if (completed) {
    return (
      <View style={[styles.successWrap, { backgroundColor: colors.background, paddingTop: topPad, paddingBottom: botPad }]}>
        <Feather name="check-circle" size={72} color={colors.success} />
        <Text style={[styles.successTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Story Complete!</Text>
        {!alreadyDone && (
          <View style={[styles.xpPill, { backgroundColor: colors.gold + "22", borderRadius: 24 }]}>
            <Feather name="zap" size={16} color={colors.gold} />
            <Text style={[styles.xpPillText, { color: colors.gold, fontFamily: "Inter_700Bold" }]}>+{story.xp} XP</Text>
          </View>
        )}
        <Pressable
          onPress={() => router.back()}
          style={[styles.backBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}
        >
          <Text style={[styles.backBtnText, { fontFamily: "Inter_600SemiBold" }]}>Back to Learn</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8, paddingHorizontal: 16, backgroundColor: colors.background }]}>
        <Pressable onPress={() => router.back()} style={[styles.backIcon, { backgroundColor: colors.card, borderRadius: colors.radius - 4 }]}>
          <Feather name="arrow-left" size={20} color={colors.foreground} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[styles.headerTitle, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]} numberOfLines={1}>{story.title}</Text>
          <Text style={[styles.headerSub, { color: colors.primary, fontFamily: "Inter_400Regular" }]}>{story.titleJapanese}</Text>
        </View>
        <Pressable
          onPress={() => setShowTranslation((p) => !p)}
          style={[styles.translateBtn, { backgroundColor: showTranslation ? colors.primary + "22" : colors.card, borderRadius: colors.radius - 4 }]}
        >
          <Feather name="globe" size={18} color={showTranslation ? colors.primary : colors.mutedForeground} />
        </Pressable>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {story.segments.map((seg, i) => (
          <View key={i} style={[styles.segment, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
            <Text style={[styles.segJp, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>{seg.japanese}</Text>
            <Text style={[styles.segRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{seg.reading}</Text>
            {showTranslation && (
              <Text style={[styles.segEn, { color: colors.primary, fontFamily: "Inter_400Regular" }]}>{seg.english}</Text>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: botPad + 16, backgroundColor: colors.background }]}>
        <Pressable
          onPress={handleComplete}
          style={({ pressed }) => [
            styles.completeBtn,
            { backgroundColor: alreadyDone ? colors.muted : colors.primary, borderRadius: colors.radius },
            pressed && { opacity: 0.85 },
          ]}
        >
          <Feather name={alreadyDone ? "check" : "book-open"} size={20} color={alreadyDone ? colors.mutedForeground : "#fff"} />
          <Text style={[styles.completeBtnText, { color: alreadyDone ? colors.mutedForeground : "#fff", fontFamily: "Inter_600SemiBold" }]}>
            {alreadyDone ? "Already Completed" : "Mark Complete"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingBottom: 12, flexDirection: "row", alignItems: "center", gap: 12 },
  backIcon: { padding: 10 },
  headerTitle: { fontSize: 16 },
  headerSub: { fontSize: 13 },
  translateBtn: { padding: 10 },
  segment: { padding: 16, gap: 6, borderWidth: 1 },
  segJp: { fontSize: 18, lineHeight: 26 },
  segRomaji: { fontSize: 13, lineHeight: 20 },
  segEn: { fontSize: 14, lineHeight: 20, marginTop: 4 },
  footer: { paddingTop: 12, paddingHorizontal: 16 },
  completeBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 16 },
  completeBtnText: { fontSize: 16 },
  successWrap: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16, paddingHorizontal: 24 },
  successTitle: { fontSize: 28 },
  xpPill: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 20, paddingVertical: 10 },
  xpPillText: { fontSize: 18 },
  backBtn: { paddingHorizontal: 40, paddingVertical: 14, marginTop: 8 },
  backBtnText: { color: "#fff", fontSize: 16 },
});
