import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainchannelPage } from './mainchannel.page';

const routes: Routes = [
  {
    path: '',
    component: MainchannelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainchannelPageRoutingModule {}
