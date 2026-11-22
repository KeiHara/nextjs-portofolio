import { getImage } from "@/lib/images"
import type { ImageKey } from "@/lib/images"

export function ResponsiveImage({
  image,
  alt,
  sizes,
  priority = false,
  className,
}: {
  image: ImageKey
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  return (
    <img
      {...getImage(image)}
      alt={alt}
      sizes={sizes}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      draggable={false}
    />
  )
}
