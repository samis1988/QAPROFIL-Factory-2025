import { Component, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Platform } from '@ionic/angular';
import { IonRouterOutlet, AlertController } from '@ionic/angular';
import { App } from '@capacitor/app';
 
import { Location } from '@angular/common';

import {   EnvironmentInjector, Optional, inject } from '@angular/core';
import {   IonicModule,   ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
 
import { Capacitor } from '@capacitor/core';


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  tap = 0;
  public environmentInjector = inject(EnvironmentInjector);


  public appPages = [
    { title: 'Tutorial', url: 'welcome', image: 'assets/img/icon/tutorial.png', icon: 'planet' },
    { title: 'Home', url: 'tabs/tab1', image: 'assets/img/icon/qq.png', icon: 'home' },
    { title: 'Products', url: 'tabs/tab2', image: 'assets/img/qaprofil/phone.png', icon: 'cart' },
    { title: 'About', url: 'about', image: 'assets/img/exit.png', icon: 'receipt' },
    { title: 'Quality', url: 'quality', image: 'assets/img/exit.png', icon: 'bookmarks' },
    { title: 'Contact', url: 'contact', image: 'assets/img/exit.png', icon: 'call' },
    
 
  ];

  @ViewChild(IonRouterOutlet) outlet:any;
  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    @Optional() private routerOutlet?: IonRouterOutlet
  ) {
    this.platform.ready().then(() => {
     // this.exitAppOnDoubleTap();
       this.exitAppOnAlert();
    });
  }

  exitAppOnAlert() {
    if (Capacitor.getPlatform() == 'android') {
      this.platform.backButton.subscribeWithPriority(10, async () => {
        if (!this.routerOutlet?.canGoBack()) {
          this.alertExit();
        }
      });
    }
  }

  exitAppOnDoubleTap() {
    if (Capacitor.getPlatform() == 'android') {
      this.platform.backButton.subscribeWithPriority(10, async () => {
        if (!this.routerOutlet?.canGoBack()) {
          // double tap exit
          this.tap++;
          if (this.tap == 2) App.exitApp();
          else {
            this.doubleTapExitToast();
          }
        }
      });
    }
  }


  async doubleTapExitToast() {
    console.log('doubletapexit was called!');
    let toast = await this.toastCtrl.create({
      message: 'Tap back button again to exit the App before I\'m gone',
      duration: 3000,
      position: 'bottom',
      color: 'primary'
    });
    toast.present();
    const dismiss = await toast.onDidDismiss();
    if (dismiss) {
      console.log('dismiss: ', dismiss);
      this.tap = 0;
    }
  }

  async alertExit() {
    console.log('alert');
    const alert = await this.alertCtrl.create({
      header: 'Exit App',
      subHeader: 'Confirm',
      message: 'Are you sure you want to exit the App?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel'
        },
        {
          text: 'YES',
          role: 'confirm',
          handler: () => { App.exitApp(); }
        }
      ],
    });
    alert.present();
  }
 

}
