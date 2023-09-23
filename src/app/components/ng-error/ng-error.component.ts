import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ng-error',
  templateUrl: './ng-error.component.html',
  styleUrls: ['./ng-error.component.scss']
})
export class NgErrorComponent {
  @Input() message = '';

}
