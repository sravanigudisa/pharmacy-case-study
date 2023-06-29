import { ToastrService } from 'ngx-toastr';
import { DrugService } from './../shared/services/drug.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Drug } from '../shared/models/drug';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admindrugs',
  templateUrl: './admindrugs.component.html',
  styleUrls: ['./admindrugs.component.css'],
})
export class AdmindrugsComponent implements OnInit {
  public drugs: Drug[] = [];

  drugL: Drug = {
    drugId: 0,
    drugName: '',
    drugPrice: 0,
    drugQuantity: 0,
    expDate: '',
    mfdDate: '',
    supplierId: 0,
  };

  constructor(
    private drug: DrugService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllDrugs();
    //console.log(this.drugs);
  }

  //set values to the drug
  SetDrugValues(drug: Drug) {
    (this.drugL.drugId = drug.drugId),
      (this.drugL.drugName = drug.drugName),
      (this.drugL.drugPrice = drug.drugPrice),
      (this.drugL.drugQuantity = drug.drugQuantity),
      (this.drugL.expDate = drug.expDate);
    (this.drugL.mfdDate = drug.mfdDate),
      (this.drugL.supplierId = drug.supplierId);
  }

  //Method to display all the drugs
  getAllDrugs() {
    this.drug.GetDrugs().subscribe((response) => {
      this.drugs = response;
      //console.log(this.drugs);
    });
  }

  //Method to add drug
  onSubmit() {
    console.log(this.drugL);
    this.drug.AddDrugs(this.drugL).subscribe((Response) => {
      console.log(Response);
    });
    this.toastr.success('Drug added');
    this.getAllDrugs();

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  // Method to delete a drug.
  DeleteDrug(drug: Drug) {
    this.drug.DeleteDrug(drug.drugId).subscribe((data) => {
      //console.log(data);
      this.getAllDrugs();
    });
    this.toastr.success('Drug was deleted');

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  UpdateDrug(drugrecord: Drug) {
    this.drug.UpdateDrug(drugrecord.drugId, drugrecord).subscribe((data) => {
      console.log(data);
    });

    this.toastr.success('Drug was Updated');

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  LogOut() {
    localStorage.removeItem('role');
  }
}
