import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { HttpProduct, meta } from 'src/app/types/product-api.type';
import { environment } from 'src/environments/environment';

export interface ProductsResponse {
  meta: meta,
  items: Array<HttpProduct>
}

@Injectable({
  providedIn: 'root'
})
export class ProductsPageService {
  public products: Array<HttpProduct> = [];
  public url = `${environment.HTTP_Advanced}/products`;

  public countProduct = 10;
  public page = 1;
  public pages = 1;
  public totalItems = 1;
  public canApp = true;
  public orderBy = '';
  public options = [
    {name: 'id', value: 'По умолчанию'},
    {name: 'company', value: 'Компния'},
    {name: 'title', value: 'Название'},
    {name: 'category', value: 'Категория'},
    {name: 'price', value: 'Цена'},
    {name: 'rating', value: 'Рейтинг'},
  ];

  public getProductsPage(): Array<HttpProduct> {
    return this.products.slice((this.page - 1) * 10, this.page * 10);
  }

  public getProducts$(queryParams: {[key: string]: string})
  :Observable<ProductsResponse> {
    const params = new HttpParams({fromObject: queryParams});

    return this.httpService.getHttp<ProductsResponse>(
      this.url, params);
  }

  public sortProducts(param: string) {
    this.products = this.products.sort((a: any, b: any) => a[param] < b[param] ? -1 : 1)
  }

  public roundPrice(data: Array<HttpProduct>) {
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

  constructor(private httpService: HttpService) {
  }
}
