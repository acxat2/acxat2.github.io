import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';
import { NgErrorModule } from 'src/app/components/ng-error/ng-error.module';
import { PasswordMatchDirective } from 'src/app/checkout/directives/password-match.directive';



@NgModule({
  declarations: [
    Task1Component,
    PasswordMatchDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    NgErrorModule
  ]
})
export class Task1Module { }
