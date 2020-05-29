import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDefaultViewComponent } from './orders-default.component';

describe('OrdersDefaultViewComponent', () => {
  let component: OrdersDefaultViewComponent;
  let fixture: ComponentFixture<OrdersDefaultViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDefaultViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDefaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
