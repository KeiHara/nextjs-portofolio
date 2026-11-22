import { createFileRoute } from "@tanstack/react-router"
import { WorkList } from "@/components/works/work-list"
import { seo } from "@/lib/seo"
import { SITE_URL } from "@/lib/site"

export const Route = createFileRoute("/works/apps")({
  head: () => ({
    meta: seo({
      title: "Keisuke Hara | Works: mobile apps",
      description: "Mobile apps Keisuke Hara has built.",
      path: "/works/apps",
    }),
    links: [{ rel: "canonical", href: SITE_URL + "/works/apps" }],
  }),
  component: () => <WorkList kind="app" />,
})
