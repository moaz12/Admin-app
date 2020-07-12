import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fs:AngularFirestore) { }
  AddNewUser( id,name,adress)
  {
    
    this.fs.doc('user/' +id  )
    .set({name,adress});
  }
}
