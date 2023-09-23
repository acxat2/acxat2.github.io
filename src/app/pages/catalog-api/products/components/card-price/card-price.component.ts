import { Component } from '@angular/core';

@Component({
  selector: 'app-card-price',
  template: `
    <p class="price">
      Цена: <b><i><ng-content></ng-content></i></b>
    </p>
  `,
    styles: [`@import 'src/app/scss/components/_card.scss';`],

})
export class CardPriceComponent {

}
