import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { PizzaToppingModel } from '../../domain/pizza-toppings/pizza-topping.model';

@Component({
  selector: 'app-product-pizza-toppings-component',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
}) export class ProductPizzaToppingsComponent {

  _toppings: PizzaToppingModel[];
  @Input() set toppings(toppings: PizzaToppingModel[]) {
    // a new array is created, we dont want to mess with the original array
    this._toppings = JSON.parse(JSON.stringify(toppings));
  }
  get toppings(): PizzaToppingModel[] {
    return this._toppings;
  }
  _initialSelection: PizzaToppingModel[];
  @Input() set initialSelection(initialSelection: PizzaToppingModel[]) {
    this._initialSelection = initialSelection;
    if (this._toppings && this._toppings.length) {
      initialSelection.forEach(
        selected => {
          const option = this._toppings.find(x => x.value === selected.value);
          if (option) {
            option.selected = true;
          }
        }
      )
    }
    this.refreshRender();
  }
  @Output() change: EventEmitter<PizzaToppingModel[]>;
  selection: PizzaToppingModel[];
  loaded: boolean;
  loading: boolean;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.change = new EventEmitter();
    this.loaded = false;
    this.loading = false;
    this._toppings = [];
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

  toggleSelection(topping: PizzaToppingModel): void {
    topping.selected = !topping.selected;
    const selected = this._toppings.filter(
      topping => topping.selected
    )
    this.change.emit(selected);
    this.refreshRender();
  }

}
