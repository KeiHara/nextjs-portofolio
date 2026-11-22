import type { WorkKind } from "@/data/works"
import { useWorks } from "@/hooks/use-works"
import { WorkCard } from "./work-card"
import { Empty, EmptyHeader, EmptyTitle } from "@/components/ui/empty"

export function WorkList({ kind }: { kind: WorkKind }) {
  const works = useWorks(kind)
  return works.length === 0 ? (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>Nothing here yet</EmptyTitle>
      </EmptyHeader>
    </Empty>
  ) : (
    <section>
      <h2 className="sr-only">
        {kind === "website" ? "Websites" : "Mobile apps"}
      </h2>
      <ul className="mt-4 grid gap-4 lg:grid-cols-2">
        {works.map((work) => (
          <li key={work.id}>
            <WorkCard work={work} />
          </li>
        ))}
      </ul>
    </section>
  )
}
