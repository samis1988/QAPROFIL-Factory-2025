import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudlesPage } from './studles.page';

const routes: Routes = [
  {
    path: '',
    component: StudlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudlesPageRoutingModule {}
