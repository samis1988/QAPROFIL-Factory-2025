import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Swiper } from 'swiper';

import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IonInput } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-tbar',
  templateUrl: './tbar.page.html',
  styleUrls: ['./tbar.page.scss'],
})
export class TbarPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;



  products: any[] = [
    { title: 'Gypsum Ceilings', component: 'gypsum', image: 'assets/img/qaprofil/tbar/1.png' },
    { title: 'Indoor Aluminum', component: 'aluminium', image: 'assets/img/qaprofil/tbar/2.png' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/tbar/3.png' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/tbar/4.png' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/full_image/tbar-1.jpg' },


  ]
  selectedtbar: string = '';
  l_m_tbar: string = '0';
  constructor(private toastCtrl: ToastController, private cartService: CartService,private sanitizer: DomSanitizer, public modalController: ModalController, private platform: Platform, private router: Router, private location: Location) {

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


  image1: any = "assets/img/qaprofil/tbar/1.png";
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
  showVideo(video: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }
  //***************************************************************************************************
  getCart_length() {
    return this.cartService.getCart() || [];
  }
  addtocart(inputRef: IonInput) {
    const thickness = "0.3";
    const color = "Galv";
    
    if (this.selectedtbar == "T-Bar Cross-T 60 Section") {
       this.l_m_tbar = "0.6";
    }
    if (this.selectedtbar == "T-Bar Cross-T 120 Section") {
      this.l_m_tbar = "1.2";
    }
    if (this.selectedtbar == "T-Bar Main-T 360 Section") {
      this.l_m_tbar = "3.6";
    }
      
 
    this.cartService.addItem(this.selectedtbar, inputRef, thickness, this.image1, color, this.l_m_tbar);

  }

  @ViewChild('qtyInput', { static: true }) qtyInput!: IonInput;

  increaseQty() {
    this.qtyInput.getInputElement().then((inputEl) => {
      let value = parseInt(inputEl.value as string, 10) || 0;
      if (value < 100000) {
        value++;
        inputEl.value = value.toString();
      }
    });
  }

  decreaseQty() {
    this.qtyInput.getInputElement().then((inputEl) => {
      let value = parseInt(inputEl.value as string, 10) || 1;
      if (value > 1) {
        value--;
        inputEl.value = value.toString();
      }
    });
  }
  goToCart() {
    this.router.navigate(['/panier']); // or your cart page route
  }
  //****************************************************************************************
}
