import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StripsjointPage } from './stripsjoint.page';

describe('StripsjointPage', () => {
  let component: StripsjointPage;
  let fixture: ComponentFixture<StripsjointPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StripsjointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
