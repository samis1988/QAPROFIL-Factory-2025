import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunnerPage } from './runner.page';

const routes: Routes = [
  {
    path: '',
    component: RunnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunnerPageRoutingModule {}
