import type { ReactNode, Ref } from "react"

export function VoxelDogFrame({
  ref,
  children,
}: {
  ref?: Ref<HTMLDivElement>
  children?: ReactNode
}) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative size-scene shrink-0"
    >
      {children}
    </div>
  )
}
