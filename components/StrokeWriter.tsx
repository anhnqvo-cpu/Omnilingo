import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  PanResponder,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  Line as SvgLine,
  Marker,
  Path,
  Text as SvgText,
} from "react-native-svg";

import { useColors } from "@/hooks/useColors";
import {
  STROKE_DATA,
  STROKE_VIEWBOX,
  getPathStart,
} from "@/data/curriculum/ja/strokeData";

const STROKE_COLORS = ["#e85d75", "#7c3aed", "#0284c7", "#059669", "#f59e0b"];
const VB_SIZE = 109; // matches STROKE_VIEWBOX "0 0 109 109"
const DASH_CAP = 600; // larger than the longest expected stroke length in viewBox units

// Validation tolerances, in viewBox units.
const START_TOLERANCE = 22;
const END_TOLERANCE = 26;
const MIN_TRAVEL = 14; // tiny tap shouldn't pass as a stroke

const AnimatedPath = Animated.createAnimatedComponent(Path);

type Phase = "watch" | "trace" | "freehand";
interface Point { x: number; y: number }

function pathDistance(a: Point, b: Point): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function smoothPath(pts: Point[]): string {
  if (pts.length === 0) return "";
  if (pts.length < 2) return `M ${pts[0].x} ${pts[0].y}`;
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    d += ` Q ${pts[i].x},${pts[i].y} ${mx},${my}`;
  }
  const last = pts[pts.length - 1];
  d += ` L ${last.x},${last.y}`;
  return d;
}

interface Props {
  char: string;
  onComplete: () => void;
}

/**
 * Stroke-guided writing practice — Duolingo-style.
 *
 *   1. Watch       — strokes draw themselves one at a time, with numbered
 *                    start badges and arrowheads showing direction.
 *   2. Trace       — one stroke at a time appears as a dashed guide. Validates
 *                    that the user starts near the right point and ends near
 *                    the right point. Wrong → shake + retry. Right → advance.
 *   3. Freehand    — full character shown as a dashed ghost, user writes from
 *                    memory.
 */
