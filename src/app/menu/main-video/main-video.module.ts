import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainVideoPageRoutingModule } from './main-video-routing.module';

import { MainVideoPage } from './main-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainVideoPageRoutingModule
  ],
  declarations: [MainVideoPage]
})
export class MainVideoPageModule {}
