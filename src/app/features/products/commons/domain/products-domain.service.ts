import { Injectable } from '@angular/core';
import { ProductsRepositoryService } from '../repository/products-repository.service';
import { PizzaModel } from './pizza/pizza.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PizzaAdapterModel } from './pizza/pizza.adapter.model';
import { PizzaAdapterEntity } from '../repository/pizza/pizza.adapter.entity';

@Injectable() export class ProductsDomainService {

  constructor(
    private readonly repository: ProductsRepositoryService
  ) {
  }

  readAll(): Observable<PizzaModel[]> {
    return this.adaptPizzas(
      this.repository.getAll()
    );
  }

  read(id: string): Observable<PizzaModel> {
    return this.repository.get(id).pipe(
      map(
        entity => new PizzaAdapterModel(entity)
      )
    );
  }

  create(pizza: PizzaModel): Observable<undefined> {
    const entity = new PizzaAdapterEntity(pizza);
    return this.repository.post(entity).pipe(
      map(
        () => undefined
      )
    );
  }

  update(pizza: PizzaModel): Observable<undefined> {
    const entity = new PizzaAdapterEntity(pizza);
    return this.repository.put(entity).pipe(
      map(
        () => undefined
      )
    )
  }

  private adaptPizzas(rawInput: Observable<Array<any>>): Observable<PizzaModel[]> {
    return rawInput.pipe(
      map(
        (rawPizzas: Array<any>) => {
          return rawPizzas.map(
            (rawPizza: any): PizzaModel => {
              return new PizzaAdapterModel(rawPizza);
            }
          ).filter(
            (adaptedPizza: PizzaModel): boolean => {
              return adaptedPizza.id !== ''
            }
          ).sort(
            (a: PizzaModel, b:PizzaModel): number => {
              if (a.creationDate > b.creationDate) {
                return 1;
              } else if (b.creationDate > a.creationDate) {
                return -1;
              }
              return 0;
            }
          )
        }
      )
    );
  }

}
