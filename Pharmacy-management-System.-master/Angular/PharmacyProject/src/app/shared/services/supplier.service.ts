import { Observable } from 'rxjs';
import { Supplier } from './../models/supplier';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  readonly rootUrl = 'https://localhost:44348';

  constructor(private http: HttpClient) {}

  GetSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(
      this.rootUrl + '/api/Supplier/ShowAllSuppliers'
    );
  }

  AddSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(
      this.rootUrl + '/api/Supplier/AddSupplier',
      supplier
    );
  }

  DeleteSupplier(id: number): Observable<Supplier> {
    return this.http.delete<Supplier>(
      this.rootUrl + '/api/Supplier/DeleteSupplier/' + id
    );
  }

  UpdateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(
      this.rootUrl + '/api/Supplier/EditSupplier/' + supplier.supplierId,
      supplier
    );
  }
  GetSupplierById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(
      this.rootUrl + '/api/Supplier/SearchSupplier/' + id
    );
  }
}
