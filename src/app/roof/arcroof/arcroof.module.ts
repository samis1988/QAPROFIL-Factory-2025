import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcroofPageRoutingModule } from './arcroof-routing.module';

import { ArcroofPage } from './arcroof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcroofPageRoutingModule
  ],
  declarations: [ArcroofPage]
})
export class ArcroofPageModule {}
