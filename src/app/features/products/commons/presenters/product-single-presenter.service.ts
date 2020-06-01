import { Injectable } from "@angular/core";
import { PizzaModel } from '../domain/pizza/pizza.model';
import { ProductSingleComponentInterface } from '../components/single/product-single.component';
import { ProductsDomainService } from '../domain/products-domain.service';
import { take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PizzaToppingsDomainService } from '../domain/pizza-toppings/pizza-toppings.domain.service';
import { PizzaToppingModel } from '../domain/pizza-toppings/pizza-topping.model';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable() export class ProductSinglePresenterService {

  private _controller?: ProductSingleComponentInterface;
  public set controller(controller: ProductSingleComponentInterface | undefined) {
    this._controller = controller;
    this.initialize();
  }
  public get controller(): ProductSingleComponentInterface | undefined {
    return this._controller;
  }

  private _product: PizzaModel;
  public set product(product: undefined | PizzaModel) {
    this._product = product;
    this.initialize();
  }
  public get product(): undefined | PizzaModel {
    return this._product;
  }

  constructor(
    private readonly domain: ProductsDomainService,
    private readonly toppingsDomain: PizzaToppingsDomainService
  ) {

  }

  private initialize(): void {
    if (this._controller) {
      this._controller.loading = true;
      if (this.isCompleteModel(this._controller.product)) {
        // creating a new instance of the object will prevent possible bugs due to unfinished updates
        // this._controller.product = JSON.parse(JSON.stringify(this._controller.product));
        this.initializeEnd();
      } else {
        const id = this.getModelId(this._controller.product);
        if (id) {
          this.domain.read(id).pipe(
            take(1)
          ).subscribe(
            {
              next: this.initialize2.bind(this),
              complete: this.initializeEnd.bind(this),
              error: this.onAPIError.bind(this)
            }
          )
        }
      }
    }
  }

  private initialize2(product: PizzaModel): void {
    if (this._controller && this._controller.mode) {
      this._controller.product = product;
      if (this._controller.mode !== 'minimal') {
        this._controller.pizzaNameFormControl = new FormControl();
        // this._controller.pizzaNameFormControl.setValue('');
        this._controller.pizzaFormGroup = new FormGroup({
          name: this._controller.pizzaNameFormControl
        });
        this.initialize3();
      } else {
        this.initializeEnd();
      }
    }
  }

  private initialize3(): void {
    this.toppingsDomain.readAll().pipe(
      take(1)
    ).subscribe(
      {
        next: (toppings: PizzaToppingModel[]): void => {
          if (this._controller) {
            this._controller.toppings = toppings;
          }
        },
        complete: this.initializeEnd.bind(this),
        error: this.onAPIError.bind(this)
      }
    )
  }

  private onAPIError(error: HttpErrorResponse): void {
    // the whole subject of error handling is complex,
    // one of the best approaches is to handle only the logic necessary in this component, and then bubble up the error
    // so that it gets captured by a global error handler (where you could log or show a modal window)
    if (this._controller) {
      this._controller.loading = false;
      this._controller.loaded = true;
      // this._controller.product = undefined;
    }
    console.log('Error @product-single-presenter: ', error.message);
    // throw new ApiErrorAdapter(error);
  }

  private initializeEnd(): void {
    if (this._controller) {
      this._controller.loaded = true;
      this._controller.loading = false;
      this._controller.refreshRender();
    }
  }

  private getModelId(model: PizzaModel | undefined): string | undefined {
    if (model) {
      if (model.id && typeof model.id === 'string' && model.id.length > 0) {
        return model.id;
      }
    }
    return undefined;
  }

  private isCompleteModel(model: PizzaModel | undefined): boolean {
    if (model) {
      if (
        (model.id && typeof model.id === 'string' && model.id.length > 0)
        && (model.name && typeof model.name === 'string' && model.name.length > 0)
        && (model.toppings && Array.isArray(model.toppings))
        && (model.creationDate && typeof model.creationDate === 'number')
      ) {
        return true;
      }
    }
    return false;
  }

}
