import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountComponent } from './components/account/account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import{OrderListComponent} from './components/order-list/order-list.component' 
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'admin',
    component:HomeComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },{
    path:'categories',
    component:CategoriesComponent
  },
 
  {
   path:'forgetpassword',
  component:ForgotPasswordComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'list',
    component:OrderListComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
