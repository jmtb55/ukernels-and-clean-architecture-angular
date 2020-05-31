import { Injectable } from "@angular/core";
import { AbstractApiService } from './../../../../../core/repository/abstract-api-service';
import { HttpClient } from '@angular/common/http';
import { PizzaToppingEntity } from './pizza-topping.entity';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable() export class PizzaToppingsRepositoryService extends AbstractApiService {

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  public getAll(): Observable<PizzaToppingEntity[]> {
    const URL = `${environment.backend.host}/${environment.backend.contexts.pizzaToppings}`;
    const OPTIONS = this.getStandardOptions({'Accept-Language': 'es'});
    return this.httpClient.get<PizzaToppingEntity[]>(
      URL,
      OPTIONS
    );
  }

}
