import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoofsheetPageRoutingModule } from './roofsheet-routing.module';

import { RoofsheetPage } from './roofsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoofsheetPageRoutingModule
  ],
  declarations: [RoofsheetPage]
})
export class RoofsheetPageModule {}
