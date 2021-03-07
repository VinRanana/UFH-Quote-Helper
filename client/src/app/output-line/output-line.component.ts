import { Component, Input, OnInit } from '@angular/core';
import * as copy from 'copy-to-clipboard';
import { Mesh } from '../data/mesh-data';

@Component({
  selector: 'app-output-line',
  templateUrl: './output-line.component.html',
  styleUrls: ['./output-line.component.sass']
})
export class OutputLineComponent implements OnInit {

  @Input() item: Mesh;
  quantity = '1';

  constructor() { }

  ngOnInit(): void {
  }

  onClick (): void {
    copy(this.item.name);
  }
}
