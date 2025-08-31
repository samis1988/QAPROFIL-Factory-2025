import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.page.html',
  styleUrls: ['./main-video.page.scss'],
})
export class MainVideoPage implements OnInit {
  videoUrl: any = "https://www.youtube-nocookie.com/embed/DatNJKaUHoA?si=Ii-em_hT_r-sl-xx";
  video2: any = "https://www.youtube.com/embed/fEoRUm8db2k?si=Pwdqk9cbznUGAUoI";
  video3: any = "https://www.youtube.com/embed/RE9aoErJGTk?si=N_F6WjXv1jawFamk";
  video4: any = "https://www.youtube.com/embed/HreCcM62y20?si=B-yZoqMWAeRDlj77";
  video5: any = "https://www.youtube.com/embed/4AunEoiLp2I?si=KRSBkOH-xov-L5Vn";
  constructor(private sanitizer: DomSanitizer, private platform: Platform, private router: Router, private location: Location) {
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

  showVideo(video: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  showVideo2(video: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  showVideo3(video: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }
  showVideo4(video: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }
  showVideo5(video: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

}
