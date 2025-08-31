import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownspoutPage } from './downspout.page';

describe('DownspoutPage', () => {
  let component: DownspoutPage;
  let fixture: ComponentFixture<DownspoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DownspoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
