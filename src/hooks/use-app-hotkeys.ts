import { useHotkeys } from "@tanstack/react-hotkeys"
import { useNavigate } from "@tanstack/react-router"
import { useTheme } from "./use-theme"

export function useAppHotkeys() {
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
  useHotkeys([
    { hotkey: ["G", "A"], callback: () => navigate({ to: "/" }) },
    { hotkey: ["G", "W"], callback: () => navigate({ to: "/works" }) },
    { hotkey: "T", callback: toggleTheme },
  ])
}
