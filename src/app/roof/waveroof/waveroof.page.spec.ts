import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaveroofPage } from './waveroof.page';

describe('WaveroofPage', () => {
  let component: WaveroofPage;
  let fixture: ComponentFixture<WaveroofPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveroofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
