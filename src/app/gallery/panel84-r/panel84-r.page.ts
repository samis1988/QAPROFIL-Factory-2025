import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-panel84-r',
  templateUrl: './panel84-r.page.html',
  styleUrls: ['./panel84-r.page.scss'],
})
export class Panel84RPage implements OnInit {

  products: any[] = [
    { title: '84R - SLA', component: 'gypsum', image: 'assets/img/home/84r/7---84R-SLA.png' },
    { title: '84R - SSBL', component: 'gypsum', image: 'assets/img/home/84r/10---84R-SSBL.png' },
    { title: '84R - ST', component: 'gypsum', image: 'assets/img/home/84r/14---134R-ST.png' },
    { title: '84R - SB', component: 'gypsum', image: 'assets/img/home/84r/20---84R-SB---Joint-SB.png' },
    { title: '84R - GT', component: 'gypsum', image: 'assets/img/home/84r/84R-GT.png' },
    { title: '84R - MW', component: 'gypsum', image: 'assets/img/home/84r/84-R---MW.png' },
     




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


  image1: any = "assets/img/qaprofil/p_a_alum.png";
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
