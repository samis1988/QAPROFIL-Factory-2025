import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbarPageRoutingModule } from './tbar-routing.module';

import { TbarPage } from './tbar.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbarPageRoutingModule
  ],
  declarations: [TbarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TbarPageModule {}
