import React from "react";
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Stop, Text as SvgText } from "react-native-svg";

// Cross-platform (web + native) port of the Omnilingo globe mark:
// four writing systems — Latin A, Japanese あ, Korean 한, Arabic ع — set inside a
// wireframe globe with a coral→pink accent. Ported from the web SVG to
// react-native-svg so it renders crisply everywhere and needs no web fonts.

let _instance = 0;

export function OmnilingoLogo({
  size = 36,
  ink = "#FBF6F2",
}: {
  /** Square size in px. */
  size?: number;
  /** Mark color (globe outline + glyphs). Default cream, for dark backgrounds. */
  ink?: string;
}) {
  // Unique gradient id per instance so multiple logos on one screen don't collide.
  const gid = React.useMemo(() => `omniAccent${_instance++}`, []);
  const accent = `url(#${gid})`;
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Defs>
        <LinearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FB7185" />
          <Stop offset="1" stopColor="#F9A8D4" />
        </LinearGradient>
      </Defs>
      <Circle cx="50" cy="50" r="37" stroke={ink} strokeWidth="3" />
      <Ellipse cx="50" cy="50" rx="14" ry="37" stroke={accent} strokeWidth="2" />
      <Ellipse cx="50" cy="50" rx="37" ry="14" stroke={accent} strokeWidth="2" />
      <G fill={ink} fontWeight="600" textAnchor="middle">
        {/* y values place each glyph's baseline so it sits centered on its node */}
        <SvgText x="50" y="31" fontSize="12.5">A</SvgText>
        <SvgText x="74" y="54.5" fontSize="13">あ</SvgText>
        <SvgText x="50" y="78" fontSize="11.5">한</SvgText>
        <SvgText x="26" y="54.5" fontSize="13">ع</SvgText>
      </G>
    </Svg>
  );
}

export default OmnilingoLogo;
