import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlittingPageRoutingModule } from './slitting-routing.module';

import { SlittingPage } from './slitting.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlittingPageRoutingModule
  ],
  declarations: [SlittingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlittingPageModule {}

 
