import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TbarPage } from './tbar.page';

describe('TbarPage', () => {
  let component: TbarPage;
  let fixture: ComponentFixture<TbarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
