import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { RegisterFormComponent } from './register-form/register-form.component';
import { AddsComponent } from './adds/adds.component';

@Injectable({providedIn:'root'})

export class closingGuard implements CanDeactivate<RegisterFormComponent|AddsComponent>{
  canDeactivate(component: RegisterFormComponent|AddsComponent,
     currentRoute: ActivatedRouteSnapshot, 
     currentState: RouterStateSnapshot, 
     nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   {
    return component.canClose();
    // return component.canClose? component.canClose():true;
   }
  
  }
 
}