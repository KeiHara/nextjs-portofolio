import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

export interface VoxelDogScene {
  resize: () => void
  start: () => void
  stop: () => void
  dispose: () => void
}
export async function createVoxelDogScene(
  container: HTMLElement,
  model: ArrayBuffer
): Promise<VoxelDogScene> {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 50000)
  const target = new THREE.Vector3(-0.5, 1.2, 0)
  const initial = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  )
  camera.position.copy(initial)
  camera.lookAt(target)
  const light = new THREE.AmbientLight(0xffffff, Math.PI)
  light.color.setRGB(0.8, 0.8, 0.8)
  scene.add(light)
  const controls = new OrbitControls(camera, renderer.domElement)
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches
  controls.autoRotate = !reduceMotion
  controls.target.copy(target)
  controls.enableZoom = false
  controls.enablePan = false
  renderer.domElement.style.touchAction = "pan-y"
  let frame = reduceMotion ? 101 : 0
  let request: number | null = null
  function resize() {
    const height = container.clientHeight
    const scale = height * 0.005 + 4.8
    renderer.setSize(container.clientWidth, height)
    camera.left = -scale
    camera.right = scale
    camera.top = scale
    camera.bottom = -scale
    camera.updateProjectionMatrix()
  }
  function animate() {
    request = requestAnimationFrame(animate)
    if (frame < 100) {
      frame++
      const rotSpeed =
        -Math.sqrt(1 - Math.pow(frame / 120 - 1, 4)) * Math.PI * 20
      camera.position.set(
        initial.x * Math.cos(rotSpeed) + initial.z * Math.sin(rotSpeed),
        10,
        initial.z * Math.cos(rotSpeed) - initial.x * Math.sin(rotSpeed)
      )
      camera.lookAt(target)
    } else controls.update()
    renderer.render(scene, camera)
  }
  function stop() {
    if (request !== null) {
      cancelAnimationFrame(request)
      request = null
    }
  }
  function dispose() {
    stop()
    controls.dispose()
    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return
      object.geometry.dispose()
      const materials: THREE.Material[] = Array.isArray(object.material)
        ? object.material
        : [object.material]
      for (const material of materials) {
        if ("map" in material && material.map instanceof THREE.Texture) {
          material.map.dispose()
          const image: unknown = material.map.image
          if (image instanceof ImageBitmap) image.close()
        }
        material.dispose()
      }
    })
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  }
  const gltf = await new GLTFLoader()
    .parseAsync(model, "")
    .catch((error: unknown) => {
      dispose()
      throw error
    })
  scene.add(gltf.scene)
  resize()
  container.appendChild(renderer.domElement)
  return {
    resize,
    start() {
      if (request === null) animate()
    },
    stop,
    dispose,
  }
}
