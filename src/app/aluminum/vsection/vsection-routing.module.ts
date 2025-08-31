import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VsectionPage } from './vsection.page';

const routes: Routes = [
  {
    path: '',
    component: VsectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VsectionPageRoutingModule {}
