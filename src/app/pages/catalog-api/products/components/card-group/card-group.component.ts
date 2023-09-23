import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Observable, mapTo, merge, tap } from 'rxjs';
import { FavoriteProductsService } from 'src/app/services/favorite-products.service';

@Component({
  selector: 'app-card-group',
  template: `
    <ng-content></ng-content>
  `,
    styles: [`@import 'src/app/scss/components/_card.scss';`],

})
export class CardGroupComponent implements AfterContentInit {
  @ContentChildren(CardComponent)
  public components!: QueryList<CardComponent>

  ngAfterContentInit(): void {
    const clickFavorite$: Array<Observable<CardComponent>> = this.components.map(card => card.favoriteComponent.clickFavorite$.pipe(mapTo(card))
    )
    merge(...clickFavorite$).subscribe((card) => {
      card.favoriteChecked();
      const cardContent = card.cardContent.nativeElement;
      const btn = card.favoriteBtn.nativeElement;
      const id = cardContent.getAttribute('id');

      if (card.favoriteComponent.favorite) {
        btn.classList.add('favoriteActive');
        btn.textContent = 'favorite';
        this.favoriteProduct.setProduct(id)
      } else {
        btn.classList.remove('favoriteActive')
        btn.textContent = 'favorite_border';
        this.favoriteProduct.removeProduct(id)
      }
    })

    const clickAdd$:
    Array<Observable<CardComponent>> = this.components.map(card => card.addComponent.clickAdd$.pipe(mapTo(card))
    )
    merge(...clickAdd$).subscribe((card) => card)
  }

  constructor(private favoriteProduct: FavoriteProductsService) {}
}
