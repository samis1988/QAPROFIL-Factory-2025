import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlittingPage } from './slitting.page';

const routes: Routes = [
  {
    path: '',
    component: SlittingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlittingPageRoutingModule {}
