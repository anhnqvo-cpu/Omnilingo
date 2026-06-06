// Stroke data for Japanese characters.
// Paths sourced from KanjiVG (https://kanjivg.tagaini.net), CC BY-SA 3.0.
// All paths use a 109x109 viewBox.

export const STROKE_VIEWBOX = "0 0 109 109";

export interface StrokeData {
  d: string;
  startHint: string;
  directionHint: string;
  /** Approximate end point of the stroke in 109×109 viewBox space. Used to place the arrowhead. */
  end?: { x: number; y: number };
}

export interface CharacterStrokeData {
  char: string;
  romaji: string;
  strokes: StrokeData[];
}

export const STROKE_DATA: Record<string, CharacterStrokeData> = {
  あ: {
    char: "あ",
    romaji: "a",
    strokes: [
      {
        d: "M31.01,33c0.88,0.88,2.75,1.82,5.25,1.75c8.62-0.25,20-2.12,29.5-4.25c1.51-0.34,4.62-0.88,6.62-0.5",
        startHint: "Start on the left",
        directionHint: "Draw left to right",
      },
      {
        d: "M49.76,17.62c0.88,1,1.82,3.26,1.38,5.25c-3.75,16.75-6.25,38.13-5.13,53.63c0.41,5.7,1.88,10.88,3.38,13.62",
        startHint: "Start near the top center",
        directionHint: "Draw downward",
      },
      {
        d: "M65.63,44.12c0.75,1.12,1.16,4.39,0.5,6.12c-4.62,12.26-11.24,23.76-25.37,35.76c-6.86,5.83-15.88,3.75-16.25-8.38c-0.34-10.87,13.38-23.12,32.38-26.74c12.42-2.37,27,1.38,30.5,12.75c4.05,13.18-3.76,26.37-20.88,30.49",
        startHint: "Start on the right side",
        directionHint: "Draw the loop",
      },
    ],
  },
  い: {
    char: "い",
    romaji: "i",
    strokes: [
      {
        d: "M21.5,29.66c2.01,2.17,2.61,4.68,2.17,7.43c-3.09,19.16-1.03,32.01,7.93,41.45c6.12,6.45,6.26,3.14,7.04-5.21",
        startHint: "Start at the top left",
        directionHint: "Draw down then flick right",
      },
      {
        d: "M72.96,36.51c9.44,8.05,17.79,18.82,18.41,33.83",
        startHint: "Start at the top right",
        directionHint: "Draw down and curve right",
      },
    ],
  },
  う: {
    char: "う",
    romaji: "u",
    strokes: [
      {
        d: "M42,15.5c5.62,2.12,9.62,3,12.88,3c8.27,0,8,1.12-0.38,5.5",
        startHint: "Start with the small arc at top",
        directionHint: "Draw a short arc to the right",
      },
      {
        d: "M33,42.38c2.12,1.12,4.12,2.88,8.5,1.38c4.38-1.5,12.75-7.12,18.5-7c5.75,0.12,10.25,5,10.25,18c0,15.49-8.25,30.24-24.37,41.24",
        startHint: "Start at the left center",
        directionHint: "Draw the U-curve right then down",
      },
    ],
  },
  え: {
    char: "え",
    romaji: "e",
    strokes: [
      {
        d: "M40.52,13.25c5.62,2.12,10,3,14.12,3c8.27,0,8,1.12-0.38,5.5",
        startHint: "Start with the small arc at top",
        directionHint: "Draw a short arc to the right",
      },
      {
        d: "M32.52,45.12c1.88,1.25,4.5,1.75,7.38,0.62c3.29-1.29,17-7.88,21.25-9.88c4.25-2,8.32,0.04,4.38,4.62c-12.26,14.27-27.26,31.52-39.51,44.4c-3.26,3.42-0.58,3.54,1.5,1.37c13.5-14.12,18.12-20.12,23.62-20.12c7.13,0,3.5,16.75,6.75,22.38c3.25,5.63,19.12,3.75,26.12,2.12",
        startHint: "Start at the left center",
        directionHint: "Draw right, curve down and around",
      },
    ],
  },
  お: {
    char: "お",
    romaji: "o",
    strokes: [
      {
        d: "M22.88,35.12c1.38,1,3.62,2.38,6,2.12c2.38-0.26,19.62-5.12,21.12-5.74c1.5-0.62,4-1.25,5.88-2",
        startHint: "Start on the left",
        directionHint: "Draw left to right",
      },
      {
        d: "M41.5,16.12c2.25,1,3.59,4.39,3.12,7.38c-2.5,16.12-3.37,45.53-2.25,58.38c0.75,8.62-0.64,10.45-7.12,7.12c-5.13-2.62-13.75-8-13.75-12.38c0-7.5,24.38-23.62,44.75-23.62c17.25,0,25,8.25,25,17.25c0,8.25-9.38,18.88-26.75,21",
        startHint: "Start at the top center",
        directionHint: "Draw down then loop right",
      },
      {
        d: "M73,22.12c5.38,2.62,8.88,5.88,10.62,8.25c2.27,3.08,0.38,4.5-1.12,5",
        startHint: "Start at the top right",
        directionHint: "Draw the small mark",
      },
    ],
  },
  か: {
    char: "か",
    romaji: "ka",
    strokes: [
      {
        d: "M40,30 C40.2,33 41.7,42 41,48 40.3,54 37.8,60.7 36,66 34.2,71.3 29.5,77.7 30,80 30.5,82.3 37.5,80 39,80",
        startHint: "Start upper-left",
        directionHint: "Sweep down and flick right",
        end: { x: 39, y: 80 },
      },
      {
        d: "M58,20 C58.5,23.3 60.7,33.3 61,40 61.3,46.7 61.5,53.3 60,60 58.5,66.7 53.3,76.7 52,80",
        startHint: "Start at the top",
        directionHint: "Curve down to the left",
        end: { x: 52, y: 80 },
      },
      {
        d: "M73,40 C73.8,41.3 77.5,45.3 78,48 78.5,50.7 76.3,54.7 76,56",
        startHint: "Start at upper-right",
        directionHint: "Short tick downward",
        end: { x: 76, y: 56 },
      },
    ],
  },
  き: {
    char: "き",
    romaji: "ki",
    strokes: [
      {
        d: "M33,33 C36.2,32.7 45.8,31.5 52,31 58.2,30.5 67,30.2 70,30",
        startHint: "Start top-left",
        directionHint: "Draw the top bar right",
        end: { x: 70, y: 30 },
      },
      {
        d: "M30,46 C33.3,45.7 43.7,44.5 50,44 56.3,43.5 65,43.2 68,43",
        startHint: "Start left",
        directionHint: "Draw the second bar right",
        end: { x: 68, y: 43 },
      },
      {
        d: "M66,22 C63,26 53.3,39.3 48,46 42.7,52.7 36.3,59.3 34,62",
        startHint: "Start upper-right",
        directionHint: "Long diagonal down-left",
        end: { x: 34, y: 62 },
      },
      {
        d: "M54,56 C52.3,58 45,63.7 44,68 43,72.3 45.3,80 48,82 50.7,84 58,80.3 60,80",
        startHint: "Start at center",
        directionHint: "Curve down and hook right",
        end: { x: 60, y: 80 },
      },
    ],
  },
  く: {
    char: "く",
    romaji: "ku",
    strokes: [
      {
        d: "M62,26 C58.3,30.3 40,43 40,52 40,61 58.3,75.3 62,80",
        startHint: "Start upper-right",
        directionHint: "Down-left, then down-right",
        end: { x: 62, y: 80 },
      },
    ],
  },
  け: {
    char: "け",
    romaji: "ke",
    strokes: [
      {
        d: "M31,24 C30.8,28.3 30.5,41.7 30,50 29.5,58.3 27.2,68.3 28,74 28.8,79.7 33.8,82.3 35,84",
        startHint: "Start top-left",
        directionHint: "Down, then small hook",
        end: { x: 35, y: 84 },
      },
      {
        d: "M50,40 C53,39.5 65,37.5 68,37",
        startHint: "Start mid-right",
        directionHint: "Short bar to the right",
        end: { x: 68, y: 37 },
      },
      {
        d: "M62,28 C62.3,32 64.8,44 64,52 63.2,60 57,71 57,76 57,81 62.8,81 64,82",
        startHint: "Start upper-right",
        directionHint: "Down, then hook",
        end: { x: 64, y: 82 },
      },
    ],
  },
  こ: {
    char: "こ",
    romaji: "ko",
    strokes: [
      {
        d: "M36,34 C40.7,33.7 59.3,32.3 64,32",
        startHint: "Start top-left",
        directionHint: "Short bar right",
        end: { x: 64, y: 32 },
      },
      {
        d: "M33,64 C36.2,65 46.2,70.3 52,70 57.8,69.7 65.3,63.3 68,62",
        startHint: "Start lower-left",
        directionHint: "Curve right and up",
        end: { x: 68, y: 62 },
      },
    ],
  },
  さ: {
    char: "さ",
    romaji: "sa",
    strokes: [
      {
        d: "M34,32 C39.7,31.7 62.3,30.3 68,30",
        startHint: "Start top-left",
        directionHint: "Top bar to the right",
        end: { x: 68, y: 30 },
      },
      {
        d: "M60,22 C57.8,26 50.5,39.3 47,46 43.5,52.7 40.3,59.3 39,62",
        startHint: "Start upper-right",
        directionHint: "Diagonal down-left",
        end: { x: 39, y: 62 },
      },
      {
        d: "M58,56 C55.3,57 44.3,58 42,62 39.7,66 41,77 44,80 47,83 57.3,80 60,80",
        startHint: "Start center",
        directionHint: "Curve left, down, and right",
        end: { x: 60, y: 80 },
      },
    ],
  },
  し: {
    char: "し",
    romaji: "shi",
    strokes: [
      {
        d: "M40,22 C40,28 38.3,49 40,58 41.7,67 45,75 50,76 55,77 66.7,66 70,64",
        startHint: "Start at the top",
        directionHint: "Down, then hook up-right",
        end: { x: 70, y: 64 },
      },
    ],
  },
  す: {
    char: "す",
    romaji: "su",
    strokes: [
      {
        d: "M34,34 C39.3,33.7 60.7,32.3 66,32",
        startHint: "Start top-left",
        directionHint: "Top bar to the right",
        end: { x: 66, y: 32 },
      },
      {
        d: "M54,22 C54.2,27.7 57,48 55,56 53,64 42.5,65 42,70 41.5,75 48.3,85.3 52,86 55.7,86.7 62,76 64,74",
        startHint: "Start at top",
        directionHint: "Down, then loop",
        end: { x: 64, y: 74 },
      },
    ],
  },
  せ: {
    char: "せ",
    romaji: "se",
    strokes: [
      {
        d: "M30,42 C36.3,41.3 61.7,38.7 68,38",
        startHint: "Start left",
        directionHint: "Long bar to the right",
        end: { x: 68, y: 38 },
      },
      {
        d: "M45,26 C44.8,31.3 44.8,49.7 44,58 43.2,66.3 40.7,73 40,76",
        startHint: "Start upper-left",
        directionHint: "Vertical, slightly left",
        end: { x: 40, y: 76 },
      },
      {
        d: "M64,30 C64.2,35 66.3,52.3 65,60 63.7,67.7 55.5,73 56,76 56.5,79 66,77.7 68,78",
        startHint: "Start upper-right",
        directionHint: "Down, then hook",
        end: { x: 68, y: 78 },
      },
    ],
  },
  そ: {
    char: "そ",
    romaji: "so",
    strokes: [
      {
        d: "M36,30 C40.7,29.7 63,24.7 64,28 65,31.3 42,47 42,50 42,53 64,42.3 64,46 64,49.7 42.7,66.3 42,72 41.3,77.7 57,78.7 60,80",
        startHint: "Start top-left",
        directionHint: "Zigzag, then sweep down",
        end: { x: 60, y: 80 },
      },
    ],
  },
  た: {
    char: "た",
    romaji: "ta",
    strokes: [
      {
        d: "M28,34 C32,33.7 48,32.3 52,32",
        startHint: "Start top-left",
        directionHint: "Short bar right",
        end: { x: 52, y: 32 },
      },
      {
        d: "M42,22 C41.5,26.3 41,40.3 39,48 37,55.7 30.3,63 30,68 29.7,73 35.8,76.3 37,78",
        startHint: "Start above the bar",
        directionHint: "Curve down with a hook",
        end: { x: 37, y: 78 },
      },
      {
        d: "M58,46 C60.3,45.7 69.7,44.3 72,44",
        startHint: "Start mid-right",
        directionHint: "Short bar right",
        end: { x: 72, y: 44 },
      },
      {
        d: "M66,56 C64.2,57 56.5,58.3 55,62 53.5,65.7 54.5,75.7 57,78 59.5,80.3 67.8,76.3 70,76",
        startHint: "Start lower-right",
        directionHint: "Small c-curve",
        end: { x: 70, y: 76 },
      },
    ],
  },
  ち: {
    char: "ち",
    romaji: "chi",
    strokes: [
      {
        d: "M36,30 C41,29.7 61,28.3 66,28",
        startHint: "Start top-left",
        directionHint: "Top bar to the right",
        end: { x: 66, y: 28 },
      },
      {
        d: "M58,22 C56.2,25.3 50,35.7 47,42 44,48.3 39.5,53.7 40,60 40.5,66.3 45.3,78.7 50,80 54.7,81.3 65,70 68,68",
        startHint: "Start upper-right",
        directionHint: "Down, around, and hook",
        end: { x: 68, y: 68 },
      },
    ],
  },
  つ: {
    char: "つ",
    romaji: "tsu",
    strokes: [
      {
        d: "M32,40 C36.3,39 51,32.7 58,34 65,35.3 74,42 74,48 74,54 63.7,67 58,70 52.3,73 43,66.7 40,66",
        startHint: "Start upper-left",
        directionHint: "Arc right, then curve down-left",
        end: { x: 40, y: 66 },
      },
    ],
  },
  て: {
    char: "て",
    romaji: "te",
    strokes: [
      {
        d: "M36,34 C40.7,33.3 61,27 64,30 67,33 57,45 54,52 51,59 45.3,67.3 46,72 46.7,76.7 56,78.7 58,80",
        startHint: "Start top-left",
        directionHint: "Across, then curve down",
        end: { x: 58, y: 80 },
      },
    ],
  },
  と: {
    char: "と",
    romaji: "to",
    strokes: [
      {
        d: "M42,30 C43,32.3 47,41.7 48,44",
        startHint: "Start upper-left",
        directionHint: "Short slanted tick",
        end: { x: 48, y: 44 },
      },
      {
        d: "M40,24 C40,29.3 37.7,47.3 40,56 42.3,64.7 48.3,75.3 54,76 59.7,76.7 70.7,62.7 74,60",
        startHint: "Start at top",
        directionHint: "Down, then sweep up-right",
        end: { x: 74, y: 60 },
      },
    ],
  },
  な: {
    char: "な",
    romaji: "na",
    strokes: [
      {
        d: "M30,34 C34.3,33.7 51.7,32.3 56,32",
        startHint: "Start top-left",
        directionHint: "Top bar right",
        end: { x: 56, y: 32 },
      },
      {
        d: "M45,22 C44.5,26.3 43.8,40.3 42,48 40.2,55.7 34.2,62.7 34,68 33.8,73.3 39.8,78 41,80",
        startHint: "Start above the bar",
        directionHint: "Curve down with a hook",
        end: { x: 41, y: 80 },
      },
      {
        d: "M62,28 C62.8,30.3 66.2,39.7 67,42",
        startHint: "Start upper-right",
        directionHint: "Short slanted tick",
        end: { x: 67, y: 42 },
      },
      {
        d: "M66,50 C64.2,51 57,52.7 55,56 53,59.3 52.2,67.3 54,70 55.8,72.7 63.7,73.7 66,72 68.3,70.3 69.3,62.3 68,60 66.7,57.7 59.7,58.3 58,58",
        startHint: "Start right",
        directionHint: "Small loop",
        end: { x: 58, y: 58 },
      },
    ],
  },
  に: {
    char: "に",
    romaji: "ni",
    strokes: [
      {
        d: "M33,28 C32.7,32.3 31.8,46.3 31,54 30.2,61.7 27.3,69.3 28,74 28.7,78.7 33.8,80.7 35,82",
        startHint: "Start top-left",
        directionHint: "Down, then small hook",
        end: { x: 35, y: 82 },
      },
      {
        d: "M52,40 C55,39.7 67,38.3 70,38",
        startHint: "Start mid-right",
        directionHint: "Short bar right",
        end: { x: 70, y: 38 },
      },
      {
        d: "M50,64 C53.7,63.7 68.3,62.3 72,62",
        startHint: "Start lower-right",
        directionHint: "Longer bar right",
        end: { x: 72, y: 62 },
      },
    ],
  },
  ぬ: {
    char: "ぬ",
    romaji: "nu",
    strokes: [
      {
        d: "M38,32 C36.7,35.3 29.7,45.3 30,52 30.3,58.7 37.3,71.7 40,72 42.7,72.3 45,57 46,54",
        startHint: "Start upper-left",
        directionHint: "Curve down and back up",
        end: { x: 46, y: 54 },
      },
      {
        d: "M34,42 C38.3,40 53.7,29 60,30 66.3,31 73.3,42 72,48 70.7,54 56.7,61 52,66 47.3,71 42.3,75.7 44,78 45.7,80.3 57.3,82 62,80 66.7,78 70.3,68.3 72,66",
        startHint: "Start left",
        directionHint: "Across, loop, and tail",
        end: { x: 72, y: 66 },
      },
    ],
  },
  ね: {
    char: "ね",
    romaji: "ne",
    strokes: [
      {
        d: "M33,28 C32.7,32.7 31.7,47.7 31,56 30.3,64.3 28.3,73.3 29,78 29.7,82.7 34,83 35,84",
        startHint: "Start top-left",
        directionHint: "Down, then small hook",
        end: { x: 35, y: 84 },
      },
      {
        d: "M44,42 C47.7,40.3 61,30.7 66,32 71,33.3 75.7,44.3 74,50 72.3,55.7 60.7,61.3 56,66 51.3,70.7 44.7,75.3 46,78 47.3,80.7 59,84 64,82 69,80 74,68.7 76,66",
        startHint: "Start mid-right",
        directionHint: "Across, loop, and tail",
        end: { x: 76, y: 66 },
      },
    ],
  },
  の: {
    char: "の",
    romaji: "no",
    strokes: [
      {
        d: "M66,34 C62.7,32.7 52,24.3 46,26 40,27.7 31.3,37 30,44 28.7,51 32.7,63 38,68 43.3,73 56.3,77.3 62,74 67.7,70.7 73,55.3 72,48 71,40.7 61,31 56,30 51,29 44.3,40 42,42",
        startHint: "Start upper-right",
        directionHint: "One big counter-clockwise swirl",
        end: { x: 42, y: 42 },
      },
    ],
  },
  は: {
    char: "は",
    romaji: "ha",
    strokes: [
      {
        d: "M33,26 C32.7,31 31.7,47.3 31,56 30.3,64.7 28.3,73.3 29,78 29.7,82.7 34,83 35,84",
        startHint: "Start top-left",
        directionHint: "Down, then small hook",
        end: { x: 35, y: 84 },
      },
      {
        d: "M50,42 C53,41.7 65,40.3 68,40",
        startHint: "Start mid-right",
        directionHint: "Short crossbar right",
        end: { x: 68, y: 40 },
      },
      {
        d: "M60,30 C60.3,34 63.3,47 62,54 60.7,61 52,67.3 52,72 52,76.7 58.7,82.3 62,82 65.3,81.7 70.3,72 72,70",
        startHint: "Start upper-right",
        directionHint: "Down, then bottom loop",
        end: { x: 72, y: 70 },
      },
    ],
  },
  ひ: {
    char: "ひ",
    romaji: "hi",
    strokes: [
      {
        d: "M36,34 C35.5,38 31.3,51 33,58 34.7,65 39.8,74 46,76 52.2,78 65.3,74.7 70,70 74.7,65.3 76,53 74,48 72,43 60.7,41.3 58,40",
        startHint: "Start upper-left",
        directionHint: "Curve down, around, and up",
        end: { x: 58, y: 40 },
      },
    ],
  },
  ふ: {
    char: "ふ",
    romaji: "fu",
    strokes: [
      {
        d: "M50,26 C49.3,27.3 46.7,32.7 46,34",
        startHint: "Start at the top",
        directionHint: "Small dot-tick",
        end: { x: 46, y: 34 },
      },
      {
        d: "M52,38 C51.7,41.3 51.7,51.7 50,58 48.3,64.3 40.7,72.3 42,76 43.3,79.7 55.3,79.3 58,80",
        startHint: "Start below the dot",
        directionHint: "Curve down and right",
        end: { x: 58, y: 80 },
      },
      {
        d: "M36,52 C35,53.3 29.7,57.7 30,60 30.3,62.3 36.7,65 38,66",
        startHint: "Start mid-left",
        directionHint: "Small left wing",
        end: { x: 38, y: 66 },
      },
      {
        d: "M66,52 C67,53.3 72.3,57.7 72,60 71.7,62.3 65.3,65 64,66",
        startHint: "Start mid-right",
        directionHint: "Small right wing",
        end: { x: 64, y: 66 },
      },
    ],
  },
  へ: {
    char: "へ",
    romaji: "he",
    strokes: [
      {
        d: "M30,60 C32.8,56.7 38.7,39.3 47,40 55.3,40.7 74.5,60 80,64",
        startHint: "Start mid-left",
        directionHint: "Up to the peak, then down-right",
        end: { x: 80, y: 64 },
      },
    ],
  },
  ほ: {
    char: "ほ",
    romaji: "ho",
    strokes: [
      {
        d: "M33,24 C32.7,29 31.7,45 31,54 30.3,63 28.3,73 29,78 29.7,83 34,83 35,84",
        startHint: "Start top-left",
        directionHint: "Down, then small hook",
        end: { x: 35, y: 84 },
      },
      {
        d: "M50,34 C53,33.7 65,32.3 68,32",
        startHint: "Start upper-right",
        directionHint: "Top crossbar right",
        end: { x: 68, y: 32 },
      },
      {
        d: "M50,52 C53,51.7 65,50.3 68,50",
        startHint: "Start mid-right",
        directionHint: "Lower crossbar right",
        end: { x: 68, y: 50 },
      },
      {
        d: "M59,26 C59.3,30.7 62.2,46.3 61,54 59.8,61.7 51.8,67.3 52,72 52.2,76.7 58.7,82.3 62,82 65.3,81.7 70.3,72 72,70",
        startHint: "Start upper-right",
        directionHint: "Down, then bottom loop",
        end: { x: 72, y: 70 },
      },
    ],
  },
};

/** Extract the starting (M) point from an SVG path. */
export function getPathStart(d: string): { x: number; y: number } {
  const m = d.match(/M\s*([\d.]+)[,\s]([\d.]+)/);
  return m ? { x: parseFloat(m[1]), y: parseFloat(m[2]) } : { x: 0, y: 0 };
}
