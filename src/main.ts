import * as THREE from "three";
import "./style.css";
import { Camera } from "./wrappers/three/camera/camera.wrapper";
import { Renderer } from "./wrappers/three/renderer/renderer.wrapper";
import { Scene } from "./wrappers/three/scene/scene.wrapper";

const canvas = document.querySelector("#game-scene") as HTMLCanvasElement;
const scene = new Scene();
const camera = new Camera();
const renderer = new Renderer({ canvas: canvas, antialias: true });

scene.AddEntityToScene(camera.m_Camera, "main_camera");

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.AddEntityToScene(cube, "cube");
const tick = () => {
  renderer.Render(scene.m_Scene, camera.m_Camera);
  window.requestAnimationFrame(tick);
};

tick();
