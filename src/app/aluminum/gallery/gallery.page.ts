import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
 

import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  products: any[] = [
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
    { title: '184R+SRP MNDSTR and MDWD', component: 'gypsum', image: 'assets/img/home/SRP/184R-MNDSTR-SRP MDWD.png' },
    { title: '184R+SRP Beige and Gold', component: 'gypsum', image: 'assets/img/home/SRP/184R+SRP-Beige-and-Gold.png' },
    { title: '184R+SRP Beige and Green', component: 'gypsum', image: 'assets/img/home/SRP/184R+SRP-Beige-and-green-b.png' },
    { title: '184R+SRP MNDSTR and MNDB', component: 'gypsum', image: 'assets/img/home/SRP/184R-MNDSTR---SRP-MNDB.png' },
    { title: '184R+SRP MNDST and MNDBM', component: 'gypsum', image: 'assets/img/home/SRP/184R-MNDSTR---SRP-MNDBM.png' },
    { title: '184R+SRP SW and MDWD', component: 'gypsum', image: 'assets/img/home/SRP/184R-SW---SRP-MDWD.png' },
    { title: '184R+SRP  SRP and SSBL', component: 'gypsum', image: 'assets/img/home/SRP/184R-SW---SRP-SSBL.png' },
    { title: '184R+SRP SRP and MGNB', component: 'gypsum', image: 'assets/img/home/SRP/SRP-MGNB.png' },
    { title: '84R - SLA', component: 'gypsum', image: 'assets/img/home/84r/7---84R-SLA.png' },
    { title: '84R - SSBL', component: 'gypsum', image: 'assets/img/home/84r/10---84R-SSBL.png' },
    { title: '84R - ST', component: 'gypsum', image: 'assets/img/home/84r/14---134R-ST.png' },
    { title: '84R - SB', component: 'gypsum', image: 'assets/img/home/84r/20---84R-SB---Joint-SB.png' },
    { title: '84R - GT', component: 'gypsum', image: 'assets/img/home/84r/84R-GT.png' },
    { title: '84R - MW', component: 'gypsum', image: 'assets/img/home/84r/84-R---MW.png' },
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
