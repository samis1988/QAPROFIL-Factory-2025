import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunnerPageRoutingModule } from './runner-routing.module';

import { RunnerPage } from './runner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunnerPageRoutingModule
  ],
  declarations: [RunnerPage]
})
export class RunnerPageModule {}
