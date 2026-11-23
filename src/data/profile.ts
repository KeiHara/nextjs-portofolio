import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import type { IconType } from "react-icons"
import type { ImageKey } from "@/lib/images"

export const LINKEDIN_URL = "https://www.linkedin.com/in/keisuke-hara/"

export interface Experience {
  company: string
  url: string
  role: string
  period: string
  highlights: string[]
}
export interface Education {
  school: string
  degree: string
  period: string
}
export interface SkillGroup {
  label: string
  items: string[]
}
export interface Social {
  label: string
  handle: string
  url: string
  icon: IconType
}
export interface Profile {
  name: string
  role: string
  location: string
  email: string
  avatar: ImageKey
  about: string[]
  experience: Experience[]
  education: Education[]
  skills: SkillGroup[]
  socials: Social[]
}
export const profile: Profile = {
  name: "Keisuke Hara",
  role: "Full-Stack · Frontend Engineer",
  location: "Sydney, Australia",
  email: "keihara453@gmail.com",
  avatar: "profile",
  about: [
    "I joined Heidi Health before Series A as its fourth frontend engineer. I’ve helped build Scribe through Series C.",
  ],
  experience: [
    {
      company: "Heidi Health",
      url: "https://www.heidihealth.com/",
      role: "Full-Stack Engineer",
      period: "Jun 2024 — Present",
      highlights: [
        "Built Scribe as the engineering team grew from 20 to 144.",
        "Led the frontend rebrand for the Series B launch.",
        "Halved load times in core clinical workflows.",
      ],
    },
    {
      company: "Kekeno Tech",
      url: "https://kekeno.tech/",
      role: "Frontend Developer",
      period: "Aug 2021 — Jun 2024",
      highlights: [
        "Ran tests in parallel in Bitbucket, cutting test times by up to 50%.",
      ],
    },
  ],
  education: [
    {
      school: "The University of Auckland",
      degree: "Bachelor of Science, Computer Science",
      period: "Mar 2021 — Nov 2023",
    },
    {
      school: "University of New South Wales",
      degree: "Master of Information Technology (withdrew)",
      period: "Feb 2024 — Jun 2025",
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["TypeScript / JavaScript", "Python", "C#", "Java", "HTML & CSS"],
    },
    {
      label: "Frameworks",
      items: [
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "FastAPI",
        "Java Spring",
      ],
    },
    {
      label: "Tooling",
      items: [
        "Git",
        "GitHub Actions",
        "Linear",
        "Bitbucket Pipelines",
        "ESLint",
        "Stylelint",
        "REST APIs",
      ],
    },
    {
      label: "AI tools",
      items: ["Cursor", "Claude", "Codex", "Devin", "OMP", "CodeRabbit"],
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      handle: "@keisuke-hara",
      url: LINKEDIN_URL,
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      handle: "@KeiHara",
      url: "https://github.com/KeiHara",
      icon: FaGithub,
    },
    {
      label: "GitHub (work)",
      handle: "@keihara-heidi",
      url: "https://github.com/keihara-heidi",
      icon: FaGithub,
    },
    {
      label: "Instagram",
      handle: "@kei.9241",
      url: "https://www.instagram.com/kei.9241/",
      icon: FaInstagram,
    },
  ],
}
