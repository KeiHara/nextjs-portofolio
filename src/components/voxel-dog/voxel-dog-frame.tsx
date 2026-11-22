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
      className="relative mx-auto mt-[-30px] mb-[-100px] size-[300px] sm:mt-[-200px] sm:mb-[-220px] sm:size-[640px]"
    >
      {children}
    </div>
  )
}
