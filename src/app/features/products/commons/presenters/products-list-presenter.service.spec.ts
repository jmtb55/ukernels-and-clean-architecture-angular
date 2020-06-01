import { TestBed } from '@angular/core/testing';

import { ProductsListPresenterService } from './products-list-presenter.service';

describe('ProductsListPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsListPresenterService = TestBed.get(ProductsListPresenterService);
    expect(service).toBeTruthy();
  });
});
