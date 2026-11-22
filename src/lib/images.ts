import manifest from "@/data/image-manifest.json"

export type ImageKey = keyof typeof manifest
export function getImage(key: ImageKey) {
  const { width, height, widths } = manifest[key]
  const file = (w: number) => `/img/${key}-${w}.webp`
  return {
    width,
    height,
    src: file(widths[widths.length - 1]),
    srcSet: widths.map((w) => `${file(w)} ${w}w`).join(", "),
  }
}
