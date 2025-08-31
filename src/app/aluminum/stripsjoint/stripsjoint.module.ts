import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripsjointPageRoutingModule } from './stripsjoint-routing.module';

import { StripsjointPage } from './stripsjoint.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripsjointPageRoutingModule
  ],
  declarations: [StripsjointPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StripsjointPageModule {}
