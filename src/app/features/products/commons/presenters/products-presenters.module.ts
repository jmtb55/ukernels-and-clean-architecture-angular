import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListPresenterService } from './products-list-presenter.service';
import { ProductsDomainModule } from '../domain/products-domain.module';
import { ProductSinglePresenterService } from './product-single-presenter.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsDomainModule
  ],
  providers: [
    ProductsListPresenterService,
    ProductSinglePresenterService
  ]
})
export class ProductsPresentersModule { }
