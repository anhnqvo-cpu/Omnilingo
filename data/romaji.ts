// Romaji → hiragana converter for the typing practice (mimics how a real
// Japanese IME turns latin keystrokes into kana). Greedy longest-match over a
// romaji table, with special handling for ん and the small っ (sokuon).
//
// It's intentionally forgiving on the common alternate spellings (si/shi,
// ti/chi, tu/tsu, hu/fu, zi/ji, sya/sha, …) so learners aren't punished for a
// reasonable romanization.

const TABLE: Record<string, string> = {
  // vowels
  a: "あ", i: "い", u: "う", e: "え", o: "お",
  // k / g
  ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
  ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
  kya: "きゃ", kyu: "きゅ", kyo: "きょ", gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
  // s / z
  sa: "さ", si: "し", shi: "し", su: "す", se: "せ", so: "そ",
  za: "ざ", zi: "じ", ji: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
  sha: "しゃ", shu: "しゅ", sho: "しょ", sya: "しゃ", syu: "しゅ", syo: "しょ",
  ja: "じゃ", ju: "じゅ", jo: "じょ", jya: "じゃ", jyu: "じゅ", jyo: "じょ", zya: "じゃ", zyu: "じゅ", zyo: "じょ",
  // t / d
  ta: "た", ti: "ち", chi: "ち", tu: "つ", tsu: "つ", te: "て", to: "と",
  da: "だ", di: "ぢ", du: "づ", de: "で", do: "ど",
  cha: "ちゃ", chu: "ちゅ", cho: "ちょ", tya: "ちゃ", tyu: "ちゅ", tyo: "ちょ",
  // n
  na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
  nya: "にゃ", nyu: "にゅ", nyo: "にょ",
  // h / b / p
  ha: "は", hi: "ひ", hu: "ふ", fu: "ふ", he: "へ", ho: "ほ",
  ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
  pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
  hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
  bya: "びゃ", byu: "びゅ", byo: "びょ",
  pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ",
  fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ",
  // m
  ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
  mya: "みゃ", myu: "みゅ", myo: "みょ",
  // y
  ya: "や", yu: "ゆ", yo: "よ",
  // r
  ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
  rya: "りゃ", ryu: "りゅ", ryo: "りょ",
  // w + を + small vowels
  wa: "わ", wo: "を", wi: "うぃ", we: "うぇ",
  la: "ぁ", li: "ぃ", lu: "ぅ", le: "ぇ", lo: "ぉ",
  // long-vowel mark
  "-": "ー",
};

const VOWELS = "aiueo";
const MAX_KEY = 3; // longest romaji key length

/** Convert a romaji string into hiragana, leaving any unconvertible tail as-is. */
export function romajiToHiragana(input: string): string {
  const s = input.toLowerCase();
  let out = "";
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    const next = s[i + 1];

    // ん: explicit "n'" → ん; otherwise a lone "n" becomes ん before end or a
    // consonant — consuming a single n, so "nni" is ん+に (こんにちわ), and a
    // doubled "nn" still resolves to one ん when the 2nd n starts a syllable.
    // ("n" before a vowel or "y" instead forms な-row / にゃ etc.)
    if (c === "n" && next === "'") {
      out += "ん";
      i += 2;
      continue;
    }
    if (c === "n" && (next === undefined || (!VOWELS.includes(next) && next !== "y"))) {
      out += "ん";
      i += 1;
      continue;
    }

    // small っ: a doubled consonant (kk, tt, ss, pp, …; also "tch" → っち).
    if (c !== "n" && !VOWELS.includes(c) && c !== "-" && (next === c || (c === "t" && next === "c"))) {
      out += "っ";
      i += 1;
      continue;
    }

    // greedy longest match against the table
    let matched = false;
    for (let len = MAX_KEY; len >= 1; len--) {
      const chunk = s.slice(i, i + len);
      if (TABLE[chunk]) {
        out += TABLE[chunk];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // leave unknown character visible (e.g. a half-typed syllable)
      out += c;
      i += 1;
    }
  }
  return out;
}

/** Loose equality: ignore spaces so "ame" vs "a me" still match the target. */
export function kanaEquals(a: string, b: string): boolean {
  const strip = (x: string) => x.replace(/\s/g, "");
  return strip(a) === strip(b);
}
