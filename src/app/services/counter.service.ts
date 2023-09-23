import { Injectable } from '@angular/core';

@Injectable(
)

export class CounterService {
  public products = 0;
  public maxLimit = 5;

  plus() {
    this.products < this.maxLimit ? this.products++ : this.maxLimit;
  }

  minus() {
    this.products ? this.products-- : 0;
  }

  dublePlus() {
    this.products < this.maxLimit ? this.products = this.products + 2 : this.maxLimit;
  }

  dubleMinus() {
    this.products ? this.products = this.products - 2 : 0;
  }
}
