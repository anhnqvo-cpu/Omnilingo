// Two full palettes with identical keys. `useColors` picks one based on the
// user's theme setting (persisted in AppContext). Brand accents (sakura, gold,
// jade, indigo, primary) stay constant across themes; only surfaces/text flip.

const dark = {
  text: "#f1f5f9",
  tint: "#e85d75",

  background: "#0f172a",
  foreground: "#f1f5f9",

  card: "#1e293b",
  cardForeground: "#f1f5f9",

  primary: "#e85d75",
  primaryForeground: "#ffffff",

  secondary: "#1e293b",
  secondaryForeground: "#cbd5e1",

  muted: "#334155",
  mutedForeground: "#94a3b8",

  accent: "#f59e0b",
  accentForeground: "#0f172a",

  destructive: "#ef4444",
  destructiveForeground: "#ffffff",

  border: "#334155",
  input: "#1e293b",

  success: "#22c55e",
  successForeground: "#ffffff",

  surface: "#0f172a",
  surfaceElevated: "#1e293b",

  sakura: "#e85d75",
  gold: "#f59e0b",
  jade: "#10b981",
  indigo: "#6366f1",
};

const light: typeof dark = {
  text: "#0f172a",
  tint: "#e85d75",

  background: "#f8fafc",
  foreground: "#0f172a",

  card: "#ffffff",
  cardForeground: "#0f172a",

  primary: "#e85d75",
  primaryForeground: "#ffffff",

  secondary: "#f1f5f9",
  secondaryForeground: "#334155",

  muted: "#e2e8f0",
  mutedForeground: "#64748b",

  accent: "#d97706",
  accentForeground: "#ffffff",

  destructive: "#dc2626",
  destructiveForeground: "#ffffff",

  border: "#e2e8f0",
  input: "#ffffff",

  success: "#16a34a",
  successForeground: "#ffffff",

  surface: "#f8fafc",
  surfaceElevated: "#ffffff",

  sakura: "#e85d75",
  gold: "#f59e0b",
  jade: "#10b981",
  indigo: "#6366f1",
};

export type Palette = typeof dark;

const colors = {
  light,
  dark,
  radius: 14,
};

export default colors;
