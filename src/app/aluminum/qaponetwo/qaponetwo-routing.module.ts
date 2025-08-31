import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QaponetwoPage } from './qaponetwo.page';

const routes: Routes = [
  {
    path: '',
    component: QaponetwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QaponetwoPageRoutingModule {}
