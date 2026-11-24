import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { cities, cityIds } from "@/data/residences"

function point(lat: number, lon: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat)
  const theta = THREE.MathUtils.degToRad(90 + lon)
  return new THREE.Vector3().setFromSphericalCoords(1, phi, theta)
}

export async function mountResidenceGlobe(
  stage: HTMLDivElement,
  signal: AbortSignal,
  onLost: () => void
) {
  const response = await fetch("/maps/residences.glb", { signal })
  if (!response.ok) throw new Error(`Globe unavailable (${response.status})`)
  const { scene: world } = await new GLTFLoader().parseAsync(
    await response.arrayBuffer(),
    ""
  )
  signal.throwIfAborted()
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  const canvas = renderer.domElement
  canvas.setAttribute("aria-hidden", "true")
  stage.prepend(canvas)

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1.16, 1.16, 1.16, -1.16, 0.1, 10)
  camera.position.copy(point(1, 138)).multiplyScalar(4)
  const controls = new OrbitControls(camera, canvas)
  controls.enablePan = false
  controls.minZoom = 0.65
  controls.maxZoom = 2.5
  controls.rotateSpeed = 0.65
  canvas.style.touchAction = "pan-y"
  controls.update()

  // The self-contained GLB is one vertex-coloured mesh, with no image textures.
  const terrain = world.getObjectByProperty("isMesh", true) as THREE.Mesh<
    THREE.BufferGeometry,
    THREE.MeshStandardMaterial
  >
  terrain.material.metalness = 0
  scene.add(world)
  scene.add(new THREE.AmbientLight(0xffffff, 2))
  const light = new THREE.DirectionalLight(0xffffff, 2)
  light.position.copy(camera.position).add(new THREE.Vector3(-2, 3, 1))
  scene.add(light)

  const pins = cityIds.map((id) => ({
    el: stage.querySelector<HTMLElement>(`[data-pin="${id}"]`)!,
    point: point(cities[id].lat, cities[id].lon).multiplyScalar(1.038),
  }))
  const projected = new THREE.Vector3()
  let width = 0
  function draw() {
    if (!width) return
    renderer.render(scene, camera)
    for (const pin of pins) {
      projected.copy(pin.point).project(camera)
      pin.el.hidden =
        pin.point.dot(camera.position) <= 0 ||
        projected.x * projected.x + projected.y * projected.y > 1
      if (pin.el.hidden) continue
      pin.el.style.transform = `translate(${((1 + projected.x) * width) / 2}px, ${((1 - projected.y) * width) / 2}px)`
    }
  }
  function resize() {
    width = stage.clientWidth
    if (width) renderer.setSize(width, width, false)
    draw()
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(stage)
  controls.addEventListener("change", draw)
  canvas.addEventListener("webglcontextlost", onLost)
  resize()

  return () => {
    resizeObserver.disconnect()
    controls.removeEventListener("change", draw)
    controls.dispose()
    canvas.removeEventListener("webglcontextlost", onLost)
    terrain.geometry.dispose()
    terrain.material.dispose()
    renderer.dispose()
    renderer.forceContextLoss()
    canvas.remove()
  }
}
