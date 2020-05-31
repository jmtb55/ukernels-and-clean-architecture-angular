import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    /**
     * Hash in routes improves consistency of behavior on deployments.
     */
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true
      }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
