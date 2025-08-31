import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-panel-100',
  templateUrl: './panel-100.page.html',
  styleUrls: ['./panel-100.page.scss'],
})
export class Panel100Page implements OnInit {


  products: any[] = [
    { title: 'Airport Color White', component: 'gypsum', image: 'assets/img/home/qap100/Airport-QAP-100-Color-White.png' },
    { title: 'Airport Shiny Chrome', component: 'gypsum', image: 'assets/img/home/qap100/Airport-QAP-100-SC.png' },

    { title: 'Bathroom Math Dark Wood', component: 'gypsum', image: 'assets/img/home/qap100/Bathroom-QAP-100-Math-Dark-.png' },
    { title: 'GYM Color MWWD', component: 'gypsum', image: 'assets/img/home/qap100/GYM---Color-MWWD.png' },
    { title: 'Bathroom Math White', component: 'gypsum', image: 'assets/img/home/qap100/Bathroom-QAP-100-Math-White.png' },
    { title: 'Bathroom Shiny Light', component: 'gypsum', image: 'assets/img/home/qap100/Bathroom-QAP-100-Shiny-Ligh.png' },
    { title: 'GYM Color MRBL', component: 'gypsum', image: 'assets/img/home/qap100/GYM--Color-MRBL.png' },
   
    { title: 'GYM Color SB', component: 'gypsum', image: 'assets/img/home/qap100/GYM---Color-SB.png' },
    { title: 'GYM Color SLA', component: 'gypsum', image: 'assets/img/home/qap100/GYM--Color-SLA.png' },
    { title: 'GYM Color SLG', component: 'gypsum', image: 'assets/img/home/qap100/GYM---Color-SLG.png' },




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
