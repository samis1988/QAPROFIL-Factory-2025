import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JtrimPage } from './jtrim.page';

const routes: Routes = [
  {
    path: '',
    component: JtrimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JtrimPageRoutingModule {}
