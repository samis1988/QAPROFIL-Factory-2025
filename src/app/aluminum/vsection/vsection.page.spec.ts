import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VsectionPage } from './vsection.page';

describe('VsectionPage', () => {
  let component: VsectionPage;
  let fixture: ComponentFixture<VsectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VsectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
