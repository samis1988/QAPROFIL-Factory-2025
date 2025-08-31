import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownspoutPage } from './downspout.page';

const routes: Routes = [
  {
    path: '',
    component: DownspoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownspoutPageRoutingModule {}
