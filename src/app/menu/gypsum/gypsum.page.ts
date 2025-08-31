import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-gypsum',
  templateUrl: './gypsum.page.html',
  styleUrls: ['./gypsum.page.scss'],
})
export class GypsumPage implements OnInit {
  pages: any[] = [
    { title: 'Perimeter Angle', component: 'perimeter-angle-steel', image: '../../assets/img/avatar/perimeterangle.png' },
    { title: 'Furring Channel', component: 'furring-channel', image: 'assets/img/avatar/furring_channel.png' },
    { title: 'Main Channel', component: 'mainchannel', image: 'assets/img/avatar/main.png' },

    { title: 'Angle Bead', component: 'anglebead', image: 'assets/img/avatar/angle.png' },

    { title: 'Runner', component: 'runner', image: 'assets/img/avatar/runner.png' },
    { title: 'J-Trim', component: 'jtrim', image: 'assets/img/avatar/jtrim.png' },
    { title: 'Stud', component: 'studles', image: 'assets/img/avatar/stud_les.png' }



  ]
  constructor(private cartService: CartService,private platform: Platform, private router: Router, private location: Location) {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority
        (999999, () => {
          var url = this.router['routerState'].snapshot.url;
          if (url != "tabs/tab1")
          {

            this.location.back();
          }

        })

    })


  }

  ngOnInit() {
  }
  goToCart(page:any) {
    this.router.navigate(['/' + page]); // or your cart page route
  }
  getCart_length() {
    return this.cartService.getCart() || [];
  }
}
