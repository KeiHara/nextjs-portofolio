import { preferencesStore } from "@/stores/preferences-store"
import { useSelector } from "@tanstack/react-store"
import { RAIL_SIDE_KEY, savePreference } from "@/lib/theme-script"

function toggleRailSide() {
  const next = preferencesStore.state.railSide === "left" ? "right" : "left"
  preferencesStore.setState((s) => ({ ...s, railSide: next }))
  savePreference(RAIL_SIDE_KEY, next)
}
export function useRailSide() {
  const railSide = useSelector(preferencesStore, (s) => s.railSide)
  return { railSide, toggleRailSide }
}
