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
  selector: 'app-request-list-admin',
  templateUrl: './request-list-admin.page.html',
  styleUrls: ['./request-list-admin.page.scss'],
})
export class RequestListAdminPage implements OnInit {
  searchTerm = '';
  users: any[] = [];
  data: any[] = []; // Store data from the PHP backend

  information: any[] = []; // Store data from the PHP backend


  showToast: boolean = false;  // To display success/failure messages
  toastMessage: string = '';  // The message to display in the toast

  userId: any;

  user = { name: '', email: '', phone: '', company: '' };
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
      this.userId = user?.email;

      this.dataService.getRequest(this.userId).subscribe(data => {

        this.data = data;
        this.information = data;


        console.log(this.information);
      }, error => {
        console.error('Error fetching data:', error);
      });



      console.log(this.userId);


    })

    //////////////////////////////////////////////////////////////////////////////////////////


  }


  searchUserss(event: any) {
    const keyword = event.target.value;

    this.dataService.searchUserssearchUsers(keyword).subscribe(data_user => {
      this.users = data_user;
    }, error => {
      console.error('Error fetching data:', error);
    });

  }




  async deleteUser(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to Delete ?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Logout', handler: () => this.dataService.logout() }
      ]
    });

    await alert.present();
  }

  viewUser(user: any) {
    console.log('Viewing user:', user);
  }


  viewUser2(user:string) {
  
    this.dataService.getRequest(user).subscribe(data => {

      this.data = data;

      this.information = [];
      this.information = data;


      console.log(this.information);
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  viewRequest(id: any) {
    console.log('Viewing user:', id);
    this.router.navigate(['/request-view'], {
      queryParams: { message: id }
    });
  }

}

