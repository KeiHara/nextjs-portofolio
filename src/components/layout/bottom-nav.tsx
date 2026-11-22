import { NavItem } from "./nav-item"
import { ThemeToggle } from "./theme-toggle"
import { SourceLink } from "./source-link"
import { navItems } from "@/data/navigation"

export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-4 left-1/2 z-40 flex w-11/12 max-w-sm -translate-x-1/2 items-center justify-evenly rounded-xl border bg-background/70 py-2 backdrop-blur sm:hidden"
    >
      {navItems.map((item) => (
        <NavItem key={item.to} item={item} tooltipSide="top" />
      ))}
      <SourceLink side="top" />
      <ThemeToggle side="top" />
    </nav>
  )
}
