import { Component, Input } from '@angular/core';
import { InputData } from '../input-data.model';
import { OutputItem } from '../output-item.model';

@Component({
  selector: 'app-output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.sass']
})
export class OutputSectionComponent {
// input as an object instead of repetition
  @Input() inputData: InputData;
  @Input() resultMesh: OutputItem;
  @Input() resultFta: OutputItem;
  @Input() resultBoard: OutputItem;
  @Input() resultFs: OutputItem;
  @Input() resultMfw: OutputItem;
}
