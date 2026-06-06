import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, type Href } from "expo-router";
import React from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { getCurriculum } from "@/data/curriculum";
import { useColors } from "@/hooks/useColors";

export default function OnboardingScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { completeOnboarding, languageCode } = useApp();
  const curriculum = getCurriculum(languageCode);

  const startBeginner = () => {
    completeOnboarding();
    router.replace("/(tabs)");
  };

  const takeTest = () => {
    router.push("/placement" as Href);
  };

  const topPad = (Platform.OS === "web" ? 40 : insets.top) + 24;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad, paddingBottom: insets.bottom + 32, paddingHorizontal: 22, gap: 28 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ gap: 8 }}>
        <Text style={[styles.eyebrow, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>
          {curriculum.languageNameNative} · {curriculum.languageName}
        </Text>
        <Text style={[styles.title, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          Welcome to Omnilingo
        </Text>
        <Text style={[styles.sub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          A foundations-to-fluency journey. First, let's find the right starting point for you.
        </Text>
      </View>

      <View style={{ gap: 14 }}>
        {/* Beginner path */}
        <Pressable onPress={startBeginner} style={({ pressed }) => [pressed && { opacity: 0.92 }]}>
          <LinearGradient
            colors={[colors.primary, colors.indigo]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.card, { borderRadius: colors.radius }]}
          >
            <View style={[styles.iconWrap, { backgroundColor: "rgba(255,255,255,0.18)" }]}>
              <Feather name="sun" size={22} color="#fff" />
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={[styles.cardTitle, { color: "#fff", fontFamily: "Inter_700Bold" }]}>I'm new to Japanese</Text>
              <Text style={[styles.cardSub, { color: "rgba(255,255,255,0.9)", fontFamily: "Inter_400Regular" }]}>
                Start from the very first character. No experience needed.
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#fff" />
          </LinearGradient>
        </Pressable>

        {/* Placement path */}
        <Pressable
          onPress={takeTest}
          style={({ pressed }) => [
            styles.card,
            { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: colors.radius },
            pressed && { opacity: 0.92 },
          ]}
        >
          <View style={[styles.iconWrap, { backgroundColor: colors.accent + "22" }]}>
            <Feather name="zap" size={22} color={colors.accent} />
          </View>
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={[styles.cardTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
              I've studied before
            </Text>
            <Text style={[styles.cardSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
              Take a quick 2-minute test and we'll drop you at the right chapter.
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color={colors.mutedForeground} />
        </Pressable>
      </View>

      <Text style={[styles.footnote, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
        You can retake the placement test anytime from the Learn screen ("Check my level").
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  eyebrow: { fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" },
  title: { fontSize: 30, marginTop: 4 },
  sub: { fontSize: 15, marginTop: 4, lineHeight: 22 },
  card: { flexDirection: "row", alignItems: "center", gap: 14, padding: 18 },
  iconWrap: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  cardTitle: { fontSize: 17 },
  cardSub: { fontSize: 13, lineHeight: 18 },
  footnote: { fontSize: 12, textAlign: "center", lineHeight: 17 },
});
