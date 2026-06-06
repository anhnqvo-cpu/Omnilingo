import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";

import { useColors } from "@/hooks/useColors";
import { speak } from "@/hooks/useSpeech";

interface Props {
  text: string;
  lang?: string;
  size?: number;
  tint?: string;
}

/** A small round button that speaks the given text. No-ops gracefully if TTS isn't available. */
export function SpeakButton({ text, lang = "ja-JP", size = 36, tint }: Props) {
  const colors = useColors();
  const handlePress = () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    speak(text, lang);
  };
  const iconSize = Math.max(14, size - 22);
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.btn,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: (tint ?? colors.primary) + "22",
        },
        pressed && { opacity: 0.7 },
      ]}
    >
      <Feather name="volume-2" size={iconSize} color={tint ?? colors.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { alignItems: "center", justifyContent: "center" },
});
