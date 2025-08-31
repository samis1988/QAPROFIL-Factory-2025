import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainGalerryPageRoutingModule } from './main-galerry-routing.module';

import { MainGalerryPage } from './main-galerry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainGalerryPageRoutingModule
  ],
  declarations: [MainGalerryPage]
})
export class MainGalerryPageModule {}
