import { usePageTitle } from "@/hooks/use-page-title"

export function TopBar({ title }: { title?: string }) {
  return (
    <header className="fixed top-top-edge left-1/2 z-40 grid h-toolbar w-column -translate-x-1/2 place-items-center rounded-xl border bg-background/70 px-stack backdrop-blur">
      <h1 className="text-center text-lg font-medium">
        <span aria-hidden="true" className="text-primary">
          ~/KeiHara/
        </span>
        {usePageTitle(title)}
      </h1>
    </header>
  )
}
