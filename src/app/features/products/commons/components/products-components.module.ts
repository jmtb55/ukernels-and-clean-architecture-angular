import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './list/list.component';
import { ProductsPresentersModule } from '../presenters/products-presenters.module';
import { ProductSingleComponent } from './single/product-single.component';

@NgModule({
  declarations: [
    ProductSingleComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsPresentersModule,
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsComponentsModule { }
