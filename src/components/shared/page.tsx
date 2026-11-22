import type { ReactNode } from "react"

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="animate-in duration-500 fade-in slide-in-from-bottom-4 motion-reduce:animate-none">
      {children}
    </div>
  )
}
