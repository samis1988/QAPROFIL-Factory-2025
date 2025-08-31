import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome-user',
    loadChildren: () => import('./welcome-user/welcome-user.module').then( m => m.WelcomeUserPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'gypsum',
    loadChildren: () => import('./menu/gypsum/gypsum.module').then( m => m.GypsumPageModule)
  },
  {
    path: 'aluminium',
    loadChildren: () => import('./menu/aluminium/aluminium.module').then( m => m.AluminiumPageModule)
  },
  {
    path: 'portacabin',
    loadChildren: () => import('./menu/portacabin/portacabin.module').then( m => m.PortacabinPageModule)
  },
  {
    path: 'slitting',
    loadChildren: () => import('./menu/slitting/slitting.module').then( m => m.SlittingPageModule)
  },
  {
    path: 'main-video',
    loadChildren: () => import('./menu/main-video/main-video.module').then( m => m.MainVideoPageModule)
  },
  {
    path: 'roofsheet',
    loadChildren: () => import('./menu/roofsheet/roofsheet.module').then( m => m.RoofsheetPageModule)
  },
  {
    path: 'lintel',
    loadChildren: () => import('./menu/lintel/lintel.module').then( m => m.LintelPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./menu/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'perimeterangle',
    loadChildren: () => import('./menu/perimeterangle/perimeterangle.module').then( m => m.PerimeteranglePageModule)
  },
  {
    path: 'perimeter-angle-steel',
    loadChildren: () => import('./steel/perimeter-angle-steel/perimeter-angle-steel.module').then( m => m.PerimeterAngleSteelPageModule)
  },
  {
    path: 'furring-channel',
    loadChildren: () => import('./steel/furring-channel/furring-channel.module').then( m => m.FurringChannelPageModule)
  },
  {
    path: 'mainchannel',
    loadChildren: () => import('./steel/mainchannel/mainchannel.module').then( m => m.MainchannelPageModule)
  },
  {
    path: 'anglebead',
    loadChildren: () => import('./steel/anglebead/anglebead.module').then( m => m.AnglebeadPageModule)
  },
  {
    path: 'runner',
    loadChildren: () => import('./steel/runner/runner.module').then( m => m.RunnerPageModule)
  },
  {
    path: 'jtrim',
    loadChildren: () => import('./steel/jtrim/jtrim.module').then( m => m.JtrimPageModule)
  },
  {
    path: 'studles',
    loadChildren: () => import('./steel/studles/studles.module').then( m => m.StudlesPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'vsection',
    loadChildren: () => import('./aluminum/vsection/vsection.module').then( m => m.VsectionPageModule)
  },
  {
    path: 'qapcarrier',
    loadChildren: () => import('./aluminum/qapcarrier/qapcarrier.module').then( m => m.QapcarrierPageModule)
  },
  {
    path: 'perimeteranglealum',
    loadChildren: () => import('./aluminum/perimeteranglealum/perimeteranglealum.module').then( m => m.PerimeteranglealumPageModule)
  },
  {
    path: 'uchannel',
    loadChildren: () => import('./aluminum/uchannel/uchannel.module').then( m => m.UchannelPageModule)
  },
  {
    path: 'stripsjoint',
    loadChildren: () => import('./aluminum/stripsjoint/stripsjoint.module').then( m => m.StripsjointPageModule)
  },
  {
    path: 'qapstrips',
    loadChildren: () => import('./aluminum/qapstrips/qapstrips.module').then( m => m.QapstripsPageModule)
  },
  {
    path: 'qaponetwo',
    loadChildren: () => import('./aluminum/qaponetwo/qaponetwo.module').then( m => m.QaponetwoPageModule)
  },
  {
    path: 'tbar',
    loadChildren: () => import('./aluminum/tbar/tbar.module').then( m => m.TbarPageModule)
  },
  {
    path: 'semiround',
    loadChildren: () => import('./aluminum/semiround/semiround.module').then( m => m.SemiroundPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./aluminum/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
   
  {
    path: 'waveroof',
    loadChildren: () => import('./roof/waveroof/waveroof.module').then( m => m.WaveroofPageModule)
  },
  {
    path: 'arcroof',
    loadChildren: () => import('./roof/arcroof/arcroof.module').then( m => m.ArcroofPageModule)
  },
  {
    path: 'ridgecap',
    loadChildren: () => import('./roof/ridgecap/ridgecap.module').then( m => m.RidgecapPageModule)
  },
  {
    path: 'downspout',
    loadChildren: () => import('./roof/downspout/downspout.module').then( m => m.DownspoutPageModule)
  },
  {
    path: 'watergater',
    loadChildren: () => import('./roof/watergater/watergater.module').then( m => m.WatergaterPageModule)
  },
  {
    path: 'sheet-roof',
    loadChildren: () => import('./roof/sheet-roof/sheet-roof.module').then( m => m.SheetRoofPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'quality',
    loadChildren: () => import('./quality/quality.module').then( m => m.QualityPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'main-galerry',
    loadChildren: () => import('./gallery/main-galerry/main-galerry.module').then( m => m.MainGalerryPageModule)
  },
  {
    path: 'panel84-r',
    loadChildren: () => import('./gallery/panel84-r/panel84-r.module').then( m => m.Panel84RPageModule)
  },
  {
    path: 'panel-srp',
    loadChildren: () => import('./gallery/panel-srp/panel-srp.module').then( m => m.PanelSrpPageModule)
  },
  {
    path: 'panel-50',
    loadChildren: () => import('./gallery/panel-50/panel-50.module').then( m => m.Panel50PageModule)
  },
  {
    path: 'panel-100',
    loadChildren: () => import('./gallery/panel-100/panel-100.module').then( m => m.Panel100PageModule)
  },
  {
    path: 'panel-200',
    loadChildren: () => import('./gallery/panel-200/panel-200.module').then( m => m.Panel200PageModule)
  },
  {
    path: 'panel-tbar',
    loadChildren: () => import('./gallery/panel-tbar/panel-tbar.module').then( m => m.PanelTbarPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pdf/pdf.module').then( m => m.PdfPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./user/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./profile/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./profile/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'request-list',
    loadChildren: () => import('./profile/request-list/request-list.module').then( m => m.RequestListPageModule)
  },
  {
    path: 'super-admin',
    loadChildren: () => import('./profile/super-admin/super-admin.module').then( m => m.SuperAdminPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./profile/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'send-msg',
    loadChildren: () => import('./profile/send-msg/send-msg.module').then( m => m.SendMsgPageModule)
  },
  {
    path: 'send-msg-users',
    loadChildren: () => import('./profile/send-msg-users/send-msg-users.module').then( m => m.SendMsgUsersPageModule)
  },
  {
    path: 'send-msg-list',
    loadChildren: () => import('./profile/send-msg-list/send-msg-list.module').then( m => m.SendMsgListPageModule)
  },
  {
    path: 'request-list-admin',
    loadChildren: () => import('./profile/request-list-admin/request-list-admin.module').then( m => m.RequestListAdminPageModule)
  },
  {
    path: 'request-view',
    loadChildren: () => import('./profile/request-view/request-view.module').then( m => m.RequestViewPageModule)
  },
  {
    path: 'users-view',
    loadChildren: () => import('./profile/users-view/users-view.module').then( m => m.UsersViewPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./shop/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./order/order-list/order-list.module').then( m => m.OrderListPageModule)
  },
  {
    path: 'order-item',
    loadChildren: () => import('./order/order-item/order-item.module').then( m => m.OrderItemPageModule)
  },
  {
    path: 'order-item-details',
    loadChildren: () => import('./order/order-item-details/order-item-details.module').then( m => m.OrderItemDetailsPageModule)
  },
  {
    path: 'order-list-admin',
    loadChildren: () => import('./order/order-list-admin/order-list-admin.module').then( m => m.OrderListAdminPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
