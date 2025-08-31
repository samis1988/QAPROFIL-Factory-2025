import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderItemPage } from './order-item.page';

describe('OrderItemPage', () => {
  let component: OrderItemPage;
  let fixture: ComponentFixture<OrderItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
