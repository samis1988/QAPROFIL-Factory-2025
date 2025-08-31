import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnglebeadPage } from './anglebead.page';

const routes: Routes = [
  {
    path: '',
    component: AnglebeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnglebeadPageRoutingModule {}
