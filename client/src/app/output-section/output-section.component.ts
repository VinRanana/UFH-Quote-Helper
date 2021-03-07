import { Component, Input, OnInit } from '@angular/core';
import { Mesh } from '../data/mesh-data';
import { InputData } from '../input-data.model';
import { OutputItem } from '../output-item.model';

@Component({
  selector: 'app-output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.sass']
})
export class OutputSectionComponent implements OnInit {

  @Input() inputData: InputData;
  @Input() resultMesh: OutputItem;

  constructor() { }

  ngOnInit(): void {
  }

}
