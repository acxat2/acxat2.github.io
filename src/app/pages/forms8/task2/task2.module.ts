import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgErrorModule } from 'src/app/components/ng-error/ng-error.module';



@NgModule({
  declarations: [
    Task2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    NgErrorModule
  ]
})
export class Task2Module { }
