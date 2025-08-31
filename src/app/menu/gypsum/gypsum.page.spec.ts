import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GypsumPage } from './gypsum.page';

describe('GypsumPage', () => {
  let component: GypsumPage;
  let fixture: ComponentFixture<GypsumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GypsumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
