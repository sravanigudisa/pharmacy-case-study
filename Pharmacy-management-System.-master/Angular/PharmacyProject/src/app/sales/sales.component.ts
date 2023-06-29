import { OrdersService } from './../shared/services/orders.service';
import { Order } from './../shared/models/order';
import { Drug } from './../shared/models/drug';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  DrugDetail: Order[] = [];
  TotalSalesAmount: any = 0;
  searchText: any;

  constructor(private orderservice: OrdersService) {}

  ngOnInit(): void {
    this.ShowSalesData();
  }
  LogOut() {
    localStorage.removeItem('role');
  }

  ShowSalesData() {
    this.orderservice.GetOrders().subscribe((data) => {
      for (let x of data) {
        if (x.isPicked == 'Confirmed') {
          this.DrugDetail.push(x);
          this.TotalSalesAmount += x.totalAmount;
        }
      }
    });
  }

  PDFbtn() {
    console.log('Downloading PDF');
    let data = document.getElementById('PDFbtnDiv');
    this.generatePDF(data);
  }
  generatePDF(htmlContent) {
    html2canvas(htmlContent).then((canvas) => {
      let imgWidth = 120;
      let imgHeight = (canvas.height * (1.2 * imgWidth)) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a5');
      var position = 5;
      //pdf.text('Instruction', 60, 10);
      pdf.addImage(contentDataURL, 'PNG', 15, position, imgWidth, imgHeight);
      pdf.setLineWidth(0.5);
      pdf.rect(5, 3, 140, 204);
      pdf.save('SalesReport.pdf');
    });
  }
}
