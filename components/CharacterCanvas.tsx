import * as Haptics from "expo-haptics";
import React, { useRef, useState } from "react";
import { Platform, PanResponder, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { useColors } from "@/hooks/useColors";
import type { Character } from "@/data/writing";

interface Props {
  character: Character;
  onGotIt: () => void;
  onRetry: () => void;
}

interface Point { x: number; y: number }

function pointsToPath(pts: Point[]): string {
  if (pts.length < 2) return "";
  const [first, ...rest] = pts;
  return `M ${first.x} ${first.y} ` + rest.map((p) => `L ${p.x} ${p.y}`).join(" ");
}

export function CharacterCanvas({ character, onGotIt, onRetry }: Props) {
  const colors = useColors();
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const currentStroke = useRef<Point[]>([]);
  const canvasRef = useRef<View>(null);
  const [canvasLayout, setCanvasLayout] = useState({ x: 0, y: 0, width: 300, height: 300 });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        currentStroke.current = [{ x: locationX, y: locationY }];
        if (Platform.OS !== "web") Haptics.selectionAsync();
      },
      onPanResponderMove: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        currentStroke.current = [...currentStroke.current, { x: locationX, y: locationY }];
        setStrokes((prev) => {
          const copy = [...prev];
          copy[copy.length === 0 ? 0 : copy.length - 1] = [...currentStroke.current];
          if (copy.length === 0) return [[...currentStroke.current]];
          const last = copy.length - 1;
          copy[last] = [...currentStroke.current];
          return [...copy];
        });
      },
      onPanResponderRelease: () => {
        setStrokes((prev) => {
          if (currentStroke.current.length === 0) return prev;
          const withoutLast = prev.filter((_, i) => i !== prev.length - 1);
          return [...withoutLast, [...currentStroke.current]];
        });
        currentStroke.current = [];
      },
    })
  ).current;

  const handlePanStart = (e: any) => {
    const { locationX, locationY } = e.nativeEvent;
    currentStroke.current = [{ x: locationX, y: locationY }];
    if (Platform.OS !== "web") Haptics.selectionAsync();
    setStrokes((prev) => [...prev, [{ x: locationX, y: locationY }]]);
  };

  const handlePanMove = (e: any) => {
    const { locationX, locationY } = e.nativeEvent;
    currentStroke.current = [...currentStroke.current, { x: locationX, y: locationY }];
    setStrokes((prev) => {
      if (prev.length === 0) return [[...currentStroke.current]];
      const copy = [...prev];
      copy[copy.length - 1] = [...currentStroke.current];
      return copy;
    });
  };

  const handlePanEnd = () => {
    currentStroke.current = [];
  };

  const clear = () => {
    setStrokes([]);
    if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleGotIt = () => {
    if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setStrokes([]);
    onGotIt();
  };

  const handleRetry = () => {
    setStrokes([]);
    onRetry();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.charInfo}>
        <Text style={[styles.charDisplay, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{character.char}</Text>
        <View style={styles.charMeta}>
          <Text style={[styles.charReading, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{character.reading}</Text>
          <Text style={[styles.charStrokes, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{character.strokes} stroke{character.strokes !== 1 ? "s" : ""}</Text>
          {character.example ? (
            <Text style={[styles.charExample, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{character.example}</Text>
          ) : null}
        </View>
      </View>

      <View
        style={[styles.canvas, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
        onLayout={(e) => setCanvasLayout(e.nativeEvent.layout)}
        {...panResponder.panHandlers}
      >
        <Text style={[styles.ghostChar, { color: colors.border }]}>{character.char}</Text>
        <Svg style={StyleSheet.absoluteFill} width={canvasLayout.width} height={canvasLayout.height}>
          {strokes.map((stroke, i) => (
            <Path
              key={i}
              d={pointsToPath(stroke)}
              stroke={colors.primary}
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}
        </Svg>
      </View>

      <View style={styles.actions}>
        <Pressable
          onPress={clear}
          style={({ pressed }) => [styles.btn, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }, pressed && { opacity: 0.7 }]}
        >
          <Text style={[styles.btnLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>Clear</Text>
        </Pressable>
        <Pressable
          onPress={handleRetry}
          style={({ pressed }) => [styles.btn, { backgroundColor: colors.destructive + "22", borderColor: colors.destructive, borderWidth: 1, borderRadius: colors.radius - 4 }, pressed && { opacity: 0.7 }]}
        >
          <Text style={[styles.btnLabel, { color: colors.destructive, fontFamily: "Inter_500Medium" }]}>Retry</Text>
        </Pressable>
        <Pressable
          onPress={handleGotIt}
          style={({ pressed }) => [styles.btn, { backgroundColor: colors.success + "22", borderColor: colors.success, borderWidth: 1, borderRadius: colors.radius - 4 }, pressed && { opacity: 0.7 }]}
        >
          <Text style={[styles.btnLabel, { color: colors.success, fontFamily: "Inter_600SemiBold" }]}>Got it</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 16,
    alignItems: "center",
    width: "100%",
  },
  charInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  charDisplay: {
    fontSize: 72,
    lineHeight: 80,
  },
  charMeta: {
    gap: 4,
  },
  charReading: {
    fontSize: 18,
  },
  charStrokes: {
    fontSize: 13,
  },
  charExample: {
    fontSize: 13,
  },
  canvas: {
    width: "100%",
    aspectRatio: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  ghostChar: {
    fontSize: 200,
    position: "absolute",
    opacity: 0.08,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  btn: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
  },
  btnLabel: {
    fontSize: 14,
  },
});
