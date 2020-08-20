import { Component, OnInit } from '@angular/core';
import {OrdersService} from 'src/app/services/orders.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  constructor(private Productorder:OrdersService ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.Productorder
  }

}
