import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPresentersModule } from '../presenters/orders-presenters.module';
import { OrdersListComponent } from './list/list.component';

@NgModule({
  declarations: [
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    OrdersPresentersModule
  ]
})
export class OrdersComponentsModule { }
