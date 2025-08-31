import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerimeteranglePageRoutingModule } from './perimeterangle-routing.module';

import { PerimeteranglePage } from './perimeterangle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerimeteranglePageRoutingModule
  ],
  declarations: [PerimeteranglePage]
})
export class PerimeteranglePageModule {}
