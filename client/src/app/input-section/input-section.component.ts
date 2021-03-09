import { Component, EventEmitter, Output } from '@angular/core';
import { InputData } from '../input-data.model';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.sass']
})
export class InputSectionComponent {
  @Output() inputEvent = new EventEmitter<InputData>();

  onSubmit (value: InputData): void {
    this.inputEvent.emit(value);
  }
}
