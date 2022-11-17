import * as THREE from "three";

export class Renderer {
  public m_Renderer: THREE.WebGLRenderer;
  constructor(setup: { canvas: HTMLCanvasElement; antialias: boolean }) {
    this.m_Renderer = new THREE.WebGLRenderer(setup);
    this.m_Renderer.setSize(window.innerWidth, window.innerHeight);
    this.m_Renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  public Render(scene: THREE.Object3D, camera: THREE.Camera) {
    this.m_Renderer.render(scene, camera);
  }
}
