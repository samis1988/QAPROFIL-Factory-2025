import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainchannelPageRoutingModule } from './mainchannel-routing.module';

import { MainchannelPage } from './mainchannel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainchannelPageRoutingModule
  ],
  declarations: [MainchannelPage]
})
export class MainchannelPageModule {}
