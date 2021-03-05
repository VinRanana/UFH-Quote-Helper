import { Component, OnInit } from '@angular/core';
import { Mesh, MeshCollection, MESH_OBJ, randomMeshStr } from '../data/mesh-data';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  randomMeshStr = randomMeshStr
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
