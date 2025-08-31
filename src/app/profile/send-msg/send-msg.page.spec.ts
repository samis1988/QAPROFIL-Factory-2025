import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendMsgPage } from './send-msg.page';

describe('SendMsgPage', () => {
  let component: SendMsgPage;
  let fixture: ComponentFixture<SendMsgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
