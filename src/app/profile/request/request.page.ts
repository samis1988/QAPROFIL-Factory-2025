import { Component, OnInit, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';

import { ToastController } from '@ionic/angular';
import { AutheticationService } from '../../authetication.service';
import { IonInput } from '@ionic/angular';
import { IonTextarea } from '@ionic/angular';
@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  @ViewChild('myTextarea', { static: false }) textarea!: IonTextarea;
  data: any[] = []; // Store data from the PHP backend

  information: any[] = []; // Store data from the PHP backend
  name_user: string = '';

  showToast: boolean = false;  // To display success/failure messages
  toastMessage: string = '';  // The message to display in the toast

  userId: any;

  user = { request: '', email: ''};
  constructor(private platform: Platform, public authService: AutheticationService, private toastCtrl: ToastController, private router: Router, private location: Location, private dataService: DataService, private http: HttpClient) {
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

      this.dataService.getUsers(this.userId).subscribe(data => {

        this.data = data;
        this.information = data;

        const first = this.information[0];
        if (first) {
          console.log('First Line:', first.name, first.email);
          this.user.email = first.email;
          this.name_user = first.name;
        } else {
          console.log('Data is empty.');
        }


        console.log(this.information);
      }, error => {
        console.error('Error fetching data:', error);
      });



      console.log(this.userId);


    })
 
  }


  async submitForm(inputRef: IonInput  ) {


    const htmlEl = await this.textarea.getInputElement();
    
    const value2 = htmlEl.value;
    this.user.request = value2;
    console.log('text ----- :', this.user.request);

    inputRef.getInputElement().then((inputEl) => {
      const value = inputEl.value;

      console.log('Email:', value);
      this.user.email = value;
      console.log('email ----- :', this.user.email);
      this.dataService.insertRequest(this.user).subscribe(async (res: any) => {
        const toast = await this.toastCtrl.create({
          message: res.message,
          duration: 2000,
          color: res.status === 'success' ? 'success' : 'danger'
        });
        

        if (res.status === 'success') {
          this.router.navigateByUrl('/request-list');
        }
        if (res.status === 'error') {
           const toast = await this.toastCtrl.create({
          message: res.message,
          duration: 2000,
          color: res.status === 'success' ? 'success' : 'danger'
        });
        }




      }, async err => {
        const toast = await this.toastCtrl.create({
          message: 'Server error',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      });




    });


  }
   


}
