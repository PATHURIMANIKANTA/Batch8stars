import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './login/User.Service';
import { FormsModule } from '@angular/forms';
import { MedicinesComponent } from './Services/medicines/medicines.component';
import { ShoppingComponent } from './Services/shopping/shopping.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    MedicinesComponent,
    ShoppingComponent,
    PaymentComponent,
    UpdatepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
