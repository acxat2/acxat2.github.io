import { Component } from '@angular/core';

@Component({
  selector: 'app-card-rating',
  template: `
    <span class="rating">
      Рейтинг: <ng-content></ng-content>
    </span>
  `,
    styles: [`@import 'src/app/scss/components/_card.scss';`],

})
export class CardRatingComponent {

}
