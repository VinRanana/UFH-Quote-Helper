import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-line',
  templateUrl: './output-line.component.html',
  styleUrls: ['./output-line.component.sass']
})
export class OutputLineComponent implements OnInit {

  @Input() mesh: string;

  constructor() { }

  ngOnInit(): void {
  }

}
