import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FurringChannelPage } from './furring-channel.page';

const routes: Routes = [
  {
    path: '',
    component: FurringChannelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FurringChannelPageRoutingModule {}
