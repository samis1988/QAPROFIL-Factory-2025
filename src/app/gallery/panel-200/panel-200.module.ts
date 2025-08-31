import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Panel200PageRoutingModule } from './panel-200-routing.module';

import { Panel200Page } from './panel-200.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Panel200PageRoutingModule
  ],
  declarations: [Panel200Page]
})
export class Panel200PageModule {}
