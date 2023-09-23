import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFlatComponent } from './button-flat.component';
import { BageModule } from '../bage/bage.module';



@NgModule({
  declarations: [
    ButtonFlatComponent
  ],
  imports: [
    CommonModule,
    BageModule
  ],
  exports: [ButtonFlatComponent]
})
export class ButtonFlatModule { }
