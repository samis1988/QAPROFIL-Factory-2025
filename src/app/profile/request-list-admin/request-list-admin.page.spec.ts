import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestListAdminPage } from './request-list-admin.page';

describe('RequestListAdminPage', () => {
  let component: RequestListAdminPage;
  let fixture: ComponentFixture<RequestListAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
