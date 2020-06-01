import { PizzaToppingEntity } from '../pizza-toppings/pizza-topping.entity';

/**
 * Clean Architecture repository-level entity
 * 
 * maps known format of backend's Pizza entity.
 */
export interface PizzaEntity {
  id: string;
  name: string;
  date: number;
  toppings: PizzaToppingEntity[];
}
