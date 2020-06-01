import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentsModule } from './components/core-components.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    CoreComponentsModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    MenuComponent
  ]
})
export class CoreModule { }
