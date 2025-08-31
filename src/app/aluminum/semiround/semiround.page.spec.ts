import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemiroundPage } from './semiround.page';

describe('SemiroundPage', () => {
  let component: SemiroundPage;
  let fixture: ComponentFixture<SemiroundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
