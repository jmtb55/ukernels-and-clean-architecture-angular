
import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'inicio',
        component: HomeComponent
      },
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
    ],
  },
  {
    path: '**',
    redirectTo: ''
  },
]
