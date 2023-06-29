import { Drug } from './../models/drug';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrugService {
  readonly rootUrl = 'https://localhost:44348';
  constructor(private http: HttpClient) {}

  GetDrugs(): Observable<Drug[]> {
    return this.http.get<Drug[]>(this.rootUrl + '/api/Drug/GetAllDrugs');
  }

  AddDrugs(drug: Drug): Observable<Drug> {
    return this.http.post<Drug>(this.rootUrl + '/api/Drug/AddDrug', drug);
  }

  DeleteDrug(id: number): Observable<Drug> {
    return this.http.delete<Drug>(this.rootUrl + '/api/Drug/DeleteDrug/' + id);
  }

  UpdateDrug(id: number, drug: Drug): Observable<Drug> {
    return this.http.put<Drug>(this.rootUrl + '/api/Drug/EditDrug/' + id, drug);
  }

  GetDrugById(id: number): Observable<Drug> {
    return this.http.get<Drug>(this.rootUrl + '/api/Drug/SearchDrug/' + id);
  }
}
