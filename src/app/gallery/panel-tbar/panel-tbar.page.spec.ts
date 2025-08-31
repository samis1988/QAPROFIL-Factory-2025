import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelTbarPage } from './panel-tbar.page';

describe('PanelTbarPage', () => {
  let component: PanelTbarPage;
  let fixture: ComponentFixture<PanelTbarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
