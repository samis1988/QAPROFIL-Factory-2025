import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private endpoint = 'https://qaprofil.com.qa/ionic';
  constructor(private toastCtrl: ToastController, private http: HttpClient) {
 }

  addToCart(item: any) {
    this.cart.push(item);
    console.log('Item added to cart:', item);
  }

  getCart() {
    return this.cart;
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }




  //**********************************************************************************************************
  async showToaste() {
    const toast = await this.toastCtrl.create({
      message: 'Sorry,Plz Select Thickness',
      duration: 2000,
      color: 'warning', // success, danger, warning, dark, etc.
      position: 'bottom'
    });
    await toast.present();
  }



  addItem(items_name: string, inputRef: IonInput, thcnss: string, picture: string, color: string,l_m:string) {

    inputRef.getInputElement().then((inputEl) => {
      const value = inputEl.value;
      const qty = value;
      if (thcnss == "") {
        this.showToaste();
      }
      else {
        const product = {
          id: 1,
          name: items_name,
          image: picture,
          Thicnees: thcnss,
          color: color,
          l_m: l_m,
          quantity: qty,
        };

        this.addToCart(product);
        
      }
    }); 
  }
  //***************************************************************************************************************************
   

  async sendTable(rows: Array<{}>, user: string ) {
   
    const response = await fetch(`${this.endpoint}/cart.php?keyword=${user}`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rows })
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Server error: ${response.status} ${text}`);
    }

    return await response.json();
  }

  













}
