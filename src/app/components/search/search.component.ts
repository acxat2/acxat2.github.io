import { Component, Input } from '@angular/core';

type inputType = 'text' | 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url';

@Component({
  selector: 'app-search',
  template: `
    <input
      [attr.type]='type'
      [attr.placeholder]='placeholder'
    >
  `,
  styles: [`
    input {
      padding: 6px 10px;
      border: 1px solid gray;
      border-radius: 5px;
      outline: none;
      background-color: white;
      transition: ease-in-out background-color 0.2s;
    }

    input:hover {
      background-color: azure;
    }
  `]
})
export class SearchComponent {
  @Input() type?: inputType = 'text';
  @Input() placeholder?: string  = 'Поиск';
}
