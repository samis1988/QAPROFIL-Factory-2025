import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetRoofPage } from './sheet-roof.page';

describe('SheetRoofPage', () => {
  let component: SheetRoofPage;
  let fixture: ComponentFixture<SheetRoofPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetRoofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
