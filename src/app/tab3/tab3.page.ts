 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from '../authetication.service';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
  
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userId: any;
  gEmail = ""
  gPassword = ""
  message = "";
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

  form!: FormGroup;
  ngOnInit() {


    this.authService.getProfile().then(user => {
      this.userId = user?.email;

      console.log(this.userId);
      if (!this.userId) {
        // await this.showToast('Plz Sign in First ');
        console.log('looooooooooooooog  ' + this.userId);
        this.router.navigateByUrl('/tabs/tab3');
      }
      else {
        this.router.navigateByUrl('/welcome-user');
      }

    })


    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ]
      ],
    });
  }


  async loginuser(form: FormGroup) {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const user = await this.authService.loginUser(this.form.value.email, this.form.value.password).catch((error) => {
      console.log(error);
      loading.dismiss()

      if (error) {
        this.message = "Please Check your Email or Password";
      }


    })

    if (user) {
      loading.dismiss()
      this.router.navigate(['/welcome-user'])
    } else {

      console.log('provide correct values');

    }



  }

}
