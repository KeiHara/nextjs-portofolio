import { preferencesStore } from "@/stores/preferences-store"
import { useEffect } from "react"

export function usePreferencesSync() {
  useEffect(() => {
    const root = document.documentElement
    preferencesStore.setState(() => ({
      theme: root.classList.contains("dark") ? "dark" : "light",
      railSide: root.dataset.railSide === "right" ? "right" : "left",
    }))
    const sub = preferencesStore.subscribe(() => {
      const { theme, railSide } = preferencesStore.state
      root.classList.toggle("dark", theme === "dark")
      root.classList.toggle("light", theme === "light")
      root.style.colorScheme = theme
      root.dataset.railSide = railSide
    })
    return () => sub.unsubscribe()
  }, [])
}
