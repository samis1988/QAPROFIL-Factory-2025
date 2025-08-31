import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelSrpPageRoutingModule } from './panel-srp-routing.module';

import { PanelSrpPage } from './panel-srp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelSrpPageRoutingModule
  ],
  declarations: [PanelSrpPage]
})
export class PanelSrpPageModule {}
