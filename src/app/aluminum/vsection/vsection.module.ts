import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VsectionPageRoutingModule } from './vsection-routing.module';

import { VsectionPage } from './vsection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VsectionPageRoutingModule
  ],
  declarations: [VsectionPage]
})
export class VsectionPageModule {}
