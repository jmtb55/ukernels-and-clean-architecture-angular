import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersDomainModule } from '../domain/orders-domain.module';
import { OrdersListPresenterService } from './orders-list-presenter.service';

@NgModule({
  imports: [
    CommonModule,
    OrdersDomainModule
  ],
  providers: [
    OrdersListPresenterService
  ]
})
export class OrdersPresentersModule { }
