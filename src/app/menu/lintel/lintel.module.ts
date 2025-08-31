import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LintelPageRoutingModule } from './lintel-routing.module';

import { LintelPage } from './lintel.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LintelPageRoutingModule
  ],
  declarations: [LintelPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LintelPageModule {}
