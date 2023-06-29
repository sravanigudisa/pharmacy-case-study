import { CartService } from './../shared/services/cart.service';
import { CartComponent } from './../cart/cart.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DrugService } from '../shared/services/drug.service';
import { Drug } from '../shared/models/drug';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  public DrugList: Drug[] = [];
  searchText: any;
  constructor(
    private drug: DrugService,
    private router: Router,
    private Cart: CartService
  ) {}

  ngOnInit(): void {
    this.GetAllDrugs();
    //console.log(this.DrugList);
  }

  LogOut() {
    localStorage.removeItem('token');
    this.Cart.MyDrugList = [];
  }

  GetAllDrugs() {
    this.drug.GetDrugs().subscribe((data) => {
      //console.log(data);
      this.DrugList = data;
      //console.log(this.DrugList.length);
    });
  }

  SendDrugData(drug: Drug) {
    //console.log(drug);
    this.Cart.SaveDrugData(drug);
  }
}
