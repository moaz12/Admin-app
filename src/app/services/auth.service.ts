import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth) { }

  signUp(email,password)
  {
    return this.fireAuth.createUserWithEmailAndPassword(email,password);
  }

  login(email,password)
  {
    return this.fireAuth.signInWithEmailAndPassword(email,password);
  }

  logOut(){}
}
