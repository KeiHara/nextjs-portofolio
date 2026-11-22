import type { Profile } from "@/data/profile"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"

export function SocialsSection({ socials }: Pick<Profile, "socials">) {
  return (
    <Section title="On the web">
      <div className="flex flex-col items-start">
        {socials.map(({ url, icon: Icon, label, handle }) => (
          <Button
            key={url}
            variant="ghost"
            nativeButton={false}
            role="link"
            className="justify-start"
            render={<a href={url} target="_blank" rel="noreferrer" />}
          >
            <Icon data-icon="inline-start" />
            {label} <span className="text-muted-foreground">{handle}</span>
          </Button>
        ))}
      </div>
    </Section>
  )
}
