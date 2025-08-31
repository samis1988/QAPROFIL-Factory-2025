import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerimeterAngleSteelPage } from './perimeter-angle-steel.page';

const routes: Routes = [
  {
    path: '',
    component: PerimeterAngleSteelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerimeterAngleSteelPageRoutingModule {}
