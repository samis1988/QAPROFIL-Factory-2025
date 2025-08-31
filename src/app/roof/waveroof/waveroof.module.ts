import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaveroofPageRoutingModule } from './waveroof-routing.module';

import { WaveroofPage } from './waveroof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaveroofPageRoutingModule
  ],
  declarations: [WaveroofPage]
})
export class WaveroofPageModule {}
