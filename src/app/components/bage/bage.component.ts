import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bage',
  template: `
    <span
    [style.color]="color"
    [style.backgroundColor]="bgColor"
    [ngStyle]="{top: top, bottom: bottom, left: left, right: right}"
    >{{text}}</span>
  `,
  styles: [`
  span {
    position: absolute;
    padding: .2em .7em .1em;
    border-radius: 100px;
    font-size: 10px;
  }
`]
})
export class BageComponent {
  @Input() text: string | number | null = null;
  @Input() top = '';
  @Input() bottom = '';
  @Input() right = '';
  @Input() left = '';
  @Input() color = '#fff';
  @Input() bgColor = 'coral';
}
