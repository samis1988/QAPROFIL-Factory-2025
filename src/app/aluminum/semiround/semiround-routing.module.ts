import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemiroundPage } from './semiround.page';

const routes: Routes = [
  {
    path: '',
    component: SemiroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemiroundPageRoutingModule {}
