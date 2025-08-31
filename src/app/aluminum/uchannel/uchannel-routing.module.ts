import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UchannelPage } from './uchannel.page';

const routes: Routes = [
  {
    path: '',
    component: UchannelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UchannelPageRoutingModule {}
