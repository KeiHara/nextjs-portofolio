import type { WorkKind } from "@/data/works"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { worksQueryOptions } from "@/queries/works"

export function useWorks(kind: WorkKind) {
  const { data } = useSuspenseQuery(worksQueryOptions)
  return useMemo(() => data.filter((w) => w.kind === kind), [data, kind])
}
