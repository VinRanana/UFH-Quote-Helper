import { Component, OnInit } from '@angular/core';
import { calculateQuantity } from '../data/insulation-data';
import { determineRightMesh, Mesh, MESH_OBJ } from '../data/mesh-data';
import { InputData } from '../inputData.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {
  // randomHeatedArea = Math.ceil(Math.random() * 25 * 10) / 10;
  // randomMeshStr = randomMeshStr;
  // meshObj = JSON.stringify(MESH_OBJ);

  inputData: InputData = {
    floorArea: 0,
    heatedArea: 0,
    floorSubstrate: ''
  };
  
  resultMesh: Mesh;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  updateData (value: InputData): void {
    this.inputData = value;
    this.inputData.floorSubstrate = value['floorSubstrate'][0];
    this.resultMesh = determineRightMesh(MESH_OBJ, this.inputData.heatedArea);
  }

}
