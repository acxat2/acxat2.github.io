import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-flat',
  template: `
  <div class="btn-flat-container">
  <button
      class="flat-btn material-icons"
      [ngStyle]="{fontSize: size, color: color, backgroundColor: bgColor}"
      aria-label="{textArea}"
    >
      {{ icon }}
    </button>
    <app-bage
      [style.visibility]="bage?'visible':'hidden'"
      [text]="bage"
      [top]="bageTop"
      [right]="bageRight"
      [color]="bageTextColor"
      [bgColor]="bageBgColor"
    ></app-bage>
  </div>
  `,
  styles: [`
    .btn-flat-container {
      position: relative;
    }

    .flat-btn {
      padding: 5px 10px;
      cursor: pointer;
      border: none;
      border-radius: 10px;
    }
  `]
})

export class ButtonFlatComponent {
  @Input() icon = ''
  @Input() color = '#fff'
  @Input() bgColor = '#f1f1f1'
  @Input() size = '24px'

  @Input() text = ''
  @Input() bage: string | number | null = null;
  @Input() bageTop = '-0.7em';
  @Input() bageRight = '-0.7em';
  @Input() bageTextColor = '#fff';
  @Input() bageBgColor = 'coral';

}
