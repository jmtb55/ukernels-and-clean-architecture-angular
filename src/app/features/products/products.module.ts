import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFeatureComponent } from './products.component';
import { ProductsComponentsModule } from './commons/components/products-components.module';
import { Routes } from '@angular/router';
import { ProductsListViewComponent } from './views/products-list/products-list.component';
import { ProductsSingleViewComponent } from './views/products-single/products-single.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsFeatureComponent,
    children: [
      {
        path: 'list',
        component: ProductsListViewComponent
      },
      {
        path: 'listado',
        component: ProductsListViewComponent
      },
      {
        path: 'single',
        component: ProductsSingleViewComponent
      },
      {
        path: 'unico',
        component: ProductsSingleViewComponent
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProductsFeatureComponent,
    ProductsListViewComponent,
    ProductsSingleViewComponent
  ],
  imports: [
    CommonModule,
    ProductsComponentsModule
  ],
  exports: [
    ProductsFeatureComponent,
    ProductsListViewComponent,
    ProductsSingleViewComponent
  ]
})
export class ProductsModule { }
