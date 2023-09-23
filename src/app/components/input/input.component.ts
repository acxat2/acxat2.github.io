import { Component, Input } from '@angular/core';

type inputType = 'text' | 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url';

@Component({
  selector: 'app-input',
  template: `
    <input
      [attr.type]='type'
      [attr.placeholder]='placeholder'
    >
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type?: inputType = 'text';
  @Input() placeholder?: string;
}
