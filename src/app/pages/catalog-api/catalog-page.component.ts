import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { ProductsResponse, ProductsService } from 'src/app/services/products.service';
import { Tabs } from './toggle/toggle.component';

@Component({
  selector: 'app-catalog-page-page',
  templateUrl: `./catalog-page.component.html`,
  styleUrls: [`./catalog-page.component.scss`],
})

export class CatalogPageComponent implements OnInit {
  public options = [
    {name: 'id', value: 'По умолчанию'},
    {name: 'company', value: 'Компния'},
    {name: 'title', value: 'Название'},
    {name: 'category', value: 'Категория'},
    {name: 'price', value: 'Цена'},
  ];

  public data$?: Observable<ProductsResponse>
  public page = 1;
  public totalPages = 1
  public selected = 'id';
  public totalItems = this.productsService.totalItems
  public title = '';
  public keyToggleActive = 0;

  toggleBtns: Tabs[] = [
    {label:'Все товары', value: 'none'},
    {label:'Рейтинг 4', value: '4'},
    {label:'Рейтинг 5', value: '5'}
  ];

  public filter($event: string) {
    const param = {'rating': $event, 'page': 1};
    if (this.route.snapshot.queryParams['rating'] !== $event) {
      this.applyQuery(param);
    }
  }

  public createPagesArray(pagesCount: number): Array<any> {
    return [... new Array(pagesCount)]
  }

  public applyQuery(param: {[key: string]:string | number}): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: param,
      queryParamsHandling: 'merge',
    });
  }

  public getProducts(params: {[key: string]: string}) {
    const queryParams = {
      ...params,
      page: params['page'] ? params['page'] : '1',
      limit: params['rating'] && params['rating'] !== 'none' ||
        params['search'] ? '0' : params['limit'],
    }

    this.data$ = this.productsService.getProducts$(queryParams);
  }

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.title = this.route.snapshot.data['title'];
  }

  ngOnInit(): void {
    const search = document.querySelector('#search')

    if (search) {
      fromEvent(search, 'input').pipe(
          map<any, string>(event => event?.target?.value),
        debounceTime(300),
        distinctUntilChanged(),
        )
      .subscribe(result => {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {search: result, page: 1},
          queryParamsHandling: 'merge',
        });
      })
    }

    this.route.queryParams.subscribe((params) => {
      const search = document.querySelector('#search')
      if (search) {
        const input = search.querySelector('input')
        if (input && params['search']) {
          input.value = params['search']
        }
      }

      if (params['rating']) {
        const keyItem = this.toggleBtns.findIndex(item => item.value === params['rating'])
        this.keyToggleActive = keyItem;
      }

      if (params['orderBy']) {
        this.selected = params['orderBy'];
      }
      this.getProducts(params);
    });
    this.totalPages = this.productsService.pages;
  }
}
