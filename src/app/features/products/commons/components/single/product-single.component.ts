import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnInit, ViewChild } from "@angular/core";
import { PizzaModel } from '../../domain/pizza/pizza.model';
import { ProductSinglePresenterService } from '../../presenters/product-single-presenter.service';
import { PizzaToppingModel } from '../../domain/pizza-toppings/pizza-topping.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductPizzaDisplayComponent } from '../pizza-display/pizza-display.component';

export type CrudAction = 'create' | 'update';

// use of an interface prevents cyclic dependency problems
export interface ProductSingleComponentInterface {
  loaded: boolean;
  loading: boolean;
  product?: PizzaModel;
  toppings?: PizzaToppingModel[];
  pizzaFormGroup?: FormGroup;
  pizzaNameFormControl?: FormControl;
  action: CrudAction;
  refreshRender(): void;
}

@Component({
  selector: 'app-single-product-component',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
}) export class ProductSingleComponent implements ProductSingleComponentInterface, OnInit {

  @ViewChild(ProductPizzaDisplayComponent, {static: true}) pizzaDisplay?: ProductPizzaDisplayComponent;

  @Input() action: CrudAction;

  pizzaFormGroup?: FormGroup;
  pizzaNameFormControl?: FormControl;

  toppings?: PizzaToppingModel[];

  loaded: boolean;
  loading: boolean;
  
  @Input() product?: PizzaModel;

  constructor(
    private readonly presenter: ProductSinglePresenterService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.loaded = false;
    this.loading = false;
    this.action = 'create';
  }

  ngOnInit(): void {
    this.presenter.controller = this;
  }

  public refreshRender(): void {
    setTimeout(
      () => {
        Promise.resolve(null).then(
          () => {
            this.changeDetectorRef.markForCheck();
          }
        )
      },
      17
    );
  }

  onToppingsSelectionChange(newSelection: PizzaToppingModel[]) {
    if (this.product) {
      this.product.toppings = [...newSelection];
      if (this.pizzaDisplay) {
        this.pizzaDisplay.refreshRender();
      }
    }    
  }

  public get submitButtonText(): string {
    return this.action === 'create' ? 'Crear' : 'Actualizar';
  }

  public submit(): void {
    this.presenter.submit();
  }

}
