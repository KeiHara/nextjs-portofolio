import { queryOptions } from "@tanstack/react-query"

export const worksQueryOptions = queryOptions({
  queryKey: ["works"],
  queryFn: async () => (await import("@/data/works")).works,
})
