import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { order } from '../model/order';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent implements OnInit {

  myorder:order[]=[]

  constructor(private orderservice:OrderService){}
  ngOnInit(): void {
   this.orderservice.getOrder().subscribe((data)=>{
    this.myorder=data
   })
}
}


