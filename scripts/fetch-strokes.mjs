#!/usr/bin/env node
// Fetch KanjiVG stroke paths for hiragana and write a TypeScript file
// at data/curriculum/ja/strokeData.ts.
//
// KanjiVG is CC BY-SA 3.0 (https://kanjivg.tagaini.net).
//
// Usage:
//   node scripts/fetch-strokes.mjs              # default: all hiragana
//   node scripts/fetch-strokes.mjs あいう       # specific chars
//
// Requires Node 18+ for global fetch.

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTFILE = resolve(__dirname, "..", "data", "curriculum", "ja", "strokeData.ts");

// Full hiragana set (excluding rare variants).
const ALL_HIRAGANA =
  "あいうえお" +
  "かきくけこ" +
  "さしすせそ" +
  "たちつてと" +
  "なにぬねの" +
  "はひふへほ" +
  "まみむめも" +
  "やゆよ" +
  "らりるれろ" +
  "わをん" +
  // Dakuten / handakuten
  "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ" +
  // Common small kana
  "っゃゅょ";

// Full katakana set (mirrors the hiragana rows), plus dakuten/handakuten + small kana.
const ALL_KATAKANA =
  "アイウエオ" +
  "カキクケコ" +
  "サシスセソ" +
  "タチツテト" +
  "ナニヌネノ" +
  "ハヒフヘホ" +
  "マミムメモ" +
  "ヤユヨ" +
  "ラリルレロ" +
  "ワヲン" +
  "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ" +
  "ッャュョ";

const CHARS = process.argv[2]
  ? Array.from(process.argv[2])
  : Array.from(ALL_HIRAGANA + ALL_KATAKANA);

const HINTS_DEFAULT = { start: "Start as shown", direction: "Follow the curve" };

const ROMAJI = {
  あ: "a", い: "i", う: "u", え: "e", お: "o",
  か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
  さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
  た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
  な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
  は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
  ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
  や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
  わ: "wa", を: "wo", ん: "n",
  が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
  ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
  だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
  ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
  っ: "(small tsu)", ゃ: "(small ya)", ゅ: "(small yu)", ょ: "(small yo)",
  ア: "a", イ: "i", ウ: "u", エ: "e", オ: "o",
  カ: "ka", キ: "ki", ク: "ku", ケ: "ke", コ: "ko",
  サ: "sa", シ: "shi", ス: "su", セ: "se", ソ: "so",
  タ: "ta", チ: "chi", ツ: "tsu", テ: "te", ト: "to",
  ナ: "na", ニ: "ni", ヌ: "nu", ネ: "ne", ノ: "no",
  ハ: "ha", ヒ: "hi", フ: "fu", ヘ: "he", ホ: "ho",
  マ: "ma", ミ: "mi", ム: "mu", メ: "me", モ: "mo",
  ヤ: "ya", ユ: "yu", ヨ: "yo",
  ラ: "ra", リ: "ri", ル: "ru", レ: "re", ロ: "ro",
  ワ: "wa", ヲ: "wo", ン: "n",
  ガ: "ga", ギ: "gi", グ: "gu", ゲ: "ge", ゴ: "go",
  ザ: "za", ジ: "ji", ズ: "zu", ゼ: "ze", ゾ: "zo",
  ダ: "da", ヂ: "ji", ヅ: "zu", デ: "de", ド: "do",
  バ: "ba", ビ: "bi", ブ: "bu", ベ: "be", ボ: "bo",
  パ: "pa", ピ: "pi", プ: "pu", ペ: "pe", ポ: "po",
  ッ: "(small tsu)", ャ: "(small ya)", ュ: "(small yu)", ョ: "(small yo)",
};

