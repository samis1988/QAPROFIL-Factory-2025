import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnglebeadPageRoutingModule } from './anglebead-routing.module';

import { AnglebeadPage } from './anglebead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnglebeadPageRoutingModule
  ],
  declarations: [AnglebeadPage]
})
export class AnglebeadPageModule {}
