import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidgecapPageRoutingModule } from './ridgecap-routing.module';

import { RidgecapPage } from './ridgecap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidgecapPageRoutingModule
  ],
  declarations: [RidgecapPage]
})
export class RidgecapPageModule {}
