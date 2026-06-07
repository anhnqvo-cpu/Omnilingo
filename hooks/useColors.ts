import colors, { type Palette } from "@/constants/colors";
import { useThemePreference } from "@/context/AppContext";

/**
 * Returns the design tokens for the user's chosen theme (light or dark),
 * plus scheme-independent values like `radius`.
 *
 * The theme is stored in AppContext (persisted) and flipped with the toggle in
 * the home header — it is NOT tied to the device appearance setting, so the
 * in-app switch is the single source of truth.
 */
export function useColors(): Palette & { radius: number } {
  const theme = useThemePreference();
  const palette = theme === "light" ? colors.light : colors.dark;
  return { ...palette, radius: colors.radius };
}
