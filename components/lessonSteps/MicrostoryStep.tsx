import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import { speak, stopSpeech } from "@/hooks/useSpeech";
import type { MicrostoryStep as MicrostoryStepData, MicrostorySpeaker } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: MicrostoryStepData;
  onNext: () => void;
}

const SPEAKERS: Record<MicrostorySpeaker, { name: string; avatar: string; side: "left" | "right" }> = {
  narrator: { name: "", avatar: "", side: "left" },
  hana: { name: "Hana", avatar: "🧑‍🎓", side: "right" },
  tanaka: { name: "Tanaka", avatar: "👨‍🏫", side: "left" },
  kenji: { name: "Kenji", avatar: "👦", side: "left" },
  yui: { name: "Yui", avatar: "👧", side: "right" },
};

type Phase = "reading" | "check";

export function MicrostoryStep({ data, onNext }: Props) {
  const colors = useColors();
  const [phase, setPhase] = useState<Phase>("reading");
  const [revealed, setRevealed] = useState(1);
  const [checkIdx, setCheckIdx] = useState(0);
  const [checkSelected, setCheckSelected] = useState<number | null>(null);
  const lastSpokenRef = useRef(-1);

  const hasChecks = (data.comprehension?.length ?? 0) > 0;

  // Auto-play the most recently revealed line, if it has Japanese text.
  useEffect(() => {
    if (phase !== "reading") return;
    const i = revealed - 1;
    if (i === lastSpokenRef.current) return;
    lastSpokenRef.current = i;
    const line = data.lines[i];
    if (line?.jp) {
      const t = setTimeout(() => speak(line.jp!), 280);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [revealed, phase, data.lines]);

  useEffect(() => () => stopSpeech(), []);

  const replayAll = () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    const shown = data.lines.slice(0, revealed).filter((l) => l.jp);
    let i = 0;
    const playNext = () => {
      if (i >= shown.length) return;
      speak(shown[i].jp!);
      i += 1;
      setTimeout(playNext, 1500);
    };
    playNext();
  };

  if (phase === "reading") {
    const linesToShow = data.lines.slice(0, revealed);
    const allRevealed = revealed >= data.lines.length;
    return (
      <StepShell
        eyebrow="Comprehensible input"
        title={data.setting}
        subtitle={data.intro ?? "Listen and read along. Each line plays automatically."}
        ctaLabel={allRevealed ? (hasChecks ? "Check understanding" : "Continue") : "Next line"}
        onCta={() => {
          if (allRevealed) {
            if (hasChecks) setPhase("check");
            else onNext();
          } else {
            setRevealed((r) => r + 1);
            if (Platform.OS !== "web") Haptics.selectionAsync();
          }
        }}
        secondaryLabel="Replay all"
        onSecondary={replayAll}
        scrollToEndSignal={revealed}
      >
        {data.emoji ? (
          <Text style={[styles.sceneEmoji]}>{data.emoji}</Text>
        ) : null}
        <View style={{ gap: 14, marginTop: 12 }}>
          {linesToShow.map((line, i) => {
            const speaker = SPEAKERS[line.speaker];
            const isNarrator = line.speaker === "narrator";
            const side = speaker.side;
            return (
              <View
                key={i}
                style={[
                  styles.bubbleRow,
                  side === "right" && { flexDirection: "row-reverse" },
                  isNarrator && { justifyContent: "center" },
                ]}
              >
                {!isNarrator ? (
                  <View style={styles.avatarCol}>
                    <Text style={styles.avatar}>{speaker.avatar}</Text>
                    <Text style={[styles.speakerName, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>{speaker.name}</Text>
                  </View>
                ) : null}
                <View
                  style={[
                    styles.bubble,
                    {
                      backgroundColor: isNarrator ? "transparent" : side === "right" ? colors.primary + "1A" : colors.card,
                      borderColor: isNarrator ? "transparent" : colors.border,
                      borderRadius: 16,
                      maxWidth: isNarrator ? "100%" : "76%",
                    },
                  ]}
                >
                  {line.jp ? (
                    <View style={styles.bubbleTop}>
                      <Text style={[styles.bubbleJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{line.jp}</Text>
                      <SpeakButton text={line.jp} size={28} />
                    </View>
                  ) : null}
                  {line.romaji ? (
                    <Text style={[styles.bubbleRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{line.romaji}</Text>
                  ) : null}
                  <Text
                    style={[
                      isNarrator ? styles.narrator : styles.bubbleEn,
                      { color: isNarrator ? colors.mutedForeground : colors.foreground, fontFamily: "Inter_400Regular" },
                    ]}
                  >
                    {line.en}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </StepShell>
    );
  }

  if (phase === "check" && data.comprehension) {
    const c = data.comprehension[checkIdx];
    const answered = checkSelected !== null;
    const isCorrect = checkSelected === c.correct;
    const isLast = checkIdx === data.comprehension.length - 1;
    return (
      <StepShell
        eyebrow={`Comprehension · ${checkIdx + 1}/${data.comprehension.length}`}
        title="Did you catch that?"
        subtitle="One quick question about the story."
      >
        <View style={[styles.qCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: 12 }]}>
          <Text style={[styles.qText, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{c.question}</Text>
        </View>
        <View style={{ gap: 10, marginTop: 12 }}>
          {c.options.map((opt, i) => {
            let bg = colors.card;
            let border = colors.border;
            let textColor = colors.foreground;
            if (answered) {
              if (i === c.correct) { bg = colors.success + "22"; border = colors.success; textColor = colors.success; }
              else if (i === checkSelected) { bg = colors.destructive + "22"; border = colors.destructive; textColor = colors.destructive; }
            }
            return (
              <Pressable
                key={i}
                onPress={() => !answered && setCheckSelected(i)}
                style={({ pressed }) => [
                  styles.option,
                  { backgroundColor: bg, borderColor: border, borderRadius: 12 },
                  pressed && !answered && { opacity: 0.85 },
                ]}
              >
                <Text style={[styles.optionText, { color: textColor, fontFamily: "Inter_500Medium" }]}>{opt}</Text>
                {answered && i === c.correct && <Feather name="check" size={18} color={colors.success} />}
                {answered && i === checkSelected && i !== c.correct && <Feather name="x" size={18} color={colors.destructive} />}
              </Pressable>
            );
          })}
        </View>
        {answered ? (
          <View style={[styles.feedback, { backgroundColor: isCorrect ? colors.success + "1A" : colors.accent + "1A", borderColor: isCorrect ? colors.success : colors.accent, borderRadius: 12 }]}>
            <Text style={[styles.feedbackLabel, { color: isCorrect ? colors.success : colors.accent, fontFamily: "Inter_700Bold" }]}>
              {isCorrect ? "Got it!" : "Not quite"}
            </Text>
            <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>{c.explanation}</Text>
          </View>
        ) : null}
        {answered ? (
          <Pressable
            onPress={() => {
              if (isLast) onNext();
              else {
                setCheckIdx((i) => i + 1);
                setCheckSelected(null);
              }
            }}
            style={({ pressed }) => [styles.nextBtn, { backgroundColor: colors.primary, borderRadius: 12 }, pressed && { opacity: 0.85 }]}
          >
            <Text style={[styles.nextBtnText, { fontFamily: "Inter_600SemiBold" }]}>
              {isLast ? "Continue" : "Next question"}
            </Text>
            <Feather name="arrow-right" size={16} color="#fff" />
          </Pressable>
        ) : null}
      </StepShell>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  sceneEmoji: { fontSize: 36, marginBottom: 6 },
  bubbleRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  avatarCol: { alignItems: "center", width: 44 },
  avatar: { fontSize: 28 },
  speakerName: { fontSize: 10, marginTop: 2 },
  bubble: { padding: 12, borderWidth: 1, gap: 4 },
  bubbleTop: { flexDirection: "row", alignItems: "center", gap: 8 },
  bubbleJp: { fontSize: 18, flex: 1 },
  bubbleRomaji: { fontSize: 12, fontStyle: "italic" },
  bubbleEn: { fontSize: 13, lineHeight: 18 },
  narrator: { fontSize: 13, fontStyle: "italic", textAlign: "center", lineHeight: 18 },
  qCard: { padding: 16, borderWidth: 1 },
  qText: { fontSize: 15, lineHeight: 22 },
  option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 14, borderWidth: 1 },
  optionText: { fontSize: 14, flex: 1 },
  feedback: { padding: 14, gap: 6, marginTop: 14, borderWidth: 1 },
  feedbackLabel: { fontSize: 13 },
  feedbackText: { fontSize: 13, lineHeight: 18 },
  nextBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 14, marginTop: 12 },
  nextBtnText: { color: "#fff", fontSize: 15 },
});
