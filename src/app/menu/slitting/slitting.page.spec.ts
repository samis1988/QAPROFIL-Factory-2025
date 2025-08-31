import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlittingPage } from './slitting.page';

describe('SlittingPage', () => {
  let component: SlittingPage;
  let fixture: ComponentFixture<SlittingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlittingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
