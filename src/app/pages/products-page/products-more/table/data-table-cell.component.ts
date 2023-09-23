import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-table-cell',
  template: `
    <div
      [attr.contenteditable]="contenteditable"
      class="cell"
      (blur)="getValue(cellV.textContent)"
      #cellV >
      {{value}}
    </div>
  `,
  styles: [`
    .cell {
      position: absolute;
    }
  `]
})

export class DataTableCellComponent {
    @Input() contenteditable = false;
  @Input() value = 'Cell';
  @Output() cellValue = new EventEmitter<string>

  getValue(sellValue: any) {
    this.cellValue.emit(sellValue);
  }
}
