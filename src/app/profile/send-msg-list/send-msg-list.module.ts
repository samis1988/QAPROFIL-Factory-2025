import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendMsgListPageRoutingModule } from './send-msg-list-routing.module';

import { SendMsgListPage } from './send-msg-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendMsgListPageRoutingModule
  ],
  declarations: [SendMsgListPage]
})
export class SendMsgListPageModule {}
