import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QapstripsPage } from './qapstrips.page';

describe('QapstripsPage', () => {
  let component: QapstripsPage;
  let fixture: ComponentFixture<QapstripsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QapstripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
