import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-slitting',
  templateUrl: './slitting.page.html',
  styleUrls: ['./slitting.page.scss'],
})
export class SlittingPage implements OnInit {
  products: any[] = [
    { title: '', component: 'gypsum', image: 'assets/img/qaprofil/slitting/1.jpg' },
    { title: '', component: 'aluminium', image: 'assets/img/qaprofil/slitting/2.jpg' },
    { title: '', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/slitting/3.jpg' },
    { title: '', component: 'RoofpanelsPage', image: 'assets/img/qaprofil/slitting/4.jpg' },
    { title: '', component: 'RoofpanelsPage', image: 'assets/img/qaprofil/slitting/5.jpg' },

  ]
  constructor(private sanitizer: DomSanitizer, public modalController: ModalController, private platform: Platform, private router: Router, private location: Location) {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority
        (999999, () => {
          var url = this.router['routerState'].snapshot.url;
          if (url != "tabs/tab1") {

            this.location.back();
          }

        })

    })
  }

  ngOnInit() {
  }
    async openViewer(imagee: any) {
      const modal = await this.modalController.create({
        component: ViewerModalComponent,
        componentProps: {
          src: imagee
        },
        cssClass: 'ion-img-viewer',
        keyboardClose: true,
        showBackdrop: true
      });

      return await modal.present();
    }
  }

