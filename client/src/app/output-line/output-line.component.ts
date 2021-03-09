import { Component, Input, OnInit } from '@angular/core';
import * as copy from 'copy-to-clipboard';
import { ToastrService } from 'ngx-toastr';
import { OutputItem } from '../output-item.model';

@Component({
  selector: 'app-output-line',
  templateUrl: './output-line.component.html',
  styleUrls: ['./output-line.component.sass']
})
export class OutputLineComponent implements OnInit {

  @Input() item: OutputItem;

  clicked = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onClick (): void {
    copy(this.item.name);
    this.clicked = true;
    this.toastr.success(this.item.name, 'Copied to clipboard:', {
      positionClass: 'toast-top-right',
      easeTime: 150,
      timeOut: 1600
    });
  }

}
