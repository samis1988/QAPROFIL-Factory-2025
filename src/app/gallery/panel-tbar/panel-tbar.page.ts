import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-panel-tbar',
  templateUrl: './panel-tbar.page.html',
  styleUrls: ['./panel-tbar.page.scss'],
})
export class PanelTbarPage implements OnInit {

  products: any[] = [
    { title: 'Amphie', component: 'gypsum', image: 'assets/img/home/tbar/Amphie.png' },
    { title: 'Hospital', component: 'gypsum', image: 'assets/img/home/tbar/Hospital.png' },
  
    { title: 'Office', component: 'gypsum', image: 'assets/img/home/tbar/Office.png' },
    { title: 'Office', component: 'gypsum', image: 'assets/img/home/tbar/Office-2.png' },
    
    { title: 'Office', component: 'gypsum', image: 'assets/img/home/tbar/office-gold.png' },
    { title: 'Office', component: 'gypsum', image: 'assets/img/home/tbar/office-wood.png' },
     


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
