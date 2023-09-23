import { Component, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-card-button',
  template: `
    <button class="card__btn">
      <ng-content></ng-content>
    </button>
  `,
    styles: [`@import 'src/app/scss/components/_card.scss';`],

})
export class CardButtonComponent {

  public clickAdd$: Observable<Event> = fromEvent(this.host.nativeElement, 'click')

  constructor(private host: ElementRef) {
  }
}
