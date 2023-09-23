import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { BtnComponent } from './toggle-comp/btn/btn.component';
import { BtnGroupComponent } from './toggle-comp/btn-group/btn-group.component';



@NgModule({
  declarations: [
    ToggleComponent,
    BtnComponent,
    BtnGroupComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ToggleComponent]
})
export class ToggleModule { }
