import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerimeteranglePage } from './perimeterangle.page';

describe('PerimeteranglePage', () => {
  let component: PerimeteranglePage;
  let fixture: ComponentFixture<PerimeteranglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerimeteranglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
