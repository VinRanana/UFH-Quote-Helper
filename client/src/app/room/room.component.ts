import { Component, OnInit } from '@angular/core';
import { MESH_OBJ, determineRightMesh } from '../data/mesh-data';
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

  resultMesh: string;

  inputData: InputData = {
    floorArea: 0,
    heatedArea: 0,
    floorSubstrate: ''
  };
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSubmit(value: any){
    console.log('input value', value);

    this.inputData.floorArea = value['floor-area'];
    this.inputData.heatedArea = value['heated-area'];
    this.inputData.floorSubstrate = value['floor-substrate'][0];
    this.resultMesh = determineRightMesh(MESH_OBJ, this.inputData.heatedArea);

    console.log('inputData', this.inputData);
  }

}
