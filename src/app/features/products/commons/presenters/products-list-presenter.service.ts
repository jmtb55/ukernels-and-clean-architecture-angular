import { Injectable } from '@angular/core';
import { ProductListComponentInterface } from '../components/list/list.component';
import { ProductsDomainService } from '../domain/products-domain.service';
import { take } from 'rxjs/operators';
import { PizzaModel } from '../domain/pizza/pizza.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable() export class ProductsListPresenterService {

  private _controller?: ProductListComponentInterface;
  public set controller(controller: ProductListComponentInterface) {
    this._controller = controller;
    this.initializeController();
  }
  public get controller(): ProductListComponentInterface | undefined {
    return this._controller;
  }

  constructor(
    private readonly domain: ProductsDomainService
  ) {
    
  }

  private initializeController(): void {
    if (this._controller) {
      this._controller.loaded = false;
      this._controller.loading = true;
    }
    this.domain.readAll().pipe(
      take(1)
    ).subscribe(
      {
        next: this.initializeController2.bind(this),
        error: this.initializeControllerError.bind(this),
        complete: this.controllerRefreshRender.bind(this)
      }
    )
  }

  private controllerRefreshRender(): void {
    if (this._controller) {
      this._controller.refreshRender();
    }
  }

  private initializeControllerError(error: HttpErrorResponse): void {
    // the whole subject of error handling is complex,
    // one of the best approaches is handle only the logic necessary in this component, and then bubble the error
    // so that it gets captured by a global error handler (where you could log or show a modal window)
    if (this._controller) {
      this._controller.loading = false;
      this._controller.loaded = true;
      this._controller.products = [];
    }
    console.log('Error @product-list-presenter: ', error.message);
    // throw new ApiErrorAdapter(error);
  }

  private initializeController2(products: PizzaModel[]): void {
    if (this._controller) {
      this._controller.loaded = true;
      this._controller.loading = false;
      this._controller.products = products;
    }
  }

}
