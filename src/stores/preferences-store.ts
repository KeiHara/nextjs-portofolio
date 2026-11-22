import { createStore } from "@tanstack/react-store"

export type Theme = "light" | "dark"
export type RailSide = "left" | "right"
export const preferencesStore = createStore<{
  theme: Theme
  railSide: RailSide
}>({ theme: "light", railSide: "left" })
