import { Injectable } from '@angular/core';
import {AngularFirestore}  from '@angular/fire/firestore'
import { create } from 'domain';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firstore:AngularFirestore) {}
  createProductOrder(data)
  {
return this.firstore
  .collection("productOrders")
  .add(data)
  .then(res => {}, err => console.log('error'+ err))

  }
}
