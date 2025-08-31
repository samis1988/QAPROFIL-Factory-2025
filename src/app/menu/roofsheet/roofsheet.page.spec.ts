import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoofsheetPage } from './roofsheet.page';

describe('RoofsheetPage', () => {
  let component: RoofsheetPage;
  let fixture: ComponentFixture<RoofsheetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofsheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
