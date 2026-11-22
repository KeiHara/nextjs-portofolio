import type { Profile } from "@/data/profile"
import { Section } from "@/components/shared/section"
import { Fragment } from "react"

export function EducationSection({ education }: Pick<Profile, "education">) {
  return (
    <Section title="Education">
      <dl className="grid grid-cols-[1fr_3fr] gap-x-stack gap-y-inline">
        {education.map(({ period, degree, school }) => (
          <Fragment key={school}>
            <dt className="text-sm text-muted-foreground">{period}</dt>
            <dd>
              {degree}, {school}
            </dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  )
}
