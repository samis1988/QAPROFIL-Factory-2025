import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-panel-srp',
  templateUrl: './panel-srp.page.html',
  styleUrls: ['./panel-srp.page.scss'],
})
export class PanelSrpPage implements OnInit {



  products: any[] = [
    { title: '184R+SRP MNDSTR and MDWD', component: 'gypsum', image: 'assets/img/home/SRP/184R-MNDSTR-SRP MDWD.png' },
    { title: '184R+SRP Beige and Gold', component: 'gypsum', image: 'assets/img/home/SRP/184R+SRP-Beige-and-Gold.png' },
    { title: '184R+SRP Beige and Green', component: 'gypsum', image: 'assets/img/home/SRP/184R+SRP-Beige-and-green-b.png' },
    { title: '184R+SRP MNDSTR and MNDB', component: 'gypsum', image: 'assets/img/home/SRP/184R-MNDSTR---SRP-MNDB.png' },
    { title: '184R+SRP MNDST and MNDBM', component: 'gypsum', image: 'assets/img/home/SRP/184R-MNDSTR---SRP-MNDBM.png' },
    { title: '184R+SRP SW and MDWD', component: 'gypsum', image: 'assets/img/home/SRP/184R-SW---SRP-MDWD.png' },
    { title: '184R+SRP  SRP and SSBL', component: 'gypsum', image: 'assets/img/home/SRP/184R-SW---SRP-SSBL.png' },
    { title: '184R+SRP SRP and MGNB', component: 'gypsum', image: 'assets/img/home/SRP/SRP-MGNB.png' },
     




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
