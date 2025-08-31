import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatergaterPageRoutingModule } from './watergater-routing.module';

import { WatergaterPage } from './watergater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatergaterPageRoutingModule
  ],
  declarations: [WatergaterPage]
})
export class WatergaterPageModule {}
