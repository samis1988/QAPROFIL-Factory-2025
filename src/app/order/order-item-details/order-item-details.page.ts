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
  selector: 'app-order-item-details',
  templateUrl: './order-item-details.page.html',
  styleUrls: ['./order-item-details.page.scss'],
})
export class OrderItemDetailsPage implements OnInit {

  message: string = '';
  data: any[] = []; // Store data from the PHP backend

  information: any[] = []; // Store data from the PHP backend


  showToast: boolean = false;  // To display success/failure messages
  toastMessage: string = '';  // The message to display in the toast

  userId: any;

  user = { item_name: '', item_color: '', item_image: '', item_thicnees: '', item_quantity: '', item_l_m: '' };
  constructor(private route: ActivatedRoute, private platform: Platform, public authService: AutheticationService, private toastCtrl: ToastController, private router: Router, private location: Location, private dataService: DataService, private http: HttpClient, private alertCtrl: AlertController) {

    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
      console.log('Data is empty.' + this.message);


      this.dataService.getOrderItems(this.message).subscribe(data => {
        this.information = data;

        this.data = data;
        this.information = data;

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


  getTotal() {
    return this.information.reduce((total, item) => total + (1 * item.quantity), 0);
  }



}

