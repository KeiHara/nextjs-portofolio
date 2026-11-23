import { NavItem } from "./nav-item"
import { ThemeToggle } from "./theme-toggle"
import { SourceLink } from "./source-link"
import { navItems } from "@/data/navigation"

export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-bottom-edge left-1/2 z-40 flex h-toolbar w-fit -translate-x-1/2 items-center gap-inline rounded-xl border bg-background/70 px-inline backdrop-blur sm:hidden"
    >
      {navItems.map((item) => (
        <NavItem key={item.to} item={item} tooltipSide="top" />
      ))}
      <SourceLink side="top" />
      <ThemeToggle side="top" />
    </nav>
  )
}
