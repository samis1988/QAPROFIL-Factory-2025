import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LintelPage } from './lintel.page';

describe('LintelPage', () => {
  let component: LintelPage;
  let fixture: ComponentFixture<LintelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LintelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
