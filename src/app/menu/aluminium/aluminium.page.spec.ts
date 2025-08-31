import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AluminiumPage } from './aluminium.page';

describe('AluminiumPage', () => {
  let component: AluminiumPage;
  let fixture: ComponentFixture<AluminiumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
