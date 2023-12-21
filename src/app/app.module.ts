import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { cakeviewComponent } from './cakeview/cakeview.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AddsComponent } from './adds/adds.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewoneComponent } from './viewone/viewone.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MatInputModule } from '@angular/material/input';
import { LogoutComponent } from './logout/logout.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { OrdernowComponent } from './ordernow/ordernow.component'
import { MyordersComponent } from './myorders/myorders.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    cakeviewComponent,
    AddsComponent,
    ViewoneComponent,
    ErrorcomponentComponent,
    LoginComponent,
    RegisterFormComponent,
    LogoutComponent,
    OrdernowComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
