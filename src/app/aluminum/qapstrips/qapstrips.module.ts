import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QapstripsPageRoutingModule } from './qapstrips-routing.module';

import { QapstripsPage } from './qapstrips.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QapstripsPageRoutingModule
  ],
  declarations: [QapstripsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QapstripsPageModule {}
