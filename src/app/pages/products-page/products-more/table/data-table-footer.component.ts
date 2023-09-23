import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table-footer',
  template: `
      <div class="controll">
        <app-button text="Добавить ещё" (click)="addMore()"></app-button>
        <div class="meta-data">
          <span>Товаров: {{items}} из {{totalItems}}</span>
          <div class="pages-controller">
            <app-button-flat icon="navigate_before" (click)="beforePage()"></app-button-flat>
            <p style="font-size: 20px; padding: 0 20px">{{page}}</p>
            <app-button-flat icon="navigate_next" (click)="nextPage()"></app-button-flat>
          </div>
          <span>Страниц: {{totalPages}}</span>
        </div>
      </div>
  `,
  styles: [`
    .controll {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 20px;
    }

    .meta-data {
      display: flex;
      align-items: center;
    }

    .pages-controller {
      display: flex;
      align-items: center;
      padding: 0 20px
    }
`]
})
export class DataTableFooterComponent {
  @Input() items = 0;
  @Input() totalItems = 0;
  @Input() totalPages = 1;
  @Input() page = 1;

  @Output() more = new EventEmitter
  @Output() before = new EventEmitter
  @Output() next = new EventEmitter

  addMore() { this.more.emit() }
  beforePage() { this.before.emit() }
  nextPage() { this.next.emit() }
}
