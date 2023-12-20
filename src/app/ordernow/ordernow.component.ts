import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { order } from '../model/order';
import { cake } from '../model/cake';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from '../dbservice.service';
import { OrderService } from '../service/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from'@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrl: './ordernow.component.css'
})
export class OrdernowComponent implements OnInit {
orderDate: any;


  
constructor(public ls:LoginService,private rs:ActivatedRoute,private dbserv:DbserviceService,private order:OrderService,private _snackbar:MatSnackBar,private r:Router,private fb: FormBuilder){}




requiredQuantity=1
total=0
mycake:cake={}

    ngOnInit(): void {

      
      this.rs.paramMap.subscribe(params=>{
        let cakeid=params.get("id") ?? 0;
      this.getOneCake(cakeid);
      })
    }
  
    getOneCake(id:any){
      this.dbserv.getcakeById(id).subscribe((data)=>{
        this.mycake=data;
      })
    }


choice: string = ''; 


choicee(choice: string): void {
  this.choice = choice;
}


modified(quantity: number) {
this.requiredQuantity = quantity;
this.calculationOfTotalAmount();
}


calculationOfTotalAmount() {

  if (this.mycake && this.mycake.price !== undefined) {
    this.total = this.mycake.price * this.requiredQuantity 
  } else {
    
    this.total = 0;
  }
}

placeCake() {
  let placeOrder: order = {
    email: this.ls.email,
    username: this.ls.username,
    name: this.mycake.name,
    id: this.mycake.id,
    price: this.mycake.price,
    quantity: this.requiredQuantity,
    total: this.total,
    orderDate: this.orderDate,
    // address: {
    //   doorNo: undefined,
    //   street: undefined,
    //   city: undefined
    // }
  };
this.order.addOrder(placeOrder).subscribe((data)=>
this.mycake==data)
this._snackbar.open('Your order has been placed successfully,,Thank You', 'success', {
  duration: 5000,
  panelClass: ['mat-toolbar', 'mat-primary']})
  // this.r.navigate(['viewcake']);


}


}
