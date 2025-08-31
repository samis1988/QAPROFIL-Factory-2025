import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JtrimPage } from './jtrim.page';

describe('JtrimPage', () => {
  let component: JtrimPage;
  let fixture: ComponentFixture<JtrimPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JtrimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
