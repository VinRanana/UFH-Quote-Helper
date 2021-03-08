import { Component, OnInit } from '@angular/core';
import { calculateQuantity } from '../data/insulation-data';
import { determineRightMesh, MESH_OBJ } from '../data/mesh-data';
import { InputData } from '../input-data.model';
import { OutputItem } from '../output-item.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  inputData: InputData = {
    floorArea: 0,
    heatedArea: 0,
    floorSubstrate: ''
  };
  
  resultMesh: OutputItem;
  resultFta: OutputItem;
  resultCib: OutputItem;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  updateData (value: InputData): void {
    this.inputData = value;
    this.inputData.floorSubstrate = value['floorSubstrate'][0];
    this.resultMesh = determineRightMesh(MESH_OBJ, this.inputData.heatedArea);
    this.resultFta = {name: 'FTA-20-01', quantity: 0, description: 'Flexible tile adhesive'};
    this.resultFta.quantity = calculateQuantity('fta', value['floorArea']);
    this.resultCib = {name: 'CIB-105-10', quantity: 0, description: 'Concrete insulation boards'};
    this.resultCib.quantity = calculateQuantity('cib', value['floorArea']);
  }

}
