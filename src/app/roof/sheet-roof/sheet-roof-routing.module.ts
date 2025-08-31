import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetRoofPage } from './sheet-roof.page';

const routes: Routes = [
  {
    path: '',
    component: SheetRoofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetRoofPageRoutingModule {}
