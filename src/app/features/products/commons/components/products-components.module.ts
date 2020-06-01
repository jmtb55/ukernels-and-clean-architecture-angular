import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './list/list.component';
import { ProductsPresentersModule } from '../presenters/products-presenters.module';
import { ProductSingleComponent } from './single/product-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPizzaDisplayComponent } from './pizza-display/pizza-display.component';
import { ProductPizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

@NgModule({
  declarations: [
    ProductPizzaDisplayComponent,
    ProductSingleComponent,
    ProductsListComponent,
    ProductPizzaToppingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsPresentersModule,
  ],
  exports: [
    ProductsListComponent,
    ProductSingleComponent,
    ProductPizzaDisplayComponent,
    ProductPizzaToppingsComponent
  ]
})
export class ProductsComponentsModule { }
