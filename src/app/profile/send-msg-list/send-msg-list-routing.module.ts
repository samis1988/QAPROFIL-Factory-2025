import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMsgListPage } from './send-msg-list.page';

const routes: Routes = [
  {
    path: '',
    component: SendMsgListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendMsgListPageRoutingModule {}
