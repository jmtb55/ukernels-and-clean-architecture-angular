import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter, OnInit } from "@angular/core";
import { PizzaModel } from '../../domain/pizza/pizza.model';

export type ProductSingleComponentMode = 'minimal' | 'create' | 'update';

import { transition, style, animate, trigger } from '@angular/animations';
import { ProductSinglePresenterService } from '../../presenters/product-single-presenter.service';
import { PizzaToppingModel } from '../../domain/pizza-toppings/pizza-topping.model';
import { FormGroup, FormControl } from '@angular/forms';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate(
      '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate(
      '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(-200px)', opacity: 0 })
    ),
  ]),
]);

// use of an interface prevents cyclic dependency problems
export interface ProductSingleComponentInterface {
  loaded: boolean;
  loading: boolean;
  mode?: ProductSingleComponentMode;
  product?: PizzaModel;
  toppings?: PizzaToppingModel[];
  pizzaFormGroup?: FormGroup;
  pizzaNameFormControl?: FormControl;
  refreshRender(): void;
}

@Component({
  selector: 'app-single-product-component',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [DROP_ANIMATION],
}) export class ProductSingleComponent implements ProductSingleComponentInterface, OnInit {

  pizzaFormGroup?: FormGroup;
  pizzaNameFormControl?: FormControl;

  toppings?: PizzaToppingModel[];

  @Output() edit: EventEmitter<PizzaModel>;

  loaded: boolean;
  loading: boolean;
  
  _mode: ProductSingleComponentMode = 'minimal';
  @Input() public set mode(mode: ProductSingleComponentMode) {
    this._mode = mode ? mode : 'minimal';
    this.refreshRender();
  }
  public get mode(): ProductSingleComponentMode {
    return this._mode;
  }
  
  _product: PizzaModel;
  @Input() public set product(product: undefined | PizzaModel) {
    this._product = product;
    this.presenter.product = product;
  }
  public get product(): undefined | PizzaModel {
    return this._product;
  }

  constructor(
    private readonly presenter: ProductSinglePresenterService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.edit = new EventEmitter();
    this.loaded = false;
    this.loading = false;
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

  private shortenString(text: string | null | undefined, maxLength: number): string {
    if (text === null || text === undefined || text.length === undefined) {
      return '';
    }
    if (text.length > maxLength) {
      return `${text.substr(0, maxLength)}...`;
    }
    return text;
  }

  public get name(): string {
    if (this._product) {
      return this.shortenString(this._product.name, 14);
    }
    return '';
  }

  public onEditButtonClick(): void {
    if (this._product) {
      this.edit.emit(this._product);
    }
  }

}
