import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../userservice.service';
import { user } from '../model/user';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})


export class RegisterFormComponent {
  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private userservice: UserService) { }
  passwordPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    // lastName: [''],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    // gender: [''],
    // age: [0, [Validators.required, this.checkAge]],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@gmail\.com$")]],
    phone: ['', [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      // state: [''],
      // zipCode: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
        }),
    role: ['user'],
    
  }, { validators: this.passwordCheck })


  checkAge(ac: AbstractControl) {
    let val = ac.value;
    if (val > 18) {
      return null;
    }
    else {
      return { invalidAge: true }
    }


  }

  passwordCheck(ac: AbstractControl) {
    let pass = ac.get('password')?.value;
    let cpass = ac.get('confirmPassword')?.value;
    if (pass == cpass) {
      return null;
    }
    else {
      return { passwordMismatch: true }
    }
  }




  get username() {
    return this.registerForm.get('firstName');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  // get age() {
  //   return this.registerForm.get('age');
  // }

  get phone() {
    return this.registerForm.get('phoneNumber');
  }

  get zipCode() {
    return this.registerForm.get('address.zipCode')
  }

  saveUser() {
    // alert(this.registerForm.get('email')?.value)
    let email = this.registerForm.get('email')?.value?.toString();
    if (email) {
      this.userservice.checkIfUserExists(email).subscribe((data) => {
        if (data.length != 0) {
              // alert("emailid present")
              this._snackbar.open('Email id already exists', 'failure', {
                duration: 5000,
                panelClass: ['mat-toolbar', 'mat-primary']})
        }
        else {
          this.userservice.addUser(this.registerForm.value).subscribe(data => {
            this._snackbar.open('Congrats!! You have submitted the form!!', 'success', {
              duration: 5000,
              panelClass: ['mat-toolbar', 'mat-primary']})
            // alert("user added");
          })
        }
      })
    }
  }


canClose(){
  if(this.registerForm.dirty){
  let display=confirm("Changes you have made may not be saved! Please confirm");
  return display;
}
  else{
  return true;
}

}
}
