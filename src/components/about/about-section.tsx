import type { Profile } from "@/data/profile"
import { Section } from "@/components/shared/section"

export function AboutSection({ about }: Pick<Profile, "about">) {
  return (
    <Section title="About">
      <div className="space-y-stack">
        {about.map((p) => (
          <p key={p} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
