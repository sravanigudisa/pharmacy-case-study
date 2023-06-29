import { EmailService } from './../shared/services/email.service';
import { Router } from '@angular/router';

import { OrdersService } from './../shared/services/orders.service';
import { Order } from './../shared/models/order';
import { Drug } from './../shared/models/drug';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  TotalPrice: number = 0;
  OrderEmaillst: Order[] = [];
  docid: any = localStorage.getItem('id');
  ReqQuantity: number = 1;
  DrugDetail: Drug[] = [];
  OrderDetail: Order[] = [];

  OrderL: Order = {
    orderId: 0,
    doctorId: '',
    drugId: 0,
    drugsName: '',
    drugPrice: 0,
    drugQuantity: 0,
    pickupDate: '',
    totalAmount: 0,
    isPicked: '',
  };

  constructor(
    private Cart: CartService,
    private orderservice: OrdersService,
    private toastr: ToastrService,
    private router: Router,
    private emailservice: EmailService
  ) {
    this.GetDrugData();
  }

  ngOnInit(): void {}

  GetDrugData() {
    this.DrugDetail = this.Cart.DrugData();
    //console.log(this.DrugDetail);
  }

  LogOut() {
    localStorage.removeItem('token');
    this.Cart.MyDrugList = [];
  }

  TotalAmount() {
    for (let x of this.DrugDetail) {
      this.TotalPrice = this.TotalPrice + x.drugQuantity * x.drugPrice;
    }
  }

  SendMail(lst: any) {
    return this.emailservice
      .OrderPlacedEmail(this.OrderEmaillst)
      .subscribe((data) => {
        console.log(data);
      });
  }

  AddOrders(druglst: any) {
    var len = druglst.length;
    for (var x of druglst) {
      //(this.OrderL.orderId = 0),
      (this.OrderL.doctorId = this.docid),
        (this.OrderL.drugId = x.drugId),
        (this.OrderL.drugsName = x.drugName),
        (this.OrderL.drugPrice = x.drugPrice),
        (this.OrderL.drugQuantity = x.drugQuantity),
        (this.OrderL.pickupDate = new Date().toISOString());
      this.OrderL.totalAmount = x.drugPrice * x.drugQuantity;
      this.OrderL.isPicked = 'hold';

      //console.log(this.OrderL);

      this.orderservice.AddOrders(this.OrderL).subscribe((data) => {
        console.log(data);
        this.OrderEmaillst.push(data);
        if (this.OrderEmaillst.length == len) {
          this.SendMail(this.OrderEmaillst);
        }
      });
    }

    this.toastr.success('Your order was placed');
    this.toastr.success('Mail sent - Order details');

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    //this.SendMail(this.OrderEmaillst);
    //location.reload();
  }
}
