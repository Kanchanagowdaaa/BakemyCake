import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { cake } from '../model/cake';
import { DbserviceService } from '../dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-cakeview',
  templateUrl: './cakeview.component.html',
  styleUrls: ['./cakeview.component.css']
})

export class cakeviewComponent implements OnInit {
  loginService: any;
  searchTitle($event: string) {
    throw new Error('Method not implemented.');
  }
  cakedata: cake[] = [];
  searchText: string = ''
  constructor(private dbservice: DbserviceService, private ar: ActivatedRoute, private router: Router, public ls: LoginService) {

  }
  ngOnInit(): void {
    this.ar.paramMap.subscribe(
      (params) => {
        let id = params.get("id") ?? 0;
        if (id != 0)
          this.deleteCake(id);
      }
    )

    this.getAllCakes();
  }

  getAllCakes() {
    this.dbservice.getcake().subscribe(
      (allcakes) => { this.cakedata = allcakes })
  }


  deleteCake(id: any) {
    this.dbservice.deleteCake(id).subscribe(() => {
      this.router.navigateByUrl("viewcake")
    })
  }
  search() {
    if(this.searchText!=""){
      this.cakedata=this.cakedata.filter(x=>x.name==this.searchText)
    }
    else{
      this.getAllCakes();
    }
  }

}





