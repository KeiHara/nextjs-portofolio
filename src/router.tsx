import { QueryClient } from "@tanstack/react-query"
import { createRouter } from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query"
import { routeTree } from "./routeTree.gen"

export function getRouter() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: Infinity } },
  })
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  })
  setupRouterSsrQueryIntegration({ router, queryClient })
  return router
}
declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    title?: string
  }
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
