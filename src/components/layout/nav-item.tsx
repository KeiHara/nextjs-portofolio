import { Link } from "@tanstack/react-router"
import { buttonVariants } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import type { navItems } from "@/data/navigation"
import { NavTooltip } from "./nav-tooltip"
import type { TooltipSide } from "./nav-tooltip"

const activeProps = { className: buttonVariants({ size: "icon-lg" }) }
const inactiveProps = {
  className: buttonVariants({ variant: "ghost", size: "icon-lg" }),
}

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
            {shortcut.map((key) => <Kbd key={key}>{key}</Kbd>)}
          </KbdGroup>
        </>
      }
      trigger={
        <Link
          {...link}
          aria-label={label}
          activeProps={activeProps}
          inactiveProps={inactiveProps}
        >
          <Icon />
        </Link>
      }
    />
  )
}
