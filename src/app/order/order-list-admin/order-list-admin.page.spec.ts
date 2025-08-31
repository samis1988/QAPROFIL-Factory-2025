import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListAdminPage } from './order-list-admin.page';

describe('OrderListAdminPage', () => {
  let component: OrderListAdminPage;
  let fixture: ComponentFixture<OrderListAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
