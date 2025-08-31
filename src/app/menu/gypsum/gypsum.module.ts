import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GypsumPageRoutingModule } from './gypsum-routing.module';

import { GypsumPage } from './gypsum.page';
import { NgxIonicImageViewerModule } from '@herdwatch-apps/ngx-ionic-image-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxIonicImageViewerModule,
    GypsumPageRoutingModule
  ],
  declarations: [GypsumPage]
})
export class GypsumPageModule {}
