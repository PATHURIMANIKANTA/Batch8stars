import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { HeaderComponent } from './header/header.component'
import { MedicinesComponent } from './Services/medicines/medicines.component';
import { ShoppingComponent } from './Services/shopping/shopping.component';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'header',component:HeaderComponent},
  {path:'medicines' , component:MedicinesComponent},
  {path:'shopping' , component:ShoppingComponent},
  {path:'payment' , component:PaymentComponent},
  {path:'updatepassword' , component:UpdatepasswordComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
