import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { order } from '../model/order';
import { cake } from '../model/cake';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from '../dbservice.service';
import { OrderService } from '../service/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UserService } from '../userservice.service';



@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrl: './ordernow.component.css'
})
export class OrdernowComponent implements OnInit {

  modified(quantity: number) {
    this.requiredQuantity = quantity;
    this.calculateTotalPrice();
  }


  myorder: order = {
    id: 0,
    email: '',
    cakeName: '',
    price: 0,
    quantity: 1,
    username: '',
    total: 0,
    orderDate: '',
    message: '',
    name: '',
    address: '',


  };
  mycake: cake = {
    id: 0,
    name: '',
    price: 0,
    address: ''
  };

  myuser: any = {
    username: '',
    email: ''
  };
  orderDate: string = ""

  constructor(
    private dbservice: DbserviceService,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private orderService: OrderService,
    private loginService: LoginService,
    private userservice: UserService,
    private r: Router
  ) { }
  total = 0
  requiredQuantity = 0

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let cakeId = params.get("id") ?? 0;
      this.getOneCake(cakeId);
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.myorder.quantity = this.requiredQuantity;

    if (this.mycake && this.mycake.price !== undefined) {
      this.total = this.mycake.price * this.requiredQuantity;
      this.myorder.total = this.total;
    } else {
      this.total = 0;
      this.myorder.total = 0;
    }
  }

  getOneCake(id: any): void {
    this.dbservice.getcakeById(id).subscribe((data) => {
      this.mycake = data;
      this.calculateTotalPrice();
    });
  }

  async placeOrder() {
    await this.userservice.checkIfUserExists(this.loginService.email).subscribe((data) => {
      this.myuser = data;
    })

    if (this.myorder.id) {
      await this.dbservice.getcakeById(this.myorder.id).subscribe((data) => {
        this.mycake = data
      })
    }
    let order: order = {
      email: this.loginService.email,
      username: this.loginService.username,
      cakeName: this.mycake.name,
      price: this.mycake.price,
      id: this.mycake.id,
      quantity: this.myorder.quantity,
      total: this.mycake.total,
      name: this.myorder.name,
      address: this.myorder.address,
      message: this.myorder.message,

      orderDate: this.myorder.orderDate
    };

    this.orderService.addOrder(order).subscribe(
      () => {
        this.snackBar.open('Order placed successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: "bottom"

        });
        this.r.navigate(['viewcake']);
      },
      (error) => {
        this.snackBar.open('Error placing order', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    );
  }

}