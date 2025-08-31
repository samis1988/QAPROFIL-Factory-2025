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
import { DataService } from '../../service/data.service';
import { AutheticationService } from '../../authetication.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  cartItems = [
    {
      name: 'Produit A',
      price: 20,
      qty: 1,
      image: '../../assets/img/qaprofil/perimeterangle.png'
    },
    {
      name: 'Produit B',
      price: 15,
      qty: 2,
      image: '../../assets/img/qaprofil/perimeterangle.png'
    }
  ];
  email: string = "mimouni";
  cartItemsw: any[] = [];
  result: any = null;
  error: string | null = null;
  userId: any;
  data: any[] = []; // Store data from the PHP backend
  constructor(public authService: AutheticationService, private dataService: DataService ,private toastCtrl: ToastController,private cartService: CartService, public modalController: ModalController, private platform: Platform, private router: Router, private location: Location) {

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

   

    this.authService.getProfile().then(user => {
      this.userId = user?.email;

  



      console.log(this.userId);


    })


    this.cartItemsw = this.cartService.getCart();


  }


  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: any) {
    this.cartItemsw = this.cartItemsw.filter(i => i !== item);
  }

  getTotal() {
    return this.cartItemsw.reduce((total, item) => total + (1 * item.quantity), 0);
  }

  checkout() {
     
   // this.cartService.persistCart(this.cartItemsw, 42, this.email);
  }






  goToCart(page: any) {
    this.router.navigate(['/' + page]); // or your cart page route
  }
  getCart_length() {
    return this.cartService.getCart() || [];
  }
  //******* check out **********************************************************************************************
  async submit() {

    if (this.getCart_length().length == 0) {
      await this.showToast('Your Card is empty  ');
    } else {

    if(!this.userId) {
      await this.showToast('Plz Sign in First ');
      console.log('looooooooooooooog  ' + this.userId);
      this.router.navigateByUrl('/tabs/tab3');
    }
    else {
      console.log('rrrrrrrrrr try' + this.userId);
    try {
      const res = await this.cartService.sendTable(this.cartItemsw, this.userId);
      this.result = res;
      await this.showToast('Saved successfully', 'success');
  
     this.router.navigate(['/order-list']);
 
      this.cartItemsw = [];
      this.cartService.clearCart();
    } catch (err: any) {
      this.result = null;
      await this.showToast(`Save failed: ${err.message}`, 'danger');
    }
      }
    }
  }

  private async showToast(message: string, color: 'success' | 'danger' | 'warning' | 'primary' = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      position: 'top',
      color,
      icon: color === 'success' ? 'checkmark-circle' : (color === 'danger' ? 'alert-circle' : undefined)
    });
    await toast.present();
  }

  //****************************************









}
