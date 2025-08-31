import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LintelPage } from './lintel.page';

const routes: Routes = [
  {
    path: '',
    component: LintelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LintelPageRoutingModule {}
