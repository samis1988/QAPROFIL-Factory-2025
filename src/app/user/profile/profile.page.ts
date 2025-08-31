import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AutheticationService } from '../../authetication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  

  // email:any
  // password:any
  // contact:any

  constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController, private authService: AutheticationService, private router: Router, public formBuilder: FormBuilder) { }
  form!: FormGroup;
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }


  onSignIn(form: FormGroup) {
    
  }
}
