import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudlesPage } from './studles.page';

describe('StudlesPage', () => {
  let component: StudlesPage;
  let fixture: ComponentFixture<StudlesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
