import type { Profile } from "@/data/profile"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"

export function SkillsSection({ skills }: Pick<Profile, "skills">) {
  return (
    <Section title="Skills">
      <div className="space-y-3">
        {skills.map(({ label, items }) => (
          <div key={label}>
            <h3 className="mb-1 text-sm font-medium">{label}</h3>
            <div className="flex flex-wrap gap-1.5">
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
