import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Swiper } from 'swiper';
 
import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portacabin',
  templateUrl: './portacabin.page.html',
  styleUrls: ['./portacabin.page.scss'],
})
export class PortacabinPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  videoUrl: any = "https://www.youtube.com/embed/AYFBtgQ6KBM";
  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];
  products: any[] = [
    { title: 'Gypsum Ceilings', component: 'gypsum', image: 'assets/img/qaprofil/portacabin/1.jpg' },
    { title: 'Indoor Aluminum', component: 'aluminium', image: 'assets/img/qaprofil/portacabin/2.png' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/portacabin/3.png' },
    { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/qaprofil/portacabin/4.png' },
     
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
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }
  showVideo(video:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
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
