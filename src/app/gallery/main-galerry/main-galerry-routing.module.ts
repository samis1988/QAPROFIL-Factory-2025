import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainGalerryPage } from './main-galerry.page';

const routes: Routes = [
  {
    path: '',
    component: MainGalerryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainGalerryPageRoutingModule {}
