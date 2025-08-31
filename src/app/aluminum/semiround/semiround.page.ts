import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Swiper } from 'swiper';

import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { CartService } from '../../service/cart.service';
import { IonInput } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-semiround',
  templateUrl: './semiround.page.html',
  styleUrls: ['./semiround.page.scss'],
})
export class SemiroundPage implements OnInit {


  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;



  products: any[] = [
    { title: 'Gypsum Ceilings', component: 'gypsum', image: 'assets/img/qaprofil/bambo/1.jpg' },
    { title: 'Indoor Aluminum', component: 'aluminium', image: 'assets/img/qaprofil/bambo/2.jpg' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/bambo/3.jpg' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/full_image/semi_round-1.jpg' },
     


  ]
  selectedColor: string = '';
  @ViewChild('LmInput', { static: false }) LmInput!: IonInput;
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


  image1: any = "assets/img/qaprofil/bambo/1.jpg";
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
  async addtocart(inputRef: IonInput) {


    const inputEl = await this.LmInput.getInputElement();
    const lm = inputEl.value;

    const item_name = "Semi-Round Panel";
    const thick = "0.43";

    this.cartService.addItem(item_name, inputRef, thick, this.image1, this.selectedColor, lm);

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
