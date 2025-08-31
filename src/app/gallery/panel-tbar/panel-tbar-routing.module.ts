import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelTbarPage } from './panel-tbar.page';

const routes: Routes = [
  {
    path: '',
    component: PanelTbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelTbarPageRoutingModule {}
