import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FurringChannelPage } from './furring-channel.page';

describe('FurringChannelPage', () => {
  let component: FurringChannelPage;
  let fixture: ComponentFixture<FurringChannelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FurringChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
