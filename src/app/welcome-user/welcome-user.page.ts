import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';

import { ToastController } from '@ionic/angular';
import { AutheticationService } from '../authetication.service';
import { IonInput } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CartService } from '../service/cart.service';
 
@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.page.html',
  styleUrls: ['./welcome-user.page.scss'],
})
export class WelcomeUserPage implements OnInit {
  userId: any;
  email = "rrrrrr";

  data: any[] = []; // Store data from the PHP backend

  information: any[] = []; // Store data from the PHP backend
  msg_support: any[] = []; // Store data from the PHP backend
  request: any[] = []; // Store data from the PHP backend
  super_admin = 'no';
  user = { name: '', email: '', phone: '', company: '' };

  total_request = 0;
  total_msg_support = 0;
  total_msg_support_unread = 0;

  constructor(private cartService: CartService, private platform: Platform, public authService: AutheticationService, private toastCtrl: ToastController, private router: Router, private location: Location, private dataService: DataService, private http: HttpClient, private alertCtrl: AlertController) {
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

    this.authService.getProfile().then(user => {
      this.userId = user?.email
      console.log(this.userId);


      //**********************************************************************************************************
      this.dataService.getMsgSupportRead(this.userId).subscribe(data => {

        this.msg_support = data;
        this.total_msg_support_unread = this.msg_support.length;
      });

      //**********************************************************************************************************
      this.dataService.getMsgSupport(this.userId).subscribe(data => {

        this.msg_support = data;
        this.total_msg_support = this.msg_support.length;
      });


      //*********************************************************************************************************
      this.dataService.getRequest(this.userId).subscribe(data => {

        this.data = data;
        this.request = data;
        this.total_request = this.request.length;
      }, error => {
        console.error('Error fetching data:', error);
      });

      //*********************************************************************************************************

      this.dataService.getUsers(this.userId).subscribe(data => {
        this.information = data;

        const first = this.information[0];
      


        if (first) {
          console.log('First Line:', first.name, first.email);
          this.user.email = first.email;
          this.user.phone = first.phone;
          this.user.company = first.company_name;
          this.user.name = first.name;
          this.super_admin = first.super_admin;
        } else {
          console.log('Data is empty.');
        }

      });



    });


    //************************************************

   


  }
 


  profile() {
    this.router.navigateByUrl('/user');
  }



  msg_suport_read(email: string) {

    this.dataService.getMsgSupportReadUpdate(email).subscribe(data => {
      this.router.navigateByUrl('/send-msg-list');
    });
    
  }


  log_super_admin() {
    if (this.super_admin == "yes") {
      this.router.navigateByUrl('/super-admin');
    }
    else {
      this.showToast();
    }
  }
  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'Sorry, only administrators are Allowed.',
      duration: 2000,
      color: 'warning', // success, danger, warning, dark, etc.
      position: 'bottom'
    });
    await toast.present();
  }


  //*************************************************************************
  logout1() {
    this.dataService.logout();
  }

  async confirmLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Logout', handler: () => this.dataService.logout() }
      ]
    });

    await alert.present();
  }





  async logout() {

    this.authService.signOut().then(() => {
      console.log('reset link');
      this.router.navigate(['/folder/folder'])

    }).catch((error) => {
      console.log(error);

    }) 
  }
  //****************************************************************************************************************************
     getCart_length() {
    return this.cartService.getCart() || [];
  }
  //****************************************************************************************************************************
}
