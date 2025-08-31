import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Panel100Page } from './panel-100.page';

const routes: Routes = [
  {
    path: '',
    component: Panel100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Panel100PageRoutingModule {}
