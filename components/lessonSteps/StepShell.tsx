import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";

interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** When set, shows a primary CTA at the bottom. */
  ctaLabel?: string;
  onCta?: () => void;
  ctaDisabled?: boolean;
  /** Secondary CTA (back/skip). */
  secondaryLabel?: string;
  onSecondary?: () => void;
  children?: React.ReactNode;
  /** When true, content is centered (useful for completion/celebration). */
  centered?: boolean;
}

/** Common shell used by every lesson step. Handles header, scroll body, and footer CTA. */
export function StepShell({
  title,
  subtitle,
  eyebrow,
  ctaLabel,
  onCta,
  ctaDisabled,
  secondaryLabel,
  onSecondary,
  children,
  centered,
}: Props) {
  const colors = useColors();
  const handleCta = () => {
    if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCta?.();
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.body,
          centered && { flexGrow: 1, justifyContent: "center", alignItems: "center" },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {eyebrow ? (
          <Text style={[styles.eyebrow, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>{eyebrow}</Text>
        ) : null}
        <Text style={[styles.title, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.subtitle, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{subtitle}</Text>
        ) : null}
        <View style={{ height: 16 }} />
        {children}
        <View style={{ height: 24 }} />
      </ScrollView>

      {(ctaLabel || secondaryLabel) && (
        <View style={[styles.footer, { borderTopColor: colors.border }]}>
          {secondaryLabel ? (
            <Pressable
              onPress={onSecondary}
              style={({ pressed }) => [
                styles.secondaryBtn,
                { backgroundColor: colors.muted, borderRadius: colors.radius - 4 },
                pressed && { opacity: 0.75 },
              ]}
            >
              <Text style={[styles.secondaryLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>{secondaryLabel}</Text>
            </Pressable>
          ) : null}
          {ctaLabel ? (
            <Pressable
              onPress={handleCta}
              disabled={ctaDisabled}
              style={({ pressed }) => [
                styles.cta,
                { backgroundColor: colors.primary, borderRadius: colors.radius - 4 },
                ctaDisabled && { opacity: 0.45 },
                pressed && !ctaDisabled && { opacity: 0.9 },
              ]}
            >
              <Text style={[styles.ctaLabel, { fontFamily: "Inter_600SemiBold" }]}>{ctaLabel}</Text>
              <Feather name="arrow-right" size={16} color="#fff" />
            </Pressable>
          ) : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 12, gap: 4 },
  eyebrow: { fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 6 },
  title: { fontSize: 24, lineHeight: 30 },
  subtitle: { fontSize: 14, lineHeight: 20, marginTop: 4 },
  footer: { flexDirection: "row", gap: 10, padding: 16, borderTopWidth: StyleSheet.hairlineWidth },
  secondaryBtn: { paddingHorizontal: 18, paddingVertical: 14, alignItems: "center", justifyContent: "center" },
  secondaryLabel: { fontSize: 14 },
  cta: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, flex: 1, paddingVertical: 14 },
  ctaLabel: { color: "#fff", fontSize: 15 },
});
