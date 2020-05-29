import { TestBed } from '@angular/core/testing';

import { OrdersListPresenterService } from './orders-list-presenter.service';

describe('OrdersListPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersListPresenterService = TestBed.get(OrdersListPresenterService);
    expect(service).toBeTruthy();
  });
});
