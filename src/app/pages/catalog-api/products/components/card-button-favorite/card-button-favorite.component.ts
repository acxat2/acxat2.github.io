import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-card-button-favorite',
  template: `
    <ng-content></ng-content>
    <!-- <button
      class="flat-btn material-icons"
      [class.favoriteActive]="isFavorite"
      #favoriteBtn
    ><ng-content></ng-content></button> -->

  `,
    styles: [`@import 'src/app/scss/components/_card.scss';`],

})

export class CardButtonFavoriteComponent {
  public favorite = false;

  public clickFavorite$: Observable<Event> = fromEvent(this.host.nativeElement, 'click')

  constructor(private host: ElementRef) {
  }

}
