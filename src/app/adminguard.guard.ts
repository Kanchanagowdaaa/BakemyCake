import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { LoginService } from './service/login.service';

@Injectable({providedIn:'root'})

export class adminguardGuard implements CanActivate{
  constructor(private loginService:LoginService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
  {
    if(this.loginService.isAdminLoggedIn)
    return true;
    else
    {
      this.router.navigateByUrl("Login");
      return false;
    }
  } 
}
