import { Component } from '@angular/core';
import { CartAdvancedService } from '../services/cart-advanced.service';
import { FavoriteProductsService } from '../services/favorite-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [`./header.component.scss`]
})
export class HeaderComponent {
  public isActive = false;

  public showCart() {
    if (!this.cartService.inCart.length) {
      this.isActive = false;
      return;
    }
    this.isActive = !this.isActive;
  }

  public closeCart(){
    this.isActive = false;
  }

  constructor(
    public favoriteService: FavoriteProductsService,
    public cartService: CartAdvancedService
  ) {}
}
