import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbarPage } from './tbar.page';

const routes: Routes = [
  {
    path: '',
    component: TbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbarPageRoutingModule {}
