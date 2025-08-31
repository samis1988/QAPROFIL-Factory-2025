
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';

import { ToastController } from '@ionic/angular';
import { AutheticationService } from '../../authetication.service';
import { IonInput } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-send-msg',
  templateUrl: './send-msg.page.html',
  styleUrls: ['./send-msg.page.scss'],
})
export class SendMsgPage implements OnInit {
  searchTerm = '';
  users: any[] = [];

  userId: any;
  email = "rrrrrr";

  data: any[] = []; // Store data from the PHP backend
  data_user: any[] = []; // Store data from the PHP backend

  information: any[] = []; // Store data from the PHP backend
  information_user: any[] = []; // Store data from the PHP backend
  request: any[] = []; // Store data from the PHP backend
  super_admin = 'no';
  user = { name: '', email: '', phone: '', company: '' };

  total_request = 0;
  total_user = 0;

  constructor(private platform: Platform, public authService: AutheticationService, private toastCtrl: ToastController, private router: Router, private location: Location, private dataService: DataService, private http: HttpClient, private alertCtrl: AlertController) {
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
      ///////////////////////////////////////////////////////////////////////////
      this.dataService.getAllUsers(this.userId).subscribe(data_user => {

        this.data_user = data_user;
        this.information_user = data_user;
        this.total_user = this.information_user.length;
      }, error => {
        console.error('Error fetching data:', error);
      });
      //*********************************************************************************************************
       

      //*********************************************************************************************************
 



    });


    //************************************************




  }


  //*****************************************************
  searchUserss(event: any) {
    const keyword = event.target.value;

    this.dataService.searchUserssearchUsers(keyword).subscribe(data_user => {
      this.users = data_user;
    }, error => {
      console.error('Error fetching data:', error);
    });
    
  }

  //****************************************************************
  

  //*************************************************************************
  
  


  viewUser(user: any) {
    console.log('Viewing user:', user);
    this.router.navigate(['/send-msg-users'], {
      queryParams: { message: user }
    });
  }

  goToPageB(user: any) {
    const message = 'Hello from Page A';
    this.router.navigate(['/send-msg-users'], {
      queryParams: { message: user }
    });
  }
 
}

