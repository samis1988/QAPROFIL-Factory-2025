import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
import { AutheticationService } from '../authetication.service';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
 
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  gEmail = ""
  gPassword = ""
  message = "";
  constructor(private toastController: ToastController,public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public authService: AutheticationService, public router: Router, private platform: Platform, private location: Location) {

   

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





  

  async signUp(form: FormGroup) {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const user = await this.authService.regesterUser(this.form.value.email, this.form.value.password).catch((error) => {
      console.log(error);
      loading.dismiss();
      if (error) {
        this.message = "The email address is already in use by another account";
      }
    })

    if (user) {
      loading.dismiss()
      this.router.navigate(['/tabs/tab3'])
    } else {

      console.log('provide correct values');

    }
     
  }


  async login(form: FormGroup) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    // console.log(this.email + this.password);
    if (this.form.valid) {

      //  await  loading.dismiss();
      const user = await this.authService.loginUser(this.form.value.email, this.form.value.password).catch((err) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
        if (err) {
          this.message = "Please Check your Email or Password";
        }
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(
          ['/welcome-user'])
      }
    } else {
     this.message= "ddddddd";
     // return console.log('Please provide all the required values!');
    }

  }









  get errorControl() {
    return this.form.controls;
  }

  async presentToast(message: undefined) {
    console.log(message);

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }


}
