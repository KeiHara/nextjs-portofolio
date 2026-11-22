import { glob, mkdir, writeFile } from "node:fs/promises"
import { dirname, extname, join, sep } from "node:path"
import sharp from "sharp"

const root = "assets/images"
const sources = (
  await Array.fromAsync(glob("**/*.{jpg,png}", { cwd: root }))
).sort()
if (!sources.length) throw new Error(`No PNG or JPG sources in ${root}`)
const manifest = {}
for (const file of sources) {
  const key = file.slice(0, -extname(file).length).split(sep).join("/")
  const input = join(root, file)
  const { width, height } = await sharp(input).metadata()
  const widths = [400, 800].filter((w) => w <= width)
  if (!widths.length) widths.push(width)
  manifest[key] = { width, height, widths }
  for (const w of widths) {
    const output = `public/img/${key}-${w}.webp`
    await mkdir(dirname(output), { recursive: true })
    await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(output)
  }
}
await sharp(join(root, "profile.jpg"))
  .resize(800, 800)
  .jpeg({ quality: 85 })
  .toFile("public/og.jpg")
await mkdir("src/data", { recursive: true })
await writeFile(
  "src/data/image-manifest.json",
  JSON.stringify(manifest, null, 2) + "\n"
)
