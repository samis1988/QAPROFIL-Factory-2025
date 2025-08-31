import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerimeteranglealumPage } from './perimeteranglealum.page';

const routes: Routes = [
  {
    path: '',
    component: PerimeteranglealumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerimeteranglealumPageRoutingModule {}
