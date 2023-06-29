import { Drug } from './../models/drug';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  MyDrugList: Drug[] = [];
  dummy: Drug[] = [];

  constructor() {}

  SaveDrugData(drug: Drug) {
    this.MyDrugList.push(drug);
    //console.log(this.MyDrugList);
  }

  DrugData() {
    return this.MyDrugList;
  }
}
