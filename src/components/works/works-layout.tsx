import { Page } from "@/components/shared/page"
import { Outlet } from "@tanstack/react-router"
import { WorksNav } from "./works-nav"

export function WorksLayout() {
  return (
    <Page>
      <WorksNav />
      <Outlet />
    </Page>
  )
}
