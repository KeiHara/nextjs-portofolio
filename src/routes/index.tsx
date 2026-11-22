import { createFileRoute } from "@tanstack/react-router"
import { AboutPage } from "@/components/about/about-page"
import { profile } from "@/data/profile"
import { seo } from "@/lib/seo"
import { SITE_URL } from "@/lib/site"

export const Route = createFileRoute("/")({
  staticData: { title: "About me" },
  head: () => ({
    meta: seo({
      title: "Keisuke Hara | About me",
      description:
        "Full-stack engineer at Heidi Health, based in Sydney. Experience, skills and selected work.",
      path: "/",
    }),
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
  component: () => <AboutPage profile={profile} />,
})
