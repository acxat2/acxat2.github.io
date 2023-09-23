import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpProduct } from '../types/product-api.type';

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductsService {
  private favoriteProducts: Array<string> = [];

  public setProduct(id: number): void {
    this.favoriteProducts.push(`${id}`);
    this.storageService.saveToStorage('favorite', JSON.stringify(this.favoriteProducts))
  }

  public getCount() {
    return this.favoriteProducts.length;
  }
  public removeProduct(id: number) {
    const key = this.favoriteProducts.findIndex(item => item === `${id}`)
    this.favoriteProducts.splice(key, 1)
    this.storageService.saveToStorage('favorite', JSON.stringify(this.favoriteProducts))
  }

  public getFavoriteProducts(): Array<string> {
    const storage = this.storageService.getFromStorage('favorite');
    if (storage) {
      return JSON.parse(storage);
    }
    return this.favoriteProducts;
  }

  public setFavoriteInProduct(products: Array<HttpProduct>): Array<HttpProduct> {
    const storage = this.storageService.getFromStorage('favorite');

    if (storage && !this.favoriteProducts.length && storage.length) {
      this.favoriteProducts = JSON.parse(storage);
    }

    products.forEach(product => {
      if (this.favoriteProducts.includes(`${product.id}`)) {
        product.favorite = true;
      } else {
        product.favorite = false;
      }
    })
    return products;
  }

  constructor(
    private storageService: StorageService
  ) {}
}
