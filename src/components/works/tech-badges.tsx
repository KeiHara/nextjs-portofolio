import { Badge } from "@/components/ui/badge"
import { tech } from "@/data/tech"
import type { TechId } from "@/data/tech"
import { cn } from "@/lib/utils"

export function TechBadges({ tech: ids }: { tech: TechId[] }) {
  return (
    <ul className="flex flex-wrap gap-inline">
      {ids.map((id) => {
        const item = tech[id]
        return (
          <li key={id}>
            <Badge variant="outline">
              <img
                src={"/tech-icons/" + item.icon}
                alt=""
                width={12}
                height={12}
                className={cn("size-icon-small", "mono" in item && "dark:invert")}
              />
              {item.label}
            </Badge>
          </li>
        )
      })}
    </ul>
  )
}
