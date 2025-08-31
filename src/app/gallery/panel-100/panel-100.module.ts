import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Panel100PageRoutingModule } from './panel-100-routing.module';

import { Panel100Page } from './panel-100.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Panel100PageRoutingModule
  ],
  declarations: [Panel100Page]
})
export class Panel100PageModule {}
