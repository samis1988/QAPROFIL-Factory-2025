import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemiroundPageRoutingModule } from './semiround-routing.module';

import { SemiroundPage } from './semiround.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemiroundPageRoutingModule
  ],
  declarations: [SemiroundPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SemiroundPageModule {}
