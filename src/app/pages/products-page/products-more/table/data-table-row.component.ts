import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-table-row',
  template: `
    <div class="DataTable__row">
      <div class="cells">
        <app-data-table-cell
          class="cell"
          *ngFor="let cell of cells"
          [value]= 'row[cell.key]'
          [contenteditable]="true"
          (cellChanged)="cellChanged(cell, $event)"
          ></app-data-table-cell>
      </div>
      <app-data-table-menu class="header__menu"></app-data-table-menu>
    </div>
  `,
  styles: [`
  .DataTable__row {
    display: flex;
    width: 100%;
  }

  .cells {
    display: flex;
    width: calc(100% - 20px);
  }

  .cell {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100%/7);
    height: 30px;
    white-space: nowrap;
    overflow-x: scroll;
  }

  .cell::-webkit-scrollbar {
    /* width: 0; */
    height: 0;
  }

  .header__menu {
    width: 30px
  }
`]
})
export class DataTableRowComponent {
  @Input() cells: Array<any> = [];
  @Input() row: { [key: string]: any } = {};
  @Input() canDelete = false;
  @Input() canDownload = false;

  @Output() updataRow: EventEmitter<{
    [key: string]: any
  }> = new EventEmitter<{[key: string]: any}>()

  public sellChangesValue(row: any, key: string, sellValue: any) {
    const rowValue = this.row;
    rowValue[key] = sellValue
    console.log(rowValue)
    console.log({id: row.id, [key]: sellValue})
  }

  @Output() patchRow: EventEmitter<{
    [key: string]: any
  }> = new EventEmitter<{[key: string]: any}>()

  @Output() deleteRow: EventEmitter<{
    [key: string]: any
  }> = new EventEmitter<{[key: string]: any}>()

  @Output() downloadRow: EventEmitter<{
    [key: string]: any
  }> = new EventEmitter<{[key: string]: any}>()

  cellChanged(cell: any, value: any) {
    const newRow = this.row;
    console.log(newRow)
    newRow[cell.name] = value;
    this.updataRow.emit(newRow)
    console.log(newRow)
  }
}
