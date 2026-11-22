import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import type { navItems } from "@/data/navigation"
import { NavTooltip } from "./nav-tooltip"
import type { TooltipSide } from "./nav-tooltip"

export function NavItem({
  item,
  tooltipSide,
}: {
  item: (typeof navItems)[number]
  tooltipSide: TooltipSide
}) {
  const { label, icon: Icon, shortcut, ...link } = item
  return (
    <NavTooltip
      side={tooltipSide}
      label={
        <>
          {label}{" "}
          <KbdGroup>
            <Kbd>G</Kbd>
            <Kbd>{shortcut}</Kbd>
          </KbdGroup>
        </>
      }
      trigger={
        <Button
          nativeButton={false}
          role="link"
          variant="ghost"
          size="icon-lg"
          className="data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
          render={<Link {...link} aria-label={label} />}
        >
          <Icon />
        </Button>
      }
    />
  )
}
