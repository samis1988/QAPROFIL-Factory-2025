import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainVideoPage } from './main-video.page';

const routes: Routes = [
  {
    path: '',
    component: MainVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainVideoPageRoutingModule {}
