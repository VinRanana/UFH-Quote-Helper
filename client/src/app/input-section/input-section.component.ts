import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputData } from '../input-data.model';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.sass']
})
export class InputSectionComponent implements OnInit {

  @Output() inputEvent = new EventEmitter<InputData>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit (value: InputData): void {
    // console.log('input value', value);
    this.inputEvent.emit(value);
  }

}
