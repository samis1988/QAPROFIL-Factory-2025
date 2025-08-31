import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-panel-50',
  templateUrl: './panel-50.page.html',
  styleUrls: ['./panel-50.page.scss'],
})
export class Panel50Page implements OnInit {

  products: any[] = [

    { title: 'Qap 100 - Pergola', component: 'gypsum', image: 'assets/img/home/Pergola/1-mddw.png' },
    { title: 'Qap 100 -  Pergola', component: 'gypsum', image: 'assets/img/home/Pergola/2-purgula_Mwwd.png' },
    { title: 'Qap 100 - Pergola', component: 'gypsum', image: 'assets/img/home/Pergola/gold.png' },
    { title: 'Qap 100 -  Pergola', component: 'gypsum', image: 'assets/img/home/Pergola/golden2.png' },
    { title: 'Qap 100 -  Pergola', component: 'gypsum', image: 'assets/img/home/Pergola/selver.png' },


    { title: 'Qap 50 - Math Dark Wood', component: 'gypsum', image: 'assets/img/home/qap50/50-Bathroom-Math-Dark-Wood.png' },
    { title: 'Qap 50 -  Math white Wood', component: 'gypsum', image: 'assets/img/home/qap50/50-Bathroom-Math-white-Wood.png' },

    { title: 'Qap 50 - Shiny Light Grey', component: 'gypsum', image: 'assets/img/home/qap50/50-Bathroom-Shiny-Light-Gre.png' },
    { title: 'Qap 100 -  Color White', component: 'gypsum', image: 'assets/img/home/qap100/Airport-QAP-100-Color-White.png' },
    { title: 'Qap 100 -Shiny Chrome', component: 'gypsum', image: 'assets/img/home/qap100/Airport-QAP-100-SC.png' },

    { title: 'Qap 100 -Math Dark Wood', component: 'gypsum', image: 'assets/img/home/qap100/Bathroom-QAP-100-Math-Dark.png' },
    { title: 'Qap 100 - MWWD', component: 'gypsum', image: 'assets/img/home/qap100/GYM---Color-MWWD.png' },
    { title: 'Qap 100 - Math White', component: 'gypsum', image: 'assets/img/home/qap100/Bathroom-QAP-100-Math-White.png' },
    { title: 'Qap 100 - Shiny Light', component: 'gypsum', image: 'assets/img/home/qap100/Bathroom-QAP-100-Shiny-Ligh.png' },
    { title: 'Qap 100 - MRBL', component: 'gypsum', image: 'assets/img/home/qap100/GYM--Color-MRBL.png' },

    { title: 'Qap 100 - SB', component: 'gypsum', image: 'assets/img/home/qap100/GYM---Color-SB.png' },
    { title: 'Qap 100 - SLA', component: 'gypsum', image: 'assets/img/home/qap100/GYM--Color-SLA.png' },
    { title: 'Qap 100 - SLG', component: 'gypsum', image: 'assets/img/home/qap100/GYM---Color-SLG.png' },
    { title: 'Qap 200 -  Color White ', component: 'gypsum', image: 'assets/img/home/qap200/Bathroom -QAP-200.png' },
    { title: 'Qap 200 - Shiny Lead', component: 'gypsum', image: 'assets/img/home/qap200/Bathroom-QAP-200-.png' },
    { title: 'Qap 200 - Math Dark Wood', component: 'gypsum', image: 'assets/img/home/qap200/QAP-200 Bathroom.png' },



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
