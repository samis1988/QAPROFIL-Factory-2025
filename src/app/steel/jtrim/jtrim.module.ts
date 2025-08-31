import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JtrimPageRoutingModule } from './jtrim-routing.module';

import { JtrimPage } from './jtrim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JtrimPageRoutingModule
  ],
  declarations: [JtrimPage]
})
export class JtrimPageModule {}
