import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import type { IconType } from "react-icons"
import type { ImageKey } from "@/lib/images"

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
    "Keisuke is a full-stack engineer at Heidi Health, where he joined as the fourth frontend engineer on the core Scribe team. Scribe is Heidi's flagship product, used by tens of thousands of clinicians across 200+ medical specialties for more than 2.5 million patient consultations a week in 190+ countries.",
    "Before Heidi he spent three years as a frontend developer at Kekeno Tech. He was born in Tokyo (東京), Japan, and is based in Sydney.",
  ],
  experience: [
    {
      company: "Heidi Health",
      url: "https://www.heidihealth.com/",
      role: "Full-Stack Engineer",
      period: "Jun 2024 — Present",
      highlights: [
        "Fourth frontend engineer on the core Scribe team, from pre-Series A through Series C as engineering grew from 20 to 144.",
        "Soloed the full frontend rebrand for the September 2025 Series B launch: tokens, components, typography and layout across the codebase.",
        "Cut load times by 50% across core clinical flows with reusable Next.js components and optimised render paths.",
        "Introduced CodeRabbit and rolled out Cursor across engineering in 2024, and re-architected ESLint and CI rules for the frontend repo.",
        "Built a one-script onboarding tool that cut new-engineer setup from hours to a single command.",
      ],
    },
    {
      company: "Kekeno Tech",
      url: "https://kekeno.tech/",
      role: "Frontend Developer",
      period: "Aug 2021 — Jun 2024",
      highlights: [
        "Delivered features across research and non-research projects with engineering and design.",
        "Designed a Bitbucket CI pipeline with ESLint and Stylelint; parallel steps made tests up to 50% faster.",
        "Worked with the Tech Lead on architecture decisions and code review standards.",
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
      url: "https://www.linkedin.com/in/keisuke-hara/",
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
