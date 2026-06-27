import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useMemo, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import { speak, stopSpeech } from "@/hooks/useSpeech";
import type { VocabDrillStep as VocabDrillStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: VocabDrillStepData;
  onNext: () => void;
}

type Phase = "intro" | "recall";

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * One word at a time. For each word:
 *   1) Intro card — shows the symbol, romaji, meaning, example. Auto-plays.
 *   2) Recall card — shows the meaning + emoji + example.en, asks user to pick
 *      the Japanese among 3-4 options.
 */
export function VocabDrillStep({ data, onNext }: Props) {
  const colors = useColors();
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("intro");
  const [selected, setSelected] = useState<number | null>(null);

  const word = data.words[idx];
  const isLast = idx === data.words.length - 1;

  // Build the recall options once per (word, phase) so they don't reshuffle on every render.
  const options = useMemo(() => {
    if (phase !== "recall") return [];
    const correct = { text: word.text, romaji: word.romaji };
    const explicit = word.distractors ?? [];
    const fromSiblings = data.words
      .filter((w, i) => i !== idx)
      .map((w) => ({ text: w.text, romaji: w.romaji }));
    // Dedupe by text (and against the correct answer) so the same word can't
    // appear as two identical options.
    const seen = new Set<string>([correct.text]);
    const distractors: Array<{ text: string; romaji: string }> = [];
    for (const o of shuffle([...explicit, ...fromSiblings])) {
      if (seen.has(o.text)) continue;
      seen.add(o.text);
      distractors.push(o);
      if (distractors.length === 3) break;
    }
    return shuffle([correct, ...distractors]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, phase]);

  const correctIdx = options.findIndex((o) => o.text === word.text && o.romaji === word.romaji);
  const answered = selected !== null;
  const isCorrect = selected === correctIdx;

  // Auto-play the Japanese when the intro shows.
  useEffect(() => {
    if (phase === "intro") {
      const t = setTimeout(() => speak(word.text), 250);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [idx, phase, word.text]);

  useEffect(() => () => stopSpeech(), []);

  const onSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(i === correctIdx ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error);
    }
    const picked = options[i];
    if (picked) setTimeout(() => speak(picked.text), 180);
  };

  const handleAdvance = () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    if (phase === "intro") {
      setPhase("recall");
      return;
    }
    // phase === recall
    if (isLast) {
      onNext();
    } else {
      setIdx((i) => i + 1);
      setPhase("intro");
      setSelected(null);
    }
  };

  // ─── INTRO ───────────────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <StepShell
        eyebrow={`Vocab · ${idx + 1}/${data.words.length}`}
        title="Meet this word"
        subtitle={data.intro && idx === 0 ? data.intro : "Listen, then say it. Tap the speaker to replay."}
        ctaLabel="I'm ready — quiz me"
        onCta={handleAdvance}
      >
        <View style={styles.progressRow}>
          {data.words.map((_, i) => (
            <View
              key={i}
              style={{
                flex: 1,
                height: 3,
                borderRadius: 2,
                backgroundColor: i < idx ? colors.success : i === idx ? colors.primary : colors.border,
              }}
            />
          ))}
        </View>

        <View style={[styles.heroCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
          <Text style={styles.emoji}>{word.emoji ?? "📘"}</Text>
          <Text style={[styles.bigJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{word.text}</Text>
          <Text style={[styles.romaji, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>{word.romaji}</Text>
          <Text style={[styles.meaning, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{word.meaning}</Text>
          <View style={{ marginTop: 8 }}>
            <SpeakButton text={word.text} size={44} />
          </View>
        </View>

        {word.example ? (
          <View style={[styles.example, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
            <Text style={[styles.exLabel, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>Example</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.exJp, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{word.example.jp}</Text>
                <Text style={[styles.exRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{word.example.romaji}</Text>
                <Text style={[styles.exEn, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{word.example.en}</Text>
              </View>
              <SpeakButton text={word.example.jp} size={32} />
            </View>
          </View>
        ) : null}
      </StepShell>
    );
  }

  // ─── RECALL ──────────────────────────────────────────────────────────────
  return (
    <StepShell
      eyebrow={`Quick check · ${idx + 1}/${data.words.length}`}
      title="Which one means…"
      subtitle="Tap the Japanese word that matches the meaning."
    >
      <View style={styles.progressRow}>
        {data.words.map((_, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              backgroundColor: i < idx ? colors.success : i === idx ? colors.primary : colors.border,
            }}
          />
        ))}
      </View>

      <View style={[styles.promptCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
        <Text style={styles.promptEmoji}>{word.emoji ?? "❓"}</Text>
        <Text style={[styles.promptMeaning, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{word.meaning}</Text>
        {word.example ? (
          <Text style={[styles.promptExample, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            “{word.example.en}”
          </Text>
        ) : null}
      </View>

      <View style={{ gap: 10, marginTop: 6 }}>
        {options.map((opt, i) => {
          let bg = colors.card;
          let border = colors.border;
          let textColor = colors.foreground;
          if (answered) {
            if (i === correctIdx) { bg = colors.success + "22"; border = colors.success; textColor = colors.success; }
            else if (i === selected) { bg = colors.destructive + "22"; border = colors.destructive; textColor = colors.destructive; }
          }
          return (
            <Pressable
              key={`${idx}-${i}-${opt.text}`}
              onPress={() => onSelect(i)}
              style={({ pressed }) => [
                styles.option,
                { backgroundColor: bg, borderColor: border, borderRadius: 12 },
                pressed && !answered && { opacity: 0.85 },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.optionJp, { color: textColor, fontFamily: "Inter_700Bold" }]}>{opt.text}</Text>
                <Text style={[styles.optionRomaji, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{opt.romaji}</Text>
              </View>
              {answered && i === correctIdx && <Feather name="check" size={18} color={colors.success} />}
              {answered && i === selected && i !== correctIdx && <Feather name="x" size={18} color={colors.destructive} />}
            </Pressable>
          );
        })}
      </View>

      {answered ? (
        <View style={[styles.feedback, { backgroundColor: isCorrect ? colors.success + "1A" : colors.accent + "1A", borderColor: isCorrect ? colors.success : colors.accent, borderRadius: 12 }]}>
          <Text style={[styles.feedbackLabel, { color: isCorrect ? colors.success : colors.accent, fontFamily: "Inter_700Bold" }]}>
            {isCorrect ? "Correct!" : `The answer is ${word.text} (${word.romaji})`}
          </Text>
          <Text style={[styles.feedbackText, { color: colors.foreground, fontFamily: "Inter_400Regular" }]}>
            {word.text} ({word.romaji}) = {word.meaning}.
          </Text>
        </View>
      ) : null}

      {answered ? (
        <Pressable
          onPress={handleAdvance}
          style={({ pressed }) => [styles.nextBtn, { backgroundColor: colors.primary, borderRadius: 12 }, pressed && { opacity: 0.85 }]}
        >
          <Text style={[styles.nextBtnText, { fontFamily: "Inter_600SemiBold" }]}>
            {isLast ? "Finish vocab" : "Next word"}
          </Text>
          <Feather name="arrow-right" size={16} color="#fff" />
        </Pressable>
      ) : null}
    </StepShell>
  );
}

const styles = StyleSheet.create({
  progressRow: { flexDirection: "row", gap: 4, marginBottom: 14 },

  heroCard: { padding: 20, borderWidth: 1, alignItems: "center", gap: 6 },
  emoji: { fontSize: 56 },
  bigJp: { fontSize: 44, lineHeight: 54, marginTop: 6 },
  romaji: { fontSize: 18 },
  meaning: { fontSize: 14, marginTop: 4, textAlign: "center" },
  example: { padding: 14, marginTop: 14, gap: 6 },
  exLabel: { fontSize: 10, letterSpacing: 1, textTransform: "uppercase" },
  exJp: { fontSize: 16 },
  exRomaji: { fontSize: 12, fontStyle: "italic", marginTop: 1 },
  exEn: { fontSize: 12, marginTop: 1 },

  promptCard: { padding: 18, borderWidth: 1, alignItems: "center", gap: 6 },
  promptEmoji: { fontSize: 56 },
  promptMeaning: { fontSize: 22, marginTop: 4, textAlign: "center" },
  promptExample: { fontSize: 13, fontStyle: "italic", textAlign: "center", marginTop: 2 },

  option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 14, borderWidth: 1, gap: 10 },
  optionJp: { fontSize: 22 },
  optionRomaji: { fontSize: 12, fontStyle: "italic", marginTop: 2 },

  feedback: { padding: 14, gap: 6, marginTop: 14, borderWidth: 1 },
  feedbackLabel: { fontSize: 13 },
  feedbackText: { fontSize: 13, lineHeight: 18 },
  nextBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 14, marginTop: 12 },
  nextBtnText: { color: "#fff", fontSize: 15 },
});
