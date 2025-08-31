import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendMsgPageRoutingModule } from './send-msg-routing.module';

import { SendMsgPage } from './send-msg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendMsgPageRoutingModule
  ],
  declarations: [SendMsgPage]
})
export class SendMsgPageModule {}
