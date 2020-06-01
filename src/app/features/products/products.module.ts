import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFeatureComponent } from './products.component';
import { ProductsComponentsModule } from './commons/components/products-components.module';
import { Routes, RouterModule } from '@angular/router';
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
        path: 'pizza/new',
        component: ProductsSingleViewComponent
      },
      {
        path: 'pizza/:id',
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
    RouterModule.forChild(routes),
    ProductsComponentsModule
  ],
  exports: [
    RouterModule,
    ProductsFeatureComponent,
    ProductsListViewComponent,
    ProductsSingleViewComponent
  ]
})
export class ProductsModule { }
