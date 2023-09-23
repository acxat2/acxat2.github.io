import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgErrorComponent } from './ng-error.component';



@NgModule({
  declarations: [NgErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [NgErrorComponent]
})
export class NgErrorModule { }
