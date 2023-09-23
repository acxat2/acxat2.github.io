import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { Observable, mapTo, merge } from 'rxjs';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-btn-group',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class BtnGroupComponent implements AfterContentInit {
  @ContentChildren(BtnComponent) public tabs!: QueryList<BtnComponent>

  ngAfterContentInit(): void {
    const clickCheck$: Array<Observable<BtnComponent>> = this.tabs.map(tab => tab.click$.pipe(mapTo(tab)));

    merge(...clickCheck$).subscribe(activatedTab => {
      this.tabs.forEach(tab => {
        if (tab !== activatedTab) {
          tab.isActive = false;
        }
      })
      activatedTab.isActive = true
    })
  }
}
