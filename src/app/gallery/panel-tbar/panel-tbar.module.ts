import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelTbarPageRoutingModule } from './panel-tbar-routing.module';

import { PanelTbarPage } from './panel-tbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelTbarPageRoutingModule
  ],
  declarations: [PanelTbarPage]
})
export class PanelTbarPageModule {}
