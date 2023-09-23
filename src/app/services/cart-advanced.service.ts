import { Injectable } from '@angular/core';
import { HttpProduct } from '../types/product-api.type';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})


export class CartAdvancedService {

  public inCart: Array<{count: number, product: HttpProduct}> = [];
  public totalPrice = 0;
  public storage = 'cart-product';

  public calculatePrice() {
    this.totalPrice = this.inCart.reduce((acc, curr) => {
      return acc + curr.product.price * curr.count
    }, 0)
  }

  public getCount(): number {
    return this.inCart.length;
  }

  public saveToStorage() {
    this.storageService.saveToStorage('cart-product', JSON.stringify(this.inCart));
  }

  public addToCart(product: HttpProduct): void {
    const findProduct = this.inCart.find((item: any) => item.product.id === product.id)

    if (!findProduct) {
      this.inCart.unshift({count: 1, product: product});
      this.calculatePrice();
    } else {
      const productIndex = this.inCart.findIndex((item: any) => item.product.id === product.id);
      this.inCart[productIndex].count++;
      this.calculatePrice();
    }
    this.saveToStorage();
  }

  public removeProduct (id: number): void {
    this.inCart.forEach((element: any, key: number) => {
      if (element.product.id === id) {
        this.inCart.splice(key, 1);
        this.calculatePrice();
        this.saveToStorage();
      }
    })
  }

  public cartProductIndex(id: number) {
    return this.inCart.findIndex((item: any) => item.product.id === id);
  }

  public minusProduct(id: number): void {
    const index = this.cartProductIndex(id)
    this.inCart[index].count > 1 ? this.inCart[index].count-- : 1;
    this.calculatePrice();
    this.saveToStorage();
  }

  public plusProduct(id: number): void {
    this.inCart[this.cartProductIndex(id)].count++
    this.calculatePrice();
    this.saveToStorage();
  }

  public checkout() {
    if (!this.inCart.length) {
      return alert('В корзине нет товаров');
    }

    this.inCart.splice(0);
    this.calculatePrice();
    this.saveToStorage();
  }

  public getCart() {
    return this.inCart;
  }

  public clear() {
    this.inCart.splice(0);
    this.saveToStorage();
    this.calculatePrice();
  }

  constructor(
    private storageService: StorageService,
  ) {
    const storage = this.storageService.getFromStorage(this.storage);

    if (storage) {
      this.inCart = JSON.parse(storage)
    }
    this.calculatePrice();
  }
}
