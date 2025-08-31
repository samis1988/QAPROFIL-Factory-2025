import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerimeteranglePage } from './perimeterangle.page';

const routes: Routes = [
  {
    path: '',
    component: PerimeteranglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerimeteranglePageRoutingModule {}
