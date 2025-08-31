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
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.page.html',
  styleUrls: ['./request-view.page.scss'],
})
export class RequestViewPage implements OnInit {
  message: string = '';
  data: any[] = []; // Store data from the PHP backend

  information: any[] = []; // Store data from the PHP backend


  showToast: boolean = false;  // To display success/failure messages
  toastMessage: string = '';  // The message to display in the toast

  userId: any;

  user = { id: '', email: '', date: '', request: '' };
  constructor(private route: ActivatedRoute,private platform: Platform, public authService: AutheticationService, private toastCtrl: ToastController, private router: Router, private location: Location, private dataService: DataService, private http: HttpClient, private alertCtrl: AlertController) {

    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
      console.log('Data is empty.' + this.message);

       
      this.dataService.getRequestView(this.message).subscribe(data => {
        this.information = data;

        const first = this.information[0];



        if (first) {
          
          this.user.id = first.id;
          this.user.email = first.email;
          this.user.date = first.date;
          this.user.request = first.request;
          
        } else {
          console.log('Data is empty.');
        }

      });









    });

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
      this.userId = user?.email;

 



      console.log(this.userId);


    })

    //////////////////////////////////////////////////////////////////////////////////////////


  }
    
   
  



}
