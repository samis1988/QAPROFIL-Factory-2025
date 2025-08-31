import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerimeteranglealumPageRoutingModule } from './perimeteranglealum-routing.module';

import { PerimeteranglealumPage } from './perimeteranglealum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerimeteranglealumPageRoutingModule
  ],
  declarations: [PerimeteranglealumPage]
})
export class PerimeteranglealumPageModule {}
