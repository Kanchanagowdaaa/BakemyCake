import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../userservice.service';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = { email: "", password: "" }
  router: any;



  constructor(private userserv: UserService, private loginService: LoginService, private _snackbar: MatSnackBar, private r: Router) { }

  login() {
    this.userserv.checkUsernameAndPassword(this.user.email, this.user.password).subscribe(
      (data) => {

        if (data.length == 1) {
          this.loginService.canLogIn(data);
            this._snackbar.open('Login successfull', 'success', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary']
          })
          this.r.navigate(['viewcake']);

        }
        else {
          this.userserv.checkIfUserExists(this.user.email).subscribe(
            (data) => {
              if (data.length == 1) {
                this._snackbar.open('Password incorrect,Please check your password', 'failure', {
                  duration: 5000,
                  panelClass: ['mat-toolbar', 'mat-primary']
                })
                
              }
              else {
                this._snackbar.open('Not a registered user,Please register and login', 'failure', {
                  duration: 5000,
                  panelClass: ['mat-toolbar', 'mat-primary']
                })
                
              }
            }
          )
        }
      }
    )
  }
}