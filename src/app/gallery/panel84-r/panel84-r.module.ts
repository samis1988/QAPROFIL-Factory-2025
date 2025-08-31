import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Panel84RPageRoutingModule } from './panel84-r-routing.module';

import { Panel84RPage } from './panel84-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Panel84RPageRoutingModule
  ],
  declarations: [Panel84RPage]
})
export class Panel84RPageModule {}
