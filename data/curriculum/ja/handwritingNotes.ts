// "Good to know" notes for characters whose handwritten form differs from how
// they usually appear in printed text / fonts. Shown as a small callout in the
// writing practice (StrokeWriter) so learners aren't confused when our guide
// looks different from the typed character they see everywhere else.
//
// We always teach the standard *handwritten* form; these notes explain the
// difference for the handful of kana where it's noticeable. Keyed by character.

export const HANDWRITING_NOTES: Record<string, string> = {
  き: "Typed, き often looks joined at the bottom. Written by hand it's 4 separate strokes — both are correct.",
  さ: "Typed, さ often looks joined at the bottom. Written by hand it's 3 separate strokes — both are correct.",
  そ: "Fonts (and our guide) draw そ as one flowing stroke. Some people add a small break near the top — both are fine.",
  ふ: "In print ふ can look like connected blobs. Written by hand it's 4 separate strokes — that's what we teach.",
  り: "Typed, り is usually two separate strokes. Written by hand it often flows as one — we show the handwritten form.",
};
