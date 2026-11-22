import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router"
import type { QueryClient } from "@tanstack/react-query"
import type { ReactNode } from "react"
import appCss from "../styles.css?url"
import { Analytics } from "@vercel/analytics/react"
import { AppShell } from "@/components/layout/app-shell"
import { NotFound } from "@/components/layout/not-found"
import { RouteError } from "@/components/layout/route-error"
import { Devtools } from "@/components/shared/devtools"
import { preferencesScript } from "@/lib/theme-script"

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Keisuke Hara" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico" },
      ],
    }),
    shellComponent: RootDocument,
    component: () => (
      <AppShell>
        <Outlet />
      </AppShell>
    ),
    notFoundComponent: NotFound,
    errorComponent: (props) => (
      <AppShell title="Error">
        <RouteError {...props} />
      </AppShell>
    ),
  }
)
function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>{preferencesScript}</ScriptOnce>
        {children}
        <Analytics />
        <Devtools />
        <Scripts />
      </body>
    </html>
  )
}
