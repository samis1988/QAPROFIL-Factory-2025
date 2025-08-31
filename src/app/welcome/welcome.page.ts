
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';

import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  products: any[] = [
    { title: 'Gypsum Ceilings', component: 'gypsum', image: 'assets/img/1.jpg' },
    { title: 'Indoor Aluminum', component: 'aluminium', image: 'assets/img/2.jpg' },
    { title: 'Portacabin', component: 'LightgaugesteelPage', image: 'assets/img/3.jpg' },
    { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/4.jpg' },
    { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/5.jpg' },
    { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/6.jpg' },

  ]


  @ViewChild("swiperEx") swiperEx?: ElementRef<{ swiper: Swiper }>
  last_slide: boolean = false;





  constructor(
    private router: Router,

  ) { }

  ngOnInit() {

  }






  onSlideChange() {

    console.log(this.swiperEx?.nativeElement.swiper.activeIndex);
  }

  onSlidePrev() {
    this.swiperEx?.nativeElement.swiper.slidePrev();
  }
  onSlideNext() {
    this.swiperEx?.nativeElement.swiper.slideNext(1000);
  }




}

