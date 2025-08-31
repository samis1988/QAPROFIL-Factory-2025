import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from '../authetication.service';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  gEmail = ""


  constructor(public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public authService: AutheticationService, public router: Router, private platform: Platform, private location: Location) {
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

  async reset() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService.resetPassword(this.gEmail).then(() => {
      console.log('reset link');
      this.router.navigate(['/login'])

    }).catch((error) => {
      console.log(error);

    })




  }

}
