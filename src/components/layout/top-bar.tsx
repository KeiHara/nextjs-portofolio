import { usePageTitle } from "@/hooks/use-page-title"

export function TopBar({ title }: { title?: string }) {
  return (
    <header className="fixed top-4 left-1/2 z-40 w-11/12 max-w-sm -translate-x-1/2 rounded-xl border bg-background/70 px-4 py-3 backdrop-blur lg:max-w-2xl">
      <h1 className="text-center text-lg font-medium">{usePageTitle(title)}</h1>
    </header>
  )
}
