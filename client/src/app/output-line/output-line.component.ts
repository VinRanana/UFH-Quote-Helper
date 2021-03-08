import { Component, Input, OnInit } from '@angular/core';
import * as copy from 'copy-to-clipboard';
import { OutputItem } from '../output-item.model';

@Component({
  selector: 'app-output-line',
  templateUrl: './output-line.component.html',
  styleUrls: ['./output-line.component.sass']
})
export class OutputLineComponent implements OnInit {

  @Input() item: OutputItem;
  
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick (): void {
    copy(this.item.name);
    this.clicked = true;
  }
}
