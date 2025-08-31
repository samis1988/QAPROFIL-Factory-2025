import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   products: any[] = [
     { title: 'Aluminum Gallery', component: 'main-galerry', image: 'assets/img/home/gallery.png' },
     { title: 'Gypsum Ceilings', component: 'gypsum', image: 'assets/img/home/gypsum.png' },
     { title: 'Indoor Aluminum', component: 'aluminium', image: 'assets/img/home/aluminum.png' },
     { title: 'Portacabin', component: 'portacabin', image: 'assets/img/home/portacabin.png'},
      { title: 'Roof Panels', component: 'roofsheet',image: 'assets/img/home/roof.png' },
      { title: 'Slitting Line', component: 'slitting',image: 'assets/img/home/slitting.png' },
      { title: 'Buildings Accessories', component: 'lintel',image: 'assets/img/home/lintel.png' },
     { title: 'Catalogue pdf', component: 'pdf', image: 'assets/img/home/pdf.png'}
   ]


  countrycode: string = "974";
  whatsappnumber: string = "55820925";
  url: string = "https://wa.me/" + this.countrycode + this.whatsappnumber + "?text=";

     


  constructor(private router: Router) { }

  navigate() {
    this.router.navigateByUrl('/about');
  }

  goToCart(page: any) {
    this.router.navigate(['/' + page]); // or your cart page route
  }

}
