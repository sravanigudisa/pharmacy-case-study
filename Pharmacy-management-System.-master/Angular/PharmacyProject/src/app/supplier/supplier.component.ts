import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierService } from './../shared/services/supplier.service';
import { Supplier } from './../shared/models/supplier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  public SupplierList: Supplier[] = [];
  supplieradd: Supplier = {
    supplierId: 0,
    supplierName: '',
    emailId: '',
    phoneNumber: '',
    drugAvailable: '',
  };

  constructor(
    private supplier: SupplierService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.DisplaySupplier();
  }

  //Display all the available suppliers
  DisplaySupplier() {
    this.supplier.GetSuppliers().subscribe((data) => {
      console.log(data);
      this.SupplierList = data;
    });
  }

  //Add supplier
  OnSumbit(supplieradd: NgForm) {
    console.log(supplieradd.value);
    this.supplier.AddSupplier(supplieradd.value).subscribe((data) => {
      //console.log(data);
      this.toastr.success('Supplier was added');
    });
    //location.reload();

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));
  }

  DeleteSupplier(supplier: Supplier) {
    this.supplier.DeleteSupplier(supplier.supplierId).subscribe((data) => {
      console.log(data);
      this.toastr.success('Supplier was deleted');
    });

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    window.location.reload();
  }

  UpdateSuppliers(supplier: Supplier) {
    this.supplier.UpdateSupplier(supplier).subscribe((data) => {
      console.log(data);
      this.toastr.success('Supplier was Updated');
    });

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    window.location.reload();
  }

  SetValues(supplier: Supplier) {
    this.supplieradd.supplierId = supplier.supplierId;
    this.supplieradd.supplierName = supplier.supplierName;
    this.supplieradd.phoneNumber = supplier.phoneNumber;
    this.supplieradd.emailId = supplier.emailId;
    this.supplieradd.drugAvailable = supplier.drugAvailable;
  }

  LogOut() {
    localStorage.removeItem('role');
  }
}
