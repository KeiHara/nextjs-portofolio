import type { Profile } from "@/data/profile"
import { Section } from "@/components/shared/section"
import { TextLink } from "@/components/shared/text-link"

export function ExperienceSection({ experience }: Pick<Profile, "experience">) {
  return (
    <Section title="Experience">
      <div className="space-y-group">
        {experience.map(({ company, url, role, period, highlights }) => (
          <article key={company}>
            <h3 className="font-medium">
              {role} · <TextLink href={url}>{company}</TextLink>
            </h3>
            <p className="text-sm text-muted-foreground">{period}</p>
            <ul className="mt-inline list-disc space-y-tight pl-stack text-sm">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
