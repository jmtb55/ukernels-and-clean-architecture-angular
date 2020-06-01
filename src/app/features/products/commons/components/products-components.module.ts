import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './list/list.component';
import { ProductsPresentersModule } from '../presenters/products-presenters.module';
import { ProductSingleComponent } from './single/product-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductSingleComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsPresentersModule,
  ],
  exports: [
    ProductsListComponent,
    ProductSingleComponent
  ]
})
export class ProductsComponentsModule { }
