import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaveroofPage } from './waveroof.page';

const routes: Routes = [
  {
    path: '',
    component: WaveroofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaveroofPageRoutingModule {}
