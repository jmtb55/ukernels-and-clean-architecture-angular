import { PizzaToppingModel } from '../pizza-toppings/pizza-topping.model';
import { PizzaModel } from './pizza.model';
import { PizzaToppingModelAdapter } from '../pizza-toppings/pizza-topping.adapter.model';

export class PizzaAdapterModel implements PizzaModel {

  id: string;
  name: string;
  toppings: PizzaToppingModel[];
  creationDate: number;

  constructor(adaptee: any) {
    this.id = '';
    this.name = '';
    this.creationDate = Date.now();
    this.toppings = [];
    if (adaptee) {
      this.adaptFrom(adaptee);
    }
  }

  private adaptFrom(adaptee: any): void {
    if (adaptee) {
      this.id = adaptee.id ? String(adaptee.id) : '';
      this.name = adaptee.name ? String(adaptee.name) : '';
      this.creationDate = adaptee.date ? parseInt(String(adaptee.date)) : Date.now();
      if (adaptee.toppings && Array.isArray(adaptee.toppings)) {
        this.toppings = (adaptee.toppings as Array<any>).map(
          rawTopping => new PizzaToppingModelAdapter(rawTopping)
        );
      }
    }
  }

}
