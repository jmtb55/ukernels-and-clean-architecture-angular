import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRepositoryService } from './products-repository.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductsRepositoryService
  ]
})
export class ProductsRepositoryModule { }
