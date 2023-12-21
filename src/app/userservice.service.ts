import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { user } from '../app/model/user';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  user_url: string = "http://localhost:3000/user";



  addUser(user: any) {
    return this.httpclient.post<user>("http://localhost:3000/user", user);

  }

  checkIfUserExists(email: String) {

    return this.httpclient.get<user[]>("http://localhost:3000/user?email=" + email);


  }

  checkUsernameAndPassword(email: String, password: String) {
    return this.httpclient.get<user[]>("http://localhost:3000/user?email=" + email + "&password=" + password);
  }


}