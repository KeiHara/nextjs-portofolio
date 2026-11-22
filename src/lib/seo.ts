import { SITE_URL } from "./site"

export function seo({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL + path },
    { property: "og:image", content: SITE_URL + "/og.jpg" },
    { name: "twitter:card", content: "summary" },
  ]
}
