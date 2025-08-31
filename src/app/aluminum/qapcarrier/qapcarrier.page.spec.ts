import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QapcarrierPage } from './qapcarrier.page';

describe('QapcarrierPage', () => {
  let component: QapcarrierPage;
  let fixture: ComponentFixture<QapcarrierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QapcarrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
