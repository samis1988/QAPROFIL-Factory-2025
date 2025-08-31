import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QapcarrierPageRoutingModule } from './qapcarrier-routing.module';

import { QapcarrierPage } from './qapcarrier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QapcarrierPageRoutingModule
  ],
  declarations: [QapcarrierPage]
})
export class QapcarrierPageModule {}
