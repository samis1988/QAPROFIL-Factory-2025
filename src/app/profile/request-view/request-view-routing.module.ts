import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestViewPage } from './request-view.page';

const routes: Routes = [
  {
    path: '',
    component: RequestViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestViewPageRoutingModule {}
