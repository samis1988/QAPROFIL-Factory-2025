import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Panel50PageRoutingModule } from './panel-50-routing.module';

import { Panel50Page } from './panel-50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Panel50PageRoutingModule
  ],
  declarations: [Panel50Page]
})
export class Panel50PageModule {}
