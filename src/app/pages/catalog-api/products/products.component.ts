import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartAdvancedService } from 'src/app/services/cart-advanced.service';
import { FavoriteProductsService } from 'src/app/services/favorite-products.service';
import { ProductsService } from 'src/app/services/products.service';
import { HttpProduct, meta } from 'src/app/types/product-api.type';

export interface Cell
  { key: string }

@Component({
  selector: 'app-products',
  templateUrl: `./products.component.html`,
  styleUrls: [`./products.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductsComponent implements OnChanges {
  @Input() data?: Array<HttpProduct>;
  @Input() meta?: meta;

  public currentPage = 1;
  public totalPages = 1
  public totalItems = 0;
  public items = 0;

  public products: Array<HttpProduct> = [];

  public addToCart(product: HttpProduct) {
    this.cartService.addToCart(product);
  }

  public applyQuery(param: {[key: string]:string | number}): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: param,
      queryParamsHandling: 'merge',
    });
  }

  public createPagesArray(pagesCount: number): Array<any> {
    return [... new Array(pagesCount)]
  }

  public searchProduct(searchTerm: string): Array<HttpProduct> {
    return this.productsService.searchProducts.filter((product) =>
      product.title.toLocaleLowerCase().indexOf(searchTerm) != -1)
  }

  public changeData() {
    this.totalItems = this.productsService.totalItems =
      this.productsService.products.length;
    this.totalPages = this.productsService.pages =
      Math.ceil(
        this.productsService.totalItems / this.productsService.limit
    );

    this.products = this.productsService.getProductsPage();
    this.items = this.products.length;
  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private favoriteService: FavoriteProductsService,
    private cartService: CartAdvancedService
  ) {}

  ngOnChanges(): void {
    this.route.queryParams.subscribe((params) => {
      if (!params['page']) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {'page': 1},
          queryParamsHandling: 'merge',
        });
      }

      if ( this.data ) {
        if (params['rating'] && params['rating'] !== 'none') {
          this.productsService.products = this.productsService.searchProducts =
            this.data.filter(product => product.rating === +params['rating']);

          if (params['search'] && params['search'] !== '') {
            this.productsService.searchProducts = this.searchProduct(params['search'])

            this.totalItems = this.productsService.totalItems =
            this.productsService.searchProducts.length;
            this.totalPages = this.productsService.pages =
              Math.ceil(
                this.productsService.totalItems / this.productsService.limit
              );
            this.productsService.page = this.currentPage = +params['page'];

            this.products = this.productsService.getSearchProductsPage();
            this.products = this.favoriteService.setFavoriteInProduct(this.products)
            this.items = this.products.length;
            return
          }

          this.totalItems = this.productsService.totalItems =
            this.productsService.products.length;
          this.totalPages = this.productsService.pages =
            Math.ceil(
              this.productsService.totalItems / this.productsService.limit
            );
          this.productsService.page = this.currentPage = +params['page'];

          this.products = this.productsService.getProductsPage();
          this.products = this.favoriteService.setFavoriteInProduct(this.products)
          this.items = this.products.length;
          return
        }

        if (params['search'] && params['search'] !== '') {
          this.productsService.searchProducts = this.data;
          this.productsService.searchProducts = this.searchProduct(params['search'])

          this.totalItems = this.productsService.totalItems =
          this.productsService.searchProducts.length;
          this.totalPages = this.productsService.pages =
            Math.ceil(
              this.productsService.totalItems / this.productsService.limit
            );
          this.productsService.page = this.currentPage = +params['page'];

          this.products = this.productsService.getSearchProductsPage();
          this.products = this.favoriteService.setFavoriteInProduct(this.products)
          this.items = this.products.length;
          return
        }

        this.products = this.productsService.roundPrice(this.data);
        this.products = this.favoriteService.setFavoriteInProduct(this.products)
        this.items = this.products.length;
        if (this.meta) {
          this.totalPages = this.meta.totalPages;
          this.totalItems = this.meta.totalItems;
          this.currentPage = this.meta.currentPage;
        }
      }
    }).unsubscribe()
  }
}

