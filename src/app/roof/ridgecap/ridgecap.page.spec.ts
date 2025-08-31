import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RidgecapPage } from './ridgecap.page';

describe('RidgecapPage', () => {
  let component: RidgecapPage;
  let fixture: ComponentFixture<RidgecapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RidgecapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