// KanjiVG renders き/さ in the print (kaisho) style, which splits the bottom
// sweep into its own stroke — き=4, さ=3. Beginners are taught the handwriting
// form where the vertical leg curves straight into the bottom sweep as ONE
// continuous stroke (き=3, さ=2). After fetching, we replace the last two
// strokes of these chars with a single joined path (authentic sweep + a leg
// re-routed to flow into it). ち is already the 2-stroke connected form upstream.
const CONNECTED_OVERRIDES = {
  き: { join: 2, d: "M42,14.12c1.5,0.88,3.13,2.94,4,5.12c5.5,13.76,16,29.26,26.37,40.76c7.64,8.47,9.12,9.38-6,3.88C60,72,45,80,33.75,83.25c10.62,9.75,27.25,8.62,38.12,5" },
  さ: { join: 1, d: "M41.5,13.88c1.5,0.88,3.63,2.94,4.5,5.12c5.5,13.75,15.25,27.62,26.87,39.5c7.98,8.15,6.38,10-6,3.12C60,70,46,78,35.25,80.5c4.5,11.75,20.88,12.5,38.38,7.5" },
  // り: print form splits into 2 strokes; handwriting joins the left hook up
  // into the right side as one flowing stroke.
  り: { join: 0, d: "M43,23C41,34,38,50,39,63C47,53,55,40,64,32C69,27,75,28,75.5,38C76,52,75,70,71,83C68.5,91,63,95,57,96" },
};

function codepointHex(ch) {
  return ch.codePointAt(0).toString(16).padStart(5, "0");
}

async function fetchSvg(ch) {
  const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${codepointHex(ch)}.svg`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${ch}: HTTP ${res.status}`);
  return await res.text();
}

function parseStrokes(svg) {
  // Extract all <path id="kvg:..." d="..."/> entries. KanjiVG places per-stroke
  // path elements inside the SVG; the d attribute is what we want.
  const paths = [];
  const re = /<path[^>]*\sd="([^"]+)"/g;
  let m;
  while ((m = re.exec(svg))) {
    paths.push(m[1]);
  }
  return paths;
}

const results = {};
for (const ch of CHARS) {
  try {
    const svg = await fetchSvg(ch);
    let paths = parseStrokes(svg);
    if (paths.length === 0) {
      console.warn(`[warn] ${ch}: no <path> elements`);
      continue;
    }
    // Collapse KanjiVG's split bottom-sweep into the handwriting form (see above).
    const override = CONNECTED_OVERRIDES[ch];
    if (override) {
      paths = [...paths.slice(0, override.join), override.d];
    }
    results[ch] = {
      char: ch,
      romaji: ROMAJI[ch] ?? "",
      strokes: paths.map((d) => ({ d, startHint: HINTS_DEFAULT.start, directionHint: HINTS_DEFAULT.direction })),
    };
    console.log(`[ok]  ${ch}  (${paths.length} stroke${paths.length === 1 ? "" : "s"})`);
  } catch (e) {
    console.warn(`[err] ${ch}: ${e.message}`);
  }
}

const ts = `// Stroke data for Japanese characters.
// Paths sourced from KanjiVG (https://kanjivg.tagaini.net), CC BY-SA 3.0.
// Generated by scripts/fetch-strokes.mjs — re-run to refresh.

export const STROKE_VIEWBOX = "0 0 109 109";

export interface StrokeData {
  d: string;
  startHint: string;
  directionHint: string;
  end?: { x: number; y: number };
}

export interface CharacterStrokeData {
  char: string;
  romaji: string;
  strokes: StrokeData[];
}

export const STROKE_DATA: Record<string, CharacterStrokeData> = ${JSON.stringify(results, null, 2)};

/** Extract the starting (M) point from an SVG path. */
export function getPathStart(d: string): { x: number; y: number } {
  const m = d.match(/M\\s*([\\d.]+)[,\\s]([\\d.]+)/);
  return m ? { x: parseFloat(m[1]), y: parseFloat(m[2]) } : { x: 0, y: 0 };
}
`;

writeFileSync(OUTFILE, ts, "utf8");
console.log(`\nWrote ${OUTFILE} with ${Object.keys(results).length} characters.`);
