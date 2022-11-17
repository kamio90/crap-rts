export interface ICameraParams {
  fov: number;
  aspect: number;
  near: number;
  far: number;
  positionX: number;
  positionY: number;
  positionZ: number;
}
export const CameraParams: ICameraParams = {
  fov: 75,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.0001,
  far: 5000,
  positionX: 1,
  positionY: 1,
  positionZ: 50,
};
