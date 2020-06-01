import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRepositoryModule } from '../repository/orders-repository.module';
import { OrdersDomainService } from './orders-domain.service';

@NgModule({
  imports: [
    CommonModule,
    OrdersRepositoryModule
  ],
  providers: [
    OrdersDomainService
  ]
})
export class OrdersDomainModule { }
