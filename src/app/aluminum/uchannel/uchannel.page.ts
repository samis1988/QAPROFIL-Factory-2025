import { Component, OnInit } from '@angular/core';
import { ViewerModalComponent } from '@herdwatch-apps/ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { ViewChild, ElementRef } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-uchannel',
  templateUrl: './uchannel.page.html',
  styleUrls: ['./uchannel.page.scss'],
})
export class UchannelPage implements OnInit {

  selectedSize: string = '';


  constructor(private toastCtrl: ToastController, private cartService: CartService, public modalController: ModalController, private platform: Platform, private router: Router, private location: Location) {

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
  image1: any = "assets/img/qaprofil/u_channel.png";
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
  addtocart(inputRef: IonInput) {
    const item_name = "Prepainted U Channel";
    const color = "";
    const l_m = "3";
    this.cartService.addItem(item_name, inputRef, this.selectedSize, this.image1, color,l_m);

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
