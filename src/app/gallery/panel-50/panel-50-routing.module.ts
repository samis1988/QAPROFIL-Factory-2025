import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Panel50Page } from './panel-50.page';

const routes: Routes = [
  {
    path: '',
    component: Panel50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Panel50PageRoutingModule {}
