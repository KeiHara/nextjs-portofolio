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
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-muted-foreground">{role}</p>
        <p className="my-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPinIcon className="size-4" />
          {location}
        </p>
        <TextLink href={"mailto:" + email}>{email}</TextLink>
      </div>
      <ResponsiveImage
        image={avatar}
        alt="Portrait of Keisuke Hara"
        sizes="96px"
        priority
        className="size-24 shrink-0 rounded-full border object-cover"
      />
    </div>
  )
}
