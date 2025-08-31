import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMsgPage } from './send-msg.page';

const routes: Routes = [
  {
    path: '',
    component: SendMsgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendMsgPageRoutingModule {}
