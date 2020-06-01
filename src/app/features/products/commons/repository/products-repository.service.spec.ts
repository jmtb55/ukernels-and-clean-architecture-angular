import { TestBed } from '@angular/core/testing';

import { ProductsRepositoryService } from './products-repository.service';

describe('ProductsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsRepositoryService = TestBed.get(ProductsRepositoryService);
    expect(service).toBeTruthy();
  });
});
