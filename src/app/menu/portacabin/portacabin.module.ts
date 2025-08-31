import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortacabinPageRoutingModule } from './portacabin-routing.module';

import { PortacabinPage } from './portacabin.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortacabinPageRoutingModule
  ],
  declarations: [PortacabinPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortacabinPageModule {}

 


