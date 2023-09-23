import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { CardButtonFavoriteComponent } from '../card-button-favorite/card-button-favorite.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@Component({
  selector: 'app-card',
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
    styles: [`@import 'src/app/scss/components/_card.scss';`],

})
export class CardComponent implements AfterContentInit {
  @ContentChild(CardButtonFavoriteComponent)
  public favoriteComponent!: CardButtonFavoriteComponent;

  @ContentChild('favoriteBtn')
  public favoriteBtn!: ElementRef;

  @ContentChild(CardButtonComponent)
  public addComponent!: CardButtonComponent;

  @ContentChild('cardContent')
  public cardContent!: ElementRef

  public favorite = false;

  public favoriteChecked() {
    this.favorite = !this.favorite;
    this.favoriteComponent.favorite = this.favorite
  }

  public n = 0;
  ngAfterContentInit(): void {
    const button = this.favoriteBtn.nativeElement
    if (button.classList.contains('favoriteActive')) {
      this.favorite = true;
    }
  }
}
