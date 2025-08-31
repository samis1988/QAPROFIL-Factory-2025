import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetRoofPageRoutingModule } from './sheet-roof-routing.module';

import { SheetRoofPage } from './sheet-roof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetRoofPageRoutingModule
  ],
  declarations: [SheetRoofPage]
})
export class SheetRoofPageModule {}
