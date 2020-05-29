import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFeatureComponent } from './orders.component';

describe('OrdersFeatureComponent', () => {
  let component: OrdersFeatureComponent;
  let fixture: ComponentFixture<OrdersFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
