import { Component, OnInit } from '@angular/core';
import { Mesh, MeshCollection, MESH_OBJ, randomMeshStr } from '../data/mesh-data';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  randomHeatedArea = Math.ceil(Math.random() * 25 * 10) / 10;
  randomMeshStr = randomMeshStr;
  meshObj = JSON.stringify(MESH_OBJ);
  resultMesh = this.determineRightMesh(MESH_OBJ, this.randomHeatedArea);

  
  constructor() { }
  
  ngOnInit(): void {
  }

  determineRightMesh (meshObject: MeshCollection, heatedArea: number): string {
    let bestFit: Mesh = {
      name: 'placeholder',
      area: 0,
      intensity: 0,
    };

    for (const key in meshObject) {
      if (Object.prototype.hasOwnProperty.call(meshObject, key)) {
        const currentMesh = meshObject[key]
        const meshArea = currentMesh.area;

        if (meshArea > heatedArea) continue;
        if (meshArea === heatedArea) return currentMesh.name;
        if (bestFit && currentMesh.area > bestFit.area) bestFit = currentMesh;
      }
    }
    return bestFit.name;
  }
}
