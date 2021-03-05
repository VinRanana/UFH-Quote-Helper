import { Component, OnInit } from '@angular/core';
import { Mesh, MeshCollection, MESH_OBJ, randomMeshStr } from '../data/mesh-data';
import { InputData } from '../inputData.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {
  randomHeatedArea = Math.ceil(Math.random() * 25 * 10) / 10;
  randomMeshStr = randomMeshStr;
  meshObj = JSON.stringify(MESH_OBJ);

  inputData: InputData = {
    floorArea: 0,
    heatedArea: 0,
    floorSubstrate: ''
  };
  resultMesh = this.determineRightMesh(MESH_OBJ, this.randomHeatedArea);

  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSubmit(value: any){
    console.log('input value', value);
    this.inputData.floorArea = value['floor-area'];
    this.inputData.heatedArea = value['heated-area'];
    this.inputData.floorSubstrate = value['floor-substrate'][0];

    console.log('inputData', this.inputData);
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
