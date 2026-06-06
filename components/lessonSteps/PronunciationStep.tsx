import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useColors } from "@/hooks/useColors";
import { SpeakButton } from "@/components/SpeakButton";
import { speak } from "@/hooks/useSpeech";
import { scorePronunciation, useSTT, type PronunciationScore } from "@/hooks/useSTT";
import type { PronunciationStep as PronunciationStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: PronunciationStepData;
  onNext: () => void;
}

export function PronunciationStep({ data, onNext }: Props) {
  const colors = useColors();
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState<PronunciationScore | null>(null);
  // Counter incremented when the user explicitly taps the mic. The result
  // effect only scores if the result arrived during this session — that
  // prevents transcripts from a previous prompt from leaking forward.
  const [sessionId, setSessionId] = useState(0);
  const lastScoredSession = useRef(-1);
  const recordingSession = useRef(-1);
  // Timeout for the freeze-on-first-permission case.
  const startTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [freezeWarning, setFreezeWarning] = useState(false);

  const stt = useSTT();
  const prompt = data.prompts[idx];
  const isLast = idx === data.prompts.length - 1;

  // Auto-play the model audio as each new prompt loads. Adaptive rate.
  useEffect(() => {
    const t = setTimeout(() => speak(prompt.text), 280);
    return () => clearTimeout(t);
  }, [idx, prompt.text]);

  // Reset cleanly when a new prompt loads. Stop any in-flight recognition
  // first so its onSpeechResults doesn't fire against the next prompt.
  useEffect(() => {
    setScore(null);
    setFreezeWarning(false);
    setSessionId((s) => s + 1); // invalidates any pending recording
    recordingSession.current = -1;
    if (startTimeout.current) clearTimeout(startTimeout.current);
    (async () => {
      try { await stt.stop(); } catch {}
      stt.reset();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // When STT finishes with a transcript, score it — but only if the recording
  // belongs to the current session AND we haven't already scored this session.
  useEffect(() => {
    if (stt.state !== "result") return;
    if (!stt.transcript) return;
    if (recordingSession.current !== sessionId) return; // stale transcript
    if (lastScoredSession.current === sessionId) return; // already scored
    lastScoredSession.current = sessionId;
    const s = scorePronunciation(stt.transcript, [prompt.text, prompt.romaji]);
    setScore(s);
    if (Platform.OS !== "web") {
      Haptics.notificationAsync(
        s.verdict === "great"
          ? Haptics.NotificationFeedbackType.Success
          : s.verdict === "close"
          ? Haptics.NotificationFeedbackType.Warning
          : Haptics.NotificationFeedbackType.Error
      );
    }
  }, [stt.state, stt.transcript, prompt.text, prompt.romaji, sessionId]);

  // Clear the freeze watchdog the moment recognition actually starts.
  useEffect(() => {
    if (stt.state === "listening" || stt.state === "result" || stt.state === "error") {
      if (startTimeout.current) {
        clearTimeout(startTimeout.current);
        startTimeout.current = null;
      }
    }
    if (stt.state === "listening") setFreezeWarning(false);
  }, [stt.state]);

  useEffect(() => () => {
    if (startTimeout.current) clearTimeout(startTimeout.current);
  }, []);

  const handleMicToggle = async () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    if (stt.state === "listening") {
      if (startTimeout.current) clearTimeout(startTimeout.current);
      try { await stt.stop(); } catch {}
      return;
    }
    // Start a fresh recording for THIS prompt only.
    setScore(null);
    setFreezeWarning(false);
    const newSession = sessionId + 1;
    setSessionId(newSession);
    recordingSession.current = newSession;
    stt.reset();
    // Watchdog: if Voice doesn't transition to 'listening' within 4s, surface
    // an error so the user isn't staring at a dead button after the
    // permission prompt. Common on first-time permission grant.
    if (startTimeout.current) clearTimeout(startTimeout.current);
    startTimeout.current = setTimeout(() => {
      if (stt.state !== "listening") setFreezeWarning(true);
    }, 4000);
    try {
      await stt.start("ja-JP");
    } catch (e) {
      setFreezeWarning(true);
    }
  };

  const handleAdvance = () => {
    if (isLast) onNext();
    else setIdx((i) => i + 1);
  };

  const verdictColor = score?.verdict === "great" ? colors.success : score?.verdict === "close" ? colors.accent : colors.destructive;
  const verdictLabel = score?.verdict === "great" ? "Excellent!" : score?.verdict === "close" ? "Close — listen again" : "Off — let's try once more";

  return (
    <StepShell
      eyebrow={`Pronunciation · ${idx + 1}/${data.prompts.length}`}
      title="Say it out loud"
      subtitle={stt.supported ? "Tap the mic, say the phrase, then we'll score it." : "Mic recognition isn't available in Expo Go — listen and self-check."}
    >
      <View style={styles.progressRow}>
        {data.prompts.map((_, i) => (
          <View key={i} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: i <= idx ? colors.primary : colors.border }} />
        ))}
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
        <Text style={[styles.bigJp, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{prompt.text}</Text>
        <Text style={[styles.romaji, { color: colors.primary, fontFamily: "Inter_500Medium" }]}>{prompt.romaji}</Text>
        <Text style={[styles.en, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{prompt.en}</Text>
        <View style={{ marginTop: 12 }}>
          <SpeakButton text={prompt.text} size={48} />
        </View>
      </View>

      {/* Mic control */}
      <Pressable
        onPress={handleMicToggle}
        disabled={!stt.supported || stt.state === "listening" && false}
        style={({ pressed }) => [
          styles.micBtn,
          {
            backgroundColor: stt.state === "listening" ? colors.destructive : colors.primary,
            borderRadius: 999,
          },
          pressed && { opacity: 0.85 },
          !stt.supported && { opacity: 0.5 },
        ]}
      >
        <Feather name={stt.state === "listening" ? "square" : "mic"} size={22} color="#fff" />
        <Text style={[styles.micText, { fontFamily: "Inter_700Bold" }]}>
          {stt.state === "listening" ? "Stop & score" : "Tap to record"}
        </Text>
      </Pressable>

      {stt.error ? (
        <Text style={[styles.errorText, { color: colors.destructive, fontFamily: "Inter_500Medium" }]}>
          {stt.error}
        </Text>
      ) : null}

      {freezeWarning ? (
        <View style={[styles.freezeWarn, { backgroundColor: colors.accent + "1A", borderColor: colors.accent, borderRadius: 10 }]}>
          <Feather name="alert-triangle" size={14} color={colors.accent} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.freezeWarnText, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>
              Mic didn't start — common right after granting permission. Tap "Try again" to reinitialise.
            </Text>
            <Pressable onPress={handleMicToggle} style={{ marginTop: 6 }}>
              <Text style={[styles.freezeWarnLink, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>Try again</Text>
            </Pressable>
          </View>
        </View>
      ) : null}

      {score ? (
        <View
          style={[
            styles.scoreCard,
            {
              backgroundColor: verdictColor + "1A",
              borderColor: verdictColor,
              borderRadius: 12,
            },
          ]}
        >
          <View style={styles.scoreHeader}>
            <Feather
              name={score.verdict === "great" ? "check-circle" : score.verdict === "close" ? "alert-circle" : "x-circle"}
              size={18}
              color={verdictColor}
            />
            <Text style={[styles.scoreLabel, { color: verdictColor, fontFamily: "Inter_700Bold" }]}>{verdictLabel}</Text>
            <Text style={[styles.scoreNum, { color: verdictColor, fontFamily: "Inter_700Bold" }]}>
              {Math.round(score.score * 100)}%
            </Text>
          </View>
          <Text style={[styles.scoreLine, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>
            We heard: <Text style={{ fontFamily: "Inter_700Bold" }}>{score.transcript}</Text>
          </Text>
          <Text style={[styles.scoreLine, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            Target: {prompt.text}{prompt.romaji ? `  (${prompt.romaji})` : ""}
          </Text>
          {score.verdict !== "great" ? (
            <Pressable
              onPress={handleMicToggle}
              style={({ pressed }) => [styles.tryAgainBtn, { borderColor: verdictColor, borderRadius: 10 }, pressed && { opacity: 0.7 }]}
            >
              <Feather name="rotate-ccw" size={14} color={verdictColor} />
              <Text style={[styles.tryAgainText, { color: verdictColor, fontFamily: "Inter_600SemiBold" }]}>Try again</Text>
            </Pressable>
          ) : null}
        </View>
      ) : null}

      <Pressable
        onPress={handleAdvance}
        style={({ pressed }) => [
          styles.nextBtn,
          { backgroundColor: score?.verdict === "great" || !stt.supported ? colors.primary : colors.muted, borderRadius: 12 },
          pressed && { opacity: 0.85 },
        ]}
      >
        <Text
          style={[
            styles.nextBtnText,
            { color: score?.verdict === "great" || !stt.supported ? "#fff" : colors.mutedForeground, fontFamily: "Inter_600SemiBold" },
          ]}
        >
          {!stt.supported ? (isLast ? "I said the last one" : "I said it — next") : isLast ? "Finish" : score ? "Next phrase" : "Skip"}
        </Text>
        <Feather name="arrow-right" size={16} color={score?.verdict === "great" || !stt.supported ? "#fff" : colors.mutedForeground} />
      </Pressable>
    </StepShell>
  );
}

const styles = StyleSheet.create({
  progressRow: { flexDirection: "row", gap: 4, marginBottom: 12 },
  card: { padding: 24, borderWidth: 1, alignItems: "center", gap: 6 },
  bigJp: { fontSize: 36, lineHeight: 46, textAlign: "center" },
  romaji: { fontSize: 16, marginTop: 2 },
  en: { fontSize: 13, marginTop: 2 },
  micBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, paddingVertical: 16, marginTop: 16 },
  micText: { color: "#fff", fontSize: 15 },
  errorText: { fontSize: 12, marginTop: 6, textAlign: "center" },
  freezeWarn: { flexDirection: "row", gap: 10, padding: 12, marginTop: 10, borderWidth: 1, alignItems: "flex-start" },
  freezeWarnText: { fontSize: 12, lineHeight: 18 },
  freezeWarnLink: { fontSize: 13 },
  scoreCard: { padding: 14, marginTop: 12, gap: 6, borderWidth: 1 },
  scoreHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  scoreLabel: { fontSize: 14, flex: 1 },
  scoreNum: { fontSize: 16 },
  scoreLine: { fontSize: 13, lineHeight: 18 },
  tryAgainBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingVertical: 8, marginTop: 6, borderWidth: 1 },
  tryAgainText: { fontSize: 13 },
  nextBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 14, marginTop: 12 },
  nextBtnText: { fontSize: 15 },
});
