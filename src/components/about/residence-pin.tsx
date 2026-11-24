import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cities, stays } from "@/data/residences"
import type { CityId } from "@/data/residences"

// Short leaders separate the Australian cities without changing their coordinates.
const offsets: Record<CityId, readonly [number, number]> = {
  tokyo: [0, 0],
  sydney: [5, -10],
  melbourne: [-12, 9],
  auckland: [12, 5],
}

export function ResidencePin({
  id,
  selected,
  select,
}: {
  id: CityId
  selected: boolean
  select: (id: CityId, open: boolean) => void
}) {
  const [x, y] = offsets[id]
  return (
    <div data-pin={id} className="absolute top-0 left-0">
      <svg
        aria-hidden="true"
        width="1"
        height="1"
        className="pointer-events-none absolute overflow-visible text-background"
      >
        <line
          x1="0"
          y1="0"
          x2={x}
          y2={y}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <Tooltip open={selected} onOpenChange={(open) => select(id, open)}>
        <TooltipTrigger
          delay={0}
          closeOnClick={false}
          aria-label={cities[id].name}
          onClick={() => select(id, true)}
          style={{ left: x, top: y }}
          render={
            <Button
              variant="ghost"
              size="icon-xs"
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full hover:bg-transparent dark:hover:bg-transparent"
            />
          }
        >
          <span
            aria-hidden="true"
            className="size-inline rounded-full bg-primary shadow-sm ring-2 ring-primary-foreground group-data-popup-open/button:scale-125"
          />
        </TooltipTrigger>
        <TooltipContent side="top" className="block max-w-globe space-y-tight">
          <strong className="font-mono">{cities[id].name}</strong>
          {stays
            .filter((stay) => stay.city === id)
            .map((stay) => (
              <p key={stay.period}>
                <span className="font-medium">{stay.period}</span> · {stay.note}
              </p>
            ))}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
