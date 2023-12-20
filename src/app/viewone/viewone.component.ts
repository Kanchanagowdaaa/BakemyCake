import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cake } from '../model/cake';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-viewone',
  templateUrl: './viewone.component.html',
  styleUrl: './viewone.component.css'
})
export class ViewoneComponent implements OnInit{

  constructor(private rs:ActivatedRoute,private dbserv:DbserviceService){}
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
  }
  
