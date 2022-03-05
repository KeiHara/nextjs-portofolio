import { useEffect } from 'react';
import {
  AmbientLight,
  Group,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  useEffect(() => {
    const containerRef = document.querySelector('.model-container')!;
    console.log(containerRef.clientHeight);
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 1.5, 0.01, 1000);
    const renderer = new WebGLRenderer({
      canvas: containerRef,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.clientWidth, containerRef.clientHeight);
    camera.aspect = containerRef.clientWidth / containerRef.clientHeight;
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);
    const loader = new GLTFLoader();
    let obj: Group;
    loader.load(
      'gltfv4.glb',
      (gltf) => {
        obj = gltf.scene;
        obj.position.set(0, -7.5, 0);
        obj.scale.set(8, 8, 8);
        obj.rotateY(Math.PI * 1.8);
        obj.receiveShadow = false;
        obj.castShadow = false;
        scene.add(obj);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log(error);
      }
    );

    const light = new AmbientLight(0xcccccc, 1);
    scene.add(light);

    const animate = () => {
      obj?.rotateY(0.01);

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <canvas className="model-container mt-16 h-44 w-72 "></canvas>;
};

export default Model;