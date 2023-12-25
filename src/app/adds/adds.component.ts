import { Component, OnInit } from '@angular/core';
import { cake } from '../model/cake';
import { DbserviceService } from '../dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrl: './adds.component.css'
})

export class AddsComponent implements OnInit {
  mycake: cake = {
    address: undefined
  };
  isEditCake: boolean = false;

  constructor(private dbserv: DbserviceService, private roter: Router, private rs: ActivatedRoute, private fb: FormBuilder, private _snackbar: MatSnackBar) { }
  cakeForm = this.fb.group({
    id: [0],
    name: [''],
    description: [''],
    price: [0],

  })


  addCake() {
    if (this.isEditCake) {
      this.dbserv.editCake(this.mycake).subscribe((data) => {
        this._snackbar.open('You have edited the cake!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })

        this.roter.navigateByUrl("viewcake")
      })
    }

    else {
      this.dbserv.addCake(this.mycake).subscribe((data) => {
        this._snackbar.open('You have added the cake!!!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })

        this.roter.navigateByUrl("viewcake")
      })
    }
  }

  ngOnInit(): void {

    this.rs.paramMap.subscribe(params => {
      let cakeid = params.get("id") ?? 0;
      this.getOneCake(cakeid);
    })
  }

  getOneCake(id: any) {
    this.dbserv.getcakeById(id).subscribe((data) => {
      this.mycake = data;
      this.isEditCake = true;
    })
  }


  canClose() {
    if (this.cakeForm.dirty) {
      let display = confirm("Changes you have made may not be saved! Please confirm");
      return display;
    }
    else {
      return true;
    }

  }
}











