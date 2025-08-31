import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelSrpPage } from './panel-srp.page';

describe('PanelSrpPage', () => {
  let component: PanelSrpPage;
  let fixture: ComponentFixture<PanelSrpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSrpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
