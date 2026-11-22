import { linkOptions } from "@tanstack/react-router"
import { CircleUserIcon, BriefcaseIcon } from "lucide-react"

export const themeShortcut = "T"

export const navItems = linkOptions([
  {
    to: "/",
    label: "About me",
    icon: CircleUserIcon,
    shortcut: ["G", "A"] as const,
    activeOptions: { exact: true },
  },
  { to: "/works", label: "My works", icon: BriefcaseIcon, shortcut: ["G", "W"] as const },
])
