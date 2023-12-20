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
 
  user = { email:"",password: ""}
  router: any;


 
  constructor(private userserv: UserService,private loginService:LoginService,private _snackbar:MatSnackBar,private r:Router) { }

  login() {
    this.userserv.checkUsernameAndPassword(this.user.email, this.user.password).subscribe(
      (data) => {
       
        if (data.length == 1) {
          this.loginService.canLogin(data);
          // this.router.navigate(['viewcake']);
          this._snackbar.open('Login successfull', 'success', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary']})
            this.r.navigate(['viewcake']);
         
        }
        else {
          this.userserv.checkIfUserExists(this.user.email).subscribe(
            (data) => {
              if (data.length == 1) {
                this._snackbar.open('Password incorrect,Please check your password', 'failure', {
                  duration: 5000,
                  panelClass: ['mat-toolbar', 'mat-primary']})
                // alert("password incorrect")
              }
              else {
                this._snackbar.open('Not a registered user,Please register and login', 'failure', {
                  duration: 5000,
                  panelClass: ['mat-toolbar', 'mat-primary']})
                // alert("not a registered user");
              }
            }
          )
        }
      }
    )
  }














  
//   constructor(private fb: FormBuilder,private userserv:UserService) {

    
//     this.loginForm = this.fb.group({
//       username: ['', [Validators.required]],
//       email:['',[Validators.required]],
//       password: ['', [Validators.required]],
//     });
//   }
//   get username(){
//     return this.loginForm.get('username')
//   }

//   get email(){
//     return this.loginForm.get('email')
//   }

//   get password(){
//     return this.loginForm.get('password')
//   }

 
  

//   login() {
//     let email=this.loginForm.get('username')?.value
//     let password=this.loginForm.get('password')?.value
//     if(email && password){//email must not ne undefined
//     this.userserv.checkUsernameAndPassword(email,password).subscribe(
//       (data) => {
//         alert(data.length)
//         if (data.length == 1) {
//           alert("login Success");
//         }
//         else {
//           this.userserv.checkIfUserExists(this.loginForm.value).subscribe(
//             (data) => {
//               if (data.length == 1) {
//                 alert("password incorrect")
//               }
//               else {
//                 alert("not a registered user");
//               }
//             }
//           )
//         }
//       }
//     )

//     }
//   }



// }
  
// //   submitLoginForm() {
// //     if (this.loginForm.valid) {
     
// //       alert('Login successful!');
// //     } else {
      
// //       alert('Form is invalid. Please fill in all fields.');
// //     }
// //   }
// // }

}