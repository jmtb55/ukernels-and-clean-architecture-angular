import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFeatureComponent } from './products.component';

describe('ProductsFeatureComponent', () => {
  let component: ProductsFeatureComponent;
  let fixture: ComponentFixture<ProductsFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
