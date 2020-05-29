import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListPresenterService } from './products-list-presenter.service';
import { ProductsDomainModule } from '../domain/products-domain.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsDomainModule
  ],
  providers: [
    ProductsListPresenterService
  ]
})
export class ProductsPresentersModule { }
