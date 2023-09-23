import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Task2Component } from './pages/forms8/task2/task2.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-more',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/forms8/forms8.module').then(m => m.Forms8Module)
  },

  {
    path: 'products',
    loadChildren: () => import('./pages/catalog-api/catalog-page.module').then(m => m.CatalogPageModule)
  },

  {
    path: 'products-more',
    loadChildren: () => import('./pages/products-page/products-page-more.module').then(m => m.ProductsPageMoreModule)
  },

  {
    path: 'checkout',
    component: Task2Component
  },

  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

export const options: ExtraOptions = {
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
