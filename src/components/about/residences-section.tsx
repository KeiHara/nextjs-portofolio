import { EarthIcon } from "lucide-react"
import { cities, cityIds, stays } from "@/data/residences"
import { useResidenceGlobe } from "@/hooks/use-residence-globe"
import { ResidencePin } from "./residence-pin"

export function ResidencesSection() {
  const { rootRef, stageRef, ready, selected, select } = useResidenceGlobe()
  return (
    <div
      id="places"
      ref={rootRef}
      className="mx-auto w-fit max-w-full scroll-mt-page-start lg:w-globe"
    >
      <h3 className="mx-auto flex w-fit items-center gap-tight font-mono text-xs text-muted-foreground">
        <EarthIcon aria-hidden="true" className="size-icon-small" /> Places I’ve
        lived
      </h3>
      <div className="w-globe max-w-full">
        <div
          ref={stageRef}
          hidden={!ready}
          className="relative aspect-square overflow-clip rounded-full select-none [&_canvas]:size-full [&_canvas]:cursor-grab [&_canvas]:mask-[radial-gradient(circle_closest-side,black_86%,transparent_100%)] [&_canvas:active]:cursor-grabbing"
        >
          {cityIds.map((id) => (
            <ResidencePin
              key={id}
              id={id}
              selected={id === selected}
              select={select}
            />
          ))}
        </div>
        {!ready && (
          <ol className="mt-inline space-y-inline text-xs">
            {stays.map((stay) => (
              <li key={stay.period}>
                <strong>{cities[stay.city].name}</strong> · {stay.period}
                <p>{stay.note}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}
