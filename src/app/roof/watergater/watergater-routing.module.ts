import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatergaterPage } from './watergater.page';

const routes: Routes = [
  {
    path: '',
    component: WatergaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatergaterPageRoutingModule {}
