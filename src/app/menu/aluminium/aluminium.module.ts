import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AluminiumPageRoutingModule } from './aluminium-routing.module';

import { AluminiumPage } from './aluminium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AluminiumPageRoutingModule
  ],
  declarations: [AluminiumPage]
})
export class AluminiumPageModule {}
