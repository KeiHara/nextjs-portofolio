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
    description: "Download sheet music from MuseScore.",
    images: ["works/musescore-scraper/musescore-scraper"],
    tech: ["svelte", "tailwind", "daisyui", "puppeteer", "docker", "gcp"],
  },
  {
    id: "youthchat",
    kind: "website",
    title: "Youthchat",
    description: "Helps young people identify where they need support.",
    images: ["works/youthchat/youthchat"],
    tech: ["dotnet", "tailwind", "docker", "gcp"],
    href: "https://youthchat.co.nz/",
  },
  {
    id: "ida-survey",
    kind: "website",
    title: "IDA Survey",
    description: "Surveys and an admin dashboard for diagnostic research.",
    images: ["works/ida/ida-survey-page"],
    tech: ["angular", "tailwind", "daisyui", "docker", "gcp"],
  },
  {
    id: "tirohia",
    kind: "website",
    title: "Tirohia",
    description: "A new look for the Habits mental health platform.",
    images: ["works/tirohia/tirohia"],
    tech: ["angular", "spring-boot", "docker", "gcp"],
  },
  {
    id: "habits",
    kind: "website",
    title: "Habits",
    description: "Tracks mental health and engagement in research studies.",
    images: ["works/habits/habits"],
    tech: ["angular", "spring-boot", "docker", "gcp"],
  },
  {
    id: "tekaha",
    kind: "website",
    title: "Tekaha",
    description: "A space for the Tekaha community to connect.",
    images: ["works/tekaha/tekaha"],
    tech: ["angular", "spring-boot", "docker", "gcp"],
    href: "https://www.tekaha.co.nz/",
  },
  {
    id: "ida-app",
    kind: "app",
    title: "IDA App",
    description: "Helps doctors work on diagnostic accuracy.",
    images: ["works/ida/ida-app1", "works/ida/ida-app2", "works/ida/ida-app3"],
    tech: ["angular", "ionic", "spring-boot"],
  },
  {
    id: "headstrong",
    kind: "app",
    title: "Headstrong",
    description: "A mental health check-in chatbot linked to Habits.",
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
    description: "A mood tracker that shares updates with Habits.",
    images: ["works/mmca/mmca1", "works/mmca/mmca2", "works/mmca/mmca3"],
    tech: ["angular", "ionic", "spring-boot"],
  },
]
