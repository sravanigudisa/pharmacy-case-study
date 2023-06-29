import { Order } from './../shared/models/order';
import { Router, RouterModule } from '@angular/router';
import { OrdersService } from './../shared/services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
})
export class MyordersComponent implements OnInit {
  UserOrderList: Order[] = [];
  DocId = localStorage.getItem('id');
  constructor(private order: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.ShowMyOrders();
  }

  ShowMyOrders() {
    this.order.GetOrders().subscribe((data) => {
      console.log(data);
      for (let x of data) {
        if (x.doctorId == this.DocId) {
          this.UserOrderList.push(x);
        }
      }
    });
  }

  LogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.UserOrderList = [];
  }
}
