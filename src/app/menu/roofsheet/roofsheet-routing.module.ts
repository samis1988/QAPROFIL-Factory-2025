import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoofsheetPage } from './roofsheet.page';

const routes: Routes = [
  {
    path: '',
    component: RoofsheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoofsheetPageRoutingModule {}
