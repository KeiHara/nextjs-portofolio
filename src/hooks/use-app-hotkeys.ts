import { useHotkeys } from "@tanstack/react-hotkeys"
import { useNavigate } from "@tanstack/react-router"
import { navItems, themeShortcut } from "@/data/navigation"
import { useTheme } from "./use-theme"

export function useAppHotkeys() {
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
  useHotkeys([
    ...navItems.map(({ to, shortcut }) => ({
      hotkey: shortcut,
      callback: () => navigate({ to }),
    })),
    { hotkey: themeShortcut, callback: toggleTheme },
  ])
}
