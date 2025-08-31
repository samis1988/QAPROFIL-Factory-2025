import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatergaterPage } from './watergater.page';

describe('WatergaterPage', () => {
  let component: WatergaterPage;
  let fixture: ComponentFixture<WatergaterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WatergaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
