import * as THREE from "three";
import { CameraParams } from "../../../config/three/camera/camera-params.config";

export class Camera {
  public m_Camera: THREE.PerspectiveCamera;
  public m_CameraPosition: THREE.Vector3;
  constructor() {
    this.m_Camera = new THREE.PerspectiveCamera(
      CameraParams.fov,
      CameraParams.aspect,
      CameraParams.near,
      CameraParams.far
    );
    this.m_CameraPosition = new THREE.Vector3(
      CameraParams.positionX,
      CameraParams.positionY,
      CameraParams.positionZ
    );
    this.m_Camera.position.set(
      this.m_CameraPosition.x,
      this.m_CameraPosition.y,
      this.m_CameraPosition.z
    );
  }

  public SetCameraPosition(cameraPosition: THREE.Vector3): void {
    //Guard clause for not update camera position if values are the same
    if (
      this.m_CameraPosition.x === cameraPosition.x &&
      this.m_CameraPosition.y === cameraPosition.y &&
      this.m_CameraPosition.z === cameraPosition.z
    )
      return;

    this.m_CameraPosition.x = cameraPosition.x;
    this.m_CameraPosition.y = cameraPosition.y;
    this.m_CameraPosition.z = cameraPosition.z;

    this.m_Camera.position.set(
      this.m_CameraPosition.x,
      this.m_CameraPosition.y,
      this.m_CameraPosition.z
    );
  }

  public GetCameraPosition(): THREE.Vector3 {
    return this.m_CameraPosition;
  }
}
