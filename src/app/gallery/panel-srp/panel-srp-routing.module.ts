import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelSrpPage } from './panel-srp.page';

const routes: Routes = [
  {
    path: '',
    component: PanelSrpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelSrpPageRoutingModule {}
