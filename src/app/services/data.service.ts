import { CartService } from './cart.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private serviceUrl: string = 'http://localhost:51338/';

  constructor(private http: Http) {

  }

  createUser(data: any) {
    return this.http
      .post(this.serviceUrl + 'v1/customers', data)
      .map((res: Response) => res.json());
  }

  authenticate(data: any) {

    var dt = "grant_type=&username=" + data.username + "&password=" + data.password;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    //console.log(data);
    //console.log(dt);

    return this.http.post(this.serviceUrl + 'v1/authenticate', dt, options).map((res: Response) => res.json());
  }

  validateToken(token: string){
    if(token || token != ''){
      return true;
    }

    return false;
  }

  getProducts(){
    return this.http
    .get(this.serviceUrl + 'v1/products')
    .map((res: Response)=> res.json());
  }

  createOrder(data: any) {
    var token = localStorage.getItem('mws.token');
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${token}`); Headers //Beares tem de ser essa aspas mais inclinada
    let options = new RequestOptions({headers: headers});
    
    return this.http
      .post(this.serviceUrl + 'v1/orders', data, options)
      .map((res: Response) => res.json());
  }






}