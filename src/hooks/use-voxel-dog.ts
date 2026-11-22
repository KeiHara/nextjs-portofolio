import { useEffect, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useThrottledCallback } from "@tanstack/react-pacer"
import { dogModelQueryOptions } from "@/queries/dog-model"
import { createVoxelDogScene } from "@/lib/voxel-dog-scene"
import type { VoxelDogScene } from "@/lib/voxel-dog-scene"

export function useVoxelDog() {
  const { data, isError } = useQuery(dogModelQueryOptions)
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<VoxelDogScene | null>(null)
  const visible = useRef(false)
  const [sceneState, setSceneState] = useState<"loading" | "ready" | "error">(
    "loading"
  )
  useEffect(() => {
    const container = containerRef.current
    if (!data || !container) return
    let cancelled = false
    createVoxelDogScene(container, data)
      .then((scene) => {
        if (cancelled) {
          scene.dispose()
          return
        }
        sceneRef.current = scene
        if (visible.current && !document.hidden) scene.start()
        setSceneState("ready")
      })
      .catch(() => {
        if (!cancelled) setSceneState("error")
      })
    return () => {
      cancelled = true
      sceneRef.current?.dispose()
      sceneRef.current = null
    }
  }, [data])
  const onResize = useThrottledCallback(() => sceneRef.current?.resize(), {
    wait: 100,
  })
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const observer = new ResizeObserver(onResize)
    observer.observe(container)
    return () => observer.disconnect()
  }, [onResize])
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    function sync() {
      if (visible.current && !document.hidden) sceneRef.current?.start()
      else sceneRef.current?.stop()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting
      sync()
    })
    observer.observe(container)
    document.addEventListener("visibilitychange", sync)
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", sync)
    }
  }, [])
  return { containerRef, status: isError ? ("error" as const) : sceneState }
}
