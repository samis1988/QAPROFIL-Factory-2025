import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FurringChannelPageRoutingModule } from './furring-channel-routing.module';

import { FurringChannelPage } from './furring-channel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FurringChannelPageRoutingModule
  ],
  declarations: [FurringChannelPage]
})
export class FurringChannelPageModule {}
