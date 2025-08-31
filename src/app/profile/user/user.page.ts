import { Component, OnInit } from '@angular/core';
 
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';

import { ToastController } from '@ionic/angular';
import { AutheticationService } from '../../authetication.service';
import { IonInput } from '@ionic/angular';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  data: any[] = []; // Store data from the PHP backend
   
  information: any[] = []; // Store data from the PHP backend
  
   
  showToast: boolean = false;  // To display success/failure messages
  toastMessage: string = '';  // The message to display in the toast

  userId: any;
   
  user = { name: '', email: '', phone: '', company: '' };
  constructor(private platform: Platform,  public authService: AutheticationService,   private toastCtrl: ToastController, private router: Router, private location: Location, private dataService: DataService, private http: HttpClient) {
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
            this.user.phone = first.phone;
            this.user.company = first.company_name;
            this.user.name = first.name;
          } else {
            console.log('Data is empty.');
          }


          console.log(this.information);
        }, error => {
          console.error('Error fetching data:', error);
        });



      console.log(this.userId);
      

    })

    //////////////////////////////////////////////////////////////////////////////////////////
    

  }

 

  loadUser() {
    this.dataService.getData(this.userId).subscribe((data: any) => {
      this.user = data;
      console.log(this.user.company);
    });
  }




  getValue(inputRef: IonInput) {
    inputRef.getInputElement().then((inputEl) => {
      const value = inputEl.value;
      console.log('Name:', value);
    });
  }
   
  
  async submitForm(inputRef: IonInput, fullnameInput: IonInput, phoneInput: IonInput, companyInput: IonInput) {


    companyInput.getInputElement().then((inputEl) => {
      const value = inputEl.value;
      this.user.company = value;
      console.log('company .... :', this.user.company);
    });

    phoneInput.getInputElement().then((inputEl) => {
      const value = inputEl.value;
      this.user.phone = value;
      console.log('phone .... :', this.user.phone);
    });

    fullnameInput.getInputElement().then((inputEl) => {
      const value = inputEl.value;
      this.user.name = value;
      console.log('name .... :', this.user.name);
    });



     
    inputRef.getInputElement().then((inputEl) => {
      const value = inputEl.value;
      
      console.log('Email:', value);
      this.user.email = value;
       
      this.dataService.insertUser(this.user).subscribe(async (res: any) => {
        const toast = await this.toastCtrl.create({
          message: res.message,
          duration: 2000,
          color: res.status === 'success' ? 'success' : 'danger'
        });
        toast.present();

        if (res.status === 'success') {
          this.user = { name: '', email: '', phone: '', company: '' }; // Clear form
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
