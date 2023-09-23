import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Forms8RoutingModule } from './forms8-routing.module';
import { Forms8Component } from './forms8.component';
import { RouterModule } from '@angular/router';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';


@NgModule({
  declarations: [
    Forms8Component
  ],
  imports: [
    CommonModule,
    Forms8RoutingModule,
    RouterModule,
    Task1Module,
    Task2Module
  ]
})
export class Forms8Module { }
