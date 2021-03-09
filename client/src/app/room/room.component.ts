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
  resultTib: OutputItem;
  resultFs: OutputItem;
  resultMfw: OutputItem;
  //Can be refactored into an object?
  
  constructor() { }
  
  ngOnInit(): void {
  }

  updateData (value: InputData): void {
    this.inputData = value;
    this.inputData.floorSubstrate = value['floorSubstrate'][0];
    this.resultMesh = determineRightMesh(MESH_OBJ, this.inputData.heatedArea);
    this.resultFta = {name: 'FTA-20-01', quantity: calculateQuantity('fta', value['floorArea']), description: 'Flexible tile adhesive'};
    this.resultCib = {name: 'CIB-105-10', quantity: calculateQuantity('cib', value['floorArea']), description: 'Concrete insulation boards'};
    this.resultTib = {name: 'TIB-10-06', quantity: calculateQuantity('tib', value['floorArea']), description: 'Timber insulation boards'};
    this.resultFs = {name: 'TIB-FS-01', quantity: calculateQuantity('fs', value['floorArea']), description: 'Fixing screws'};
    this.resultMfw = {name: 'TIB-MFW-01', quantity: calculateQuantity('mfw', value['floorArea']), description: 'Metal fixing washers'};
    // This can be refactored
  }

}
