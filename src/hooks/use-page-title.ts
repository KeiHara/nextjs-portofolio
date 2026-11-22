import { useMatches } from "@tanstack/react-router"
import { SITE_NAME } from "@/lib/site"

export function usePageTitle(override?: string) {
  const title = useMatches({
    select: (matches) => {
      for (let i = matches.length - 1; i >= 0; i--) {
        if (matches[i]._notFound) return "Page not found"
        const value = matches[i].staticData.title
        if (value) return value
      }
    },
  })
  return override ?? title ?? SITE_NAME
}
