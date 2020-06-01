import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PizzaModel } from '../../domain/pizza/pizza.model';
import { ProductsListPresenterService } from '../../presenters/products-list-presenter.service';
import { Router } from '@angular/router';

// use of an interface prevents cyclic dependency problems
export interface ProductListComponentInterface {
  loaded: boolean;
  loading: boolean;
  products: PizzaModel[];
  refreshRender(): void;
}

@Component({
  selector: 'app-products-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ProductsListComponent implements ProductListComponentInterface {

  loaded: boolean;
  loading: boolean;
  products: PizzaModel[];

  constructor(
    private readonly router: Router,
    private readonly presenter: ProductsListPresenterService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.loaded = false;
    this.loading = false;
    this.products = [];
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

  onNewPizzaButtonClick(): void {
    this.router.navigate(['/products/pizza/new']);
  }

  onEditButtonClick(model: PizzaModel): void {
    this.router.navigate([`/products/pizza/${model.id}`]);
  }

}
