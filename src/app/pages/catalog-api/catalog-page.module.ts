import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageRoutingModule } from './catalog-page-routing.module';
import { CatalogPageComponent } from './catalog-page.component'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';
import { ButtonFlatModule } from 'src/app/components/button-flat/button-flat.module';
import { ToggleModule } from './toggle/toggle.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    CatalogPageComponent
,
  ],
  imports: [
    CommonModule,
    CatalogPageRoutingModule
,
    ToggleModule,
    RouterModule,
    FormsModule,
    ButtonModule,
    ButtonFlatModule,
    SelectModule,
    SearchModule,
    ProductsModule
  ],
})
export class CatalogPageModule
 { }
