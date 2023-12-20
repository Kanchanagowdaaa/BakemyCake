import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }
  addOrder(order:any){
    return this.httpClient.post<order>("http://localhost:3000/order",order);
  }

  getOrder(){
    return this.httpClient.get<order[]>("http://localhost:3000/order");
  }

  
}
