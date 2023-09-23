import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-btn',
  template: `
    <button
      class='card__btn'
      [class.active]="isActive"
      (click)="onClick()"
      >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`@import 'src/app/scss/components/_card.scss';
  `],
})
export class BtnComponent {
  @Input() sortValue = '';
  @Output() tabChecked = new EventEmitter<string>();

  @Input() isActive = false;

  public click$ = new Subject<void>();

  public onClick() {
    this.tabChecked.emit(this.sortValue)
    this.click$.next();
  }
}
