import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ButtonFlatModule } from 'src/app/components/button-flat/button-flat.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule } from '@angular/forms';
import { SearchModule } from 'src/app/components/search/search.module';
import { CardComponent } from './components/card/card.component';
import { CardPriceComponent } from './components/card-price/card-price.component';
import { CardButtonFavoriteComponent } from './components/card-button-favorite/card-button-favorite.component';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { CardRatingComponent } from './components/card-rating/card-rating.component';
import { CardGroupComponent } from './components/card-group/card-group.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CardComponent,
    CardPriceComponent,
    CardButtonFavoriteComponent,
    CardButtonComponent,
    CardRatingComponent,
    CardGroupComponent,
  ],
  imports: [
    CommonModule,
    ButtonFlatModule,
    ButtonModule,
    FormsModule,
    SearchModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
