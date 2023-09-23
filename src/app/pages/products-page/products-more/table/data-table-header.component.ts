import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table-header',
  template: `
    <div class="row-header">
      <div class="cells">
        <app-data-table-cell class="cell" value="id"></app-data-table-cell>
        <app-data-table-cell class="cell" value="Компания"></app-data-table-cell>
        <app-data-table-cell class="cell" value="Название"></app-data-table-cell>
        <app-data-table-cell class="cell" value="Категория"></app-data-table-cell>
        <app-data-table-cell class="cell" value="Рейтинг"></app-data-table-cell>
        <app-data-table-cell class="cell" value="Цена"></app-data-table-cell>
        <app-data-table-cell class="cell" value="Image"></app-data-table-cell>
      </div>
      <div class="header__menu"></div>
    </div>
  `,
  styles: [`
    .row-header {
      display: flex;
      /* justify-content: space-between; */
      width: 100%;
    }

    .cells {
      display: flex;
      width: calc(100% - 30px);
    }

    .cell {
      position: relative;
      /* padding: 10px; */
      padding-left: 10px;
      padding-right: 10px;
      width: calc(100%/7);
      height: 25px
    }
  `]
})
export class DataTableHeaderComponent {

}
