import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainVideoPage } from './main-video.page';

describe('MainVideoPage', () => {
  let component: MainVideoPage;
  let fixture: ComponentFixture<MainVideoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
