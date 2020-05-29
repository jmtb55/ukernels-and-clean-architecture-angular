import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersFeatureComponent } from './orders.component';
import { OrdersComponentsModule } from './commons/components/orders-components.module';
import { OrdersDefaultViewComponent } from './views/orders-default/orders-default.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrdersFeatureComponent,
    children: [
      {
        path: 'list',
        component: OrdersDefaultViewComponent
      },
      {
        path: 'listado',
        component: OrdersDefaultViewComponent
      },
    ],
  },
];

@NgModule({
  declarations: [
    OrdersFeatureComponent,
    OrdersDefaultViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrdersComponentsModule,
  ],
  exports: [
    RouterModule,
    OrdersFeatureComponent,
    OrdersDefaultViewComponent
  ]
})
export class OrdersModule { }
