import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendMsgListPage } from './send-msg-list.page';

describe('SendMsgListPage', () => {
  let component: SendMsgListPage;
  let fixture: ComponentFixture<SendMsgListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMsgListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
