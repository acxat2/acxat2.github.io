import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonFlatModule } from '../components/button-flat/button-flat.module';
import { RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonFlatModule,
    CartModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
