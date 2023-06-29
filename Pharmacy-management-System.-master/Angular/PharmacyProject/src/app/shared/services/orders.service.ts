import { Observable } from 'rxjs';
import { Order } from './../models/order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  readonly rootUrl = 'https://localhost:44348';
  constructor(private http: HttpClient) {}

  GetOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.rootUrl + '/api/Order/GetAllOrders');
  }

  AddOrders(order: Order): Observable<Order> {
    return this.http.post<Order>(this.rootUrl + '/api/Order/AddOrder', order);
  }

  DeleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(
      this.rootUrl + '/api/Order/DeleteOrder/{id}' + id
    );
  }

  UpdateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(
      this.rootUrl + '/api/Order/EditOrder/' + id,
      order
    );
  }
}
