import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerimeterAngleSteelPageRoutingModule } from './perimeter-angle-steel-routing.module';

import { PerimeterAngleSteelPage } from './perimeter-angle-steel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerimeterAngleSteelPageRoutingModule
  ],
  declarations: [PerimeterAngleSteelPage]
})
export class PerimeterAngleSteelPageModule {}
