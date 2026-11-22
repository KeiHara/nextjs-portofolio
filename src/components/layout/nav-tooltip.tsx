import type { ReactElement, ReactNode } from "react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

export type TooltipSide = "left" | "right" | "top"
export function NavTooltip({
  trigger,
  label,
  side,
}: {
  trigger: ReactElement
  label: ReactNode
  side: TooltipSide
}) {
  return (
    <Tooltip>
      <TooltipTrigger render={trigger} />
      <TooltipContent side={side}>{label}</TooltipContent>
    </Tooltip>
  )
}
