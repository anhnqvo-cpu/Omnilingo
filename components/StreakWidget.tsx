import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";

interface Props {
  streak: number;
  xp: number;
  level: number;
}

const XP_PER_LEVEL = 500;

export function StreakWidget({ streak, xp, level }: Props) {
  const colors = useColors();
  const xpInLevel = xp % XP_PER_LEVEL;
  const progress = xpInLevel / XP_PER_LEVEL;

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
      <View style={styles.row}>
        <View style={styles.streakBlock}>
          <LinearGradient
            colors={["#f59e0b", "#e85d75"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.streakIconWrap, { borderRadius: colors.radius - 2 }]}
          >
            <Feather name="zap" size={18} color="#fff" />
          </LinearGradient>
          <View>
            <Text style={[styles.streakNum, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>{streak}</Text>
            <Text style={[styles.streakLabel, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>day streak</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.levelBlock}>
          <View style={[styles.levelBadge, { backgroundColor: colors.primary + "22", borderRadius: 8 }]}>
            <Text style={[styles.levelNum, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>Lv {level}</Text>
          </View>
          <Text style={[styles.xpLabel, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{xpInLevel} / {XP_PER_LEVEL} XP</Text>
        </View>
      </View>

      <View style={[styles.xpTrack, { backgroundColor: colors.muted }]}>
        <LinearGradient
          colors={[colors.primary, colors.indigo]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.xpFill, { width: `${Math.min(progress * 100, 100)}%` as any }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  streakBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  streakIconWrap: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  streakNum: {
    fontSize: 20,
    lineHeight: 24,
  },
  streakLabel: {
    fontSize: 12,
    lineHeight: 16,
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: "#334155",
  },
  levelBlock: {
    alignItems: "flex-end",
    gap: 4,
    flex: 1,
  },
  levelBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  levelNum: {
    fontSize: 14,
  },
  xpLabel: {
    fontSize: 11,
  },
  xpTrack: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  xpFill: {
    height: "100%",
    borderRadius: 3,
  },
});
