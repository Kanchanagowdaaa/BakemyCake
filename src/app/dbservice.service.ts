import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cake } from './model/cake';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  submitOrder(orderData: any) {
    throw new Error('Method not implemented.');
  }
  delete(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private httpclient:HttpClient) {
  }
  editCake(mycake:cake)
  {
   return this.httpclient.put<cake>("http://localhost:3000/cakes/"+mycake.id,mycake);
  }
  addCake(mycake:cake)
  {
   return this.httpclient.post<cake>("http://localhost:3000/cakes",mycake);
  }
  getcake()
  {
    return this.httpclient.get<cake[]>("http://localhost:3000/cakes");
  }
  getcakebyname(name:string)
  {
    return this.httpclient.get<cake[]>("http://localhost:3000/cakes?name="+name);
  }
  getcakeById(id:number)
  {
    return this.httpclient.get<cake>("http://localhost:3000/cakes/"+id);
  }
  deleteCake(id:number)
  {
    return this.httpclient.delete<cake>("http://localhost:3000/cakes/"+id);
  }
}
