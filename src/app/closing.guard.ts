import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


import { AddsComponent } from './adds/adds.component';

@Injectable({ providedIn: 'root' })

export class closingGuard implements CanDeactivate<AddsComponent>{
  canDeactivate(component: AddsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    {
      return component.canClose ? component.canClose() : true;
    }

  }

}