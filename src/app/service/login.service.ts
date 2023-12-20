import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAdminLoggedIn:boolean=false
  isUserLoggedIn:boolean=false
  username:string=""
  role:string=""
  email: string | undefined;
  name:string="";
  id:number | undefined;
  price:number | undefined;


  constructor() { }

  canLogin(data:any)
 {

  if(data[0].role=="user")
  this.isUserLoggedIn=true;
  else
  this.isAdminLoggedIn=true;
  this.username=data[0].username;
  this.role=data[0].role;
  sessionStorage.setItem('email',data[0].email);

  }

  canLogout()
  {
  this.isAdminLoggedIn=false
  this.isUserLoggedIn=false
  this.username=""
  this.role=""
  sessionStorage.clear();
  }
}
