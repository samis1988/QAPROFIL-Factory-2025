import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestViewPage } from './request-view.page';

describe('RequestViewPage', () => {
  let component: RequestViewPage;
  let fixture: ComponentFixture<RequestViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
