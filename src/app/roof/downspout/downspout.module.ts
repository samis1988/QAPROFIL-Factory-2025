import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownspoutPageRoutingModule } from './downspout-routing.module';

import { DownspoutPage } from './downspout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownspoutPageRoutingModule
  ],
  declarations: [DownspoutPage]
})
export class DownspoutPageModule {}
