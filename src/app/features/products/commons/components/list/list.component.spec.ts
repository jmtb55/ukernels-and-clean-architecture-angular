import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPizzaDisplayComponent } from '../pizza-display/pizza-display.component';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsListComponent } from './list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsListPresenterService } from '../../presenters/products-list-presenter.service';
import { Router } from '@angular/router';
import { PizzaModel } from '../../domain/pizza/pizza.model';

describe('ListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ProductsListComponent, ProductPizzaDisplayComponent ],
      providers: [
        {
          provide: ProductsListPresenterService,
          useValue: {
            controller: jasmine.createSpy('controller')
          }
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set reference to controller', () => {
      expect(component['presenter'].controller).toEqual(component);
    })
  });

  describe('refreshRender', () => {
    it('should call changeDetectorRef.markForCheck',  () => {
      spyOn(component['changeDetectorRef'], 'markForCheck');

      component.refreshRender();

      fixture.whenStable().then(() => {
        expect(component['changeDetectorRef'].markForCheck).toHaveBeenCalled();
      });
    });
  });

  describe('onNewPizzaButtonClick', () => {
    it('should redirect to create product URL', () => {
      spyOn(router, 'navigate');

      component.onNewPizzaButtonClick();

      expect(router.navigate).toHaveBeenCalledWith(['/products/pizza/new']);
    })
  });

  describe('onEditButtonClick', () => {
    it('should redirect to edit product URL', () => {
      spyOn(router, 'navigate');

      const dummyPizza = {
        id: 'myPizzaId'
      };
      component.onEditButtonClick(dummyPizza as PizzaModel);

      expect(router.navigate).toHaveBeenCalledWith([`/products/pizza/${dummyPizza.id}`]);
    })
  });
});
