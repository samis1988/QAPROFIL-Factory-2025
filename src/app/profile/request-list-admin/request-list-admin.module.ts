import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestListAdminPageRoutingModule } from './request-list-admin-routing.module';

import { RequestListAdminPage } from './request-list-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestListAdminPageRoutingModule
  ],
  declarations: [RequestListAdminPage]
})
export class RequestListAdminPageModule {}
