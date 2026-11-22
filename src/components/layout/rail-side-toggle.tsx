import { ArrowLeftRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRailSide } from "@/hooks/use-rail-side"
import { NavTooltip } from "./nav-tooltip"

export function RailSideToggle() {
  const { railSide, toggleRailSide } = useRailSide()
  return (
    <NavTooltip
      side={railSide}
      label={railSide === "left" ? "Move to right" : "Move to left"}
      trigger={
        <Button
          variant="ghost"
          size="icon-lg"
          aria-label="Move navigation to the other side"
          onClick={toggleRailSide}
        >
          <ArrowLeftRightIcon />
        </Button>
      }
    />
  )
}
