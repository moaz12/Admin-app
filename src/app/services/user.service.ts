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
     this.fs.collection('user').add({'ssss':'ssss'})
  ;       this.fs.doc('user/' +id  )
   .set({'name': name,'adress':adress});
    //this.fs.doc('user/' +id  )
    //.update({'name':name,'adress':adress});
   // this.firestore
    //.collection("user")
    //.doc(.id)
    //.set({ completed: true }, { merge: true });
  }
}
