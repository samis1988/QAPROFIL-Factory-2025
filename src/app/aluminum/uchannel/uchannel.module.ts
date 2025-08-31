import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UchannelPageRoutingModule } from './uchannel-routing.module';

import { UchannelPage } from './uchannel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UchannelPageRoutingModule
  ],
  declarations: [UchannelPage]
})
export class UchannelPageModule {}
