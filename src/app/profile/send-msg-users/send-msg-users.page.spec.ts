import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendMsgUsersPage } from './send-msg-users.page';

describe('SendMsgUsersPage', () => {
  let component: SendMsgUsersPage;
  let fixture: ComponentFixture<SendMsgUsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMsgUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
