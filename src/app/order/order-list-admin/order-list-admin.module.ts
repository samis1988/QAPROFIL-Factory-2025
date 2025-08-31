import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderListAdminPageRoutingModule } from './order-list-admin-routing.module';

import { OrderListAdminPage } from './order-list-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderListAdminPageRoutingModule
  ],
  declarations: [OrderListAdminPage]
})
export class OrderListAdminPageModule {}
