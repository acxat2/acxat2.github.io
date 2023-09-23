import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface Tabs {
  label: string,
  value: string | number
}

@Component({
  selector: 'app-toggle',
  template: `
    <div class="toggle-container">
      <app-btn-group>
        <app-btn
          class="button-toggle"
          *ngFor="let tab of toggleBtns; index as i"
          [sortValue]="tab.value.toString()"
          [isActive]="itemActive === i ? true : false"
          (tabChecked)="tabChecked($event)"
        >{{tab.label}}</app-btn>
      </app-btn-group>
    </div>
  `,
  styles: [`
    .button-toggle:not(:last-child) {
      margin-right: 20px
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToggleComponent {
  @Input() toggleBtns: Array<Tabs> = [];
  @Input() itemActive = 0;

  @Output() toggleChanged = new EventEmitter<string>();

  public tabChecked($event: string) {
    this.toggleChanged.emit($event)
  }
}
