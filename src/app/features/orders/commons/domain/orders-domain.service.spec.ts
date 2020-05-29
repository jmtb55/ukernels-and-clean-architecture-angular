import { TestBed } from '@angular/core/testing';

import { OrdersDomainService } from './orders-domain.service';

describe('OrdersDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersDomainService = TestBed.get(OrdersDomainService);
    expect(service).toBeTruthy();
  });
});
