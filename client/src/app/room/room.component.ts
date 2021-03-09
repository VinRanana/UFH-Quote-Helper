import { Component, OnInit } from '@angular/core';
import { calculateQuantity, determineRightBoard } from '../data/insulation-data';
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
    floorSubstrate: '',
    insulationDepth: ''
  };

  resultFta: OutputItem;
  resultBoard: OutputItem;
  resultFs: OutputItem;
  resultMfw: OutputItem;
  resultMesh: OutputItem;
  // Can be refactored into an object?

  constructor() { }

  ngOnInit(): void {
  }

  updateData (value: InputData): void {
    this.inputData = value;
    this.inputData.floorSubstrate = value.floorSubstrate[0];
    this.inputData.insulationDepth = value.insulationDepth[0];

    this.resultFta = {
      name: 'FTA-20-01',
      quantity: calculateQuantity('fta', value.floorArea),
      description: 'Flexible tile adhesive'
    };
    this.resultBoard = determineRightBoard(
      value.floorArea,
      value.floorSubstrate,
      value.insulationDepth
    );
    this.resultFs = {
      name: 'TIB-FS-01',
      quantity: calculateQuantity('fs', value.floorArea),
      description: 'Fixing screws'
    };
    this.resultMfw = {
      name: 'TIB-MFW-01',
      quantity: calculateQuantity('mfw', value.floorArea),
      description: 'Metal fixing washers'
    };
    this.resultMesh = determineRightMesh(MESH_OBJ, this.inputData.heatedArea);
    // This can be refactored
  }

}
