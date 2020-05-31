import { Injectable } from "@angular/core";
import { PizzaToppingsRepositoryService } from '../../repository/pizza-toppings/pizza-toppings-repository.service';
import { Observable } from 'rxjs';
import { PizzaToppingModel } from './pizza-topping.model';
import { map } from 'rxjs/operators'
import { PizzaToppingModelAdapter } from './pizza-topping.adapter.model';

@Injectable() export class PizzaToppingsDomainService {

  constructor(
    private readonly repository: PizzaToppingsRepositoryService
  ) {

  }

  public readAll(): Observable<PizzaToppingModel[]> {
    const rawPizzaToppings = this.repository.getAll();
    return this.adaptPizzaToppings(rawPizzaToppings);
  }

  private adaptPizzaToppings(rawInput: Observable<Array<any>>): Observable<PizzaToppingModel[]> {
    return rawInput.pipe(
      map(
        (rawToppings: Array<any>) => {
          return rawToppings.map(
            (rawTopping: any): PizzaToppingModel => {
              return new PizzaToppingModelAdapter(rawTopping);
            }
          ).filter(
            (adaptedTopping: PizzaToppingModel): boolean => {
              return adaptedTopping.value !== ''
            }
          )
        }
      )
    );
  }

}
