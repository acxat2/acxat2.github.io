import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpProduct, meta } from '../types/product-api.type';
import { HttpService } from './http.service';

export interface ProductsResponse {
  meta: meta,
  items: Array<HttpProduct>
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public url = `${environment.HTTP_Advanced}/products`;
  public cashProducts?: {[url: string]: ProductsResponse};

  public products: Array<HttpProduct> = [];
  public searchProducts: Array<HttpProduct> = [];

  public countProduct = 10;
  public page = 1;
  public pages = 1;
  public totalItems = 0;
  public orderBy = '';
  public limit = 10;

  public getProductsPage(): Array<HttpProduct> {
    return this.products.slice((this.page - 1) * 10, this.page * 10);
  }
  public getSearchProductsPage(): Array<HttpProduct> {
    return this.searchProducts.slice((this.page - 1) * 10, this.page * 10);
  }

  public getProducts$(queryParams: {[key: string]: string}): Observable<ProductsResponse> {
    const params = new HttpParams({fromObject: queryParams});
    let queryUrl = `${this.url}?`

    for (const [key, value] of Object.entries(queryParams)) {
      queryUrl = queryUrl +  `${key}=${value}&`
    }
    queryUrl = queryUrl.slice(0,-1);

    if (this.cashProducts) {
      for (const[key, value] of Object.entries(this.cashProducts)) {
        if (key === queryUrl) {
          return of<ProductsResponse>(value)
        }
      }
    }

    const data$ = this.httpService.getHttp<ProductsResponse>(this.url, params);
    data$.subscribe({
      next: v => {
      this.cashProducts = {...this.cashProducts, [queryUrl]: v}
      },
    })
    return data$;
  }

  public sortProducts(param: string) {
    this.products = this.products.sort((a: any, b: any) => a[param] < b[param] ? -1 : 1)
  }

  public roundPrice(data: Array<HttpProduct>): Array<HttpProduct> {
    const products = []
    for (const product of data) {
      let price = 0
      if (product.price) {
        price = Math.round(product.price)
      }
      product.price = price
      products.push(product)
    }
    return products;
  }

  constructor(
    private httpService: HttpService,
    ) { }

}
