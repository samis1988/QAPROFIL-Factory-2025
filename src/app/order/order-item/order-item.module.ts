import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderItemPageRoutingModule } from './order-item-routing.module';

import { OrderItemPage } from './order-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderItemPageRoutingModule
  ],
  declarations: [OrderItemPage]
})
export class OrderItemPageModule {}
