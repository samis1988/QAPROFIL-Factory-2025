import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainchannelPage } from './mainchannel.page';

describe('MainchannelPage', () => {
  let component: MainchannelPage;
  let fixture: ComponentFixture<MainchannelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainchannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
