import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UchannelPage } from './uchannel.page';

describe('UchannelPage', () => {
  let component: UchannelPage;
  let fixture: ComponentFixture<UchannelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UchannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
