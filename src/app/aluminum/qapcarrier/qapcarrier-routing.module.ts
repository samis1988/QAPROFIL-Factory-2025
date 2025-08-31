import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QapcarrierPage } from './qapcarrier.page';

const routes: Routes = [
  {
    path: '',
    component: QapcarrierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QapcarrierPageRoutingModule {}
