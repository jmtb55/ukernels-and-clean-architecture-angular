import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRepositoryModule } from '../repository/products-repository.module';
import { ProductsDomainService } from './products-domain.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRepositoryModule
  ],
  providers: [
    ProductsDomainService
  ]
})
export class ProductsDomainModule { }
