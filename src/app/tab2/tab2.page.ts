import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products: any[] = [
    { title: 'Gypsum Ceilings', component: 'gypsum', image: 'assets/img/home/gypsum.png' },
    { title: 'Indoor Aluminum', component: 'aluminium', image: 'assets/img/home/aluminum.png' },
    { title: 'Portacabin', component: 'portacabin', image: 'assets/img/home/portacabin.png' },
    { title: 'Roof Panels', component: 'roofsheet', image: 'assets/img/home/roof.png' },
    { title: 'Slitting Line', component: 'slitting', image: 'assets/img/home/slitting.png' },
    { title: 'Buildings Accessories', component: 'lintel', image: 'assets/img/home/lintel.png' },
    { title: 'Catalogue pdf', component: 'pdf', image: 'assets/img/home/pdf.png' }
  ]
  constructor(private cartService: CartService,private platform: Platform, private router: Router, private location: Location) {
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
  goToCart(page: any) {
    this.router.navigate(['/' + page]); // or your cart page route
  }
  getCart_length() {
    return this.cartService.getCart() || [];
  }
}
