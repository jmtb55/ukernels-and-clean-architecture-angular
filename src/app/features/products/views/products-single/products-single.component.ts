import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaModel } from '../../commons/domain/pizza/pizza.model';
import { take } from 'rxjs/operators';
import { PizzaAdapterModel } from '../../commons/domain/pizza/pizza.adapter.model';
import { CrudAction } from '../../commons/components/single/product-single.component';

@Component({
  templateUrl: './products-single.component.html',
  styleUrls: ['./products-single.component.scss']
})
export class ProductsSingleViewComponent implements OnInit {

  product: null | PizzaModel;
  action: CrudAction;

  constructor(
    private route: ActivatedRoute
  ) {
    this.product = undefined;
    this.action = "create";
  }

  ngOnInit() {
    this.product = undefined;
    this.action = "create";
    this.route.params.pipe(
      take(1)
    ).subscribe(
      (params: any): void => {
        if (params.id) {
          this.product = new PizzaAdapterModel({
            id: params.id
          });
          this.action = "update";
        } else {
          this.product = new PizzaAdapterModel({});
          this.action = "create";
        }
      }
    )
  }

}
