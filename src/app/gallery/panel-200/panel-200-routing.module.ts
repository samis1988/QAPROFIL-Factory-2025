import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Panel200Page } from './panel-200.page';

const routes: Routes = [
  {
    path: '',
    component: Panel200Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Panel200PageRoutingModule {}
