import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudlesPageRoutingModule } from './studles-routing.module';

import { StudlesPage } from './studles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudlesPageRoutingModule
  ],
  declarations: [StudlesPage]
})
export class StudlesPageModule {}
