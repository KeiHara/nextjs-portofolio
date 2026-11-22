import type { Work } from "@/data/works"
import { ResponsiveImage } from "@/components/shared/responsive-image"

export function WorkMedia({ work: { images, title } }: { work: Work }) {
  if (!images.length) return null
  if (images.length === 1)
    return (
      <ResponsiveImage
        image={images[0]}
        alt={title + " screenshot"}
        sizes="(min-width: 1024px) 320px, 384px"
        className="aspect-video w-full object-cover object-top"
      />
    )
  return (
    <div className="grid grid-cols-3 gap-2 px-(--card-spacing)">
      {images.map((image, i) => (
        <ResponsiveImage
          key={image}
          image={image}
          alt={`${title} screenshot ${i + 1} of ${images.length}`}
          sizes="120px"
          className="aspect-[9/16] w-full rounded-md border object-cover"
        />
      ))}
    </div>
  )
}
