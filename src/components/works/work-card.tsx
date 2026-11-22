import type { Work } from "@/data/works"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card"
import { ArrowUpRightIcon } from "lucide-react"
import { TechBadges } from "./tech-badges"
import { WorkMedia } from "./work-media"

export function WorkCard({ work }: { work: Work }) {
  const { title, description, href, tech } = work
  return (
    <Card className="h-full has-[>a:first-child>img]:pt-0">
      {href && work.images.length > 0 ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${title} (opens in a new tab)`}
          className="block focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
        >
          <WorkMedia work={work} />
        </a>
      ) : (
        <WorkMedia work={work} />
      )}
      <CardHeader>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        {href && (
          <CardAction>
            <Button
              variant="ghost"
              size="icon-sm"
              nativeButton={false}
              role="link"
              render={
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={"Open " + title}
                />
              }
            >
              <ArrowUpRightIcon />
            </Button>
          </CardAction>
        )}
      </CardHeader>
      <CardContent>
        <TechBadges tech={tech} />
      </CardContent>
    </Card>
  )
}
