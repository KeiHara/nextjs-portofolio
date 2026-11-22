import { preferencesStore } from "@/stores/preferences-store"
import { useSelector } from "@tanstack/react-store"
import { THEME_KEY, savePreference } from "@/lib/theme-script"

function toggleTheme() {
  const next = preferencesStore.state.theme === "dark" ? "light" : "dark"
  preferencesStore.setState((s) => ({ ...s, theme: next }))
  savePreference(THEME_KEY, next)
}
export function useTheme() {
  const theme = useSelector(preferencesStore, (s) => s.theme)
  return { theme, toggleTheme }
}
