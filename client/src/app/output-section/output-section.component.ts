import { Component, Input, OnInit } from '@angular/core';
import { InputData } from '../inputData.model';

@Component({
  selector: 'app-output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.sass']
})
export class OutputSectionComponent implements OnInit {

  @Input() inputData: InputData;
  @Input() resultMesh: string;

  constructor() { }

  ngOnInit(): void {
  }

}
