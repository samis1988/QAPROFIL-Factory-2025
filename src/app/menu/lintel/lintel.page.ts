import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { CartService } from '../../service/cart.service';
 
import { IonInput } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lintel',
  templateUrl: './lintel.page.html',
  styleUrls: ['./lintel.page.scss'],
})
export class LintelPage implements OnInit {
  products: any[] = [
    { title: 'Gypsum Ceilings', component: 'gypsum', image: 'assets/img/qaprofil/lintel/1.png' },
    { title: 'Indoor Aluminum', component: 'aluminium', image: 'assets/img/qaprofil/lintel/2.png' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/lintel/3.png' },
    { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/qaprofil/lintel/4.bmp' },

  ]
  selectedColor: string = '';
  selected_Thickness: string = '';
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
  image1: any = "assets/img/qaprofil/lintel/1.png";
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

  //***************************************************************************************************
  getCart_length() {
    return this.cartService.getCart() || [];
  }
  async addtocart(inputRef: IonInput) {


    const inputEl = await this.LmInput.getInputElement();
    const lm = inputEl.value;

    const item_name = "Lintel";
    const color = "Galv";

    this.cartService.addItem(item_name, inputRef, this.selected_Thickness, this.image1, color, lm);

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
