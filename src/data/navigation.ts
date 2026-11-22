import { linkOptions } from "@tanstack/react-router"
import { CircleUserIcon, BriefcaseIcon } from "lucide-react"

export const navItems = linkOptions([
  {
    to: "/",
    label: "About me",
    icon: CircleUserIcon,
    shortcut: "A",
    activeOptions: { exact: true },
  },
  { to: "/works", label: "My works", icon: BriefcaseIcon, shortcut: "W" },
])
