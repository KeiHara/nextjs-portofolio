import type { Profile } from "@/data/profile"
import { TextLink } from "@/components/shared/text-link"
import { ResponsiveImage } from "@/components/shared/responsive-image"
import { MapPinIcon } from "lucide-react"

export function ProfileHeader({
  name,
  role,
  location,
  email,
  avatar,
}: Pick<Profile, "name" | "role" | "location" | "email" | "avatar">) {
  return (
    <div className="flex items-center justify-between gap-stack">
      <div className="min-w-0">
        <p className="font-heading text-2xl font-semibold tracking-tight">
          {name}
        </p>
        <p className="text-muted-foreground">{role}</p>
        <p className="my-tight flex items-center gap-tight text-sm text-muted-foreground">
          <MapPinIcon className="size-icon" />
          {location}
        </p>
        <TextLink href={"mailto:" + email}>{email}</TextLink>
      </div>
      <ResponsiveImage
        image={avatar}
        alt="Portrait of Keisuke Hara"
        sizes="96px"
        priority
        className="size-avatar shrink-0 rounded-full border object-cover"
      />
    </div>
  )
}
