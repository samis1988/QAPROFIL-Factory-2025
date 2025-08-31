import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMsgUsersPage } from './send-msg-users.page';

const routes: Routes = [
  {
    path: '',
    component: SendMsgUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendMsgUsersPageRoutingModule {}
