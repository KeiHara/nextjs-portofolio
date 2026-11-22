import type { ReactNode } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { usePreferencesSync } from "@/hooks/use-preferences-sync"
import { useAppHotkeys } from "@/hooks/use-app-hotkeys"
import { TopBar } from "./top-bar"
import { NavRail } from "./nav-rail"
import { BottomNav } from "./bottom-nav"

export function AppShell({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) {
  usePreferencesSync()
  useAppHotkeys()
  return (
    <TooltipProvider>
      <div className="[--col:24rem] lg:[--col:42rem]">
        <TopBar title={title} />
        <NavRail />
        <main className="pt-24 pb-28 sm:pt-32 sm:pb-12">
          <div className="flex justify-center overflow-x-clip" />
          <div className="relative mx-auto w-11/12 max-w-sm lg:max-w-2xl">
            {children}
          </div>
        </main>
        <BottomNav />
      </div>
    </TooltipProvider>
  )
}
