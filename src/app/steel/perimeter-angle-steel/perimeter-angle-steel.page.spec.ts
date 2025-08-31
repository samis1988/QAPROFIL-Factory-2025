import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerimeterAngleSteelPage } from './perimeter-angle-steel.page';

describe('PerimeterAngleSteelPage', () => {
  let component: PerimeterAngleSteelPage;
  let fixture: ComponentFixture<PerimeterAngleSteelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerimeterAngleSteelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
