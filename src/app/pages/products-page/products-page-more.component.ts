import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsPageService, ProductsResponse } from '../../services/products-page.service';

@Component({
  selector: 'app-products-page-more',
  templateUrl: './products-page-more.component.html',
  styleUrls: ['./products-page-more.component.scss']
})

export class ProductsPageMoreComponent implements OnInit {
  public data$?: Observable<ProductsResponse>
  public options = this.productsPageService.options;
  public selected = 'id'
  public isDisabled = false;
  public title = '';

  public getItemCount() {
    return this.productsPageService.products.length;
  }

  public changePage(sign: string) {
    if (sign === '-') {
      this.productsPageService.page = this.productsPageService.page - 1 > 0 ? this.productsPageService.page - 1 : 1
      this.queryPage();
    } else if (sign === '+') {
      this.productsPageService.page = this.productsPageService.page + 1 < this.productsPageService.pages
      ? this.productsPageService.page + 1 : this.productsPageService.pages
      this.queryPage();
    }
  }

  public queryPage() {
    this.routerSetParams({'page': this.productsPageService.page.toString()})
  }

  public getPageNumber() {
    return this.productsPageService.page;
  }

  public getPagesTotal() {
    return this.productsPageService.pages = Math.ceil(this.getItemCount() / this.productsPageService.countProduct);
  }

  public totalItems(totalItems: number) {
    return this.productsPageService.totalItems = totalItems;
  }

  public setParamPage() {
    this.routerSetParams({'page': this.productsPageService.page.toString()})
  }

  public applyQuery(param: {[key: string]:string}): void {
    this.routerSetParams(param)
    this.productsPageService.orderBy = param['orderBy'];
  }

  public addMore(totalPages: number) {
    this.productsPageService.canApp = true;

    this.productsPageService.pages =
      this.productsPageService.pages + 1 <= totalPages
      ? this.productsPageService.pages + 1
      : totalPages;
    this.isDisabled = this.productsPageService.pages >= totalPages ? true : false;

    const param = {'page': this.productsPageService.pages.toString()}
    this.getProducts(param)
    this.setParamPage();
    this.routerSetParams(param)
    if (this.productsPageService.orderBy != '') {
      this.productsPageService.sortProducts(this.productsPageService.orderBy);
    }
  }

  public getProducts(params: {[key: string]: string}) {
    params['page'] ? params['page'] : '1';
    const pageParam = {'page': params['page']};

    this.data$ = this.productsPageService.getProducts$(pageParam);
  }

  public routerSetParams(params: {[key: string]: string}) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsPageService: ProductsPageService
    ) {
      this.title = this.route.snapshot.data['title']
    }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (this.productsPageService.canApp) {
        if (!this.getItemCount() || !params['page']) {
          this.routerSetParams({'page': '1'})
          if (this.productsPageService.orderBy != '') {
            this.selected = this.productsPageService.orderBy;
          }
        }
        this.productsPageService.page = Number(params['page'])
        if (params['orderBy']) {
          this.selected = params['orderBy']
        }
        this.getProducts(params);
      } else {
        if (!params['page']) {
          this.routerSetParams({'page': `${this.productsPageService.page}`})
          this.getProducts(params);
        }
      }
    })
  }
}
