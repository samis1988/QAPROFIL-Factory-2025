import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Panel100Page } from './panel-100.page';

describe('Panel100Page', () => {
  let component: Panel100Page;
  let fixture: ComponentFixture<Panel100Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
