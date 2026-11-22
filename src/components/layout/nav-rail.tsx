import { NavItem } from "./nav-item"
import { ThemeToggle } from "./theme-toggle"
import { SourceLink } from "./source-link"
import { navItems } from "@/data/navigation"
import { useRailSide } from "@/hooks/use-rail-side"
import { RailSideToggle } from "./rail-side-toggle"

export function NavRail() {
  const { railSide } = useRailSide()
  return (
    <nav
      aria-label="Primary"
      className="fixed top-1/2 left-rail-left z-40 hidden w-rail -translate-y-1/2 flex-col items-center gap-tight rounded-xl border bg-background/70 py-inline backdrop-blur transition-[left] duration-300 in-data-[rail-side=right]:left-rail-right motion-reduce:transition-none sm:flex"
    >
      {navItems.map((item) => (
        <NavItem key={item.to} item={item} tooltipSide={railSide} />
      ))}
      <SourceLink side={railSide} />
      <RailSideToggle />
      <ThemeToggle side={railSide} />
    </nav>
  )
}
