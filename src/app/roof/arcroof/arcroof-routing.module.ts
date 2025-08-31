import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcroofPage } from './arcroof.page';

const routes: Routes = [
  {
    path: '',
    component: ArcroofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcroofPageRoutingModule {}
