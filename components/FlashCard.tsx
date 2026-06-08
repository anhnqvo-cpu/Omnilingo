import * as Haptics from "expo-haptics";
import React, { useRef, useState } from "react";
import { Animated, Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import { speak } from "@/hooks/useSpeech";

export interface FlashCardData {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  partOfSpeech?: string;
  example?: string;
  exampleMeaning?: string;
}

interface Props {
  card: FlashCardData;
  onRate: (rating: 1 | 2 | 3 | 4) => void;
}

const RATINGS: { label: string; rating: 1 | 2 | 3 | 4; color: string }[] = [
  { label: "Again", rating: 1, color: "#ef4444" },
  { label: "Hard", rating: 2, color: "#f59e0b" },
  { label: "Good", rating: 3, color: "#10b981" },
  { label: "Easy", rating: 4, color: "#6366f1" },
];

export function FlashCard({ card, onRate }: Props) {
  const colors = useColors();
  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "180deg"] });
  const backInterpolate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ["180deg", "360deg"] });

  const flip = () => {
    if (!flipped) {
      if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      Animated.spring(flipAnim, { toValue: 1, useNativeDriver: true, friction: 8 }).start();
      setFlipped(true);
      // Pronounce the word as it's revealed.
      speak(card.word);
    }
  };

  const handleRate = (rating: 1 | 2 | 3 | 4) => {
    if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onRate(rating);
    flipAnim.setValue(0);
    setFlipped(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={flip} style={styles.cardWrap}>
        <Animated.View
          style={[
            styles.face,
            styles.front,
            { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius },
            { transform: [{ rotateY: frontInterpolate }] },
          ]}
        >
          <Text style={[styles.script, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            {card.partOfSpeech}
          </Text>
          <Text style={[styles.word, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{card.word}</Text>
          <Text style={[styles.hint, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>Tap to reveal</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.face,
            styles.back,
            { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius },
            { transform: [{ rotateY: backInterpolate }] },
          ]}
        >
          <Text style={[styles.word, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{card.word}</Text>
          <View style={styles.readingRow}>
            <Text style={[styles.reading, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{card.reading}</Text>
            <SpeakButton text={card.word} size={30} />
          </View>
          <Text style={[styles.meaning, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>{card.meaning}</Text>
          <View style={[styles.exampleBox, { backgroundColor: colors.background, borderRadius: colors.radius - 4 }]}>
            <Text style={[styles.exampleJp, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{card.example}</Text>
            <Text style={[styles.exampleEn, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{card.exampleMeaning}</Text>
          </View>
        </Animated.View>
      </Pressable>

      {flipped && (
        <View style={styles.ratingRow}>
          {RATINGS.map(({ label, rating, color }) => (
            <Pressable
              key={rating}
              onPress={() => handleRate(rating)}
              style={({ pressed }) => [
                styles.rateBtn,
                { backgroundColor: color + "22", borderColor: color, borderRadius: colors.radius - 4 },
                pressed && { opacity: 0.7 },
              ]}
            >
              <Text style={[styles.rateLabel, { color, fontFamily: "Inter_600SemiBold" }]}>{label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: "center",
    width: "100%",
  },
  cardWrap: {
    width: "100%",
    height: 280,
  },
  face: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 20,
  },
  front: {},
  back: {},
  script: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  word: {
    fontSize: 48,
    textAlign: "center",
  },
  hint: {
    fontSize: 13,
    marginTop: 8,
  },
  readingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  reading: {
    fontSize: 20,
  },
  meaning: {
    fontSize: 18,
    textAlign: "center",
  },
  exampleBox: {
    padding: 12,
    marginTop: 8,
    width: "100%",
    gap: 4,
  },
  exampleJp: {
    fontSize: 14,
    textAlign: "center",
  },
  exampleEn: {
    fontSize: 12,
    textAlign: "center",
  },
  ratingRow: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
  },
  rateBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
  },
  rateLabel: {
    fontSize: 13,
  },
});
