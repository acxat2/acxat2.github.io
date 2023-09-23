import { RouterModule, Routes } from "@angular/router";
import { CatalogPageComponent
 } from "./catalog-page.component";
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";

export const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent
,
    data: {
      title: 'Каталог Товаров'
    }
  },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CatalogPageRoutingModule {}
