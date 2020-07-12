import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireAuthModule} from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavSidComponent } from './components/nav-sid/nav-sid.component';
import { from } from 'rxjs';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    AccountComponent,
    CategoriesComponent,
    NotFoundComponent,
    NavSidComponent,
    ForgotPasswordComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyAKqF47x9qjVgJUX1AEW7aeYzEEz5W5g6g",
      authDomain: "market-38586.firebaseapp.com",
      databaseURL: "https://market-38586.firebaseio.com",
      projectId: "market-38586",
      storageBucket: "market-38586.appspot.com",
      messagingSenderId: "404568949849",
      appId: "1:404568949849:web:29e100c8039b24d74c9d48",
      measurementId: "G-9MC8SWZ1Y6"
    }),
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
