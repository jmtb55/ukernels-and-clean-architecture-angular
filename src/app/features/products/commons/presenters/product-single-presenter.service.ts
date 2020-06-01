import { Injectable } from "@angular/core";
import { PizzaModel } from '../domain/pizza/pizza.model';
import { ProductSingleComponentInterface } from '../components/single/product-single.component';
import { ProductsDomainService } from '../domain/products-domain.service';
import { take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PizzaToppingsDomainService } from '../domain/pizza-toppings/pizza-toppings.domain.service';
import { PizzaToppingModel } from '../domain/pizza-toppings/pizza-topping.model';
import { FormControl, FormGroup } from '@angular/forms';
import { PizzaAdapterModel } from '../domain/pizza/pizza.adapter.model';
import { Subscription } from 'rxjs';
import { NotificationsService as ToasterNotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Injectable() export class ProductSinglePresenterService {

  private productNameChangeSubscription?: Subscription;

  private _controller?: ProductSingleComponentInterface;
  public set controller(controller: ProductSingleComponentInterface | undefined) {
    this._controller = controller;
    this.initialize();
  }
  public get controller(): ProductSingleComponentInterface | undefined {
    return this._controller;
  }

  constructor(
    private readonly domain: ProductsDomainService,
    private readonly toppingsDomain: PizzaToppingsDomainService,
    private readonly toasterNotificationsService: ToasterNotificationsService,
    private readonly router: Router
  ) {

  }

  private initialize(): void {
    if (this._controller) {
      this._controller.loading = true;
      if (this._controller.action === 'create') {
        this.initialize2Create();
      } else {
        const id = this.getModelId(this._controller.product);
        if (id) {
          this.domain.read(id).pipe(
            take(1)
          ).subscribe(
            {
              next: this.initialize2Update.bind(this),
              complete: this.initializeEnd.bind(this),
              error: this.onAPIError.bind(this)
            }
          )
        }
      }
    }
  }

  private initialize2Create(): void {
    if (this._controller) {
      this._controller.product = new PizzaAdapterModel({});
      this._controller.pizzaNameFormControl = new FormControl();
      this._controller.pizzaNameFormControl.setValue('');
      this.handleNameChange();
      this._controller.pizzaFormGroup = new FormGroup({
        name: this._controller.pizzaNameFormControl
      });
      this.initialize3();
    }
  }

  private initialize2Update(product: PizzaModel): void {
    if (this._controller) {
      this._controller.product = product;
      this._controller.pizzaNameFormControl = new FormControl();
      this._controller.pizzaNameFormControl.setValue(product.name);
      this.handleNameChange();
      this._controller.pizzaFormGroup = new FormGroup({
        name: this._controller.pizzaNameFormControl
      });
      this.initialize3();
    }
  }

  private handleNameChange(): void {
    if (this._controller && this._controller.pizzaNameFormControl) {
      if (this.productNameChangeSubscription) {
        this.productNameChangeSubscription.unsubscribe();
      }
      this.productNameChangeSubscription = this._controller.pizzaNameFormControl.valueChanges.subscribe(
        (name: string): void => {
          if (this._controller && this._controller.product) {
            this._controller.product.name = name;
          }
        }
      )
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

  submit(): void {
    if (this._controller && this._controller.product) {
      this._controller.loading = true;
      this._controller.refreshRender();
      const product: PizzaModel = this._controller.product;
      if (this._controller.action === 'create') {
        this.submitCreate(product);
      } else if (this.controller.action === 'update') {
        this.submitUpdate(product);
      }
    }
  }

  private submitCreate(product: PizzaModel): void {
    this.domain.create(product).pipe(
      take(1)
    ).subscribe(
      {
        next: () => {
          this.router.navigate(['/products/list'])
          this.toasterNotificationsService.success(
            'Creación Exitosa',
            `Se ha creado Pizza: ${product.name}`
          );
        },
        complete: () => {
          if (this._controller) {
            this._controller.loading = false;
            this._controller.refreshRender();
          }
        },
        error: this.onAPIError.bind(this)
      }
    );
  }

  private submitUpdate(product: PizzaModel): void {
    this.domain.update(product).pipe(
      take(1)
    ).subscribe(
      {
        next: () => {
          this.router.navigate(['/products/list'])
          this.toasterNotificationsService.success(
            'Actualización Exitosa',
            `Se ha actualizado la Pizza.`
          );
        },
        complete: () => {
          if (this._controller) {
            this._controller.loading = false;
            this._controller.refreshRender();
          }
        },
        error: this.onAPIError.bind(this)
      }
    );
  }

}
