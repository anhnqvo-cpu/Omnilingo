import { Feather } from "@expo/vector-icons";
import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

/**
 * Floating light/dark toggle, pinned to the top-right corner. Rendered once in
 * the tab layout so it sits over every tab screen. Sun = currently dark (tap for
 * light); moon = currently light (tap for dark). Choice persists via AppContext.
 */
export function ThemeToggle() {
  const colors = useColors();
  const { theme, toggleTheme } = useApp();
  const insets = useSafeAreaInsets();
  const top = (Platform.OS === "web" ? 16 : insets.top) + 8;

  return (
    <Pressable
      onPress={toggleTheme}
      hitSlop={10}
      accessibilityRole="button"
      accessibilityLabel={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={({ pressed }) => [
        styles.btn,
        { top, backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius },
        pressed && { opacity: 0.7 },
      ]}
    >
      <Feather name={theme === "dark" ? "sun" : "moon"} size={20} color={colors.foreground} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 16,
    width: 40,
    height: 40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  },
});
