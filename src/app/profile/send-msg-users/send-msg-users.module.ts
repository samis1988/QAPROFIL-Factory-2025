import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendMsgUsersPageRoutingModule } from './send-msg-users-routing.module';

import { SendMsgUsersPage } from './send-msg-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendMsgUsersPageRoutingModule
  ],
  declarations: [SendMsgUsersPage]
})
export class SendMsgUsersPageModule {}
