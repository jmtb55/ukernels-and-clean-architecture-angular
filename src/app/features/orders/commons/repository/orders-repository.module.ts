import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRepositoryService } from './orders-repository.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    OrdersRepositoryService
  ]
})
export class OrdersRepositoryModule { }
