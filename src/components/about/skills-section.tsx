import type { Profile } from "@/data/profile"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"

export function SkillsSection({ skills }: Pick<Profile, "skills">) {
  return (
    <Section title="Skills">
      <div className="space-y-stack">
        {skills.map(({ label, items }) => (
          <div key={label}>
            <h3 className="mb-tight text-sm font-medium">{label}</h3>
            <div className="flex flex-wrap gap-inline">
              {items.map((item) => (
                <Badge variant="secondary" key={item}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
