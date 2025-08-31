import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeUserPage } from './welcome-user.page';

describe('WelcomeUserPage', () => {
  let component: WelcomeUserPage;
  let fixture: ComponentFixture<WelcomeUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
