import * as THREE from "three";
import { IEntity } from "../../entity/entity.wrapper";

export class Scene {
  public m_Scene: THREE.Scene;
  public m_EntitiesInScene: IEntity[];
  constructor() {
    this.m_Scene = new THREE.Scene();
    this.m_EntitiesInScene = [];
  }

  public AddEntityToScene(entity: THREE.Object3D, name: string) {
    const newEntity: IEntity = {
      id: crypto.randomUUID(),
      name: name,
    };
    this.m_EntitiesInScene.push(newEntity);
    this.m_Scene.add(entity);
  }

  public GetEntities(): IEntity[] {
    return this.m_EntitiesInScene;
  }
}
