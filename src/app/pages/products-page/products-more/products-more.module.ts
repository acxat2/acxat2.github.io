import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsMoreComponent } from './products-more.component';
import { DataTableHeaderComponent } from './table/data-table-header.component';
import { DataTableRowComponent } from './table/data-table-row.component';
import { DataTableFooterComponent } from './table/data-table-footer.component';
import { DataTableMenuComponent } from './table/data-table-menu.component';
import { DataTableCellComponent } from './table/data-table-cell.component';
import { ButtonFlatModule } from 'src/app/components/button-flat/button-flat.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsMoreComponent,
    DataTableHeaderComponent,
    DataTableRowComponent,
    DataTableFooterComponent,
    DataTableMenuComponent,
    DataTableCellComponent,
  ],
  imports: [
    CommonModule,
    ButtonFlatModule,
    ButtonModule,
    FormsModule
  ],
  exports: [ProductsMoreComponent],

})
export class ProductsMoreModule { }
