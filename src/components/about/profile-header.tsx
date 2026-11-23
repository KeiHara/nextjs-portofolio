import type { Profile } from "@/data/profile"
import { LINKEDIN_URL } from "@/data/profile"
import { FaLinkedin } from "react-icons/fa6"
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
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${name} on LinkedIn (opens in a new tab)`}
        className="group relative block size-avatar shrink-0 overflow-hidden rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ResponsiveImage
          image={avatar}
          alt={`Portrait of ${name}`}
          sizes="96px"
          priority
          className="size-full object-cover transition-[filter] duration-200 group-hover:blur-sm group-focus-visible:blur-sm motion-reduce:transition-none"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid place-items-center text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          <FaLinkedin className="size-group motion-safe:scale-90 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-100 motion-safe:group-focus-visible:scale-100" />
        </span>
      </a>
    </div>
  )
}
