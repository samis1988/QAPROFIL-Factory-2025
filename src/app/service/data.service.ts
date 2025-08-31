import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _storage: Storage | null = null;


  private apiUrl = 'https://qaprofil.com.qa/ionic'; // URL to your PHP backend
  private apiUrlMsg = 'https://qaprofil.com.qa/ionic'; // URL to your PHP backend
  private apiUrl1 = 'https://qaprofil.com.qa/ionic/insert_data.php'; // URL to your PHP backend
  private apiUrl2 = 'https://qaprofil.com.qa/ionic/insert_data_request.php'; // URL to your PHP backend
  private apiUrlsupport = 'https://qaprofil.com.qa/ionic/insert_data_msg_support.php'; // URL to your PHP backend

  users: any[] = [];


  constructor(private http: HttpClient, private storage: Storage, private router: Router) { }



  searchUserssearchUsers(keyword: string) {
    return this.http.get<any[]>(`https://qaprofil.com.qa/ionic/search_user.php?keyword=${keyword}`);

  }


  searchUsers(keyword:string) {
     

    if (keyword && keyword.trim() !== '') {
      this.http
        .get<any[]>(`https://qaprofil.com.qa/ionic/search_user.php?keyword=${keyword}`)
        .subscribe((res) => {
          this.users = res;

          console.log('Data is empty.');
        });
    } else {
      this.users = [];
    }
  }








  //***************** Storage ************************************ 
  async init() {
    this._storage = await this.storage.create();
  }
  async isLoggedIn(): Promise<boolean> {
    const token = await this._storage?.get('token');
    return !!token;
  }
  async logout() {
    const storage = await this.storage.create();
    await this.storage.clear(); // Clear all stored data
    this.router.navigate(['welcome']); // Redirect to login page
  }

  // Method to fetch data from the PHP backend
  getData(email:string): Observable<any> {
   // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data.php?email=${email}`);
  }





  getMsgSupportRead(email: string): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data_msg_support_unread.php?email=${email}`);
  }

  getMsgSupportReadUpdate(email: string): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data_msg_support_update_read.php?email=${email}`);
  }

  getRequestView(id: string) {

    return this.http.get<any[]>(`${this.apiUrlMsg}/get_data_request_id.php?id=${id}`);

  }

  getRequestRead(email: string): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data_request_unread.php?email=${email}`);
  }

  getRequestReadUpate(email: string): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data_request_update_unread.php?email=${email}`);
  }
  ////
  getUserRead(email: string): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data_user_unread.php?email=${email}`);
  }

  getUserReadUpate(email: string): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data_user_update_unread.php?email=${email}`);
  }
  ////
  getAllUsers(email: string): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/get_data_all_user.php?email=${email}`);
  }

  getUsers(email:string) {
    return this.http.get<any[]>('https://qaprofil.com.qa/ionic/get_data.php?email=' + email);
   
  }

  //return this.http.get(`${this.apiUrl}/get_data.php?email=${email}`);
    
  insertUser(data: { name: string; email: string; phone: string; company: string }) {
    return this.http.post(this.apiUrl1, data);
  }


  insertRequest(data: { email: string; request: string}) {
    return this.http.post(this.apiUrl2, data);
  }
  getRequest(email: string) {
    return this.http.get<any[]>('https://qaprofil.com.qa/ionic/get_data_request.php?email=' + email);

  }
  //*********************** message support ******************************************
  insertMsgSupport(data: { admin_email: string; user_email: string; message: string  }) {
    return this.http.post(this.apiUrlsupport, data);
  }
  getMsgSupport(email: string) {
    
    return this.http.get<any[]>(`${this.apiUrlMsg}/get_data_msg_support.php?email=${email}`);
  }

  //*********** order ***********************
  getMsgorder(email: string) {

    return this.http.get<any[]>(`${this.apiUrlMsg}/get_data_order.php?email=${email}`);
  }

  getOrderItems(order_num: string) {

    return this.http.get<any[]>(`${this.apiUrlMsg}/get_data_order_item.php?order_num=${order_num}`);
  }

 
  getMsgOrderAdmin(email: string) {

    return this.http.get<any[]>(`${this.apiUrlMsg}/get_data_order_admin.php?email=${email}`);
  }

  getOrderItemsAdmin(order_num: string) {

    return this.http.get<any[]>(`${this.apiUrlMsg}/get_data_order_item.php?order_num=${order_num}`);
  }
}
