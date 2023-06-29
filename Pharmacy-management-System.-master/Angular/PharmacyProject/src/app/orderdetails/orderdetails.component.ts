import { SupplierService } from './../shared/services/supplier.service';
import { EmailService } from './../shared/services/email.service';
import { DrugService } from './../shared/services/drug.service';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from './../shared/services/orders.service';
import { Order } from './../shared/models/order';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Drug } from '../shared/models/drug';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css'],
})
export class OrderdetailsComponent implements OnInit {
  druginfo: Drug;
  decisioninfo: boolean = false;
  constructor(
    private order: OrdersService,
    private toastr: ToastrService,
    private drugservice: DrugService,
    private emailservice: EmailService,
    private supplierservice: SupplierService
  ) {}

  ngOnInit(): void {
    this.GetOrderDetails();
  }

  OrderList: Order[] = [];

  LogOut() {
    localStorage.removeItem('role');
  }

  GetOrderDetails() {
    this.order.GetOrders().subscribe((data) => {
      for (let x of data) {
        if (x.isPicked == 'hold') {
          this.OrderList.push(x);
        }
      }
      //this.OrderList = data;
    });
  }

  //ConfirmOrder(order: Order) {}

  RejectOrder(order: Order) {
    order.isPicked = 'Rejected';
    this.order.UpdateOrder(order.orderId, order).subscribe((data) => {
      console.log(data);
    });

    this.toastr.error('order was rejected');
    location.reload();
  }

  ReduceDrugQuantity(order: Order) {
    this.drugservice.GetDrugById(order.drugId).subscribe((data) => {
      this.druginfo = data;
      console.log(this.druginfo);
      if (this.druginfo.drugQuantity >= order.drugQuantity) {
        this.decisioninfo = true;
        this.druginfo.drugQuantity =
          this.druginfo.drugQuantity - order.drugQuantity;
        console.log(this.druginfo.drugQuantity);

        this.drugservice
          .UpdateDrug(order.drugId, this.druginfo)
          .subscribe((data) => {
            console.log(data);
          });

        order.isPicked = 'Confirmed';
        if (this.decisioninfo) {
          this.order.UpdateOrder(order.orderId, order).subscribe((data) => {
            console.log(data);
          });
          this.toastr.success('order was confirmed');
          this.toastr.success('Mail Sent');
          this.emailservice.AdminConfirmedEmail(order).subscribe((data) => {
            //console.log(data);
          });
          location.reload();
        }
        //this.decisioninfo = true;
      } else {
        this.toastr.error('No enough stock available');
        this.toastr.error('order cannot be processed');
        this.drugservice.GetDrugById(order.drugId).subscribe((data) => {
          this.supplierservice
            .GetSupplierById(data.supplierId)
            .subscribe((dataa) => {
              this.emailservice
                .SupplierMail(dataa.emailId)
                .subscribe((info) => {
                  console.log(info);
                });
            });
        });
      }
    });
  }
}
