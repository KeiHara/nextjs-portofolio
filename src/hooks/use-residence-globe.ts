import { useEffect, useRef, useState } from "react"
import type { CityId } from "@/data/residences"

export function useResidenceGlobe() {
  const rootRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [selected, setSelected] = useState<CityId | null>(null)
  function select(id: CityId, open: boolean) {
    setSelected((current) => (open ? id : current === id ? null : current))
  }

  useEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    if (!root || !stage) return
    const controller = new AbortController()
    let dispose: (() => void) | undefined
    const load = async () => {
      try {
        const { mountResidenceGlobe } = await import("@/lib/residence-globe")
        controller.signal.throwIfAborted()
        const cleanup = await mountResidenceGlobe(
          stage,
          controller.signal,
          () => setReady(false)
        )
        if (controller.signal.aborted) {
          cleanup()
          return
        }
        dispose = cleanup
        setReady(true)
      } catch {
        // Keep the text timeline when the model or WebGL is unavailable.
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      void load()
    }, { rootMargin: "200px" })
    observer.observe(root)
    return () => {
      controller.abort()
      observer.disconnect()
      dispose?.()
    }
  }, [])

  return { rootRef, stageRef, ready, selected, select }
}
