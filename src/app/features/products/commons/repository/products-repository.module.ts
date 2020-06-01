import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRepositoryService } from './products-repository.service';
import { PizzaToppingsRepositoryService } from './pizza-toppings/pizza-toppings-repository.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductsRepositoryService,
    PizzaToppingsRepositoryService
  ]
})
export class ProductsRepositoryModule { }
