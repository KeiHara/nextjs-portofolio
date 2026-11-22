import type { ReactNode } from "react"

export function TextLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="font-medium underline underline-offset-4 hover:text-muted-foreground"
    >
      {children}
    </a>
  )
}
