import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private AF:AngularFirestore) { }
  getAllCat()
  {
    this.AF.collection('category')
  }
}
