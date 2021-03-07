import { Component, Input, OnInit } from '@angular/core';
import * as copy from 'copy-to-clipboard';

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

  onClick (): void {
    copy(this.mesh);
  }
}
