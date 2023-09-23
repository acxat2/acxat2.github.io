import { Component, Output, EventEmitter } from '@angular/core';
import { CartAdvancedService } from 'src/app/services/cart-advanced.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [`./cart.component.scss`],

})

export class CartComponent {
  @Output() closeBasket = new EventEmitter<any>()
  public products?: Array<any>;

  public closeCart() {
    this.closeBasket.emit();
  }

  public clearCart() {
    const result = confirm('Очистить корзину?')
    if (result) {
      this.cartService.clear();
      this.closeBasket.emit();
    }
  }

  public checkout() {
    this.closeBasket.emit();
  }

  public getTotalPrice() {
    return this.cartService.totalPrice;
  }

  public minusProduct(id: number) {
    this.cartService.minusProduct(id)
  }

  public plusProduct(id: number) {
    this.cartService.plusProduct(id)
  }

  public removeProduct(id: number) {
    this.cartService.removeProduct(id)
  }

  constructor(private cartService: CartAdvancedService) {
    this.products = cartService.getCart();
  }


}
