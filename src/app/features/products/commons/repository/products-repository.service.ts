import { Injectable } from '@angular/core';
import { environment } from './../../../../../environments/environment';
import { AbstractApiService } from './../../../../core/repository/abstract-api-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaEntity } from './pizza/pizza.entity';

@Injectable() export class ProductsRepositoryService extends AbstractApiService{

  constructor(
    private readonly httpClient: HttpClient
  ) {
    super();
  }

  getAll(): Observable<PizzaEntity[]> {
    const URL = `${environment.backend.host}/${environment.backend.contexts.products}`;
    const OPTIONS = this.getStandardOptions({'Accept-Language': 'es'});
    return this.httpClient.get<PizzaEntity[]>(
      URL,
      OPTIONS
    );
  }

  get(id: string): Observable<PizzaEntity> {
    const URL = `${environment.backend.host}/${environment.backend.contexts.products}/${id}`;
    const OPTIONS = this.getStandardOptions({'Accept-Language': 'es'});
    return this.httpClient.get<PizzaEntity>(
      URL,
      OPTIONS
    );
  }

  post(body: PizzaEntity): Observable<PizzaEntity> {
    const URL = `${environment.backend.host}/${environment.backend.contexts.products}`;
    const OPTIONS = this.getStandardOptions();
    delete body.id;
    delete body.date;
    return this.httpClient.post<PizzaEntity>(
      URL,
      body,
      OPTIONS
    );
  }

  put(body: PizzaEntity): Observable<PizzaEntity> {
    const URL = `${environment.backend.host}/${environment.backend.contexts.products}/${body.id}`;
    const OPTIONS = this.getStandardOptions();
    delete body.id;
    return this.httpClient.post<PizzaEntity>(
      URL,
      body,
      OPTIONS
    );
  }

  // commented out because its not implemented on front nor backend.
  // homewer, since this is a example, its good to see how a delete would be coded
  // return type is undefined because backend should return a 204 response
  /*delete(id: string): Observable<undefined> {
    const URL = `${environment.backend.host}/${environment.backend.contexts.products}/${id}`;
    // no special headers are sent either because we dont expect a JSON and the authentication headers should be set by an interceptor
    return this.httpClient.delete<undefined>(URL);
  }*/

}
