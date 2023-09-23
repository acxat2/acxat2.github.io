import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-select',
  template: `
    <select [(ngModel)]='selected' (change)="changeOrderBy(selected)">
      <option
        *ngFor="let opt of options"
        [selected]="opt.name"
        [value]="opt.name"
      >{{opt.value}}</option>
    </select>
  `,
  styleUrls: [`./select.component.scss`]
})
export class SelectComponent {

  @Input() selected = ""
  @Input() options: Array<{name:string, value:string}> = []
  @Output() queryParams = new EventEmitter<string>

  changeOrderBy(event: string) {
    this.queryParams.emit(event)
  }

}
