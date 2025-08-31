import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Panel84RPage } from './panel84-r.page';

const routes: Routes = [
  {
    path: '',
    component: Panel84RPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Panel84RPageRoutingModule {}
