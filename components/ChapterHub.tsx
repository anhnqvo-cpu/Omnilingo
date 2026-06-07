import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, type Href } from "expo-router";
import React from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useApp } from "@/context/AppContext";
import { getCurriculum } from "@/data/curriculum";
import { StreakWidget } from "@/components/StreakWidget";
import { OmnilingoLogo } from "@/components/OmnilingoLogo";

const LEVEL_COLOR: Record<string, string> = {
  N5: "#22c55e",
  N4: "#f59e0b",
  N3: "#e85d75",
  N2: "#a855f7",
  N1: "#6366f1",
};

export function ChapterHub() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { completedLessons, languageCode, streak, xp, level, placementLevel } = useApp();
  const curriculum = getCurriculum(languageCode);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const botPad = Platform.OS === "web" ? 100 : insets.bottom + 90;

  // Find the first unfinished, unlocked lesson — the "continue here" target.
  const continueLesson = (() => {
    for (const book of curriculum.books) {
      for (const chapter of book.chapters) {
        for (const lesson of chapter.lessons) {
          if (completedLessons.includes(lesson.id)) continue;
          const prereqOk = !lesson.unlockAfter || completedLessons.includes(lesson.unlockAfter);
          if (prereqOk) return { lesson, chapter, book };
        }
      }
    }
    return null;
  })();
  const hasStarted = completedLessons.length > 0;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad + 12, paddingBottom: botPad, paddingHorizontal: 16, gap: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={[styles.eyebrow, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>
          {curriculum.languageNameNative} · {curriculum.languageName}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View style={styles.logoChip}>
            <OmnilingoLogo size={30} ink="#0F172A" />
          </View>
          <Text style={[styles.title, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>Omnilingo</Text>
        </View>
        <Text style={[styles.tagline, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>
          Fluency, made reachable — from your first word to your last.
        </Text>
        <Text style={[styles.sub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {hasStarted ? "Pick up where you left off." : "Foundations to fluency. Let's start."}
        </Text>
      </View>

      <StreakWidget streak={streak} xp={xp} level={level} />

      <Pressable
        onPress={() => router.push("/placement" as Href)}
        style={({ pressed }) => [
          styles.levelRow,
          { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius },
          pressed && { opacity: 0.85 },
        ]}
      >
        <View style={[styles.levelIcon, { backgroundColor: colors.accent + "22" }]}>
          <Feather name="target" size={16} color={colors.accent} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.levelTitle, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>
            Check my level
          </Text>
          <Text style={[styles.levelSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            {placementLevel ? `Last placed: ${placementLevel}` : "Take a quick test to find your starting point"}
          </Text>
        </View>
        <Feather name="chevron-right" size={16} color={colors.mutedForeground} />
      </Pressable>

      {continueLesson ? (
        <Pressable
          onPress={() => router.push({ pathname: "/lesson/[id]", params: { id: continueLesson.lesson.id } })}
          style={({ pressed }) => [{ borderRadius: colors.radius, overflow: "hidden" }, pressed && { opacity: 0.9 }]}
        >
          <LinearGradient
            colors={[colors.primary, colors.indigo]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.continueCard}
          >
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={[styles.continueLabel, { fontFamily: "Inter_500Medium" }]}>
                {hasStarted ? "Continue learning" : "Start your first lesson"}
              </Text>
              <Text style={[styles.continueTitle, { fontFamily: "Inter_700Bold" }]} numberOfLines={1}>
                {continueLesson.lesson.title}
              </Text>
              <Text style={[styles.continueSub, { fontFamily: "Inter_400Regular" }]}>
                Ch {continueLesson.chapter.number} · Lesson {continueLesson.lesson.number} · ~{continueLesson.lesson.estimateMinutes} min
              </Text>
            </View>
            <View style={styles.continueArrow}>
              <Feather name="play" size={20} color="#fff" />
            </View>
          </LinearGradient>
        </Pressable>
      ) : (
        <View style={[styles.allDone, { backgroundColor: colors.success + "22", borderColor: colors.success, borderRadius: colors.radius }]}>
          <Feather name="award" size={18} color={colors.success} />
          <Text style={[styles.allDoneText, { color: colors.success, fontFamily: "Inter_700Bold" }]}>
            All current lessons complete — more chapters on the way!
          </Text>
        </View>
      )}

      {curriculum.books.map((book) => {
        const totalLessons = book.chapters.reduce((acc, c) => acc + c.lessons.length, 0);
        const doneLessons = book.chapters.reduce(
          (acc, c) => acc + c.lessons.filter((l) => completedLessons.includes(l.id)).length,
          0
        );
        const bookPct = totalLessons === 0 ? 0 : Math.round((doneLessons / totalLessons) * 100);
        const bookSoon = !!book.comingSoon;
        return (
          <View key={book.id} style={{ gap: 14, opacity: bookSoon ? 0.7 : 1 }}>
            <View style={{ gap: 4 }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text style={[styles.bookNumber, { color: colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>BOOK {book.number}</Text>
                <Text style={[styles.cefr, { color: colors.accent, fontFamily: "Inter_700Bold" }]}>{book.cefr}</Text>
                {book.isFree ? (
                  <View style={[styles.freeBadge, { backgroundColor: colors.success + "22" }]}>
                    <Text style={[styles.freeBadgeText, { color: colors.success, fontFamily: "Inter_700Bold" }]}>FREE</Text>
                  </View>
                ) : null}
                {bookSoon ? (
                  <View style={[styles.freeBadge, { backgroundColor: colors.mutedForeground + "22" }]}>
                    <Text style={[styles.freeBadgeText, { color: colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>SOON</Text>
                  </View>
                ) : null}
              </View>
              <Text style={[styles.bookTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{book.title}</Text>
              <Text style={[styles.bookSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{book.subtitle}</Text>
              {!bookSoon ? (
                <>
                  <View style={[styles.bookProgressTrack, { backgroundColor: colors.border, borderRadius: 4 }]}>
                    <View style={[styles.bookProgressFill, { width: `${bookPct}%`, backgroundColor: colors.primary, borderRadius: 4 }]} />
                  </View>
                  <Text style={[styles.bookProgressLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>
                    {doneLessons}/{totalLessons} lessons · {bookPct}%
                  </Text>
                </>
              ) : (
                <Text style={[styles.bookProgressLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium", fontStyle: "italic" }]}>
                  Roadmap below — content coming.
                </Text>
              )}
            </View>

            <View style={{ gap: 14 }}>
              {book.chapters.map((chapter) => {
                const chapterDone = chapter.lessons.filter((l) => completedLessons.includes(l.id)).length;
                const chapterPct = chapter.lessons.length === 0 ? 0 : (chapterDone / chapter.lessons.length) * 100;
                const chapterSoon = !!chapter.comingSoon;
                return (
                  <View
                    key={chapter.id}
                    style={[
                      styles.chapterCard,
                      { backgroundColor: colors.card, borderColor: chapterSoon ? colors.border + "55" : colors.border, borderRadius: colors.radius },
                      chapterSoon && { opacity: 0.75 },
                    ]}
                  >
                    <View style={styles.chapterTop}>
                      <View style={{ flex: 1, gap: 4 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                          <Text style={[styles.chapterNum, { color: colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>
                            Ch {chapter.number}
                          </Text>
                          {chapter.jlpt ? (
                            <View style={[styles.jlptBadge, { backgroundColor: (LEVEL_COLOR[chapter.jlpt] ?? colors.accent) + "22" }]}>
                              <Text style={[styles.jlptText, { color: LEVEL_COLOR[chapter.jlpt] ?? colors.accent, fontFamily: "Inter_700Bold" }]}>{chapter.jlpt}</Text>
                            </View>
                          ) : null}
                          {chapterSoon ? (
                            <View style={[styles.jlptBadge, { backgroundColor: colors.mutedForeground + "22" }]}>
                              <Text style={[styles.jlptText, { color: colors.mutedForeground, fontFamily: "Inter_700Bold" }]}>SOON</Text>
                            </View>
                          ) : null}
                        </View>
                        <Text style={[styles.chapterTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{chapter.title}</Text>
                        {chapter.subtitle ? (
                          <Text style={[styles.chapterSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{chapter.subtitle}</Text>
                        ) : null}
                      </View>
                      {!chapterSoon ? (
                        <View style={[styles.chapterCount, { backgroundColor: colors.background, borderRadius: 12 }]}>
                          <Text style={[styles.chapterCountNum, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>{chapterDone}/{chapter.lessons.length}</Text>
                          <Text style={[styles.chapterCountLabel, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>lessons</Text>
                        </View>
                      ) : (
                        <View style={[styles.chapterCount, { backgroundColor: colors.background, borderRadius: 12 }]}>
                          <Feather name="lock" size={18} color={colors.mutedForeground} />
                        </View>
                      )}
                    </View>

                    {chapterSoon ? (
                      <Text style={[styles.chapterSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular", marginTop: 4, fontStyle: "italic" }]}>
                        {chapter.description}
                      </Text>
                    ) : (
                      <View style={[styles.chapterProgressTrack, { backgroundColor: colors.border, borderRadius: 3 }]}>
                        <View style={[styles.chapterProgressFill, { width: `${chapterPct}%`, backgroundColor: chapter.themeColor, borderRadius: 3 }]} />
                      </View>
                    )}

                    <View style={{ gap: 8, marginTop: 10 }}>
                      {chapter.lessons.map((lesson) => {
                        const done = completedLessons.includes(lesson.id);
                        const prevDone = !lesson.unlockAfter || completedLessons.includes(lesson.unlockAfter);
                        const locked = !prevDone;
                        return (
                          <Pressable
                            key={lesson.id}
                            disabled={locked}
                            onPress={() => router.push({ pathname: "/lesson/[id]", params: { id: lesson.id } })}
                            style={({ pressed }) => [
                              styles.lessonRow,
                              {
                                backgroundColor: done ? colors.success + "10" : colors.background,
                                borderColor: done ? colors.success : colors.border,
                                borderRadius: colors.radius - 6,
                                opacity: locked ? 0.5 : 1,
                              },
                              pressed && !locked && { opacity: 0.85 },
                            ]}
                          >
                            <View style={[styles.lessonIndex, { backgroundColor: done ? colors.success : chapter.themeColor + "33", borderRadius: 14 }]}>
                              {done ? (
                                <Feather name="check" size={14} color="#fff" />
                              ) : locked ? (
                                <Feather name="lock" size={12} color={colors.mutedForeground} />
                              ) : (
                                <Text style={[styles.lessonIndexText, { color: chapter.themeColor, fontFamily: "Inter_700Bold" }]}>{lesson.number}</Text>
                              )}
                            </View>
                            <View style={{ flex: 1, gap: 2 }}>
                              <Text style={[styles.lessonTitle, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>{lesson.title}</Text>
                              {lesson.subtitle ? (
                                <Text style={[styles.lessonSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>{lesson.subtitle}</Text>
                              ) : null}
                              <View style={styles.lessonFooter}>
                                <Feather name="clock" size={11} color={colors.mutedForeground} />
                                <Text style={[styles.footerText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>~{lesson.estimateMinutes} min</Text>
                                <View style={[styles.dot, { backgroundColor: colors.mutedForeground }]} />
                                <Feather name="zap" size={11} color={colors.accent} />
                                <Text style={[styles.footerText, { color: colors.accent, fontFamily: "Inter_500Medium" }]}>+{lesson.xp} XP</Text>
                              </View>
                            </View>
                            <Feather name={done ? "rotate-cw" : "chevron-right"} size={16} color={colors.mutedForeground} />
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  eyebrow: { fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" },
  title: { fontSize: 30 },
  logoChip: { backgroundColor: "#FBF6F2", borderRadius: 10, padding: 5 },
  tagline: { fontSize: 13, marginTop: 6, lineHeight: 18 },
  sub: { fontSize: 14, marginTop: 4 },

  continueCard: { padding: 18, flexDirection: "row", alignItems: "center", gap: 14 },
  continueLabel: { fontSize: 12, color: "rgba(255,255,255,0.85)", textTransform: "uppercase", letterSpacing: 1.2 },
  continueTitle: { fontSize: 19, color: "#fff" },
  continueSub: { fontSize: 12, color: "rgba(255,255,255,0.85)" },
  continueArrow: { width: 42, height: 42, borderRadius: 21, backgroundColor: "rgba(255,255,255,0.18)", alignItems: "center", justifyContent: "center" },
  allDone: { flexDirection: "row", alignItems: "center", gap: 10, padding: 14, borderWidth: 1 },
  allDoneText: { fontSize: 13, flex: 1 },

  levelRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderWidth: 1 },
  levelIcon: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  levelTitle: { fontSize: 14 },
  levelSub: { fontSize: 12, marginTop: 1 },

  bookNumber: { fontSize: 10, letterSpacing: 1.4 },
  cefr: { fontSize: 11 },
  freeBadge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  freeBadgeText: { fontSize: 9, letterSpacing: 1 },
  bookTitle: { fontSize: 18 },
  bookSub: { fontSize: 12 },
  bookProgressTrack: { height: 6, marginTop: 8, overflow: "hidden" },
  bookProgressFill: { height: "100%" },
  bookProgressLabel: { fontSize: 11, marginTop: 4 },

  chapterCard: { padding: 14, borderWidth: 1 },
  chapterTop: { flexDirection: "row", alignItems: "flex-start", gap: 12 },
  chapterNum: { fontSize: 11, letterSpacing: 1 },
  jlptBadge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  jlptText: { fontSize: 10, letterSpacing: 0.5 },
  chapterTitle: { fontSize: 16 },
  chapterSub: { fontSize: 12 },
  chapterCount: { paddingHorizontal: 10, paddingVertical: 6, alignItems: "center" },
  chapterCountNum: { fontSize: 12 },
  chapterCountLabel: { fontSize: 9, letterSpacing: 0.5 },
  chapterProgressTrack: { height: 4, marginTop: 10, overflow: "hidden" },
  chapterProgressFill: { height: "100%" },

  lessonRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 10, borderWidth: 1 },
  lessonIndex: { width: 28, height: 28, alignItems: "center", justifyContent: "center" },
  lessonIndexText: { fontSize: 12 },
  lessonTitle: { fontSize: 14 },
  lessonSub: { fontSize: 11 },
  lessonFooter: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 2 },
  footerText: { fontSize: 11 },
  dot: { width: 3, height: 3, borderRadius: 1.5 },
});
