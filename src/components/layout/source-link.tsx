import { FaGithub } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { REPO_URL } from "@/lib/site"
import { NavTooltip } from "./nav-tooltip"
import type { TooltipSide } from "./nav-tooltip"

export function SourceLink({ side }: { side: TooltipSide }) {
  return (
    <NavTooltip
      side={side}
      label="Source"
      trigger={
        <Button
          variant="ghost"
          size="icon-lg"
          nativeButton={false}
          role="link"
          render={
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Source"
            />
          }
        >
          <FaGithub />
        </Button>
      }
    />
  )
}
