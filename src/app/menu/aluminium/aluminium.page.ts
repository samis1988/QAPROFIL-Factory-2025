import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-aluminium',
  templateUrl: './aluminium.page.html',
  styleUrls: ['./aluminium.page.scss'],
})
export class AluminiumPage implements OnInit {
  pages: any[] = [
    { title: 'V Section', component: 'vsection', image: '../../assets/img/qaprofil/vsection.png' },
    { title: 'Qap Carrier', component: 'qapcarrier', image: 'assets/img/qaprofil/qap_carrier.png' },
    { title: 'Perimeter Angle', component: 'perimeteranglealum', image: 'assets/img/qaprofil/p_a_alum.png' },

    { title: 'U Channel', component: 'uchannel', image: 'assets/img/qaprofil/u_channel.png' },
    { title: '84R and Joints Strips ', component: 'stripsjoint', image: 'assets/img/qaprofil/84r/1.png' },
    { title: 'Qap 50 Strips', component: 'qapstrips', image: 'assets/img/qaprofil/qap50/1.png' },
    { title: 'Qap 100 - 200 Strips', component: 'qaponetwo', image: 'assets/img/qaprofil/qap100-200/1.png' },
    { title: 'Grid System', component: 'tbar', image: 'assets/img/qaprofil/tbar/4.png' },
    { title: 'Semi-Round Panel', component: 'semiround', image: 'assets/img/qaprofil/bambo/1.jpg' },
    { title: 'Photo Gallery', component: 'gallery', image: 'assets/img/qaprofil/gallery.png' }



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
