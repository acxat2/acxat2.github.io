import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { BageModule } from '../bage/bage.module';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    BageModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
