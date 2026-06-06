import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { LessonContainer } from "@/components/LessonContainer";
import { getLesson } from "@/data/curriculum";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const { languageCode } = useApp();
  const lesson = getLesson(languageCode, id ?? "");

  if (!lesson) {
    return (
      <View style={[styles.missing, { backgroundColor: colors.background }]}>
        <Feather name="alert-triangle" size={40} color={colors.mutedForeground} />
        <Text style={[styles.missingTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Lesson not found</Text>
        <Text style={[styles.missingSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          The lesson "{id}" doesn't exist in the current curriculum.
        </Text>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.btn, { backgroundColor: colors.primary, borderRadius: colors.radius }, pressed && { opacity: 0.85 }]}
        >
          <Text style={[styles.btnText, { fontFamily: "Inter_600SemiBold" }]}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return <LessonContainer lesson={lesson} />;
}

const styles = StyleSheet.create({
  missing: { flex: 1, alignItems: "center", justifyContent: "center", gap: 10, padding: 24 },
  missingTitle: { fontSize: 22 },
  missingSub: { fontSize: 14, textAlign: "center" },
  btn: { paddingHorizontal: 28, paddingVertical: 12, marginTop: 12 },
  btnText: { color: "#fff", fontSize: 15 },
});
