import { PizzaToppingModel } from '../pizza-toppings/pizza-topping.model';

export interface PizzaModel {
  id: string;
  name: string;
  toppings: PizzaToppingModel[];
  creationDate: number;
}
