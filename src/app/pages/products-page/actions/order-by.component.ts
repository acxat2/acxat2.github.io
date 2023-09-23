import { Component } from '@angular/core';

@Component({
  selector: 'app-order-by',
  template: `
    <div class="sort__container">
      <p class="sort">Сортировать: </p>
    </div>
  `,
  styles: [`
    .sort__container {
      display: flex;
    }

    .sort {
      margin-right: 20px;
      font-size: 14px
    }

    .sort-active {
      cursor: pointer;
    }
  `]
})
export class OrderByComponent {

}
