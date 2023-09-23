import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forms8Component } from './forms8.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';

const routes: Routes = [
  {
    path: '',
    component: Forms8Component,
    data: {title: 'Формы'},
    children: [
      {
        path: '',
        redirectTo: 'task-1',
        pathMatch: 'full'
      },
      {
        path: 'task-1',
        component: Task1Component,
        data: {title: 'Научиться работать с шаблонными формами.'},
      },
      {
        path: 'task-2',
        component: Task2Component,
        data: {title: 'Научиться создавать реактивные формы, управлять их состоянием и создавать валидации. '},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Forms8RoutingModule { }
