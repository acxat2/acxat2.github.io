import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

type buttonType = 'border' | 'basic' | 'flat' | 'stroked';
type buttonColor = 'default' | 'primary' | 'accent' | 'success' | 'warning';
type buttonSize = 'default' | 'large' | 'small';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="button-base"
      [ngClass]="[buttonType, buttonColor]"
      [class.material-icons]="icon"

      [class.large]="size === 'large'"
      [class.small]="size === 'small'"
      [class.active]="isActive"
      [class.button-disabled]="isDisabled"
      [attr.disabled]="isDisabled ? '' : null"
      [style.font-size]="fontSize"
    >
      {{ icon }}
      {{ text }}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnChanges {
  @Input() text: string | number = 'Кнопка';
  @Input() icon = '';
  @Input() color: buttonColor = 'default';
  @Input() buttonType: buttonType = 'basic';
  @Input() size: buttonSize = 'default';
  @Input() isDisabled = false;
  @Input() isActive = false;

  fontSize = '';
  buttonColor: buttonColor = 'default';
  buttonSize: buttonSize = 'default';

  ngOnChanges(changes: SimpleChanges): void {
    const { color, size } = changes;

    if (color && color.currentValue) {
      this.buttonColor = color.currentValue;
    }

    if (size && size.currentValue) {
      this.buttonSize = size.currentValue;
    }
    if (this.icon) {
      this.text = '';
      this.fontSize = '16px';

      if (this.size === 'large') {
        this.fontSize = '18px';
      }
    }
  }
}
