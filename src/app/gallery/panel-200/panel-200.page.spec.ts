import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Panel200Page } from './panel-200.page';

describe('Panel200Page', () => {
  let component: Panel200Page;
  let fixture: ComponentFixture<Panel200Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel200Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
