import { createFileRoute } from "@tanstack/react-router"
import { WorkList } from "@/components/works/work-list"
import { seo } from "@/lib/seo"
import { SITE_URL } from "@/lib/site"

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: seo({
      title: "Keisuke Hara | Works: websites",
      description: "Websites and web apps Keisuke Hara has built.",
      path: "/works",
    }),
    links: [{ rel: "canonical", href: SITE_URL + "/works" }],
  }),
  component: () => <WorkList kind="website" />,
})
