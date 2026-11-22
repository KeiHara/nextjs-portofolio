import { createFileRoute } from "@tanstack/react-router"
import { WorksLayout } from "@/components/works/works-layout"
import { worksQueryOptions } from "@/queries/works"

export const Route = createFileRoute("/works")({
  staticData: { title: "My works" },
  loader: async ({ context }) => {
    await context.queryClient.query(worksQueryOptions)
  },
  component: WorksLayout,
})
