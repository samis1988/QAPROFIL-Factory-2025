import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortacabinPage } from './portacabin.page';

const routes: Routes = [
  {
    path: '',
    component: PortacabinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortacabinPageRoutingModule {}
