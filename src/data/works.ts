import type { ImageKey } from "@/lib/images"
import type { TechId } from "./tech"

export type WorkKind = "website" | "app"
export interface Work {
  id: string
  kind: WorkKind
  title: string
  description: string
  href?: string
  images: ImageKey[]
  tech: TechId[]
}
export const works: Work[] = [
  {
    id: "musescore-scraper",
    kind: "website",
    title: "Musescore scraper",
    description:
      "A website where you can download any musescore music sheet for free",
    images: ["works/musescore-scraper/musescore-scraper"],
    tech: ["svelte", "tailwind", "daisyui", "puppeteer", "docker", "gcp"],
  },
  {
    id: "youthchat",
    kind: "website",
    title: "Youthchat",
    description:
      "An Electronic Case Finding and Help Assessment Tool for Youth",
    images: ["works/youthchat/youthchat"],
    tech: ["dotnet", "tailwind", "docker", "gcp"],
    href: "https://youthchat.co.nz/",
  },
  {
    id: "ida-survey",
    kind: "website",
    title: "IDA Survey",
    description: "A survey platform and admin dashboard for the IDA project.",
    images: ["works/ida/ida-survey-page"],
    tech: ["angular", "tailwind", "daisyui", "docker", "gcp"],
  },
  {
    id: "tirohia",
    kind: "website",
    title: "Tirohia",
    description: "Habits rebranded!",
    images: ["works/tirohia/tirohia"],
    tech: ["angular", "spring-boot", "docker", "gcp"],
  },
  {
    id: "habits",
    kind: "website",
    title: "Habits",
    description:
      "A web application that tracks the participant's mental health and engagement (Government-funded research).",
    images: ["works/habits/habits"],
    tech: ["angular", "spring-boot", "docker", "gcp"],
  },
  {
    id: "tekaha",
    kind: "website",
    title: "Tekaha",
    description:
      "A platform for the Tekaha community to connect and socialize.",
    images: ["works/tekaha/tekaha"],
    tech: ["angular", "spring-boot", "docker", "gcp"],
    href: "https://www.tekaha.co.nz/",
  },
  {
    id: "ida-app",
    kind: "app",
    title: "IDA App",
    description:
      "A mobile app being developed to help improve diagnostic accuracy amongst medical doctors.",
    images: ["works/ida/ida-app1", "works/ida/ida-app2", "works/ida/ida-app3"],
    tech: ["angular", "ionic", "spring-boot"],
  },
  {
    id: "headstrong",
    kind: "app",
    title: "Headstrong",
    description:
      "Chatbot application tracks the user's mental health which can be monitored on the Habits platform.",
    images: [
      "works/headstrong/headstrong1",
      "works/headstrong/headstrong2",
      "works/headstrong/headstrong3",
    ],
    tech: ["angular", "ionic", "spring-boot"],
    href: "https://play.google.com/store/apps/details?id=nz.co.uniservices.habitsmessenger",
  },
  {
    id: "mmca",
    kind: "app",
    title: "MMCA",
    description:
      "A mobile app for mood tracking which can be monitored on the Habits platform.",
    images: ["works/mmca/mmca1", "works/mmca/mmca2", "works/mmca/mmca3"],
    tech: ["angular", "ionic", "spring-boot"],
  },
]
