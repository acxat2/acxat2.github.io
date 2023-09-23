import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProduct } from 'src/app/types/product-api.type';
import { ProductsPageService } from '../../../services/products-page.service';

export interface Cell
  { key: string }

@Component({
  selector: 'app-products-more',
  template: `
    <app-data-table-header class="row"></app-data-table-header>
    <app-data-table-row class="row"
      *ngFor="let product of products"
      [row]="product"
      [canDelete]="true"
      [cells]="cells"
      ></app-data-table-row>
  `,
  styles: [`
    .row {
      display: flex;
      border-bottom: 1px solid black;
    }
  `]
})

export class ProductsMoreComponent implements OnInit {
  @Input() data?: Array<HttpProduct>;
  public products: Array<HttpProduct> = [];

  public cells: Array<Cell> = [
    {key: 'id'},
    {key: 'company'},
    {key: 'title'},
    {key: 'category'},
    {key: 'rating'},
    {key: 'price'},
    {key: 'image'},
  ];
  constructor ( private productsPageService: ProductsPageService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    if (this.data) {
      if (this.productsPageService.canApp) {
        this.productsPageService.products = this.productsPageService.products.concat(this.productsPageService.roundPrice(this.data));
        this.productsPageService.canApp = false;
        console.log(this.productsPageService.products)
      }

      this.route.queryParams.subscribe((params) => {
        if (this.productsPageService.orderBy != ''
          || this.productsPageService.orderBy != params['orderBy'])
        {
          this.productsPageService.orderBy = params['orderBy'];
          this.productsPageService.sortProducts(this.productsPageService.orderBy);
        }
        this.products = this.productsPageService.getProductsPage();
      })
    }
  }
}
