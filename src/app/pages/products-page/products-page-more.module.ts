import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/app/components/button/button.module';
import { RouterModule, Routes } from '@angular/router';
import { SelectBrandComponent } from './actions/select-brand.component';
import { FormsModule } from '@angular/forms';
import { ProductsPageMoreComponent } from './products-page-more.component';
import { ProductsMoreModule } from './products-more/products-more.module';
import { OrderByComponent } from './actions/order-by.component';

const route: Routes = [
  {
    path: '',
    component: ProductsPageMoreComponent,
    data: {title: 'Редактирование товаров'}
  }
]

@NgModule({
  declarations: [
    ProductsPageMoreComponent,
    SelectBrandComponent,
    OrderByComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild(route),
    FormsModule,
    ProductsMoreModule
  ]
})
export class ProductsPageMoreModule { }
