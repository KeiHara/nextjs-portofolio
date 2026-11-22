import { queryOptions } from "@tanstack/react-query"

export const dogModelQueryOptions = queryOptions({
  queryKey: ["dog-model"],
  gcTime: Infinity,
  queryFn: async ({ signal }) => {
    const response = await fetch("/dog.glb", { signal })
    if (!response.ok)
      throw new Error(`Failed to load dog model: ${response.status}`)
    return response.arrayBuffer()
  },
})
