import { Component, Input, OnInit } from '@angular/core';
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
  @Input() resultFta: OutputItem;
  @Input() resultCib: OutputItem;

  constructor() { }

  ngOnInit(): void {
  }

}
