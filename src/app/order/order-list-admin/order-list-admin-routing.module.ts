import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListAdminPage } from './order-list-admin.page';

const routes: Routes = [
  {
    path: '',
    component: OrderListAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderListAdminPageRoutingModule {}
