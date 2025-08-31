import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunnerPage } from './runner.page';

describe('RunnerPage', () => {
  let component: RunnerPage;
  let fixture: ComponentFixture<RunnerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
