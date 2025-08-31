import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortacabinPage } from './portacabin.page';

describe('PortacabinPage', () => {
  let component: PortacabinPage;
  let fixture: ComponentFixture<PortacabinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PortacabinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
