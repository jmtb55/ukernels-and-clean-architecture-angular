import { TestBed } from '@angular/core/testing';

import { OrdersRepositoryService } from './orders-repository.service';

describe('OrdersRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersRepositoryService = TestBed.get(OrdersRepositoryService);
    expect(service).toBeTruthy();
  });
});
