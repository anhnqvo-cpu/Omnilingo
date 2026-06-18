import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useMemo, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { speak } from "@/hooks/useSpeech";
import type { MatchingStep as MatchingStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

function hasJP(s: string): boolean {
  return /[぀-ヿ㐀-鿿ｦ-ﾝ]/.test(s);
}

interface Props {
  data: MatchingStepData;
  onNext: () => void;
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

type Side = "left" | "right";

export function MatchingStep({ data, onNext }: Props) {
  const colors = useColors();
  const [roundIdx, setRoundIdx] = useState(0);
  const round = data.rounds[roundIdx];

  // Each left card carries the answer it expects (`right`) so we can match by
  // content, not by id. That way duplicate right-side cards (e.g. two
  // "います (living)" cards) are interchangeable — any correct card is accepted.
  const leftItems = useMemo(() => shuffle(round.pairs.map((p) => ({ id: p.id, label: p.left, romaji: p.romaji, right: p.right }))), [roundIdx, round]);
  const rightItems = useMemo(() => shuffle(round.pairs.map((p) => ({ id: p.id, label: p.right }))), [roundIdx, round]);

  // Tracked separately because a left card may match a right card with a
  // different id (duplicate labels), so the two columns can't share one keyset.
  const [matchedLeft, setMatchedLeft] = useState<Record<string, boolean>>({});
  const [matchedRight, setMatchedRight] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<{ side: Side; id: string } | null>(null);
  const [wrongFlash, setWrongFlash] = useState<{ leftId: string; rightId: string } | null>(null);

  const allDone = Object.keys(matchedLeft).length === round.pairs.length;
  const isLastRound = roundIdx === data.rounds.length - 1;

  const handleTap = (side: Side, id: string) => {
    if (side === "left" ? matchedLeft[id] : matchedRight[id]) return;
    if (wrongFlash) return;
    // Speak the Japanese side on tap so the learner hears it as they match.
    if (side === "left") {
      const item = leftItems.find((x) => x.id === id);
      if (item && hasJP(item.label)) speak(item.label);
    } else {
      const item = rightItems.find((x) => x.id === id);
      if (item && hasJP(item.label)) speak(item.label);
    }
    if (!selected) {
      setSelected({ side, id });
      if (Platform.OS !== "web") Haptics.selectionAsync();
      return;
    }
    if (selected.side === side) {
      setSelected({ side, id });
      return;
    }
    // pair attempt — correct when the left card's expected answer matches the
    // tapped right card's label (by content, so duplicates are interchangeable).
    const leftId = side === "left" ? id : selected.id;
    const rightId = side === "right" ? id : selected.id;
    const leftItem = leftItems.find((x) => x.id === leftId);
    const rightItem = rightItems.find((x) => x.id === rightId);
    if (leftItem && rightItem && leftItem.right === rightItem.label) {
      setMatchedLeft((m) => ({ ...m, [leftId]: true }));
      setMatchedRight((m) => ({ ...m, [rightId]: true }));
      setSelected(null);
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      setWrongFlash({ leftId, rightId });
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setTimeout(() => {
        setWrongFlash(null);
        setSelected(null);
      }, 600);
    }
  };

  const handleNextRound = () => {
    if (isLastRound) onNext();
    else {
      setRoundIdx((i) => i + 1);
      setMatchedLeft({});
      setMatchedRight({});
      setSelected(null);
    }
  };

  return (
    <StepShell
      eyebrow={`Matching · ${roundIdx + 1}/${data.rounds.length}`}
      title={round.title}
      subtitle={data.intro ?? "Tap a card on the left, then its match on the right."}
      ctaLabel={allDone ? (isLastRound ? "Finish matching" : "Next round") : undefined}
      onCta={allDone ? handleNextRound : undefined}
    >
      <View style={styles.board}>
        <View style={styles.col}>
          {leftItems.map((item) => {
            const isMatched = matchedLeft[item.id];
            const isSelected = selected?.side === "left" && selected.id === item.id;
            const isWrong = wrongFlash?.leftId === item.id;
            return (
              <Pressable
                key={item.id}
                onPress={() => handleTap("left", item.id)}
                style={({ pressed }) => [
                  styles.cell,
                  {
                    backgroundColor: isMatched ? colors.success + "22" : isWrong ? colors.destructive + "22" : isSelected ? colors.primary + "33" : colors.card,
                    borderColor: isMatched ? colors.success : isWrong ? colors.destructive : isSelected ? colors.primary : colors.border,
                    borderRadius: colors.radius - 4,
                  },
                  pressed && { opacity: 0.85 },
                ]}
              >
                <Text
                  style={[
                    styles.cellLabel,
                    { color: isMatched ? colors.success : isWrong ? colors.destructive : colors.foreground, fontFamily: "Inter_700Bold" },
                  ]}
                >
                  {item.label}
                </Text>
                {item.romaji ? (
                  <Text style={[styles.cellSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{item.romaji}</Text>
                ) : null}
                {isMatched ? (
                  <Feather name="check" size={14} color={colors.success} style={{ position: "absolute", top: 8, right: 8 }} />
                ) : null}
              </Pressable>
            );
          })}
        </View>
        <View style={styles.col}>
          {rightItems.map((item) => {
            const isMatched = matchedRight[item.id];
            const isSelected = selected?.side === "right" && selected.id === item.id;
            const isWrong = wrongFlash?.rightId === item.id;
            return (
              <Pressable
                key={item.id}
                onPress={() => handleTap("right", item.id)}
                style={({ pressed }) => [
                  styles.cell,
                  {
                    backgroundColor: isMatched ? colors.success + "22" : isWrong ? colors.destructive + "22" : isSelected ? colors.primary + "33" : colors.card,
                    borderColor: isMatched ? colors.success : isWrong ? colors.destructive : isSelected ? colors.primary : colors.border,
                    borderRadius: colors.radius - 4,
                  },
                  pressed && { opacity: 0.85 },
                ]}
              >
                <Text
                  style={[
                    styles.cellLabel,
                    { color: isMatched ? colors.success : isWrong ? colors.destructive : colors.foreground, fontFamily: "Inter_500Medium" },
                  ]}
                >
                  {item.label}
                </Text>
                {isMatched ? (
                  <Feather name="check" size={14} color={colors.success} style={{ position: "absolute", top: 8, right: 8 }} />
                ) : null}
              </Pressable>
            );
          })}
        </View>
      </View>

      {allDone ? (
        <View style={[styles.doneNote, { backgroundColor: colors.success + "22", borderColor: colors.success, borderRadius: 12 }]}>
          <Feather name="check-circle" size={16} color={colors.success} />
          <Text style={[styles.doneText, { color: colors.success, fontFamily: "Inter_600SemiBold" }]}>Round complete!</Text>
        </View>
      ) : null}
    </StepShell>
  );
}

const styles = StyleSheet.create({
  board: { flexDirection: "row", gap: 10 },
  col: { flex: 1, gap: 10 },
  cell: { padding: 14, borderWidth: 1, minHeight: 64, alignItems: "center", justifyContent: "center", gap: 2 },
  cellLabel: { fontSize: 18, textAlign: "center" },
  cellSub: { fontSize: 11 },
  doneNote: { flexDirection: "row", alignItems: "center", gap: 8, padding: 12, marginTop: 16, borderWidth: 1 },
  doneText: { fontSize: 14 },
});
