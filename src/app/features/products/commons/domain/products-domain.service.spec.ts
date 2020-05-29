import { TestBed } from '@angular/core/testing';

import { ProductsDomainService } from './products-domain.service';

describe('ProductsDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsDomainService = TestBed.get(ProductsDomainService);
    expect(service).toBeTruthy();
  });
});
