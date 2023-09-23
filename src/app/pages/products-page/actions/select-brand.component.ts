import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-brand',
  template: `
      <select [(ngModel)]='selected' (change)="changeOrderBy(selected)">
        <option
          *ngFor="let opt of options"
          [selected]="opt.name"
          [value]="opt.name"
        >{{opt.value}}</option>
      </select>
  `,
  styles: [
  ]
})
export class SelectBrandComponent {

  @Input() selected = ""
  @Input() options: Array<{name:string, value:string}> = []
  @Output() queryParams = new EventEmitter<string>

  changeOrderBy(event: string) {
    this.queryParams.emit(event)
  }



}