export function StrokeWriter({ char, onComplete }: Props) {
  const colors = useColors();
  const strokeData = STROKE_DATA[char];

  const [phase, setPhase] = useState<Phase>("watch");
  const [layout, setLayout] = useState({ width: 300, height: 300 });
  const [traceIdx, setTraceIdx] = useState(0);
  const [traceAttempts, setTraceAttempts] = useState<string[]>([]); // d-strings of completed traces
  const [strokes, setStrokes] = useState<Point[][]>([]); // freehand drawings
  const [feedback, setFeedback] = useState<"idle" | "correct" | "wrong">("idle");

  // Animated values per stroke for the "Watch" phase.
  const dashOffsets = useRef(
    (strokeData?.strokes ?? []).map(() => new Animated.Value(DASH_CAP))
  ).current;

  // Reset animations whenever the character changes or we re-enter Watch.
  useEffect(() => {
    if (phase !== "watch" || !strokeData) return;
    dashOffsets.forEach((v) => v.setValue(DASH_CAP));
    const sequence = Animated.sequence(
      strokeData.strokes.map((_, i) =>
        Animated.timing(dashOffsets[i], {
          toValue: 0,
          duration: 1100,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: false,
        })
      )
    );
    sequence.start();
    return () => sequence.stop();
  }, [phase, strokeData, dashOffsets]);

  // ─── No stroke data → fall back to simple freehand ───────────────────────
  if (!strokeData) {
    return (
      <FreehandFallback
        char={char}
        onComplete={onComplete}
        layout={layout}
        setLayout={setLayout}
        strokes={strokes}
        setStrokes={setStrokes}
      />
    );
  }

  const totalStrokes = strokeData.strokes.length;
  const isWatchDone = false; // we'll let user advance after the animation runs

  // ─── Coordinate helpers ──────────────────────────────────────────────────
  const toVB = (e: GestureResponderEvent): Point => ({
    x: (e.nativeEvent.locationX / layout.width) * VB_SIZE,
    y: (e.nativeEvent.locationY / layout.height) * VB_SIZE,
  });

  // ─── Trace phase touch handling ──────────────────────────────────────────
  const tracePoints = useRef<Point[]>([]);
  const [livePath, setLivePath] = useState<string>("");

  const tracePanResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => phase === "trace",
        onMoveShouldSetPanResponder: () => phase === "trace",
        onPanResponderGrant: (e) => {
          if (feedback !== "idle") return;
          tracePoints.current = [toVB(e)];
          setLivePath(smoothPath(tracePoints.current));
          if (Platform.OS !== "web") Haptics.selectionAsync();
        },
        onPanResponderMove: (e) => {
          if (feedback !== "idle") return;
          tracePoints.current = [...tracePoints.current, toVB(e)];
          setLivePath(smoothPath(tracePoints.current));
        },
        onPanResponderRelease: () => {
          if (feedback !== "idle") return;
          const pts = tracePoints.current;
          tracePoints.current = [];
          if (pts.length < 2) {
            setLivePath("");
            return;
          }
          const expected = strokeData.strokes[traceIdx];
          const expectedStart = getPathStart(expected.d);
          const expectedEnd = getStrokeEnd(expected.d);
          const userStart = pts[0];
          const userEnd = pts[pts.length - 1];
          const totalTravel = totalLength(pts);
          const startOk = pathDistance(userStart, expectedStart) <= START_TOLERANCE;
          const endOk = pathDistance(userEnd, expectedEnd) <= END_TOLERANCE;
          const traveledEnough = totalTravel >= MIN_TRAVEL;
          if (startOk && endOk && traveledEnough) {
            setFeedback("correct");
            if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            // Snap their stroke onto the canonical path — looks nice.
            setTraceAttempts((prev) => [...prev, expected.d]);
            setLivePath("");
            setTimeout(() => {
              setFeedback("idle");
              if (traceIdx + 1 < totalStrokes) {
                setTraceIdx((i) => i + 1);
              } else {
                // Move to freehand
                setPhase("freehand");
                setTraceIdx(0);
                setTraceAttempts([]);
              }
            }, 450);
          } else {
            setFeedback("wrong");
            if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            setTimeout(() => {
              setFeedback("idle");
              setLivePath("");
            }, 700);
          }
        },
      }),
    [phase, feedback, traceIdx, layout.width, layout.height, strokeData, totalStrokes]
  );

  // ─── Freehand touch handling ─────────────────────────────────────────────
  const fhStroke = useRef<Point[]>([]);
  const freehandPan = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => phase === "freehand",
        onMoveShouldSetPanResponder: () => phase === "freehand",
        onPanResponderGrant: (e) => {
          fhStroke.current = [toVB(e)];
          setStrokes((prev) => [...prev, [...fhStroke.current]]);
          if (Platform.OS !== "web") Haptics.selectionAsync();
        },
        onPanResponderMove: (e) => {
          fhStroke.current = [...fhStroke.current, toVB(e)];
          setStrokes((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = [...fhStroke.current];
            return copy;
          });
        },
        onPanResponderRelease: () => {
          fhStroke.current = [];
        },
      }),
    [phase, layout.width, layout.height]
  );

  // ─── Helpers for arrows + numbers ────────────────────────────────────────
  const phaseLabel = phase === "watch" ? "1 · Watch" : phase === "trace" ? "2 · Trace" : "3 · Freehand";
  const hintForPhase = (() => {
    if (phase === "watch") return "Watch the stroke order. Each number shows where to begin.";
    if (phase === "trace") {
      if (feedback === "correct") return "Good!";
      if (feedback === "wrong") return "Off the path — try again. Start from the orange dot.";
      const expected = strokeData.strokes[traceIdx];
      return `Stroke ${traceIdx + 1}/${totalStrokes}: ${expected.startHint}. ${expected.directionHint}.`;
    }
    return "Write the character from memory. The faint outline is a hint.";
  })();

  const handleReplayWatch = () => {
    if (Platform.OS !== "web") Haptics.selectionAsync();
    setPhase("watch");
  };

  const handleFreehandDone = () => {
    if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onComplete();
  };

  const handleFreehandClear = () => {
    setStrokes([]);
    if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.phaseLabel, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>{phaseLabel}</Text>
          <Text style={[styles.hint, { color: feedback === "wrong" ? colors.destructive : colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            {hintForPhase}
          </Text>
        </View>
        {phase !== "watch" && (
          <Pressable
            onPress={handleReplayWatch}
            style={[styles.replayBtn, { backgroundColor: colors.muted, borderRadius: colors.radius - 6 }]}
          >
            <Feather name="rotate-ccw" size={14} color={colors.mutedForeground} />
            <Text style={[styles.replayText, { color: colors.mutedForeground, fontFamily: "Inter_500Medium" }]}>Replay</Text>
          </Pressable>
        )}
      </View>

      <View
        onLayout={(e) => setLayout(e.nativeEvent.layout)}
        style={[
          styles.canvas,
          {
            backgroundColor: colors.card,
            borderColor: feedback === "wrong" ? colors.destructive : feedback === "correct" ? colors.success : colors.border,
            borderRadius: colors.radius,
          },
        ]}
        {...(phase === "trace" ? tracePanResponder.panHandlers : phase === "freehand" ? freehandPan.panHandlers : {})}
      >
        <Svg style={StyleSheet.absoluteFill} viewBox={STROKE_VIEWBOX}>
          <Defs>
            {STROKE_COLORS.map((c, i) => (
              <Marker
                key={`m-${i}`}
                id={`arrow-${i}`}
                markerWidth={6}
                markerHeight={6}
                refX={5}
                refY={3}
                orient="auto"
              >
                <Path d="M 0 0 L 6 3 L 0 6 Z" fill={c} />
              </Marker>
            ))}
          </Defs>

          {/* Grid */}
          <SvgLine x1="54.5" y1="0" x2="54.5" y2="109" stroke={colors.border} strokeWidth={0.4} strokeDasharray="3 3" />
          <SvgLine x1="0" y1="54.5" x2="109" y2="54.5" stroke={colors.border} strokeWidth={0.4} strokeDasharray="3 3" />

          {/* WATCH phase — animate each stroke + show numbered badges */}
          {phase === "watch" &&
            strokeData.strokes.map((s, i) => {
              const stroke = STROKE_COLORS[i % STROKE_COLORS.length];
              const start = getPathStart(s.d);
              return (
                <G key={`watch-${i}`}>
                  <AnimatedPath
                    d={s.d}
                    stroke={stroke}
                    strokeWidth={5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray={`${DASH_CAP} ${DASH_CAP}`}
                    strokeDashoffset={dashOffsets[i] as any}
                    markerEnd={`url(#arrow-${i % STROKE_COLORS.length})`}
                  />
                  {/* Numbered start badge */}
                  <Circle cx={start.x} cy={start.y} r={5} fill={stroke} />
                  <SvgText x={start.x} y={start.y + 1.5} fill="#fff" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                    {i + 1}
                  </SvgText>
                </G>
              );
            })}

          {/* TRACE phase — show prior strokes colored, current stroke as dashed guide, completed traces snapped */}
          {phase === "trace" && (
            <>
              {/* Completed traces — drawn in their stroke color */}
              {traceAttempts.map((d, i) => (
                <Path
                  key={`done-${i}`}
                  d={d}
                  stroke={STROKE_COLORS[i % STROKE_COLORS.length]}
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              ))}

              {/* Future strokes — very faint outline so user sees the whole character */}
              {strokeData.strokes.map((s, i) =>
                i > traceIdx ? (
                  <Path
                    key={`future-${i}`}
                    d={s.d}
                    stroke={colors.border}
                    strokeWidth={3.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity={0.4}
                  />
                ) : null
              )}

              {/* Current stroke dashed guide + start dot + number */}
              {(() => {
                const cur = strokeData.strokes[traceIdx];
                const start = getPathStart(cur.d);
                const stroke = STROKE_COLORS[traceIdx % STROKE_COLORS.length];
                return (
                  <G>
                    <Path
                      d={cur.d}
                      stroke={stroke}
                      strokeWidth={4.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="3 3"
                      opacity={0.65}
                      fill="none"
                      markerEnd={`url(#arrow-${traceIdx % STROKE_COLORS.length})`}
                    />
                    <Circle cx={start.x} cy={start.y} r={5.5} fill={stroke} stroke="#fff" strokeWidth={1} />
                    <SvgText x={start.x} y={start.y + 1.6} fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">
                      {traceIdx + 1}
                    </SvgText>
                  </G>
                );
              })()}

              {/* Live user stroke being drawn */}
              {livePath ? (
                <Path
                  d={livePath}
                  stroke={feedback === "wrong" ? colors.destructive : colors.foreground}
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              ) : null}
            </>
          )}

          {/* FREEHAND phase — faint ghost of every stroke + user drawing */}
          {phase === "freehand" && (
            <>
              {strokeData.strokes.map((s, i) => (
                <Path
                  key={`ghost-${i}`}
                  d={s.d}
                  stroke={colors.mutedForeground}
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 4"
                  opacity={0.35}
                  fill="none"
                />
              ))}
              {strokes.map((pts, i) => (
                <Path
                  key={`fh-${i}`}
                  d={smoothPath(pts)}
                  stroke={colors.foreground}
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              ))}
            </>
          )}
        </Svg>
      </View>

      <View style={styles.row}>
        {phase === "watch" ? (
          <ActionButton label="I've got it — trace" tone="primary" onPress={() => setPhase("trace")} />
        ) : phase === "trace" ? (
          <ActionButton label={`Stroke ${traceIdx + 1}/${totalStrokes}`} tone="muted" onPress={() => {}} disabled />
        ) : (
          <>
            <ActionButton label="Clear" tone="muted" onPress={handleFreehandClear} />
            <ActionButton label="Done" tone="success" onPress={handleFreehandDone} />
          </>
        )}
      </View>
    </View>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Find the last point of a path 'd' string. Works for the KanjiVG paths we use. */
function getStrokeEnd(d: string): Point {
  // Walk every absolute or relative pair to keep a running cursor. KanjiVG uses
  // M, c, C, l, L, q, Q, with no Z. We track the current pen position.
  let x = 0;
  let y = 0;
  const tokens = d.match(/[a-zA-Z]|[-+]?\d*\.?\d+/g) ?? [];
  let i = 0;
  let cmd = "";
  let relative = false;
  const nums = (): number => {
    const n = parseFloat(tokens[i] ?? "0");
    i += 1;
    return n;
  };
  while (i < tokens.length) {
    const tok = tokens[i];
    if (/[a-zA-Z]/.test(tok)) {
      cmd = tok.toUpperCase();
      relative = tok === tok.toLowerCase() && cmd !== "M"; // M start is absolute even when "m" is used once
      // Actually first M is treated specially: lowercase m at the very start means absolute first move.
      // We approximate: treat first M/m as absolute, subsequent as per case.
      relative = tok === tok.toLowerCase();
      // Special-case: first M is absolute regardless.
      if (cmd === "M" && x === 0 && y === 0) relative = false;
      i += 1;
      continue;
    }
    // Parse based on command
    if (cmd === "M" || cmd === "L") {
      const nx = nums();
      const ny = nums();
      x = relative ? x + nx : nx;
      y = relative ? y + ny : ny;
    } else if (cmd === "C") {
      // c x1 y1 x2 y2 x y
      const _x1 = nums(), _y1 = nums(), _x2 = nums(), _y2 = nums();
      const nx = nums();
      const ny = nums();
      x = relative ? x + nx : nx;
      y = relative ? y + ny : ny;
    } else if (cmd === "Q") {
      const _x1 = nums(), _y1 = nums();
      const nx = nums();
      const ny = nums();
      x = relative ? x + nx : nx;
      y = relative ? y + ny : ny;
    } else if (cmd === "H") {
      const nx = nums();
      x = relative ? x + nx : nx;
    } else if (cmd === "V") {
      const ny = nums();
      y = relative ? y + ny : ny;
    } else if (cmd === "S" || cmd === "T") {
      const _x2 = nums(), _y2 = nums();
      const nx = nums();
      const ny = nums();
      x = relative ? x + nx : nx;
      y = relative ? y + ny : ny;
    } else if (cmd === "A") {
      // skip arc: rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y
      nums(); nums(); nums(); nums(); nums();
      const nx = nums();
      const ny = nums();
      x = relative ? x + nx : nx;
      y = relative ? y + ny : ny;
    } else {
      // Unknown — skip one
      i += 1;
    }
  }
  return { x, y };
}

function totalLength(pts: Point[]): number {
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    total += pathDistance(pts[i - 1], pts[i]);
  }
  return total;
}

// ─── Action button ───────────────────────────────────────────────────────────

function ActionButton({
  label,
  tone,
  onPress,
  disabled,
}: {
  label: string;
  tone: "primary" | "muted" | "success";
  onPress: () => void;
  disabled?: boolean;
}) {
  const colors = useColors();
  const palette =
    tone === "primary"
      ? { bg: colors.primary, fg: "#fff", border: colors.primary }
      : tone === "success"
      ? { bg: colors.success, fg: "#fff", border: colors.success }
      : { bg: colors.muted, fg: colors.mutedForeground, border: colors.border };
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: palette.bg, borderColor: palette.border, borderRadius: 12 },
        disabled && { opacity: 0.5 },
        pressed && !disabled && { opacity: 0.85 },
      ]}
    >
      <Text style={[styles.btnLabel, { color: palette.fg, fontFamily: "Inter_600SemiBold" }]}>{label}</Text>
    </Pressable>
  );
}

// ─── Freehand fallback for characters without stroke data ────────────────────

function FreehandFallback({
  char,
  onComplete,
  layout,
  setLayout,
  strokes,
  setStrokes,
}: {
  char: string;
  onComplete: () => void;
  layout: { width: number; height: number };
  setLayout: (l: { width: number; height: number }) => void;
  strokes: Point[][];
  setStrokes: React.Dispatch<React.SetStateAction<Point[][]>>;
}) {
  const colors = useColors();
  const cur = useRef<Point[]>([]);
  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        const p = { x: (e.nativeEvent.locationX / layout.width) * VB_SIZE, y: (e.nativeEvent.locationY / layout.height) * VB_SIZE };
        cur.current = [p];
        setStrokes((prev) => [...prev, [p]]);
      },
      onPanResponderMove: (e) => {
        const p = { x: (e.nativeEvent.locationX / layout.width) * VB_SIZE, y: (e.nativeEvent.locationY / layout.height) * VB_SIZE };
        cur.current = [...cur.current, p];
        setStrokes((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = [...cur.current];
          return copy;
        });
      },
      onPanResponderRelease: () => {
        cur.current = [];
      },
    })
  ).current;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.hint, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
        Trace freely. (No stroke data for this character yet.)
      </Text>
      <View
        {...pan.panHandlers}
        onLayout={(e) => setLayout(e.nativeEvent.layout)}
        style={[styles.canvas, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
      >
        <Text style={[styles.ghostChar, { color: colors.border }]}>{char}</Text>
        <Svg style={StyleSheet.absoluteFill} viewBox={STROKE_VIEWBOX}>
          {strokes.map((pts, i) => (
            <Path
              key={i}
              d={smoothPath(pts)}
              stroke={STROKE_COLORS[i % STROKE_COLORS.length]}
              strokeWidth={4.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}
        </Svg>
      </View>
      <View style={styles.row}>
        <ActionButton label="Clear" tone="muted" onPress={() => setStrokes([])} />
        <ActionButton label="Done" tone="primary" onPress={onComplete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 14, width: "100%" },
  headerRow: { flexDirection: "row", alignItems: "flex-end", gap: 12 },
  phaseLabel: { fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase" },
  hint: { fontSize: 13, marginTop: 2, lineHeight: 18 },
  replayBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 10, paddingVertical: 6 },
  replayText: { fontSize: 12 },
  canvas: {
    width: "100%",
    aspectRatio: 1,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  ghostChar: { fontSize: 220, position: "absolute", opacity: 0.06 },
  row: { flexDirection: "row", gap: 10 },
  btn: { flex: 1, paddingVertical: 14, alignItems: "center", borderWidth: 1 },
  btnLabel: { fontSize: 14 },
});
