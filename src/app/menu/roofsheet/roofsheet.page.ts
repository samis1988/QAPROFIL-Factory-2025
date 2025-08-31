import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-roofsheet',
  templateUrl: './roofsheet.page.html',
  styleUrls: ['./roofsheet.page.scss'],
})
export class RoofsheetPage implements OnInit {
  pages: any[] = [
    { title: 'Roof Sheet', component: 'sheet-roof', image: 'assets/img/qaprofil/roof_pannel/roof-sheet.png' },
    { title: 'Wave Roof', component: 'waveroof', image: 'assets/img/qaprofil/roof_pannel/wave.png' },
    { title: 'ARC Roof', component: 'arcroof', image: 'assets/img/qaprofil/roof_pannel/arc_roof.png' },

    { title: 'Ridge Cap', component: 'ridgecap', image: 'assets/img/qaprofil/roof_pannel/ridge_cap.png' },
    { title: 'Down Spout', component: 'downspout', image: 'assets/img/qaprofil/roof_pannel/downspot1.png' },
    { title: 'Water Gutter', component: 'watergater', image: 'assets/img/qaprofil/roof_pannel/water_gutter.bmp' }


  ]
  constructor(private cartService: CartService, private platform: Platform, private router: Router, private location: Location) {
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
  goToCart(page: any) {
    this.router.navigate(['/' + page]); // or your cart page route
  }
  getCart_length() {
    return this.cartService.getCart() || [];
  }
}
