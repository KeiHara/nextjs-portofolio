import { useVoxelDog } from "@/hooks/use-voxel-dog"
import { Spinner } from "@/components/ui/spinner"
import { VoxelDogFrame } from "./voxel-dog-frame"

export function VoxelDog() {
  const { containerRef, status } = useVoxelDog()
  return (
    <VoxelDogFrame ref={containerRef}>
      {status === "loading" && (
        <Spinner className="absolute inset-0 m-auto size-spinner text-muted-foreground" />
      )}
    </VoxelDogFrame>
  )
}
