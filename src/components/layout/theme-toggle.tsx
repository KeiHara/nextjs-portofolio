import { SunIcon, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { themeShortcut } from "@/data/navigation"
import { useTheme } from "@/hooks/use-theme"
import { NavTooltip } from "./nav-tooltip"
import type { TooltipSide } from "./nav-tooltip"

export function ThemeToggle({ side }: { side: TooltipSide }) {
  const { toggleTheme } = useTheme()
  return (
    <NavTooltip
      side={side}
      label={
        <>
          Toggle theme <Kbd>{themeShortcut}</Kbd>
        </>
      }
      trigger={
        <Button
          variant="ghost"
          size="icon-lg"
          aria-label="Toggle theme"
          aria-keyshortcuts={themeShortcut}
          onClick={toggleTheme}
        >
          <SunIcon className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      }
    />
  )
}
