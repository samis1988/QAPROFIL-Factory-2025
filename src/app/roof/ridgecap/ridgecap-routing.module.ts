import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidgecapPage } from './ridgecap.page';

const routes: Routes = [
  {
    path: '',
    component: RidgecapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidgecapPageRoutingModule {}
