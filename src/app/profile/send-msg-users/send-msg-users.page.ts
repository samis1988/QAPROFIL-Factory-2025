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
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-send-msg-users',
  templateUrl: './send-msg-users.page.html',
  styleUrls: ['./send-msg-users.page.scss'],
})
export class SendMsgUsersPage implements OnInit {
  message: string = '';

  @ViewChild('myTextarea', { static: false }) textarea!: IonTextarea;
  data: any[] = []; // Store data from the PHP backend

  information: any[] = []; // Store data from the PHP backend
  name_user: string = '';
  admin_email: string = '';

  showToast: boolean = false;  // To display success/failure messages
  toastMessage: string = '';  // The message to display in the toast

  userId: any;

  user = { admin_email: '', user_email: '', message: '' };


  constructor(private route: ActivatedRoute, private platform: Platform, public authService: AutheticationService, private toastCtrl: ToastController, private router: Router, private location: Location, private dataService: DataService, private http: HttpClient ) {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
      console.log('Data is empty.' +this.message);

    });
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
          this.admin_email = first.email;
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
  async showToaste() {
    const toast = await this.toastCtrl.create({
      message: 'Sorry,Type something... in your Message',
      duration: 2000,
      color: 'warning', // success, danger, warning, dark, etc.
      position: 'bottom'
    });
    await toast.present();
  }

  async submitForm(inputRef: IonInput) {

    const htmlEl = await this.textarea.getInputElement();
    const value2 = htmlEl.value;
    this.user.message = value2;
    console.log('text ----- :', this.user.message);

    if (value2 == '') {
      console.log(' emptyyyyyyyyyyyyyyyyyyy ');
      this.showToaste();
    }
    else {

    this.user.admin_email = this.admin_email;
    console.log('admin_email----- :', this.user.admin_email);


   


    inputRef.getInputElement().then((inputEl) => {
      const value = inputEl.value;

      console.log('Email user:', value);
      this.user.user_email = value;
      console.log('email ----- :', this.user.user_email);
      this.dataService.insertMsgSupport(this.user).subscribe(async (res: any) => {
        const toast = await this.toastCtrl.create({
          message: res.message,
          duration: 2000,
          color: res.status === 'success' ? 'success' : 'danger'
        });


        if (res.status === 'success') {
          this.router.navigateByUrl('/send-msg-list');
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



}
