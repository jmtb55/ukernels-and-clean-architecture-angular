import { PizzaToppingEntity } from '../pizza-toppings/pizza-topping.entity';
import { PizzaEntity } from './pizza.entity';
import { PizzaToppingAdapterEntity } from '../pizza-toppings/pizza-topping.adapter.entity';

export class PizzaAdapterEntity implements PizzaEntity {

  id: string;
  name: string;
  date: number;
  toppings: PizzaToppingEntity[];

  constructor(adaptee: any) {
    this.id = '';
    this.name = '';
    this.date = Date.now();
    this.toppings = [];
    if (adaptee) {
      this.adaptFrom(adaptee);
    }
  }

  private adaptFrom(adaptee: any): void {
    if (adaptee) {
      this.id = adaptee.id ? String(adaptee.id) : '';
      this.name = adaptee.name ? String(adaptee.name) : '';
      this.date = adaptee.creationDate ? parseInt(String(adaptee.creationDate)) : Date.now();
      if (adaptee.toppings && Array.isArray(adaptee.toppings)) {
        this.toppings = (adaptee.toppings as Array<any>).map(
          rawTopping => new PizzaToppingAdapterEntity(rawTopping)
        );
      }
    }
  }
  
}
