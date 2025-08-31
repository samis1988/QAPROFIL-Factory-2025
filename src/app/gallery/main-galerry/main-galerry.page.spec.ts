import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainGalerryPage } from './main-galerry.page';

describe('MainGalerryPage', () => {
  let component: MainGalerryPage;
  let fixture: ComponentFixture<MainGalerryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGalerryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
