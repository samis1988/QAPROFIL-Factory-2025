import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QaponetwoPageRoutingModule } from './qaponetwo-routing.module';

import { QaponetwoPage } from './qaponetwo.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QaponetwoPageRoutingModule
  ],
  declarations: [QaponetwoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QaponetwoPageModule {}
