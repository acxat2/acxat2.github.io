import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ButtonFlatModule } from 'src/app/components/button-flat/button-flat.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ButtonFlatModule,
    ButtonModule,
    RouterModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
