import { NavItem } from "./nav-item"
import { ThemeToggle } from "./theme-toggle"
import { SourceLink } from "./source-link"
import { navItems } from "@/data/navigation"
import { useRailSide } from "@/hooks/use-rail-side"
import { RailSideToggle } from "./rail-side-toggle"
import { Separator } from "@/components/ui/separator"

export function NavRail() {
  const { railSide } = useRailSide()
  return (
    <nav
      aria-label="Primary"
      className="fixed top-1/2 left-[calc(50%-var(--col)/2-6.5rem)] z-40 hidden w-16 -translate-y-1/2 flex-col items-center gap-2 rounded-xl border bg-background/70 py-3 backdrop-blur transition-[left] duration-300 in-data-[rail-side=right]:left-[calc(50%+var(--col)/2+2.5rem)] motion-reduce:transition-none sm:flex"
    >
      {navItems.map((item) => (
        <NavItem key={item.to} item={item} tooltipSide={railSide} />
      ))}
      <Separator />
      <SourceLink side={railSide} />
      <div className="mt-auto" />
      <RailSideToggle />
      <ThemeToggle side={railSide} />
    </nav>
  )
}
