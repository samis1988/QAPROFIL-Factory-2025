import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StripsjointPage } from './stripsjoint.page';

const routes: Routes = [
  {
    path: '',
    component: StripsjointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StripsjointPageRoutingModule {}
