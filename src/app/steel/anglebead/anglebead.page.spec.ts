import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnglebeadPage } from './anglebead.page';

describe('AnglebeadPage', () => {
  let component: AnglebeadPage;
  let fixture: ComponentFixture<AnglebeadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnglebeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
