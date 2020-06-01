import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaModel } from '../../commons/domain/pizza/pizza.model';
import { ProductSingleComponentMode } from '../../commons/components/single/product-single.component';
import { take } from 'rxjs/operators';
import { PizzaAdapterModel } from '../../commons/domain/pizza/pizza.adapter.model';

@Component({
  templateUrl: './products-single.component.html',
  styleUrls: ['./products-single.component.scss']
})
export class ProductsSingleViewComponent implements OnInit {

  product: null | PizzaModel;
  productMode: ProductSingleComponentMode;

  constructor(
    private route: ActivatedRoute
  ) {
    this.product = undefined;
    this.productMode = "minimal";
  }

  ngOnInit() {
    this.product = undefined;
    this.productMode = "minimal";
    this.route.params.pipe(
      take(1)
    ).subscribe(
      (params: any): void => {
        if (params.id) {
          this.product = new PizzaAdapterModel({
            id: params.id
          });
          this.productMode = "update";
        } else {
          this.product = new PizzaAdapterModel({});
          this.productMode = "create";
        }
      }
    )
  }

}
