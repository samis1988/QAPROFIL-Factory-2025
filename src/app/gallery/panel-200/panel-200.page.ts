import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-panel-200',
  templateUrl: './panel-200.page.html',
  styleUrls: ['./panel-200.page.scss'],
})
export class Panel200Page implements OnInit {

  constructor(private platform: Platform, private router: Router, private location: Location) {
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

}
