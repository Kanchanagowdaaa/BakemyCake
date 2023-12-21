import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cakeviewComponent } from './cakeview/cakeview.component';
import { AddsComponent } from './adds/adds.component';
import { ViewoneComponent } from './viewone/viewone.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { adminguardGuard } from './adminguard.guard';
import { closingGuard } from './closing.guard';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { MyordersComponent } from './myorders/myorders.component';


const routes: Routes = [{
  path: "",
  component: cakeviewComponent
},
{
  path: "addCake",
  component: AddsComponent,
  canActivate: [adminguardGuard],
  canDeactivate: [closingGuard]
},
{
  path: "viewcake",
  redirectTo: ""
},
{
  path: "viewDetails/:id",
  component: ViewoneComponent
},
{
  path: "editDetails/:id",
  component: AddsComponent,
  canActivate: [adminguardGuard],
  canDeactivate: [closingGuard]
},
{
  path: "deleteCake/:id",
  component: cakeviewComponent,
  canActivate: [adminguardGuard]
},
{
  path: "Register",
  component: RegisterFormComponent,
  canDeactivate: [closingGuard]
},
{
  path: "Login",
  component: LoginComponent
},
{
  path: "Logout",
  component: LoginComponent
},
{
  path: "ordercake/:id",
  component: OrdernowComponent
},
{
  path: "myorders",
  component: MyordersComponent
},

{
  path: "**",
  component: ErrorcomponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
