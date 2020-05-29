import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSingleViewComponent } from './products-single.component';

describe('ProductsSingleViewComponent', () => {
  let component: ProductsSingleViewComponent;
  let fixture: ComponentFixture<ProductsSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
