import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'orders',
    loadChildren: './features/orders/orders.module#OrdersModule'
  },
  {
    path: 'ordenes',
    loadChildren: './features/orders/orders.module#OrdersModule'
  },
  {
    path: 'products',
    loadChildren: './features/products/products.module#ProductsModule'
  },
  {
    path: 'productos',
    loadChildren: './features/products/products.module#ProductsModule'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
